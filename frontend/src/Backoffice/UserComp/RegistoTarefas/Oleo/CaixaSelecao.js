import React from 'react';
import './RegistarTrocaOleo.css';

function CaixaSelecao({ caixaSelecaoEquipamento, onChange }) {
	return (
		<select className='form-select' onChange={onChange}>
			{caixaSelecaoEquipamento &&
				caixaSelecaoEquipamento.map((option, index) => (
					<option key={index} value={option.label}>
						{option.label}
					</option>
				))}
		</select>
	);
}

export default CaixaSelecao;
