import PolygonLogo from '../images/polygon.svg'
import FilecoinLogo from '../images/filecoin.svg'

const ListingCard = (props) =>{

    return(
      <div className='text-white flex border-white border gap-5 rounded-xl p-3'>
        <div className='border-r-[0.5px] pr-3 basis-1/12 flex justify-center items-center'>
          {props.chain === 'Polygon' ? <img src={PolygonLogo} alt='polygon' className='w-10 h-10' /> : <img src={FilecoinLogo} alt='filecoin' className='w-10 h-10' />}
        </div>
        <div className='border-r-[0.5px] pr-3 basis-9/12'>
          <h1 className='text-3xl font-heading font-medium'>{props.title}</h1>
          <p className='py-2 font-secondary'>{props.desc}</p>
        </div>
        <div className='basis-2/12 flex flex-col gap-3 justify-center items-center '>
          <button className='btn bg-emerald-600 px-3 py-1 rounded-lg font-secondary'>Apply</button>
          {props.chain !== "Polygon" && <button className='text-sm bg-blue-600 px-3 py-1 btn rounded-lg text-[#f6f6f6] font-secondary'> Requirement Files</button>}
  
        </div>
      </div>
    )
  }

export default ListingCard