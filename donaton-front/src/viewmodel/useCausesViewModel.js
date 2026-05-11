import { useEffect, useState } from "react"
import DummyNeed from "../fakedata";
import NeedsService from "../service/NeedsService";

export const useCausesViewModel = () =>{
    const [page,setPage] = useState(0);
    const [donating,setDonating] = useState(false);
    const [donationAmount, setDonationAmount] = useState(1)    
    const [sendingDonation, setSendingDonation] = useState(false)
    const [needs,setNeeds] = useState([])
    useEffect(
        ()=>{
            NeedsService.getAllNeeds().then(
                (val)=>{
                    try{setNeeds(JSON.parse(val))}
                    catch{setNeeds([])}
                }
            )
        },[page]
    )


    const nextPage = ()=>{
        if (page > 4) return
        setPage(page+1);
    }

    const prevPage = ()=>{
        if (page <= 0) return
        setPage(page-1);

    }
    const isEnd = ()=>{
        return page >= 4
    }

    return {
        getNeeds: ()=>needs,
        page,
        nextPage,
        prevPage,
        isEnd,
        setPage,
        donating,
        setDonating,
        startDonationsMenu: ()=>{setDonating(true);setDonationAmount(1)},
        stopDonationsMenu: ()=>{setDonating(false);setDonationAmount(1)},
        donationAmount, 
        setDonationAmount,
        sendingDonation

    }


}

/*
    

    @Column(name = "needs", nullable = false)
    private String needs;

    @ManyToOne
    @JoinColumn(name = "idNeedsState", nullable = false)
    private NeedsState needsState;

    @ManyToOne
    @JoinColumn(name = "idNeedsType", nullable = false)
    private NeedsType needsType;

*/
