import React, {useState, useEffect, Children} from "react";
import Wenb3Modal from "web3modal";
import { ethers } from "ethers";

//INTERNAL IMPORT
import { CrowdFundingABI, CrowdFundingAddress } from "./contants";

//---FETCHING SMART CONTRACT
const fetchContract=(signerOrProvider)=>
    new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);
export const CrowdFundingContext=React.createContext();

export const CrowdFundingProvider=({children})=>{
    const titleData="Crowd Funding Contract";
    const [currentAccount, setCurrentAccount]=useState("");

    const createCampiagn = async (campaign)=>{
        const {title, description, amount, deadline}=campaign;
        const Web3Modal=new Wenb3Modal();
        const connection = await Web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer=provide.getSigner();
        const contract=fetchContract(signer);

        console.log(currentAccount);
        try{
            const transaction = await contract.createCampiagn(
                currentAccount, //owner
                title, //title
                description, //description
                ethers.utils.parseUnits(amount,18),
                new Date(deadline).getTime()
            );
            }
        }
    }
}