import React, {useContext} from 'react'
import ListingForm  from '../components/listingForm'
import PolygonLogo from '../images/polygon.svg'
import FilecoinLogo from '../images/filecoin.svg'
import ListingCard from '../components/listingCard'
import {WorkContext} from '../context/workContext'
import NftModal from '../components/nftModal'



export default function Listings() {
  const {sismoProof, setSismoProof, works, modal} = useContext(WorkContext)
  return (
    <div className='xl:mx-24 mx-3 xl:py-44 py-12'>
      <div className='text-center text-white pb-16'>
        <h1 className='text-5xl font-heading font-medium'>Available Listings</h1>
        <p className='py-2 font-secondary'>Here are some available listings that developers can apply for and start working with no stress and assurance of payment.</p>
      </div>
        <div className='flex flex-col xl:flex-row gap-5'>
          <div className='basis-4/6 flex flex-col gap-3 '>
            {works.map((work, index) => {
              return <ListingCard key={index} chain={work.chain} title={work.title} desc={work.desc} />

            })}
            {/* <ListingCard chain="Polygon" title="Frontend Website" desc="Build a frontend for EthGlobal website" />
            <ListingCard chain="Filecoin" title="Frontend Website" desc="Build a frontend for EthGlobal website" /> */}
          </div>
          <div className='basis-2/6'>
            <ListingForm  />
          </div>
         {/* {modal && <div className='absolute'><NftModal /></div>} */}
        </div>
    </div>
  )
}
