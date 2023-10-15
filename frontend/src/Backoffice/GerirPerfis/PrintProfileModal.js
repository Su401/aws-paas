import logo from '../../Images/logo.png';
import '../../css/PrintProfileModal.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

export default function PrintProfileModal(props) {
	console.log(props);
	if (!props) {
		// Handle the case where user data is not available
		return <div>User data not found</div>;
	}

	const ogDate = new Date(props.user.birthday);
	/**
	 * Formats a given date object to a string in the format "dd-mm-yyyy".
	 * @param {Date} ogDate - The original date object to be formatted.
	 * @returns {string} - The formatted date string.
	 */
	const formattedDate = `${ogDate.getDate().toString().padStart(2, '0')}-${(
		ogDate.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')}-${ogDate.getFullYear()}`;
	return (
		<div className='PrintProfileModal'>
			<Modal
				{...props}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Some homie
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='A4'>
					<Container className='flex-container paperContainer sheet'>
						<Row className='docHeader'>
							<Col></Col>
							<Col xs={3}>
								<img src={logo} className='stamp' alt='logo' />
							</Col>
						</Row>
						<Row>
							<h2>
								Relatório do trabalhador {props.user.fullName}
							</h2>
							<p className='text'>
								<i>{props.user.fullName}</i>, nascido em{' '}
								<i>{formattedDate}</i>, com o número de
								identificação fiscal <i>{props.user.nif}</i>,
								residente no endereço{' '}
								<i>{props.user.userAddress}</i>, e atualmente
								com o cargo de <i>{props.user.role}</i> no
								estabelecimento (preciso buscar mais info ), é
								assegurado pela{' '}
								<i>{props.user.insuranceName}</i> e tem o número
								de apólice: <i>{props.user.insurancePolicy}</i>.
							</p>
							&nbsp;
						</Row>
						<Row className='docFooter'>
							<hr />
							<h3>Assinatura do responsável</h3>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Print/send</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
