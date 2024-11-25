'use client'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../public/logos-as/arthur santana-w-shadow.png'

export default function Navbar(){
	return(
		<div className='navbar z-10 px-10 sticky top-0'>
					<div className="flex-1">
						<img src={Logo.src}/>
						
					</div>
					<div className="flex-none">
						<ul className="menu menu-horizontal px-1">
							<li><Link href="/">sobre mim</Link></li>
							<li>
								<details>
									<summary>
										projetos
									</summary>
									<ul className="p-2 bg-violet-600 rounded-t-none mx-3">
										<li><a href="">projetos de software</a></li>
										<li><Link href="/graphic-projects">projetos gráficos</Link></li>
									</ul>
								</details>
							</li>
							<li><a href="">contato</a></li>
							
						</ul>
					</div>
				</div>
	)
}