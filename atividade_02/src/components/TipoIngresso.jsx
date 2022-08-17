

export default function TipoIngresso({tipoIngressos}) {

    return (
        <div>
            <ul>
            {tipoIngressos.map(ingresso => {
                return <li key={ingresso}>{ingresso.titulo}: {ingresso.preco}</li>;
            })}
            </ul>
        </div>
    )
}