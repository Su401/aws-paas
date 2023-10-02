import './Modal.css';

export default function Modal({ showModal }) {
	return (
		<div className={`Modal ${showModal ? 'modal fade show' : ''}`}>
			<div
				className='modal fade'
				id='exampleModal'
				tabindex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered '>
					<div className='modal-content modalEdit'>
						<div className='modal-body imageContainer'>
							<div className='row d-lg-flex'>
								<div className='col-lg text-center'>
									<img
										className='rounded-circle imgag'
										alt='avatar1'
										src='../images/user1.png'
									/>
									<div className='mb-2'></div>
									<span className='text-lg-center editNames'>
										Antonio
									</span>
								</div>
								<div className='col-lg text-center'>
									<img
										className='rounded-circle imgag'
										alt='avatar2'
										src='../images/user2.jpeg'
									/>
									<div className='mb-2'></div>
									<span className='text-lg-center editNames'>
										Micaela
									</span>
								</div>
								<div className='col-lg text-center'>
									<img
										className='rounded-circle imgag'
										alt='avatar3'
										src='../images/user3.png'
									/>
									<div className='mb-2'></div>
									<span className='text-lg-center editNames'>
										Michelle
									</span>
								</div>
								<div className='col-lg text-center'>
									<img
										className='rounded-circle imgag'
										alt='avatar4'
										src='../images/user4.png'
									/>
									<div className='mb-2'></div>
									<span className='text-lg-center editNames'>
										Santiago
									</span>
								</div>
							</div>
						</div>
						<div className='outputContainer'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
