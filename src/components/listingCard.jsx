import PolygonLogo from '../images/polygon.svg'
import FilecoinLogo from '../images/filecoin.svg'
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { WorkContext } from '../context/workContext';
import { useContext, useState } from 'react';

const ListingCard = (props) => {

  const {sismoProof, setSismoProof, works, workCount, currentAccount} = useContext(WorkContext)
  const [recipient, setRecipient] = useState("");

  async function createNewFlow(recipient, flowRate) {
    if(currentAccount === ""){
      alert("Please connect your wallet first")
      return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  
    const signer = provider.getSigner();
  
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider
    });
  
    const superSigner = sf.createSigner({ signer: signer });
  
    console.log(signer);
    console.log(await superSigner.getAddress());
    const daix = await sf.loadSuperToken("fDAIx");
  
    console.log(daix);
  
    try {
      const createFlowOperation = daix.createFlow({
        sender: await superSigner.getAddress(),
        receiver: recipient,
        flowRate: flowRate
        // userData?: string
      });
  
      console.log(createFlowOperation);
      console.log("Creating your stream...");
      
      const result = await createFlowOperation.exec(superSigner);
      console.log(result);
      
      console.log(
        `Congrats - you've just created a money stream!
        `
        );
        alert("stream created successfully!")
      alert(
        `Congrats - you've just created a money stream!
      `
      );
      
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  

    return(
      <div className='text-white flex border-white border gap-5 rounded-xl p-3 '>
        <div className='border-r-[0.5px] pr-3 basis-1/12 flex justify-center items-center'>
<img src={PolygonLogo} alt='polygon' className='w-10 h-10' /> 
        </div>
        <div className='border-r-[0.5px] pr-3 basis-9/12'>
          <h1 className='text-3xl font-heading font-medium'>{props.title}</h1>
          <p className='py-2 font-secondary'>{props.desc}</p>
        </div>
        <div className='basis-2/12 flex flex-col gap-3 justify-center items-center '>
          {/* <button className='btn bg-emerald-600 px-3 py-1 rounded-lg font-secondary'>Start Stream</button> */}
          {
            window.location.pathname === "/profile" ?
"" :
            <button className='btn bg-emerald-600 px-3 py-1 rounded-lg font-secondary' onClick={() => (createNewFlow("0xDdFfEB75dC5fB826eD164EC13Fe02728E2A79FF7", "1"))}>Start Stream</button>

          }
  
        </div>
      </div>
    )
  }

export default ListingCard