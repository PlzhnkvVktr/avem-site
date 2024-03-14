import s from "./Spinner.module.css"

type Props = {
    
}

export const Spinner: React.FC<Props> = () => {
    return (
        <span className={s.loader}></span>
    )
}