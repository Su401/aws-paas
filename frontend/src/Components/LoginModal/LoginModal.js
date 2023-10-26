import { useState } from 'react';
import './LoginModal.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../../node_modules/react-bootstrap/Modal';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../Images/logo.png';

export default function LoginModal({ show, setShow, dbUsers }) {
	console.log(dbUsers);
	const [selectedImg, setSelectedImg] = useState(null);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleClose = () => setShow(false);

	const handleImgClick = (img, username) => {
		setSelectedImg(img);
		setUsername(username);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(`http://localhost:8080/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});
			if (!res.ok) {
				throw new Error('Failed to fetch users data');
			}
		} catch (error) {
			console.error(
				'An error occurred while fetching users data: ',
				error
			);
		}
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
									Username:
								</label>
								<Form.Control
									type='text'
									placeholder='Username'
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<label
									htmlFor='password'
									className='password-edit'
								>
									Password:
								</label>
								<Form.Control
									type='password'
									placeholder='Password'
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>

								<div className='d-flex bd-highlight mb-3'>
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
			handleImgClick={(img) => handleImgClick(img, elem.username)}
			dbUsers={elem.username}
			imagemUser={elem.myFile}
		/>
	));
}

function UserWithProfile({ handleImgClick, dbUsers, imagemUser }) {
	return (
		<div className='col-lg text-center'>
			<div>
				<img
					className='normal'
					style={{ width: '100px', height: '90px' }}
					alt={dbUsers}
					src={!imagemUser ? logo : imagemUser}
					onClick={() => handleImgClick(dbUsers)}
				/>
				<div className='nomesUsers'>
					<span>{dbUsers}</span>
				</div>
			</div>
		</div>
	);
}
