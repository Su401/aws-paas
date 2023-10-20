import React from 'react';
import '../../css/RegistarTrocaOleo.css';

function CaixaSelecao ({caixaSelecaoEquipamento, onChange}){
    return (
        <select className="form-select" onChange={onChange}>
           {caixaSelecaoEquipamento && caixaSelecaoEquipamento.map((option, index) => (
                <option key={index} value={option.type.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default CaixaSelecao;