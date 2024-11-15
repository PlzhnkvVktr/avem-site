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
    const [stage1, setStage1] = useState("")
    const [stage2, setStage2] = useState("")
    const [stage3, setStage3] = useState("")
    const [showSelection, setShowSelection] = useState(true); // Состояние видимости блока
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setShowSelection(!showSelection)
        setIsOpen(!isOpen);
      };

    useEffect(() => {
        dispatch(fetchProductsBySubcategory(stage2))
    }, [stage2])

    useEffect(() => {
        setStage2("")
        setStage3("")
    }, [stage1])

    return (
        <main>
            <h2 className={s.title}>Подбор оборудования</h2>
            <div className={s.filterButton}>
                <div className={s.titleFilter}>
                    Фильтр
                </div>
                <div className={`${s.arrow} ${isOpen ? s.open : ''}`} onClick={handleClick}>
                  <span className={s.arrowLeft}></span>
                  <span className={s.arrowRight}></span>
                </div>
            </div>
            {showSelection && ( // Условное рендеринг блока
                <div className={s.questionItem}>
                    <h3>Тип продукции</h3>
                    <form>
                        {categories.map((item, key) =>
                            <label key={key}>
                                <input type="radio" name="radio" value={key} onChange={(e) => setStage1(e.target.value)} />
                                <span>{item.name}</span>
                            </label>
                        )}
                    </form>
                    {(stage1 && categories[Number(stage1)].subcategories.length > 0) &&
                        <StageItem name={"Тип продукции 2"} array={categories[Number(stage1)].subcategories} stage={[stage2, setStage2]} />
                    }
                    {(stage2 && products.length > 0) &&
                        <StageItem name={"Продукция"} array={products} stage={[stage3, setStage3]} />
                    }
                    
                    <div className={s.submitButtonContainer}>
                        <button className={s.submitButton} onClick={handleClick}>Показать</button>
                    </div>

                </div>
            )}
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
        <div className={s.questionSecondaryItems}>
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
