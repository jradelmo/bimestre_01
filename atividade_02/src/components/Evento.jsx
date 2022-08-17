import TipoIngresso from "./TipoIngresso";

const tipoIngressos = [{titulo: "Camarote (open bar)", preco: "R$150,00"}, {titulo: "Camarote", preco: "R$100,00"}, {titulo: "Front-stage", preco: "R$60,00"}, {titulo: "Pista", preco: "R$30,00"}]
export default function Evento({nome, data, hora, local, cidade, genero}) {
    return (
        <div>
            <h1>
                {nome}
            </h1>
            <ul>
                <li>Data:  <strong>{data}</strong></li>
                <li>Horário: <strong>{hora}</strong></li>
                <li>Local: <strong>{local}</strong></li>
                <li>Cidade: <strong>{cidade}</strong></li>
                <li>Gênero: <strong>{genero}</strong></li>
            </ul>
            <h3>Ingressos</h3>
            <TipoIngresso tipoIngressos={tipoIngressos}/>
        </div>

    )
}