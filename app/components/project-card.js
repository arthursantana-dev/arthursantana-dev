"use client"

import Image from 'next/image';

export default function ProjectCard({ sourcesHref, githubHref, tags, title, content, isVideo = false }) {
    return (
        <div class="w-full sm:w-[600px] bg-slate-100 rounded overflow-hidden shadow-lg m-2">
            <div class="w-full flex flex-nowrap flex-col sm:flex-row">
                {

                    isVideo ?
                        (sourcesHref.map(img => {
                            return <video controls width="600">
                                <source src={img} type="video/mp4" />
                            </video>
                        }))
                        :

                        (sourcesHref.map(img => {
                            return <Image
                                src={img}
                                width={300}
                                height={300}
                                objectFit="cover"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        }))
                }

            </div>


            <div className="px-6 py-4 flex flex-col">
                <div className='flex flex-nowrap flex-col sm:flex-row justify-between'>
                    <div className="font-bold text-xl mb-2">{title}</div>

                    <div className='flex  w-fit'>
                    {
                        tags.map(tag => 
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                        )
                    }
                    </div>
                    
                    
                </div>
                <p className="text-gray-700 text-base">
                    {content}
                </p>

                <a href={githubHref} className='self-end' target='_blank'>
                    <button class="rounded py-2 px-3 bg-violet-400  text-white transition-transform duration-300 hover:scale-105 hover:bg-violet-600 w-full sm:w-fit">
                        Ver no Github
                    </button>
                </a>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
    )
}