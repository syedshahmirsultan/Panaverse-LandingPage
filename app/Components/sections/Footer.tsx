import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
const images=[
  {
  src :"/images/facebook.png",
  alt :"Facebook logo",
},
{
  src :"/images/linkedin1.png",
  alt :"Linkedin Logo",
},
{
  src :"/images/twitter1.png",
  alt :"Twitter logo",
},
{
  src :"/images/youtube.png",
  alt :"Youtube logo",
}

]

function Footer() {
  return (
    <section className="my-[40px] font-extralight">
  <div className=" border border-t-primary border-t-bold border-b-0 border-l-0 border-r-0 w-full flex flex-col md:items-center  gap-y-6">
      <h1 className=" text-3xl font-bold">Follow on</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-auto">
      {images.map((item,i) =>{
        return(
          <Image src={item.src} alt={item.alt} key={i} className='h-10 w-auto rounded-full cursor-pointer'/>
        )
      })}
      </div>
     <br/> <Link href="https://www.linkedin.com/in/syed-shahmir-sultan-578730252/">
       <h3 className="text-xl font-bold mx-auto justify-end">Copy By Syed Shahmir Sultan</h3></Link>
      
        </div>
    </section>
  )
}

export default Footer
