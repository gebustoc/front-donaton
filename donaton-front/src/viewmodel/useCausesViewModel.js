import { useState } from "react"

export const useCausesViewModel = () =>{
    const [page,setPage] = useState(0);
    const needsState={
        idNeedsState:0,
        needsState:"not done :/"

    }
    const needsType = {
        idNeedsType:0,
        needsType:"love+money"
    }
        

    const dummyNeeds = [
        {
            idNeeds:0,
            message:"abcdedsua",
            needsState,
            needsType
        },
        {
            idNeeds:0,
            message:"abcdedsua",
            needsState,
            needsType
        }
    ]
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
        getNeeds: ()=>dummyNeeds,
        page,
        nextPage,
        prevPage,
        isEnd,
        setPage
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
