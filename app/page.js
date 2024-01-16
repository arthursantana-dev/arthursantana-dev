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
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-indigo-800">designer gráfico</span>',
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

				<div className="hero-content text-center my-40">
					<div className="max-w-xl">
						<h1 className="text-2xl md:text-5xl h-40 font-bold">
							<span ref={element}></span>
						</h1>
						{/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
						<button className="btn btn-primary">Get Started</button> */}
					</div>
				</div>
				
				<div className="lg:self-start lg:ml-64">
					<h1 className='text-slate-100 font-semibold text-2xl self-start'>Sobre mim</h1>
				</div>

				

				<div className="container max-w-2xl bg-slate-100 p-5 m-4 rounded-lg text-black shadow-sm">
					<div>
						<Image className='rounded-full float-right' src={ProfilePicImage.src} width={150} height={150} />
						<p>
							Tenho 17 anos e sinto-me pronto e animado para embarcar na minha <span className="font-semibold text-indigo-900">primeira experiência no ramo da tecnologia da informação</span>.<br/><br/> Atualmente estou no último ano do Ensino Médio Integrado ao curso de <span className="font-semibold text-indigo-900">Desenvolvimento de Sistemas</span> e tenho planos de ingressar no curso de Ciência da Computação na Universidade de São Paulo. Estou pronto e ansioso para abraçar essa oportunidade no campo da tecnologia da informação. <br/><br/>  Desde a infância, meu interesse por Ciências Exatas e Computação me rendeu prêmios e me deixou convencido de que tenho as habilidades necessárias para me destacar no desenvolvimento de software.
						</p>
					</div>
				</div>

				<Footer />
			</div>

		</main>
	)
}
