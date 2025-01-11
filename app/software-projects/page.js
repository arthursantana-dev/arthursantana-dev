"use client"

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import ProjectCard from "../components/project-card";
import HeroImage from '../graphic-projects/assets/img/hero-img.jpg'

import aromatec1 from './assets/img/aromatec1.png'
import aromatec2 from './assets/img/aromatec2.png'

import listen1 from './assets/img/listen1.png'
import listen2 from './assets/img/listen2.png'

import qcef1 from './assets/img/qcef1.png'
import qcef2 from './assets/img/qcef2.png'

import "bootstrap/dist/css/bootstrap.min.css";

const aromatecImages = [aromatec1, aromatec2]
const listenImages = [listen1, listen2]
const bibliotecaVideos = ['/video-sistema-biblioteca.mp4']
const qcefImages = [qcef1, qcef2]

export default function SoftwareProjects() {
    return (
        <main style={{ backgroundImage: `url(${HeroImage.src})`, backgroundSize: 'cover'}}>
                <Navbar />
                <div className="center w-full flex justify-center">
                    <h1 className='center w-fit text-slate-100 font-semibold text-5xl self-start'>Projetos de Software</h1>
                </div>
                <div className="center w-full flex justify-center">
                    <h1 className='center w-fit text-slate-100 text-lg self-start text-center py-4'>Aplicativos e sites desenvolvidos em projetos pessoais <br /> ou durante minha formação entre 2020 e 2024.</h1>
                </div>
                <div className="container max-w-2xl bg-slate-100 py-5 m-0 sm:p-5 sm:m-4 rounded-lg text-black shadow-sm mx-auto flex justify-center flex-wrap flex-row " >
                    <ProjectCard 
                        sourcesHref={aromatecImages} 
                        githubHref={'https://github.com/arthursantana-dev/aromatec'}
                        title={'Aromatec'} 
                        tags = {['HTML', 'CSS', 'JS']}
                        content={'Um site desenvolvido para apresentar informações detalhadas sobre diversos aromas que foram expostos na Etec Joaquim Ferreira do Amaral. O projeto foi criado como parte do componente curricular Laboratórios de Processos Criativos, pela turma do 2º ano do ETIM Desenvolvimento de Sistemas em 2023. Construído utilizando HTML, CSS e JavaScript, o site combina design intuitivo e interatividade para proporcionar uma experiência imersiva e informativa aos usuários.'}
                    />
                    <ProjectCard 
                        sourcesHref={listenImages} 
                        githubHref={'https://github.com/arthursantana-dev/etec-listen-song-player'}
                        title={'Listen!'} 
                        tags={['HTML', 'CSS', 'JS']}
                        content={'[em desenvolvimento]'}
                    />
                    <ProjectCard 
                        sourcesHref={bibliotecaVideos} 
                        title={'Sistema de Gerenciamento para Bibliotecas Escolares'} 
                        tags={['React JS', "TailWind CSS", "Daisy UI"]}
                        githubHref={'https://github.com/iagof-dev/TCC'}
                        content={'[em desenvolvimento]'}
                        isVideo={true}
                    />
                    <ProjectCard 
                        sourcesHref={qcefImages} 
                        title={'Que Curso Eu Faço?'} 
                        tags={['React JS', 'CSS', 'Node JS']}
                        githubHref={'https://github.com/arthursantana-dev/react-expotec-que-curso-eu-faco'}
                        content={'[em desenvolvimento]'}
                    />
                </div>
                
                <Footer />
        </main>
    )
}
