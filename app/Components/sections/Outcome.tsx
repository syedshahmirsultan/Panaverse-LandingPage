import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image';
const outcomePoints=["Product Ownership","Freeelancing","Global Marketing by Panaverse DAO ","Boosting Economy"]

function Outcome() {
  return (
    <section className="mt-6 md:mt-10 md:mb-24">
        <Wrapper><div className="flex flex-col my-8 md:my-0 md:flex-row gap-x-8">
<div className="flex-1 ">
<Image src="/images/outcome-poster.png" alt="Outcome Poster" height={200} width={150} className='h-full w-full'/>
    </div>
    <div className="flex-1">
    <h2 className="text-4xl font-bold md:text-5xl">The Outcome for Participants of the Program</h2><p className="mt-4 text-lg text-slate-600">
    As a graduate of this program&comma; you will own valuable products such as Full-Stack App Templates&comma; AR and VR Experiences&comma; and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour&comma; providing a path to financial stability while contributing to the growth of Pakistan&apos;s software exports.
    </p>
    <div className="grid grid-cols-2 gap-x-2 gap-y-4">{
        outcomePoints.map((item,i)=>(
           <div key={i}><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z" fill="url(#paint0_radial_1_51)"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1177 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9667 28.1236 24.5 33C22.5117 30.2129 20.3398 27.6189 17 24.9206Z" fill="white"/>
           <defs>
           <radialGradient id="paint0_radial_1_51" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)">
           <stop offset="0.125" stop-color="#00E5FF"/>
           <stop offset="1" stop-color="#00616C"/>
           </radialGradient>
           </defs>
           </svg>
            <h3 className="font-medium text-md">
            {item}</h3></div>
        ))}
    </div>

</div>


        </div>
            
            
            </Wrapper></section>
  )
}

export default Outcome;
            
