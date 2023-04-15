import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {contractAddress, contractABI} from '../utils/ContractDetails';
const ethers = require("ethers");
export const WorkContext = React.createContext();
const {ethereum} = window;




export const WorkProvider = ({children}) => {
    const [currentAccount , setCurrentAccount] = useState(null);
    // const [workForm, setWorkForm] = useState({receiverName:"", receiver:"", amount:"", note:""});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [receiver, setReceiver] = useState("");
    const [link, setLink] = useState("");
    const [works, setWorks] = useState([]);
    const [workCount, setWorkCount] = useState(0);
  const [sismoProof, setSismoProof] = useState("");
  const [modal, setModal] = useState(false);
  const [ipfs , setIpfs] = useState([]);




const getEthereumContract = () => {
    if(ethereum) {
        // if(sismoProof){

            // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");\
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
            
            // console.log(
                //     provider, 
                //     signer,
                //     transactionContract
                // )
                
                return transactionContract;
            // }
    
    
    }
    // const provider = new ethers.BrowserProvider(window.ethereum);

}

    


    const ConnectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                console.log("Please install metamask");
                return;
            } else {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                setCurrentAccount(accounts[0]);
                console.log("Connected", currentAccount);
            }
        } catch (error) {
            console.log(error);
            }
    }

    
    const getAllWork = async () => {
        
        try {
            const transactionContract = getEthereumContract();
            const paybacks = await transactionContract.getAllWork();
            console.log(paybacks);
            setWorks(paybacks);
        } catch (error) {
            console.log(error);
        }
    }
    

    const addWork = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transaction = await transactionContract.addWork(amount, description, title, link);
            await transaction.wait();
            console.log(`${title} has been added to the blockchain`);
            alert(`${title} has been added to the blockchain`);
            setModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    const getWorkCount = async () => {
        try {
            const transactionContract = getEthereumContract();
            const count = await transactionContract.getWorkCount();
            console.log(count);
            setWorkCount(count.toString());
        } catch (error) {
            console.log(error);
        }
    }

    const workPrizeReceiver = async (id, workNum) => {

        try {
            const transactionContract = getEthereumContract();
            const transaction = await transactionContract.addReceiver(id, workNum);
            await transaction.wait();
            console.log(transaction);
            console.log(`Prize has been sent to the receiver`);
            alert(`Prize has been sent to the receiver`);
        } catch (error) {
            console.log(error);
        }
    }

    const getFilesfromIPFS = async () => {
        try {
            const res = await axios({
                method: "get",
                url: "https://api.pinata.cloud/data/pinList?includeCount=true",
                headers: {
                    'pinata_api_key': `${process.env.REACT_PUBLIC_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${process.env.REACT_PUBLIC_APP_PINATA_API_SECRET}`,
                },
            });
            console.log(res.data);
        } catch (error) {
            console.log("Error getting Files from IPFS: ")
            console.log(error)
        }
    }

    
    useEffect( () => {
      
        // getFilesfromIPFS();
        getAllWork();
        getWorkCount();
    }, []);



    return (
        <WorkContext.Provider value={{modal, setModal,workCount, setWorkCount,works, setWorks,link, setLink,receiver, setReceiver,amount, setAmount,description, setDescription,title, setTitle,addWork, ConnectWallet, sismoProof, setSismoProof, workPrizeReceiver, currentAccount , setCurrentAccount }}>
            {children}
        </WorkContext.Provider>
    )
}