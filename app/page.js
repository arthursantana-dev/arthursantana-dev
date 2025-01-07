'use client'

import Image from 'next/image'

import Typed from 'typed.js'

import HeroImage from '../public/hero-img.jpg'
import ProfilePicImage from '../public/pfp.jpg'

import Footer from './components/footer.js'
import Navbar from './components/navbar'
import './styles.css'
import { useEffect, useRef } from 'react'

export default function Home() {
	const element = useRef(null);

	useEffect(() => {
		const typed = new Typed(element.current, {
			strings: [
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-indigo-700">desenvolvedor de software </span>',
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-violet-900">designer gráfico</span>',
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-indigo-900">estudante de computação</span>'
			],
			typeSpeed: 50,
			smartBackspace: true,
			backDelay: 1200
		});

		return () => {
			typed.destroy();
		};
	}, []);


	return (
		<main className="flex min-h-screen flex-col items-center justify-between">

			{/* <div>
				<Image src={HeroImage.src}
					layout='fill'
					objectFit='cover' />
			</div> */}
			<div className="hero flex flex-col min-h-screen justify-between" style={{ backgroundImage: `url(${HeroImage.src})`, backgroundSize: 'cover' }}>

				<Navbar />

				<div className="hero-content text-center my-20">
					<div className="max-w-xl">
						<h1 className="text-2xl md:text-5xl h-40 font-bold">
							<span ref={element}></span>
						</h1>
						{/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
						<button className="btn btn-primary">Get Started</button> */}
					</div>
				</div>
				
				<div className="center m-auto w-fit">
					<h1 className='text-slate-100 font-semibold text-5xl self-start'>Sobre mim</h1>
				</div>

				<div className="container max-w-2xl bg-slate-100 p-5 m-4 rounded-lg text-black shadow-sm">
					<div>
						<Image className='rounded-full float-right' src={ProfilePicImage.src} width={150} height={150} />
						<p>
							Sou técnico em <span className="font-semibold text-indigo-900">Desenvolvimento de Sistemas pela Escola Técnica Estadual de São Paulo</span> e estou decidido a seguir carreira em Tecnologia da Informação. Meu interesse por Ciências Exatas e Computação começou na infância, rendendo prêmios e reforçando minha confiança nas habilidades necessárias para me destacar no desenvolvimento de software. <br/><br/>


							Há mais de três anos, comecei a estudar Python pelo Curso em Vídeo, do Gustavo Guanabara. Adorava criar estruturas lógicas simples para mostrar resultados no terminal. Mas cadê a interface? Ninguém gosta de telas pretas! Foi então que iniciei os estudos de HTML e CSS, aprofundando-me em conceitos como media queries, layout Flexbox, Grid, e nomenclatura BEM. Logo, descobri como manipular elementos com JavaScript e JQuery.<br/><br/>

							Atualmente, estudo <span className="font-semibold text-indigo-900">React e frameworks CSS, como Bootstrap e Tailwind</span>, além de desenvolver projetos mobile com React Native e APIs com Node.js (usando principalmente Express.js). Com 18 anos, estou pronto e animado para embarcar na minha primeira experiência profissional no ramo da tecnologia. Também tenho planos de ingressar no curso de Ciência da Computação na Universidade de São Paulo, continuando minha jornada de aprendizado e inovação.
						</p>
					</div>
				</div>

				<Footer />
			</div>

		</main>
	)
}
