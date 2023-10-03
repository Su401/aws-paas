import { useState } from 'react';
import './LoginModal.css';
import userImg from '../../Images/user.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Modal from '../../../node_modules/react-bootstrap/Modal';
import Button from '../../../node_modules/react-bootstrap/Button';

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
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
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
								onClick={() => handleImgClick('avatar1')}
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
								onClick={() => handleImgClick('avatar2')}
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
								onClick={() => handleImgClick('avatar3')}
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
							<form onSubmit={handleSubmit}>
								<label
									htmlFor='password'
									className='password-edit'
								>
									PASSWORD:
								</label>
								<input
									type='password'
									id='password'
									name='password'
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<div className='d-flex bd-highlight mb-3'>
									<div className='p-2 bd-highlight '>
										<div>
											<input
												type='submit'
												className='submitButton'
												id='entradaConta'
												name='entradaConta'
												value='ENTRADA'
											/>
										</div>
									</div>
									<div className='p-2 bd-highlight'>
										<div>
											<input
												type='submit'
												className='submitButton'
												id='saidaConta'
												name='saidaConta'
												value='SAIDA'
											/>
										</div>
									</div>
									<div className='ms-auto p-2 bd-highlight'>
										<div>
											<input
												type='submit'
												className='submit-button'
												value='LOGIN'
											/>
										</div>
									</div>
								</div>
							</form>
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
