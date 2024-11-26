'use client'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../public/logos-as/arthur santana-w-shadow.png'

export default function Navbar(){
	return(
		<div className='navbar w-full z-10 px-10 sticky top-0 flex justify-between'>
					<div className="flex-1 max-w-[10rem] p-3 ">
						<img src={Logo.src}/>
						
					</div>
					<div className="flex-none">
						<ul className="menu menu-horizontal px-1">
							<li><Link href="/" className='no-underline text-gray-200'><span>sobre mim</span></Link></li>
							<li>
								<details>
									<summary className='px-6 text-gray-200'>
										projetos
									</summary>
									<ul className="p-3 bg-violet-400 rounded-t-none mx-3">
										<li><a href="" className='w-full no-underline text-gray-200' >projetos de software</a></li>
										<li><Link href="/graphic-projects" className='no-underline text-gray-200'>projetos gráficos</Link></li>
									</ul>
								</details>
							</li>
							<li><a href="" className='no-underline text-gray-200'>contato</a></li>
							
						</ul>
					</div>
				</div>
	)
}