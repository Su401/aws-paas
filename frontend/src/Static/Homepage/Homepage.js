import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './TemplatePrimario.css';
import './Homepage.css';


import Card from '../Cards/Card.js';
import Card2 from '../Cards/Card2.js';

// export default function Homepage() {
// 	console.log('public home');
// 	const subcapitulos = [
// 		{
// 			titulo: 'Benefícios da Nossa Abordagem Digital',
// 			texto: 'Eliminação da Papelada: Diga adeus à papelada volumosa e à gestão manual de documentos. As nossas soluções digitais permitem que você armazene e acesse facilmente os dados necessários, economizando tempo e recursos preciosos.',
// 			imagem: imgbenef,
// 		},
// 		{
// 			titulo: 'Atendendo a Diversos Setores',
// 			texto: 'Embora tenhamos começado com um foco na indústria de restauração, as nossas soluções são altamente adaptáveis e aplicáveis a uma variedade de setores. Esteja você gerindo um restaurante, uma fábrica, uma instalação de saúde ou qualquer outro tipo de negócio, estamos aqui para ajudar a aprimorar a sua gestão de segurança e conformidade.',
// 			imagem: imgsetores,
// 		},
// 	];

// 	return (
// 		<div className='Homepage'>
// 			<div className='body'>
// 				<h1>Bem-Vindo</h1>
// 				<section className='boas-vindas'>
// 					<h2>Liderando a Digitalização em HSE e HACCP</h2>
// 					<article className='primeiro'>
// 						<p>
// 							Na PAAS, estamos empenhados em simplificar e
// 							revolucionar a gestão de Segurança, Saúde e Ambiente
// 							(HSE) e Análise de Perigos e Pontos Críticos de
// 							Controlo (HACCP) para empresas em todo o mundo.
// 							Somos pioneiros na digitalização desses serviços
// 							essenciais, oferecendo uma abordagem inovadora e
// 							tecnologicamente avançada para ajudar as empresas a
// 							atingirem os mais altos padrões de segurança e
// 							conformidade regulatória.
// 						</p>
// 					</article>
// 				</section>
// 				<section className='cards'>
// 					<h2>O Nosso Compromisso com a Digitalização</h2>
// 					{subcapitulos.map((subcapitulo, index) => (
// 						<Card key={index}>
// 							<Card.Img variant='top' src={subcapitulo.imagem} />
// 							<Card.Body>
// 								<Card.Title>{subcapitulo.titulo}</Card.Title>
// 								<Card.Text>{subcapitulo.texto}</Card.Text>
// 								<Button variant='primary'>Saiba Mais</Button>
// 							</Card.Body>
// 						</Card>
// 					))}
// 				</section>
// 				<section>
// 					<p className='subcapitulo'>A Sua Parceria de Confiança</p>

// 					<p className='texto'>
// 						Na PAAS, a nossa missão é tornar a conformidade com
// 						normas de segurança e qualidade alimentar mais
// 						acessível, economizando tempo e recursos valiosos.
// 						Explore o nosso site para descobrir como podemos ser o
// 						seu parceiro de confiança na jornada de garantir a
// 						qualidade e a segurança dos produtos e operações da sua
// 						empresa. Junte-se a nós na vanguarda da revolução
// 						digital em HSE e HACCP e faça parte do futuro da gestão
// 						empresarial responsável. Bem-vindo à PAAS, onde a
// 						excelência em segurança e conformidade se encontra com a
// 						inovação tecnológica.
// 					</p>

// 					<h3>
// 						Estamos ansiosos para trabalhar consigo e ajudar a sua
// 						empresa a atingir o sucesso. Seja bem-vindo à PAAS!
// 					</h3>
// 				</section>
// 			</div>
// 		</div>
// 	);
// }

// Responsividade: Para garantir uma boa experiência em dispositivos móveis, você pode adicionar estilos
// responsivos ou até mesmo considerar o uso de bibliotecas como Bootstrap para facilitar a criação de interfaces responsivas.

