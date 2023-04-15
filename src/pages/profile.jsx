import React, {useContext} from 'react'
import ProfileImage from '../images/zoe.svg'
import ListingCard from '../components/listingCard'
import {WorkContext} from '../context/workContext'
import FilecoinLogo from '../images/filecoin.svg'


const MyProfile =() =>{
  const {sismoProof, setSismoProof, works, workCount} = useContext(WorkContext)
  
  
  return(
    <div className=''>
      <div className='flex flex-col items-center'>
        <img src={ProfileImage} alt='profile' className='w-40 h-40 rounded-full' />
        <p className='text-white font-secondary py-2 '>{sismoProof.slice(0,8)+"..."+sismoProof.slice(sismoProof.length-8)}</p>
      </div>
      <div className='text-white flex gap-3 justify-evenly text-center font-heading pt-8 border p-5 border-neutral-300 mx-20 rounded-full'>
        <div>
          <h3 className='text-5xl '>{workCount}</h3>
          <p className='text-xl '>Contributions</p>
        </div>
        <div>
          <h3 className='text-5xl '>2</h3>
          <p className='text-xl '>Celebrated Projects</p>
        </div>
        <div>
          <h3 className='text-5xl '>200</h3>
          <p className='text-xl '>earnings</p>
        </div>
      </div>
    </div>
  )
  
}

export default function Profile() {
  const {sismoProof, setSismoProof, works} = useContext(WorkContext)
  return (
    <div className='py-44'>
      <MyProfile />

      <div className='py-12'>
        <h1 className='text-3xl font-heading font-medium text-white text-center'>My Listings</h1>
        
      </div>
      <div className='mx-20 flex-col flex gap-3'>
        {/* <ListingCard chain="Polygon" title="Frontend Website" desc="Build a frontend for EthGlobal website" /> */}
        {works.map((work, index) => {
              return <ListingCard key={index} chain={work.chain} title={work.title} desc={work.desc} />

            })}
      

        </div>  

        <div className='py-12'>
        <h1 className='text-3xl font-heading font-medium text-white text-center'>Contribution NFTs</h1>
            <div className='flex justify-center items-center'>
              <img src={FilecoinLogo} alt="" className='w-1/12'/>
              </div>
          
            
        </div>
    </div>
  )
}
