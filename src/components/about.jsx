import React from 'react'
import {SiSpringsecurity} from 'react-icons/si'
import {MdOutlineSecurityUpdateGood} from 'react-icons/md'
import {SiTrustpilot} from 'react-icons/si'

const AboutCard = ({title, subtitle, icon}) => {

    return (
        <div className='p-3 bg-purple-100 border border-purple-300 rounded-full flex gap-5'>
            <div className=''>
                <SiSpringsecurity className='text-5xl text-purple-500' />
            </div>
            <div className=''>
                <div><h1>{title}</h1></div>
                <div><h3>{subtitle}</h3></div>
            </div>
        </div>
    )
}


export default function about() {
  return (
    <div className='flex py-24 md:py-40 justify-center items-center xl:mx-24 gap-12'>
        <div className='flex flex-col gap-2 basis-1/2'>
            <div><h1 className='text-6xl font-heading'>Lorem Ipsum Doret sit Amet Lol</h1></div>
            <div><h3 className='w-1/2 font-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab illo porro optio at. Itaque laudantium, in optio debitis fuga voluptas nesciunt laborum nam, ipsa, dolores corrupti blanditiis sit ducimus tempore.</h3></div>
            <div><h1 className='text-6xl font-heading'>Lorem Ipsum Doret sit Amet Lol</h1></div>
        </div>
        <div className='basis-1/2 flex flex-col gap-5'>
            <AboutCard title="Lorem ipsum Doret"  subtitle="lorem ipsum dora sit amet rinrinvrinv"  />
            <AboutCard title="Lorem ipsum Doret"  subtitle="lorem ipsum dora sit amet rinrinvrinv"  />
            <AboutCard title="Lorem ipsum Doret"  subtitle="lorem ipsum dora sit amet rinrinvrinv"  />

        </div>
    </div>
  )
}
