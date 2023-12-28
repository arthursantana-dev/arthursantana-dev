import Image from 'next/image'
import Logo from '../public/logos-as/arthur santana-w-shadow.png'
import HeroImage from '../public/hero-img.jpg'
import Footer from './footer.js'


export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="navbar z-10 px-10">
				<div className="flex-1">
					<Image
						src={Logo}
						width={130}
						height={30}
					/>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li><a>sobre mim</a></li>
						<li>
							<details>
								<summary>
									Parent
								</summary>
								<ul className="p-2 bg-base-100 rounded-t-none">
									<li><a>Link 1</a></li>
									<li><a>Link 2</a></li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<Image src={HeroImage.src}
				layout='fill'
				objectFit='cover'/>
			</div>
			<Footer/>
		</main>
	)
}
