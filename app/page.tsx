import React from 'react'
import Hero from './Components/sections/Hero';
import CoreTracks from './Components/sections/CoreTracks';
import Specialized from './Components/sections/Specialized';
import Outcome from './Components/sections/Outcome';
import Footer from './Components/sections/Footer';
function page() {
  return (
    <main >
      <Hero/>
      <CoreTracks/>
      <Specialized/>
      <Outcome/>
      <Footer/>
    </main>
  )
}

export default page
