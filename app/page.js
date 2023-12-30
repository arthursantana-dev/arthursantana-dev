'use client'

import Typed from 'typed.js'

import HeroImage from '../public/hero-img.jpg'
import Footer from './components/footer.js'
import Navbar from './components/navbar'
import './styles.css'
import { useEffect, useRef } from 'react'

export default function Home() {
	const element = useRef(null);

	useEffect(() => {
		const typed = new Typed(element.current, {
			strings: [
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-[#625387]">desenvolvedor de software </span>', 
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-[#d73a5a]">designer gráfico</span>', 
				'Olá, eu sou Arthur! 👋 <br> Sou <span class="text-[#FFEA48]">estudante de computação</span>'
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

				<Navbar/>
				
				<div className="hero-content text-center">
					<div className="max-w-xl">
						<h1 className="text-5xl font-bold">
							<span ref={element}></span>
						</h1>
						{/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
						<button className="btn btn-primary">Get Started</button> */}
					</div>
				</div>

				<div className="container max-w-2xl bg-slate-50 p-5 rounded-lg text-black shadow-sm">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nesciunt optio velit blanditiis doloremque voluptate eum nobis perferendis! Ab officiis eveniet soluta quos tenetur iste vel repudiandae dolore earum deleniti.
					</p>
				</div>

				<Footer />
			</div>

		</main>
	)
}
