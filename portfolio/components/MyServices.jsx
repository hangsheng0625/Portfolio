import React from 'react'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'

const MyServices = () => {
  return (
    <div>
        <h4
            id="services"
            className="text-center text-2xl font-bold mb-4 font-ovo text-darkTheme"
        >
        What I offer
      </h4>

      <h2 className="text-center font-ovo text-lg mb-12 text-darkTheme">
        My Services
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I offer a range of services to help you build and enhance your online presence. My expertise includes:
      </p>

      <div className='grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-lightHover group"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                <Image src={icon} alt={title} width={24} height={24} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-darkTheme">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <a href={link} className="text-blue-500 hover:underline">
                Learn More 
            </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default MyServices