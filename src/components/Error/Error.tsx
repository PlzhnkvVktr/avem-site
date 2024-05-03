type Props = {
    error: string
}

export const Error: React.FC<Props> = ({error}) => {
    return (
        <main> 
            <div className="network_info_container">
                <h3>{error}</h3>
            </div>
        </main>
    )
}