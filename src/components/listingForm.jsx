import React, {useContext} from 'react'
import {WorkContext} from '../context/workContext'

export default function ListingForm() {
  const {sismoProof, setSismoProof, ConnectWallet, currentAccount , setCurrentAccount, addWork, workCount, setWorkCount,works, setWorks,link, setLink,receiver, setReceiver,amount, setAmount,description, setDescription,title, setTitle} = useContext(WorkContext)

  return (
    <div>
         <div className='bg-[#f6f6f6] p-4  rounded-lg '>
            <div className='text-center border-b pb-3 border-[#0d0d0d]'>
                <h1 className='text-5xl mb-2 font-heading text-[#0d0d0d]'>New Product</h1>
                <p className='text-xl text-[#0d0d0d9c]'>Fill the Product details here</p>
            </div>
            <div className='pt-3 flex flex-col gap-3 justify-center items-center w-full'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="input" className='font-heading text-[#0d0d0d] tracking-widest'>Title</label>
                    <input type="text" className='bg-[#0d0d0d] text-[#f6f6f6] p-3 rounded-lg' onChange={(e)=>(setTitle(e.target.value))} />
                </div>
            </div>
            <div className='pt-3 flex flex-col gap-3 justify-center items-center w-full'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="input" className='font-heading text-[#0d0d0d] tracking-widest'>Description</label>
                    <input type="text" className='bg-[#0d0d0d] text-[#f6f6f6] p-3 rounded-lg' onChange={(e)=>(setDescription(e.target.value))} />
                </div>
            </div>
            <div className='pt-3 flex flex-col gap-3 justify-center items-center w-full'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="input" className='font-heading text-[#0d0d0d] tracking-widest'>Amount</label>
                    <input type="number" className='bg-[#0d0d0d] text-[#f6f6f6] p-3 rounded-lg' onChange={(e)=>(setAmount(e.target.value))} />
                </div>
            </div>
            <div className='pt-3 flex flex-col gap-3 justify-center items-center w-full'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="input" className='font-heading text-[#0d0d0d] tracking-widest'>Link</label>
                    <input type="text" className='bg-[#0d0d0d] text-[#f6f6f6] p-3 rounded-lg' onChange={(e)=>(setLink(e.target.value))} />
                </div>
            </div>
            <div className='pt-6 flex flex-col gap-3 justify-center items-center w-full'>
                <div className='flex flex-col w-full'>
                   <button className='p-4 btn border-none hover:bg-emerald-500 bg-orange-500 text-[#f6f6f6] font-heading tracking-widest rounded-xl' onClick={ConnectWallet}>
                    {currentAccount ? <p>{currentAccount.slice(0,4)+"..."+currentAccount.slice(currentAccount.length-4)}</p> : "Connect Metamask Wallet"}
                   </button>
                </div>
            </div>
            <div className='mt-6 pt-3 flex flex-col gap-3 justify-center border-t border-[#0d0d0d] items-center w-full'>
                <div className='flex flex-col w-fit'>
                   <button className='p-4 px-12 bg-blue-600 btn border-none hover:bg-emerald-500  text-[#f6f6f6] font-heading tracking-widest rounded-xl' onClick={addWork}>
                    Submit
                   </button>
                </div>
            </div>

        </div>
    </div>
  )
}
