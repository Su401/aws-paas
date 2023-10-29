import './CaixaSelecao.css'

export default function CaixaSelecao ({children, onChange, value}){
    return (
        <select className="form-select"
        style={{width:'250px'}} onChange={onChange} value={value}>
            {children}
        </select>
    )
}