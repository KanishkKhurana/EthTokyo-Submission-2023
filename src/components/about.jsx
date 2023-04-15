import React from 'react'
import {SiSpringsecurity} from 'react-icons/si'
import {MdOutlineSecurityUpdateGood} from 'react-icons/md'
import {SiTrustpilot} from 'react-icons/si'

const AboutCard = ({title, subtitle, icon}) => {

    return (
        <div className='p-3 bg-purple-100 border border-purple-300 rounded-full flex gap-5'>
            <div className=''>
                <SiSpringsecurity className='text-5xl text-black' />
            </div>
            <div className='text-black'>
                <div><h1 >{title}</h1></div>
                <div><h3>{subtitle}</h3></div>
            </div>
        </div>
    )
}


export default function about() {
  return (
    <div className='flex py-24 md:py-40 justify-center items-center xl:mx-24 gap-12 text-white'>
        <div className='flex flex-col gap-2 basis-1/2'>
            <div><h1 className='text-6xl font-heading'>Decentralised</h1></div>
            <div><h3 className='w-1/2 font-secondary'>Onboard your infra app and get paid for exactly the amount of time that a users spends using your SaaS</h3></div>
            <div><h1 className='text-6xl font-heading'>Saas Tool</h1></div>
        </div>
        <div className='basis-1/2 flex flex-col gap-5'>
            <AboutCard title="Superfluid"  subtitle=""  />
            <AboutCard title="Bunzz"  subtitle=""  />
            <AboutCard title="Scroll"  subtitle=""  />
            <AboutCard title="Sismo"  subtitle=""  />
            <AboutCard title="Polygon"  subtitle=""  />

        </div>
    </div>
  )
}
