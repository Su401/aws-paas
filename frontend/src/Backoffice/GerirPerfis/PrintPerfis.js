import logo from '../../Images/logo.png';
import '../../css/PrintPerfis.css';
import { useLocation } from 'react-router-dom';

export default function PrintPerfis() {
	const location = useLocation();
	const user = location.state?.selectedUser?.user;

	if (!user) {
		// Handle the case where user data is not available
		return <div>User data not found</div>;
	}

	const ogDate = new Date(user.birthday);
	/**
	 * Formats a given date object to a string in the format "dd-mm-yyyy".
	 * @param {Date} ogDate - The original date object to be formatted.
	 * @returns {string} - The formatted date string.
	 */
	const formattedDate = `${ogDate.getDate().toString().padStart(2, '0')}
	-${(ogDate.getMonth() + 1)
		.toString()
		.padStart(2, '0')}-${ogDate.getFullYear()}`;
	/* 
		The toString method is called on each of these components to convert them to strings, 
		and the padStart method is used to add leading zeros to ensure that each component has two digits. 
		This is necessary because the getDate and getMonth methods return single-digit numbers for values less than 10.

		The resulting strings are concatenated using template literals to create the final formatted date string. 
		The day component is separated from the month component and the year component by hyphens (-), 
		which is the standard format for dates in many countries.

		Overall, this code is a simple and effective way to format a Date object as a string in a specific format. 
		One possible improvement would be to add support for different date formats or to make the format 
		configurable using a parameter. Additionally, it may be useful to add error handling to ensure that the 
		ogDate variable is a valid Date object.
		 */

	return (
		<div className='PrintPerfis backgroundSec'>
			<div className='container-fluid'>
				<section className='flex-container paperContainer p-5 sheet'>
					<article className='docHeader'>
						<img src={logo} className='stamp' alt='logo' />
					</article>
					<article>
						<h2>Relatório do trabalhador {user.user.fullName}</h2>
						<p>
							{user.user.fullName}, nascido em {formattedDate},
							com o número de identificação fiscal {user.user.nif}
							, residente no endereço {user.user.userAddress}, e
							atualmente trabalhando como {user.user.role} no
							restaurante (preciso buscar mais informações também,
							o professor tinha razão), é assegurado pela{' '}
							{user.user.insuranceName} e tem o número de apólice:{' '}
							{user.user.insurancePolicy}.
						</p>
						&nbsp;
					</article>
					<article className='docFooter'>
						<hr />
						<h3>Assinatura do responsável</h3>
					</article>
				</section>
				<button className='btn btn-primary d-flex float-start printBtn m-3'>
					Enviar
				</button>
			</div>
		</div>
	);
}
