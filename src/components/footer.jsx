import React from 'react'
import CompanyLogo from '../images/axelLogo.svg'
// import FooterBG from "../assets/images/FooterBackground.png"
import {Link} from 'react-router-dom'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiFillMediumSquare} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='md:px-20 text-black  flex flex-col justify-center border-t border-neutral-500 bg-white'>
      <div className='py-4 md:text-left text-center'>
        {/* <div className='flex justify-center md:justify-around'>
          <img src={CompanyLogo} alt="Company Logo" className='h-11 cursor-pointer pb-2' />
        </div> */}
        <div className='flex md:justify-around md:pr-5 flex-col md:flex-row items-center'>
          <div className='md:w-3/12 font-InterRegular  text-sm px-2.5 md:px-0'>
          <div className='flex justify-center md:justify-around md:hidden'>
          <img src={CompanyLogo} alt="Company Logo" className='h-11 cursor-pointer pb-2' />
        </div> 
          <img src={CompanyLogo} alt="Company Logo" className='h-11 hidden md:block cursor-pointer pb-2' />

            <p>Axel is for builders and Web3 ecosystem enablers to share opportunities to build and scale-up. </p>
          </div>
          <div className="font-BrinnanBold pt-5">
            <div><Link to="/about">About Us</Link></div>
            {/* <div><Link to="/courses"><a>Courses</a></Link></div> */}
            {/* <div><a>FAQ</a></div> */}
            {/* <div><a href="https://discord.gg/SGPG8PqkHW">Discord</a></div> */}
          </div>
        </div>
        <div className='mt-16 flex md:items-start items-center  justify-around md:flex-row flex-col'>
          <div className='text-center'>
            <p className='font-InterRegular text-xs '>Have queries? Reach out to us on the email below!</p>
            {/* <a href="mailto:corporate@lumoslabs.co" className='text-cyan-400 underline font-InterMedium '>corporate@lumoslabs.co</a> */}
          </div>
          {/* <div className='flex font-BrinnanBold gap-2 md:gap-5 underline text-neutral-300 flex-row mt-3'>
            <a href=""> Privacy & Terms</a>
            <a href=""> Legal</a>
          </div> */}
        </div>
        
        <div className='flex justify-between mt-4 p-5  border-t flex-col md:flex-row'>
          {/* <div>
            <h3 className='font-BrinnanBold text-white font-2xl'><span className='font-InterRegular mr-1'>©</span>2022 by Lumos Metaverse</h3>
          </div>
          <div className='flex gap-3 justify-center md:py-0 py-3'>
          <a href="https://www.facebook.com/LabsLumos" rel="noopener referrer" target="_blank"><AiFillFacebook fontSize={25} className="hover:text-cyan-300"/></a>
          <a href="https://www.linkedin.com/company/lumoslabs/mycompany/" rel="noopener referrer" target="_blank"><AiFillLinkedin fontSize={25} className="hover:text-cyan-300" /></a>
          <a href="https://discord.gg/WyfmzJpzZd" rel="noopener referrer" target="_blank"><BsDiscord fontSize={26} className="hover:text-cyan-300" /></a>
          <a href="https://twitter.com/LabsLumos" rel="noopener referrer" target="_blank"><AiFillTwitterSquare fontSize={26} className="hover:text-cyan-300" /></a>
          <a href="https://www.instagram.com/buidlforweb3/" rel="noopener referrer" target="_blank"><AiFillInstagram fontSize={25} className="hover:text-cyan-300" /></a>
          <a href="https://medium.com/lumos-labs" rel="noopener referrer" target="_blank"><AiFillMediumSquare fontSize={28} className="hover:text-cyan-300" /></a>
          </div> */}
        </div>
      </div>
  </div>
  )
}