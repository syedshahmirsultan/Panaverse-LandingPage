import React from 'react'
import Button from '../Shared/Button';
import QuarterBox from '../Shared/QuarterBox';
import Wrapper from '../Shared/Wrapper';

const CoreTracksData=[
  
  {
    header:"Quarter I",
    description:"CS-101: Object-Oriented Programming using TypeScript",
    number:1
  },
  {
    header:"Quarter II",
    description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number:2
  },
  {
    header:"Quarter III",
    description:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number:3
  }

]
function CoreTracks() {
  return (
    <section className="mt-16 lg:mt-28"><Wrapper>
        <div className="max-w-screen-md"><h4 className='text-teal-700 font-semibold text-lg mt-4'>Program of Studies</h4>
        <h2 className="text-5xl font-bold">Core Courses<br/>(Common in All Specializations):</h2>
        <p className="mt-3 text-xl text-slate-600 ">Every participant of the program will start competing the following three core courses :</p>
        <div className="mt-4"><Button text={'Learn More'}/></div></div>
        <div className="gap-x-8 my-20 flex flex-col md:flex-row gap-y-6">
          {
            CoreTracksData.map((item,i) => (
              <QuarterBox
              key={item.number} description={item.description} header={item.header} number={i+1}/>
            ))
            
          }
          </div>
            
        </Wrapper></section>
  )
}

export default CoreTracks;