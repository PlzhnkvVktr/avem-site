import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import s from "./EditablePage.module.css"

type Props = {
    html: string
}

export const EditablePage: React.FC<Props> = ({html}) => {

    return (
        <main>
            <div className="page_container" dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    )
}