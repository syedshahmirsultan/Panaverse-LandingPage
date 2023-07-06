import Wrapper from "../Shared/Wrapper";
import Image from "next/image";
import Button from "../Shared/Button";
function Hero() {
  return (
    
    <section><Wrapper><div className="flex flex-col md:flex-row items-center">
        <div className="flex-1"><h4 className='text-teal-700 font-semibold text-lg mt-4'>Presidential Initiative for Artificial Intelligence and Computing(PIAIC)</h4>
        <h1 className="text-5xl sm:text-5xl font-bold ">Certified Web3.0 and Metaverse Developer</h1>
        <p className="mt-6 text-xl text-slate-600 ">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of Internet.
        <br/>Consolidating Web3.0 , Metaverse 
            , Artificial Intelligence(AI) ,Cloud ,Edge ,Ambient Computing/IOT ,Network Automation 
             Bioinformatics Technologies.</p>
             <div className="mt-5"><Button text={'Enroll Now'}/></div>
            </div>
            <div className="flex-1"><Image src="/images/hero-poster.png" alt="picture of Man" height={1100} width={800} className="ml-0 md:ml-20"/></div>
            </div></Wrapper></section>
  )
}

export default Hero