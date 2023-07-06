'use client'
import React, { useState } from 'react';
import QuarterBox from '../Shared/QuarterBox';
import Wrapper from '../Shared/Wrapper';
import Image from 'next/image';

const data = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    src: "/images/metaverse.png",
    alt: "Metaverse",
    quarters: [
      {
        header: "Quarter IV",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4
      },
      {
        header: "Quarter V",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5
      }
    ]
  },
  {
    slug: "AI",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    src: "/images/ai.png",
    alt: "AI",
    quarters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  // Rest of the data objects...
];

function Specialized() {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = data.find(item => item.slug === selectedItem);

  return (
    <section>
      <Wrapper>
        <div>
          <h2 className="text-5xl font-bold">Specialized Tracks</h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters, the participants will select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row">
          <div className="self-start sticky top-28 bg-white basis-8/12 shadow-xl rounded-xl border border-slate-200 py-16 px-16 h-auto">
            <h4 className="text-primary text-2xl font-medium">Specialized Track</h4>
            <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
            <p className="text-xl text-slate-600 mt-3">{selectedItemData?.description}</p>
            <button className="text-primary font-bold underline text-xl mt-4 flex gap-x-2 items-end">
              Learn More
              <svg className="text-lg mb-1.5" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 gap-y-8 gap-x-6">
              {selectedItemData?.quarters.map((item) => (
                <QuarterBox
                  key={item.number}
                  description={item.description}
                  header={item.header}
                  number={item.number}
                />
              ))}
            </div>
          </div>
          <div className="py-6 px-4 space-y-4 bg-white basis-4/12 flex-1">
            {data.map((item, i) => (
              <div onClick={() => setSelectedItem(item.slug)} key={i} className="flex gap-x-4">
                <Image src={item.src} alt={item.alt} height={96} width={192} className="object-cover" />
                <div>
                  <h4 className="text-primary font-medium">Specialized Program</h4>
                  <h3 className="text-xl font-semibold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </Wrapper>
    </section>
  );
}

export default Specialized;