// import './TemplatePrimario.css';

export default function Homepage() {
	return (
		<div className='Homepage'>
			<div className='body'>
				<h1 className='h1'>Bem-Vindo</h1>
				<section className='boas-vindas'>
					<h2>Liderando a Digitalização em HSE e HACCP</h2>
					<article className='primeiro'>
						<p className='paragrafo'>
							{' '}
							Na PAAS, estamos empenhados em simplificar e
							revolucionar a gestão de Segurança, Saúde e Ambiente
							(HSE) e Análise de Perigos e Pontos Críticos de
							Controlo (HACCP) para empresas em todo o mundo.
							Somos pioneiros na digitalização desses serviços
							essenciais, oferecendo uma abordagem inovadora e
							tecnologicamente avançada para ajudar as empresas a
							atingirem os mais altos padrões de segurança e
							conformidade regulatória.{' '}
						</p>
					</article>
				</section>
				<div className='cards'>
					<Card />
					<Card2 />
				</div>
				<section>
					<h2>O Nosso Compromisso com a Digitalização</h2>
					<article>
						<p className='texto'>
							Na era digital, a eficiência e a precisão são
							fundamentais. Compreendemos a importância de
							substituir processos manuais demorados e propensos a
							erros por soluções tecnológicas inteligentes. É por
							isso que desenvolvemos ferramentas de ponta que
							capacitam as empresas a digitalizar e automatizar
							processos de HSE e HACCP de ponta a ponta.
						</p>
					</article>

					{/* <article>
						<p className='subcapitulo'>
							Benefícios da Nossa Abordagem Digital
						</p>
						<p className='texto'>
							Eliminação da Papelada: Diga adeus à papelada
							volumosa e à gestão manual de documentos. As nossas
							soluções digitais permitem que você armazene e
							acesse facilmente os dados necessários, economizando
							tempo e recursos preciosos.
						</p>
						<p className='texto'>
							Conformidade Simplificada: Cumprir regulamentos e
							normas nunca foi tão fácil. As nossas ferramentas
							garantem que você esteja sempre em conformidade com
							os requisitos legais em constante evolução.
						</p>
						<p className='texto'>
							Rastreabilidade Total: Tenha um controle completo
							sobre a sua operação. A digitalização permite
							rastrear e monitorizar cada etapa do processo de HSE
							e HACCP, garantindo que nada passe despercebido.
						</p>
					</article>
					<article>
						<p className='subcapitulo'>
							Atendendo a Diversos Setores
						</p>

						<p className='texto'>
							Embora tenhamos começado com um foco na indústria de
							restauração, as nossas soluções são altamente
							adaptáveis e aplicáveis a uma variedade de setores.
							Esteja você gerindo um restaurante, uma fábrica, uma
							instalação de saúde ou qualquer outro tipo de
							negócio, estamos aqui para ajudar a aprimorar a sua
							gestão de segurança e conformidade.
						</p>
					</article> */}
				</section>
				<section>
					<p className='subcapitulo'>A Sua Parceria de Confiança</p>

					<p className='texto'>
						Na PAAS, a nossa missão é tornar a conformidade com
						normas de segurança e qualidade alimentar mais
						acessível, economizando tempo e recursos valiosos.
						Explore o nosso site para descobrir como podemos ser o
						seu parceiro de confiança na jornada de garantir a
						qualidade e a segurança dos produtos e operações da sua
						empresa. Junte-se a nós na vanguarda da revolução
						digital em HSE e HACCP e faça parte do futuro da gestão
						empresarial responsável. Bem-vindo à PAAS, onde a
						excelência em segurança e conformidade se encontra com a
						inovação tecnológica.
					</p>

					<h3>
						Estamos ansiosos para trabalhar consigo e ajudar a sua
						empresa a atingir o sucesso. Seja bem-vindo à PAAS!
					</h3>
				</section>
			</div>
		</div>
	);
}
