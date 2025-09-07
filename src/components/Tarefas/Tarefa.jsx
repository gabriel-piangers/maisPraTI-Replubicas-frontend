import "../styles/Linha.css"

export function Tarefa(props) {
    return (
        <>
            <div className='linha cabecalho'>
                <p>{props.tarefa}</p>
            </div>
            <div className='linha'>
                <p>
                    {`Responsáve${props.responsaveis.length > 1 ? 'is' : "l"}: `}
                </p>
                <div className="coluna">
                    <div>
                        {
                            props.responsaveis.map(function (morador) {
                                return <p key={morador}>{morador}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
