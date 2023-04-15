import React,{useEffect, useState, useContext} from 'react'
import HeroBackground from '../images/heroImage.svg'
import {SiDiscord} from 'react-icons/si'
import TextTransition, { presets } from "react-text-transition";
import { WorkContext } from '../context/workContext';
import { 
  AuthType,
  SismoConnectButton, 
  SismoConnectClientConfig, 
  SismoConnectResponse
} from "@sismo-core/sismo-connect-react";

const sismoConnectConfig = {
  appId: "0xc7b905501592af8bdd512a91bf0a6ca1" // appId you registered
};

const TEXTS = [
    
    "Earn",
    "Grow"
  ];

export default function Hero() {
  // const [sismoProof, setSismoProof] = useState("");
  const {sismoProof, setSismoProof} = useContext(WorkContext)

    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1050 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);




  return (
    <div className='relative flex justify-between gap-5'>
        <div className='z-20 flex flex-col md:items-start items-center py-24 md:py-40 md:pl-16 2xl:pl-32  select-none '>
            <div className='text-5xl font-BrinnanBold font-heading font-medium text-white md:text-left text-center tracking-wide 2xl:pt-24 2xl:text-6xl'>
                <h1>A world for developers <br/> <span className='flex gap-3 md:justify-start justify-center 2xl:text-6xl'> to  <TextTransition className='text-[#01C3F1] ' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition> </span> in the Web3 Ecosystem </h1>
            </div>
            <div className='py-12 max-w-prose break-words px-3 md:px-0 text-center md:text-left'>
                {/* <p className='text-sm font-InterRegular text-neutral-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p> */}
            </div>
            <div className='flex justify-center flex-col'>
                <p className='text-lg text-sky-300 font-BrinnanBold px-3 md:px-0 text-center md:text-left  opacity-80'> Get paid for how much a user uses your app </p>
                <div className='flex flex-col md:flex-row gap-4 items-center md:items-start my-7'>
                {/* <a className='btn buttonNotch p-3 px-7 max-w-max flex  gap-1 btn text-[#262262] font-BrinnanBold' href="https://discord.gg/SGPG8PqkHW" rel="noopener noreferrer" target="_blank">Find Work  <span className='font-InterSemibold ml-2'>↗ </span></a> */}
                {/* <a className=' buttonNotch2 p-3 px-7 max-w-fit flex gap-1  text-[#262262] font-BrinnanBold' href="https://forms.lumoslabs.co/whitelist " rel="noopener noreferrer" target="_blank">List a Job   <span className='font-InterSemibold ml-2'>↗ </span></a> */}
            </div>
                {sismoProof? <p className='text-white break-words '>LogIn Proof: {sismoProof.slice(0,8)+"..."+sismoProof.slice(sismoProof.length-8)}</p>  : <SismoConnectButton
  config={sismoConnectConfig} // the config created above
  // you ask for a proof of Data Vault ownership
  auths={[{authType:AuthType.VAULT}]} 
  onResponse={(SismoConnectResponse) => {
    console.log(SismoConnectResponse)
    setSismoProof(SismoConnectResponse.proofs[0].proofData)
    //Send the response to your server to verify it
    //thanks to the @sismo-core/sismo-connect-server package
    //Will see how to do this in next part of this tutorial
  }}
/>}
                
            </div>
        </div>
            <div className='overflow-x-clip overscroll-x-none '>
                <img src={HeroBackground} alt="Enter Lumos Metaverse" className='hidden md:inline opacity-50 md:opacity-100 absolute -right-20 md:right-0 top-0 h-full md:w-1/2 2xl:w-5/12' />
            </div>

    </div>
  )
}