// components/Gallery.js
import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('proprio');

  const images = {
    proprio: [
      '/assets/img/graphic-projects/proprio-1.jpg',
      '/assets/img/graphic-projects/proprio-2.png',
      '/assets/img/graphic-projects/proprio-3.png',
      '/assets/img/graphic-projects/proprio-4.png',
      '/assets/img/graphic-projects/proprio-5.png',
      '/assets/img/graphic-projects/proprio-6.png',
      '/assets/img/graphic-projects/proprio-7.png',
      '/assets/img/graphic-projects/proprio-8.png',
      '/assets/img/graphic-projects/proprio-9.png',
      '/assets/img/graphic-projects/proprio-10.png',
      '/assets/img/graphic-projects/proprio-11.png',
      '/assets/img/graphic-projects/proprio-12.png',
      '/assets/img/graphic-projects/proprio-13.png',
    ],
    tecmax: [
      '/assets/img/graphic-projects/tecmax-1.png',
      '/assets/img/graphic-projects/tecmax-2.png',
      '/assets/img/graphic-projects/tecmax-3.png',
      '/assets/img/graphic-projects/tecmax-4.png',
      '/assets/img/graphic-projects/tecmax-5.png',
      '/assets/img/graphic-projects/tecmax-6.png',
      '/assets/img/graphic-projects/tecmax-7.png',
      '/assets/img/graphic-projects/tecmax-8.png',
      '/assets/img/graphic-projects/tecmax-9.png',
      '/assets/img/graphic-projects/tecmax-10.png',
      '/assets/img/graphic-projects/tecmax-11.png',
    ],
    facilita: [
      '/assets/img/graphic-projects/facilita-1.png',
      '/assets/img/graphic-projects/facilita-2.png',
      '/assets/img/graphic-projects/facilita-3.png',
      '/assets/img/graphic-projects/facilita-4.png',
      '/assets/img/graphic-projects/facilita-5.png',
      '/assets/img/graphic-projects/facilita-6.png',
      '/assets/img/graphic-projects/facilita-7.png',
      '/assets/img/graphic-projects/facilita-8.png',
      '/assets/img/graphic-projects/facilita-9.png',
      '/assets/img/graphic-projects/facilita-10.png',
      '/assets/img/graphic-projects/facilita-11.png',
      '/assets/img/graphic-projects/facilita-12.png',
      '/assets/img/graphic-projects/facilita-13.png',
    ],
    mebay: [
      '/assets/img/graphic-projects/mebay-1.png',
      '/assets/img/graphic-projects/mebay-2.png',
      '/assets/img/graphic-projects/mebay-3.png',
      '/assets/img/graphic-projects/mebay-4.png',
      '/assets/img/graphic-projects/mebay-5.png',
      '/assets/img/graphic-projects/mebay-6.png',
      '/assets/img/graphic-projects/mebay-7.png',
      '/assets/img/graphic-projects/mebay-8.png',
      '/assets/img/graphic-projects/mebay-9.png',
      '/assets/img/graphic-projects/mebay-10.png',
    ],
    fam: [
      '/assets/img/graphic-projects/fam-1.png',
      '/assets/img/graphic-projects/fam-2.png',
      '/assets/img/graphic-projects/fam-3.png',
      '/assets/img/graphic-projects/fam-4.png',
      '/assets/img/graphic-projects/fam-5.png',
      '/assets/img/graphic-projects/fam-6.png',
      '/assets/img/graphic-projects/fam-7.png',
      '/assets/img/graphic-projects/fam-8.png',
      '/assets/img/graphic-projects/fam-9.png',
    ],
    redfox: [
      '/assets/img/graphic-projects/redfox-1.png',
      '/assets/img/graphic-projects/redfox-2.png',
      '/assets/img/graphic-projects/redfox-3.png',
      '/assets/img/graphic-projects/redfox-4.png',
      '/assets/img/graphic-projects/redfox-5.png',
      '/assets/img/graphic-projects/redfox-6.png',
      '/assets/img/graphic-projects/redfox-7.png',
      '/assets/img/graphic-projects/redfox-8.png',
      '/assets/img/graphic-projects/redfox-9.png',
    ],
    spdrivers: [
      '/assets/img/graphic-projects/spdrivers-1.png',
      '/assets/img/graphic-projects/spdrivers-2.png',
      '/assets/img/graphic-projects/spdrivers-3.png',
      '/assets/img/graphic-projects/spdrivers-4.png',
      '/assets/img/graphic-projects/spdrivers-5.png',
      '/assets/img/graphic-projects/spdrivers-6.png',
      '/assets/img/graphic-projects/spdrivers-7.png',
      '/assets/img/graphic-projects/spdrivers-8.png',
      '/assets/img/graphic-projects/spdrivers-9.png',
      '/assets/img/graphic-projects/spdrivers-10.png',
      '/assets/img/graphic-projects/spdrivers-11.png',
      '/assets/img/graphic-projects/spdrivers-12.png',
      '/assets/img/graphic-projects/spdrivers-13.png',
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 container bg-slate-100 m-4 rounded-lg text-black shadow-sm">
      <div className="flex mb-4 justify-center flex-wrap">
        {Object.keys(images).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 m-2 text-sm font-semibold rounded-md ${
              activeTab === category
                ? 'bg-violet-400 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <hr/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images[activeTab].map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={`Imagem ${index + 1}`}
              width={400}
              height={400}
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
