import './ImprimirRegistos.css';
import Logo from '../../../Images/logo.png';

export default function ImprimirRegistos() {
	return (
		<div>
			<div>
				<div className='container-fluid'>
					<div className='row mt-5'></div>
					<section className='flecontainer paperContainer p-5'>
						<article className='docHeader'>
							<img src={Logo} className='stamp' alt='Logo' />
						</article>
						<article>
							<table
								id='tableProducts'
								className='table-container products-table'
							>
								<thead>
									<tr>
										<th className='header' colSpan='6'>
											Lista de Produtos
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className='information'>
										<td>
											<b>ID</b>
										</td>
										<td>
											<b>Data</b>
										</td>
										<td>
											<b>Espaço</b>
										</td>
										<td>
											<b>Tarefa</b>
										</td>
										<td>
											<b>Estado</b>
										</td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</article>
						<article className='docFooter'>
							<hr />
							Assinatura responsável
						</article>
					</section>
				</div>
				<button
					className='btn btn-primary d-flex float-start printBtn m-3'
					onClick={() => alert('IMPRIMINDO')}
				>
					Gerar impressão PDF{' '}
				</button>
			</div>
		</div>
	);
}
