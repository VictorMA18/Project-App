import React from 'react'
import Navbar from '../components/NavbarComponent'
import Header from '../components/HeaderComponent'
import Footer from '../components/FooterComponent'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <Header/>
      <main className="flex-grow p-8 bg-gray-400">
        <h3 className="text-2xl font-semibold mb-4">Contenido Principal</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, nulla vel dignissim
          tincidunt, arcu augue faucibus justo, ut dignissim nisi nulla a justo. Aenean id ligula vitae eros
          interdum congue. Donec eget ex at orci sagittis egestas. Phasellus vel fermentum nulla.
        </p>
      </main>
      <Footer/>
    </div>
  )
}

export default HomePage