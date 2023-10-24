import logo from '../../Images/logo.png';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';

export default function UserForm({
	formInputs,
	setFormInputs,
	handleCreateUser,
	handleEditUser,
	handleDeleteUser,
}) {
	/**
	 * Handles the print or send button click event.
	 * Constructs the HTML content for printing and opens a new window with the content.
	 * Waits for the content to be fully loaded before triggering print.
	 * Cleans up the print window after printing.
	 */
	function handlePrintOrSend() {
		console.log('Button clicked');
		// Construct the HTML content for printing
		const formattedDate = new Date(formInputs.birthday).toLocaleDateString(
			undefined,
			{
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			}
		);

		const printContent = `
		  <!DOCTYPE html>
		  <html>
		  <head>
			<title>Print Preview</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css">
			<link rel="stylesheet" href="../../css/PrintPerfis.css" media="print">
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
            <style>
			@page { size: A4 }
			img {
				transform: translate(170%, 0);
				margin-top: -2rem;
				width: 15rem;
			}

                body {
                    font-family: 'Poppins', sans-serif;
                }
				h2{
					font-size: 22pt;
					text-align:center;
				}
				p{
					text-align:justify;
				}
				hr {
					margin: 1rem auto;
					width: 27rem;
					border: 1px solid #000;
				}
				h3{
					font-size: 16pt;
					text-align:center;
				}
				}
            </style>
		  </head>
		  <body class="A4">
			<section class="sheet padding-25mm">
			  <article class='docHeader'>
				<img src=${logo} class='stamp' alt='logo' />
			  </article>
			  <article>
				<h2>Relatório do trabalhador <i>${formInputs.fullName}</i></h2>
				<p>
				  <i>${formInputs.fullName}</i>, nascido em <i>${formattedDate}</i>,
				  com o número de identificação fiscal <i>${formInputs.nif}</i>
				  , residente no endereço <i>${formInputs.userAddress}</i>, e
				  atualmente trabalhando como <i>${formInputs.role}</i> na
				  empresa ${formInputs.companyName}, é assegurado pela<i> ${formInputs.insuranceName}</i> e tem o
				  número de apólice: <i>${formInputs.insurancePolicy}</i>.
				</p>
				&nbsp;
			  </article>
			  <article class='docFooter'>
				<hr />
				<h3>Assinatura do responsável</h3>
			  </article>
			</section>
		  </body>
		  </html>
		`;

		// Open a new window with the HTML content
		const printWindow = window.open('', '_blank');

		// Write the HTML content to the new window
		printWindow.document.open();
		printWindow.document.write(printContent);
		printWindow.document.close();

		// Wait for the content to be fully loaded before triggering print
		printWindow.onload = () => {
			printWindow.print();

			// Clean up the print window after printing
			printWindow.onafterprint = () => {
				printWindow.close();
			};
		};
	}

	const formattedDate = () => {
		const date = new Date(formInputs.birthday);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const formattedDate = `${year}-${month}-${day}`;
		console.log(formattedDate); // Output: "yyyy-MM-dd"
		return formattedDate;
	};

	return (
		<Form className='form' action=''>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='username' column sm='6'>
					Username:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='username'
						name='username'
						value={formInputs.username}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								username: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='password' column sm='6'>
					Password:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='password'
						className='filled'
						id='password'
						name='password'
						value={formInputs.password}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								password: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='name' column sm='6'>
					Nome do Funcionário:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='fullName'
						name='fullName'
						value={formInputs.fullName}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								fullName: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='birthday' column sm='6'>
					Data de Nascimento:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='date'
						className='filled'
						id='birthday'
						name='birthday'
						value={formattedDate()}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								birthday: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='email' column sm='6'>
					Email
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='email'
						className='filled'
						id='email'
						name='email'
						value={formInputs.email}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								email: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='phone' column sm='6'>
					Contacto:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='phone'
						name='phone'
						value={formInputs.phone}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								phone: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='role' column sm='6'>
					isAdmin:
				</Form.Label>
				<Col sm='6'>
					<Form.Check
						type='checkbox'
						className='filled'
						id='role'
						name='role'
						checked={formInputs.role}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								role: e.target.checked,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='adress' column sm='6'>
					Morada:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='userAddress'
						name='userAddress'
						value={formInputs.userAddress}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								userAddress: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='nif' column sm='6'>
					NIF
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='number'
						className='filled'
						id='nif'
						name='nif'
						value={formInputs.nif}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								nif: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='insuranceName' column sm='6'>
					Seguradora:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='insuranceName'
						name='insuranceName'
						value={formInputs.insuranceName}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								insuranceName: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='insurancePolicy' column sm='6'>
					Apólice:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='insurancePolicy'
						name='insurancePolicy'
						value={formInputs.insurancePolicy}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								insurancePolicy: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='companyName' column sm='6'>
					Empresa:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='companyName'
						name='companyName'
						value={formInputs.companyName}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								companyName: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='companyAddress' column sm='6'>
					Morada da Empresa:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='companyAddress'
						name='companyAddress'
						value={formInputs.companyAddress}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								companyAddress: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='companyCAE' column sm='6'>
					CAE da Empresa:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='number'
						className='filled'
						id='companyCAE'
						name='companyCAE'
						value={formInputs.companyCAE}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								companyCAE: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='companyNIPC' column sm='6'>
					NIPC da Empresa:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='number'
						className='filled'
						id='companyNIPC'
						name='companyNIPC'
						value={formInputs.companyNIPC}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								companyNIPC: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>

			<Row className='align-items-center' id='perfisBtn'>
				<Row>
					<Col>
						<Button
							className='blueBtn m-1'
							type='button'
							id='btnAdd'
							onClick={handleCreateUser}
						>
							Adicionar Perfil
						</Button>
					</Col>
					<Col>
						<Button
							className='redBtn m-1'
							type='button'
							id='btnDelete'
							onClick={() =>
								handleDeleteUser(formInputs.username)
							}
						>
							Excluir Perfil
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button
							className='blueBtn m-1'
							type='button'
							id='btnEdit'
							onClick={() => handleEditUser(formInputs.username)}
						>
							Editar registos
						</Button>
					</Col>
					<Col>
						<Button
							className='blueBtn m-1'
							type='button'
							onClick={handlePrintOrSend}
						>
							Consultar Perfil
						</Button>
					</Col>
				</Row>
			</Row>
		</Form>
	);
}
