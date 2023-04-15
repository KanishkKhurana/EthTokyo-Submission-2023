import React,{useEffect,useState} from 'react';

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
            const paybacks = await transactionContract.getAllPaybacks();
            console.log(paybacks);
            setWorks(paybacks);
        } catch (error) {
            console.log(error);
        }
    }
    

    const addWork = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transaction = await transactionContract.addPayback(receiver, amount, title, description);
            await transaction.wait();
            console.log(`${title} has been added to the blockchain`);
        } catch (error) {
            console.log(error);
        }
    }

    const getWorkCount = async () => {
        try {
            const transactionContract = getEthereumContract();
            const count = await transactionContract.getPaybackCount();
            console.log(count);
            setWorkCount(count);
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

    
    useEffect( () => {
      

        getAllWork();
        getWorkCount();
    }, []);


    return (
        <WorkContext.Provider value={{addWork, ConnectWallet, sismoProof, setSismoProof, workPrizeReceiver, currentAccount , setCurrentAccount }}>
            {children}
        </WorkContext.Provider>
    )
}