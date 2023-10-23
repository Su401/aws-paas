import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';
import userImg from '../../Images/user.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AuthContext from '../Auth/AuthContext';

import Modal from '../../../node_modules/react-bootstrap/Modal';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginModal({ show, setShow }) {
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [selectedImg, setSelectedImg] = useState(null);

	const handleClose = () => setShow(false);

	const handleImgClick = (img) => {
		setSelectedImg(img);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (login !== '' && password === '1111') {
			// Call the handleLogin function
			//handleLogin(selectedImg, password);
			setAuth(1);
			navigate('/user-home');
			// Close the modal
			handleClose();
		} else {
			alert('you a no go');
		}
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
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Login
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='row d-lg-flex'>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${
									selectedImg === 'avatar1'
										? 'selected-img'
										: ''
								}`}
								alt='avatar1'
								src={userImg}
								onClick={() => {
									handleImgClick('avatar1');
									setLogin('Antonio');
								}}
							/>

							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Antonio
							</span>
						</div>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${
									selectedImg === 'avatar2'
										? 'selected-img'
										: ''
								}`}
								alt='avatar2'
								src={userImg}
								onClick={() => {
									handleImgClick('avatar2');
									setLogin('Michaela');
								}}
							/>
							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Michaela
							</span>
						</div>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${
									selectedImg === 'avatar3'
										? 'selected-img'
										: ''
								}`}
								alt='avatar3'
								src={userImg}
								onClick={() => {
									handleImgClick('avatar3');
									setLogin('Michelle');
								}}
							/>
							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Michelle
							</span>
						</div>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${
									selectedImg === 'avatar4'
										? 'selected-img'
										: ''
								}`}
								alt='avatar4'
								src={userImg}
								onClick={() =>
									handleImgClick('avatar4') &&
									setLogin('Santiago')
								}
							/>
							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Santiago
							</span>
						</div>
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
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
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
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
