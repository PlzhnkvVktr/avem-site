import s from "./EquipmentSelection.module.css"
import {ICategory} from "../../models/ICategory";
import React, {useEffect, useState} from "react";

type Props = {
    categories: ICategory[]
}

export const EquipmentSelection: React.FC<Props> = ({categories}) => {

    const stage1 = useState("")
    const stage2 = useState("")



    useEffect(() => {
        console.log(stage1[0])
    }, []);


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
            {stage1[0] && <StageItem name={"Тип продукции 2"} array={categories[Number(stage1[0])].subcategories}/>}

        </main>
    )
}

type Props1 = {
    array: any[]
    name: string
}

export const StageItem: React.FC<Props1> = ({array, name}) => {


    return (
        <div className={s.questionItem}>
            <h3>{name}</h3>
            <form>
                {array.map((item, key) =>
                    <label key={key}>
                        <input type="radio" name="radio" value={item.name}
                               />
                        <span>{item.name}</span>
                    </label>
                )}
            </form>
        </div>
    )
}