
export const useCausesViewModel = () =>{
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

    return {
        getNeeds: ()=>dummyNeeds
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
