"use client"

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import HeroImage from './assets/img/hero-img.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./gallery";

export default function GraphicProjects() {
	return (
		<main style={{ backgroundImage: `url(${HeroImage.src})`, backgroundSize: 'cover'}}>
			<Navbar />

			<div className="center w-full flex justify-center">
				<h1 className='center w-fit text-slate-100 font-semibold text-5xl self-start'>Projetos Gráficos</h1>
			</div>

			<div className="center w-full flex justify-center">
				<h1 className='center w-fit text-slate-100 text-lg self-start text-center py-4'>Designs desenvolvidos para projetos pessoais <br/> ou durante prestação de serviço entre 2021 e 2024.</h1>
			</div>

			<Gallery/>

			<Footer />
		</main>
	)
}

/*
../assets/img/graphic-projects/proprio-1.jpg
../assets/img/graphic-projects/proprio-2.png
../assets/img/graphic-projects/proprio-3.png
../assets/img/graphic-projects/proprio-4.png
../assets/img/graphic-projects/proprio-5.png
../assets/img/graphic-projects/proprio-6.png
../assets/img/graphic-projects/proprio-7.png
../assets/img/graphic-projects/proprio-8.png
../assets/img/graphic-projects/proprio-9.png
../assets/img/graphic-projects/proprio-10.png
../assets/img/graphic-projects/proprio-11.png
../assets/img/graphic-projects/proprio-12.png
../assets/img/graphic-projects/proprio-13.png
../assets/img/graphic-projects/tecmax-1.png
../assets/img/graphic-projects/tecmax-2.png
../assets/img/graphic-projects/tecmax-3.png
../assets/img/graphic-projects/tecmax-4.png
../assets/img/graphic-projects/tecmax-5.png
../assets/img/graphic-projects/tecmax-6.png
../assets/img/graphic-projects/tecmax-7.png
../assets/img/graphic-projects/tecmax-8.png
../assets/img/graphic-projects/tecmax-9.png
../assets/img/graphic-projects/tecmax-10.png
../assets/img/graphic-projects/tecmax-11.png
../assets/img/graphic-projects/facilita-1.png
../assets/img/graphic-projects/facilita-2.png
../assets/img/graphic-projects/facilita-3.png
../assets/img/graphic-projects/facilita-4.png
../assets/img/graphic-projects/facilita-5.png
../assets/img/graphic-projects/facilita-6.png
../assets/img/graphic-projects/facilita-7.png
../assets/img/graphic-projects/facilita-8.png
../assets/img/graphic-projects/facilita-9.png
../assets/img/graphic-projects/facilita-10.png
../assets/img/graphic-projects/facilita-11.png
../assets/img/graphic-projects/facilita-12.png
../assets/img/graphic-projects/facilita-13.png
../assets/img/graphic-projects/mebay-1.png
../assets/img/graphic-projects/mebay-2.png
../assets/img/graphic-projects/mebay-3.png
../assets/img/graphic-projects/mebay-4.png
../assets/img/graphic-projects/mebay-5.png
../assets/img/graphic-projects/mebay-6.png
../assets/img/graphic-projects/mebay-7.png
../assets/img/graphic-projects/mebay-8.png
../assets/img/graphic-projects/mebay-9.png
../assets/img/graphic-projects/mebay-10.png
../assets/img/graphic-projects/fam-1.png
../assets/img/graphic-projects/fam-2.png
../assets/img/graphic-projects/fam-3.png
../assets/img/graphic-projects/fam-4.png
../assets/img/graphic-projects/fam-5.png
../assets/img/graphic-projects/fam-6.png
../assets/img/graphic-projects/fam-7.png
../assets/img/graphic-projects/fam-8.png
../assets/img/graphic-projects/fam-9.png
../assets/img/graphic-projects/redfox-1.png
../assets/img/graphic-projects/redfox-2.png
../assets/img/graphic-projects/redfox-3.png
../assets/img/graphic-projects/redfox-4.png
../assets/img/graphic-projects/redfox-5.png
../assets/img/graphic-projects/redfox-6.png
../assets/img/graphic-projects/redfox-7.png
../assets/img/graphic-projects/redfox-8.png
../assets/img/graphic-projects/redfox-9.png
../assets/img/graphic-projects/spdrivers-1.png
../assets/img/graphic-projects/spdrivers-2.png
../assets/img/graphic-projects/spdrivers-3.png
../assets/img/graphic-projects/spdrivers-4.png
../assets/img/graphic-projects/spdrivers-5.png
../assets/img/graphic-projects/spdrivers-6.png
../assets/img/graphic-projects/spdrivers-7.png
../assets/img/graphic-projects/spdrivers-8.png
../assets/img/graphic-projects/spdrivers-9.png
../assets/img/graphic-projects/spdrivers-10.png
../assets/img/graphic-projects/spdrivers-11.png
../assets/img/graphic-projects/spdrivers-12.png
../assets/img/graphic-projects/spdrivers-13.png
*/