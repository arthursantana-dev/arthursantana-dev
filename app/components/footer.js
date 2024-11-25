import Image from 'next/image'
import ImageFooter from '../../public/logos-as/branco.png'
import IGIcon from '../../public/icons/ig-icon.png'
import GHIcon from '../../public/icons/github-icon.png'

export default function Footer() {
	return (
		<footer className="footer p-10 text-neutral-content z-20">
			<aside>
				<Image src={ImageFooter.src} width={420} height={50}/>
				<p className='ml-3'>Arthur Santana® 2023</p>
			</aside>
			<nav>
				<header className="footer-title">Social</header>
				<div className="grid grid-flow-col gap-4">
					<a href="https://www.instagram.com/dev.arthur.s/">
						<Image className='invert-[.70]' src={IGIcon.src} width={40} height={100}/>
					</a>
					<a href="https://github.com/arthursantana-dev">
						<Image className='invert-[.70]' src={GHIcon.src} width={40} height={100}/>
					</a>
				</div>
			</nav>
		</footer>
	)
}