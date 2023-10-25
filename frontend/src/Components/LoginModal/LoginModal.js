import { useState } from 'react';
import './LoginModal.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../../node_modules/react-bootstrap/Modal';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginModal({ show, setShow, dbUsers }) {
	const [selectedImg, setSelectedImg] = useState(null);

	const handleClose = () => setShow(false);

	const handleImgClick = (img) => {
		setSelectedImg(img);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClose();
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header
					style={{ backgroundColor: '#F0F0F0' }}
					closeButton
				>
					<Modal.Title id='contained-modal-title-vcenter'>
						LOGIN
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#F0F0F0' }}>
					<div className='d-lg-flex'>
						<UsersWithProfile
							selectedImg={selectedImg}
							handleImgClick={handleImgClick}
							dbUsers={dbUsers}
						/>
					</div>
					{selectedImg && (
						<div className='row flex-lg-wrap botaoPositioning '>
							<Form onSubmit={handleSubmit}>
								<label
									htmlFor='password'
									className='password-edit'
								>
									PASSWORD:
								</label>
								<Form.Control
									type='password'
									id='password'
									name='password'
									placeholder='Insert Password...'
								/>

								<div className='d-flex bd-highlight mb-3'>
									<div className='p-2 bd-highlight '>
										<div>
											<Button
												type='submit'
												className='submitButton'
												id='entradaConta'
												name='entradaConta'
											>
												{' '}
												ENTRADA{' '}
											</Button>
										</div>
									</div>
									<div className='p-2 bd-highlight'>
										<div>
											<Button
												type='submit'
												className='submitButton'
												id='saidaConta'
												name='saidaConta'
											>
												SAIDA{' '}
											</Button>
										</div>
									</div>
									<div className='ms-auto p-2 bd-highlight'>
										<div>
											<Button
												type='submit'
												className='submit-button'
											>
												LOGIN{' '}
											</Button>
										</div>
									</div>
								</div>
							</Form>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: '#F0F0F0' }}>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

function UsersWithProfile({ selectedImg, handleImgClick, dbUsers }) {
	return dbUsers.map((elem) => (
		<UserWithProfile
			selectedImg={selectedImg}
			key={elem.nif}
			handleImgClick={handleImgClick}
			dbUsers={elem.username}
			numberNif={elem.nif}
		/>
	));
}

function UserWithProfile({ handleImgClick, dbUsers, numberNif }) {
	return (
		<div className='col-lg text-center'>
			<div>
				<img
					className='normal'
					style={{ width: '100px', height: '90px' }}
					alt={dbUsers}
					src={`https://i.pravatar.cc/48${numberNif}`}
					onClick={() => handleImgClick(dbUsers)}
				/>
				<div className='nomesUsers'>
					<span>{dbUsers}</span>
				</div>
			</div>
		</div>
	);
}
