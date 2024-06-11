import s from "./EquipmentSelection.module.css"
import {ICategory} from "../../models/ICategory";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProductsBySubcategory} from "../../store/reducers/ActionCreators";

type Props = {
    categories: ICategory[]
}

export const EquipmentSelection: React.FC<Props> = ({categories}) => {

    const dispatch = useAppDispatch()
    const {products, isLoadingProduct, errorProduct} = useAppSelector(state => state.productReducer)
    const stage1 = useState("")
    const stage2 = useState("")
    const stage3 = useState("")

    useEffect(() => {
        dispatch(fetchProductsBySubcategory(stage2[0]))
    }, [stage2[0]])

    useEffect(() => {
        stage2[1]("")
        stage3[1]("")
    }, [stage1[0]])

    return (
        <main>
            <h2 className={s.title}>Подбор оборудования</h2>
            <div className={s.questionItem}>
                <h3>Тип продукции</h3>
                <form>
                    {categories.map((item, key) =>
                        <label key={key}>
                            <input type="radio" name="radio" value={key} onChange={(e) => stage1[1](e.target.value)} />
                            <span>{item.name}</span>
                        </label>
                    )}
                </form>
            </div>

            {/*<StageItem name={"Тип продукции 1"} array={categories} stage={stage1} />*/}
            {(stage1[0] && categories[Number(stage1[0])].subcategories.length > 0) &&
                <StageItem name={"Тип продукции 2"} array={categories[Number(stage1[0])].subcategories} stage={stage2} />
            }
            {(stage2[0] && products.length > 0) &&
                <StageItem name={"Продукция"} array={products} stage={stage3} />
            }
        </main>
    )
}

type Props1 = {
    array: any[]
    name: string
    stage: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const StageItem: React.FC<Props1> = (props) => {

    return (
        <div className={s.questionItem}>
            <h3>{props.name}</h3>
            <form>
                {props.array.map((item, key) =>
                    <label key={key}>
                        <input
                            type="radio"
                            name="radio"
                            value={item.name}
                            onClick={e => props.stage[1](e.currentTarget.value)}
                        />
                        <span>{item.name}</span>
                    </label>
                )}
            </form>
        </div>
    )
}