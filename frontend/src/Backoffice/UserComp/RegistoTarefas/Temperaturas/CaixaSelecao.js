import React from 'react';
import './RegTemperaturas';

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
