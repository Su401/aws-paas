import '../css/TemplatePrimario.css';

export default function AboutUs() {
	console.log('bout us');
	return (
		<div className='AboutUs'>
			<div className='body'>
				<h1>PAAS - Gestão de HSE e HACCP</h1>
				<section className='boas-vindas'>
					<article className='primeiro'>
						<p>
							{' '}
							Na PAAS, estamos dedicados a tornar a gestão de
							segurança alimentar mais fácil e eficiente para
							empresas em todo o setor de restauração e além. A
							nossa abordagem inovadora combina tecnologia
							avançada com expertise especializado para ajudar sua
							empresa a atingir os mais altos padrões em segurança
							alimentar e gestão de produtos de cozinha.{' '}
						</p>
					</article>
				</section>
				<section>
					<h2>Por que Escolher a PAAS?</h2>
					<article>
						<p className='subcapitulo'>
							Digitalização de Registos Obrigatórios:
						</p>
						<p className='texto'>
							Adeus, papelada! Oferecemos uma solução completa de
							digitalização de registros obrigatórios, permitindo
							que você elimine a burocracia e simplifique a gestão
							de documentos. Cumprir regulamentos nunca foi tão
							fácil.
						</p>
					</article>
					<article>
						<p className='subcapitulo'>
							Gestão de Produtos da Cozinha:
						</p>
						<p className='texto'>
							Simplifique o controle dos seus produtos com nossas
							etiquetas automatizadas de abertura e validade.
							<br />
							Nunca mais se preocupe com produtos vencidos ou em
							mau estado. Mantenha sua cozinha eficiente e segura.
						</p>
					</article>
					<article>
						<p className='subcapitulo'>Para Todos os Setores:</p>

						<p className='texto'>
							Embora nosso foco inicial seja a indústria de
							restauração, nossos serviços são adequados para
							qualquer empresa que deseje melhorar a gestão de
							segurança alimentar e produtos. Seja qual for o seu
							setor, estamos aqui para ajudar.
						</p>
					</article>
				</section>
				<section>
					<p className='texto'>
						Na PAAS, a nossa missão é tornar a conformidade com as
						normas de segurança alimentar mais acessível,
						economizando tempo e recursos preciosos. Explore nosso
						site para descobrir como podemos ser seu parceiro de
						confiança na jornada de garantir a qualidade e a
						segurança dos alimentos em sua empresa.
					</p>
				</section>
			</div>
		</div>
	);
}
