export default function Botao ({children,name, color}) {
    return(
        <button className="btn btn-primary" style={{width:'100px', height:'40px', backgroundColor:color}} name={name}>{children}</button>
    )
}