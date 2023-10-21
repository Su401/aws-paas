import { useState } from 'react';
import './LoginModal.css';
import userImg1 from '../../Images/user1.png';
import userImg2 from '../../Images/user2.jpeg';
import userImg3 from '../../Images/user3.png';
import userImg4 from '../../Images/user4.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Modal from '../../../node_modules/react-bootstrap/Modal';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export default function LoginModal({ show, setShow }) {
	const [selectedImg, setSelectedImg] = useState(null);
	const [password, setPassword] = useState('');

	const handleClose = () => setShow(false);

	const handleImgClick = (img) => {
		setSelectedImg(img);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedImg && password) {
			// Call the handleLogin function and pass the selectedImg and password
			// handleLogin(selectedImg, password);
			// Close the modal
			handleClose();
		} else {
			// Handle validation or show an error message
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
								className={`rounded-circle ${selectedImg === 'avatar1'
									? 'selected-img'
									: ''
									}`}
								alt='avatar1'
								src={userImg1}
								onClick={() => handleImgClick('avatar1')}
							/>
							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Antonio
							</span>
						</div>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${selectedImg === 'avatar2'
									? 'selected-img'
									: ''
									}`}
								alt='avatar2'
								src={userImg2}
								onClick={() => handleImgClick('avatar2')}
							/>
							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Michaela
							</span>
						</div>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${selectedImg === 'avatar3'
									? 'selected-img'
									: ''
									}`}
								alt='avatar3'
								src={userImg3}
								onClick={() => handleImgClick('avatar3')}
							/>
							<div className='mb-2'></div>
							<span className='text-lg-center editNames'>
								Michelle
							</span>
						</div>
						<div className='col-lg text-center'>
							<img
								className={`rounded-circle ${selectedImg === 'avatar4'
									? 'selected-img'
									: ''
									}`}
								alt='avatar4'
								src={userImg4}
								onClick={() => handleImgClick('avatar4')}
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
