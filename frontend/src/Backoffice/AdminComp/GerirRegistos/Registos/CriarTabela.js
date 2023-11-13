export default function CriarTabela({ showRegistos, erraseRow }) {
    return (

        showRegistos.map((elem, index) => (
            <Registos data={elem.data} espaco={elem.espaço} tarefa={elem.tarefa} estado={elem.estado} id={index} erraseRow={() => { erraseRow(index) }} />
        ))

    )
}

function Registos({ data, espaco, tarefa, estado, erraseRow, id }) {

    return (
        <tr id={id}>
            <td>{id}</td>
            <td>{data}</td>
            <td>{espaco}</td>
            <td>{tarefa}</td>
            <td>{estado}</td>
            <td>
                <button type="button" className="erraseButton" onClick={() => { erraseRow(id) }}>
                    ✖
                </button>
            </td>
        </tr >
    );
}