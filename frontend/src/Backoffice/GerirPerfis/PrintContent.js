import React from 'react';
import logo from '../../Images/logo.png';
import '../../css/PrintPerfis.css';

export default function PrintContent({ formInputs }) {
	console.log(formInputs);
	const formattedDate = new Date(formInputs.birthday).toLocaleDateString(
		undefined,
		{
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}
	);

	return (
		<div className='print-content'>
			<section className='sheet padding-10mm'>
				<article className='docHeader'>
					<img src={logo} className='stamp' alt='logo' />
				</article>
				<article>
					<h2>Relatório do trabalhador {formInputs.fullName}</h2>
					<p>
						{formInputs.fullName}, nascido em {formattedDate}, com o
						número de identificação fiscal {formInputs.nif},
						residente no endereço {formInputs.userAddress}, e
						atualmente trabalhando como {formInputs.role} na
						empresa, é assegurado pela {formInputs.insuranceName} e
						tem o número de apólice: {formInputs.insurancePolicy}.
					</p>
					&nbsp;
				</article>
				<article className='docFooter'>
					<hr />
					<h3>Assinatura do responsável</h3>
				</article>
			</section>
		</div>
	);
}
