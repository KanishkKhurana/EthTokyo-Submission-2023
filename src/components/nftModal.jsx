import React,{useState, useContext} from 'react'
import axios from 'axios';
import { WorkContext } from '../context/workContext';
const JWT = `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`;

export default function NftModal() {
    const {modal, setModal} = useContext(WorkContext)
  const [fileImg, setFileImg] = useState(null);

  const sendFileToIPFS = async (e) => {
    console.log("Sending File to IPFS")
    if (fileImg) {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("file", fileImg);

            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': `${process.env.REACT_PUBLIC_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${process.env.REACT_PUBLIC_APP_PINATA_API_SECRET}`,
                    "Content-Type": "multipart/form-data"
                },
            });

            const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
         console.log(ImgHash); 
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   
            setModal(false)


        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }
}

  return (
    <div className='p-5 bg-white flex justify-center items-center'>
        <form onSubmit={sendFileToIPFS}>
<input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
<button type='submit' className='border' >Submit NFT </button>            
</form>
    </div>
  )
}
