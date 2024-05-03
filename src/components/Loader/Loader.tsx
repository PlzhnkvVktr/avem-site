import { Spinner } from "react-bootstrap"


export const Loader: React.FC = () => {
    return (
        <main> 
            <div className="network_info_container">
                <Spinner className="loader" />
            </div>
        </main>
    )
}