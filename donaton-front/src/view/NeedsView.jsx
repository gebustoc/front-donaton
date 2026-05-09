import { Button, Card, ProgressBar, Spinner } from "react-bootstrap";
import { useCausesViewModel } from "../viewmodel/useCausesViewModel";




function DonationBox({viewmodel}){
    const DonationChange = (event)=>{
        if (isNaN(Number.parseInt(event.target.value))) return;
        viewmodel.setDonationAmount(Number.parseInt(event.target.value))
    }
    return (
         <div className="donationbox" style={{display:viewmodel.donating ? "" : "none"  }}>
                <Card className="shadow" style={{height:"100%"}}>
                    <div style={{height:"100%", padding:"1rem 1rem 1rem 1rem", display:"flex",flexDirection:"column", gap:"1rem"}}>
                        <h2 >{"Donar para [COMIDA] - Pudahuel"}</h2>
                        <h4>Cuanto Quiere Donar Para Esta Causa?</h4>
                        <div style={{display:"flex", gap:"1rem"}}>
                            <input type="number" min={1} value={""+viewmodel.donationAmount} onChange={DonationChange} style={{width:"100%"}}/>
                            <Button>Confirmar</Button>
                        </div>

                        <div style={{display:"flex", gap:"1rem"}}>
                            <Button onClick={()=>viewmodel.setDonationAmount(viewmodel.donationAmount+1000)}>$ 1000</Button>
                            <Button onClick={()=>viewmodel.setDonationAmount(viewmodel.donationAmount+2500)}>$ 2500</Button>
                            <Button onClick={()=>viewmodel.setDonationAmount(viewmodel.donationAmount+5000)}>$ 5000</Button>
                            <Button onClick={()=>viewmodel.setDonationAmount(viewmodel.donationAmount+10000)}>$ 10000</Button>
                            <Button onClick={()=>viewmodel.setDonationAmount(viewmodel.donationAmount+20000)}>$ 20000</Button>               
                        </div>
                        <div style={{height:"100%"}}></div>
                        <Button onClick={viewmodel.stopDonationsMenu}>Cancelar</Button>
                        
                    </div>
                </Card>
            </div>

    )
}

function DonationCard({element,onclick,loggedin}) {
    const URL = "https://f4.bcbits.com/img/a1156589754_2.jpg"
    return (
        <Card className="shadow">
            <Card.Img src={URL}></Card.Img>
            <div style={{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}>
                <h2>{element.needs}</h2>
                <h5>{element.idUbicacion.idDistrict.district + " - " +element.idUbicacion.idDistrict.idRegion.region}</h5>
                <h5>{"Progreso:" + element.idNeedsState.curValue+"/"+element.idNeedsState.max}</h5>
                <ProgressBar now={element.idNeedsState.curValue} max={element.idNeedsState.max}/>
                <div style={{paddingTop:".5rem"}}></div>
                <Button style={{alignSelf:"center", width:"100%"} } onClick={onclick} disabled={!loggedin}>Donar</Button>
            </div>
        </Card>
    );    


}
  
function NeedsView({loginviewmodel}) {
    const viewmodel = useCausesViewModel()


    let elements = []

    //elements.push(<TestElement element={it} />
    viewmodel.getNeeds().forEach(
        (it)=>{
            elements.push(<DonationCard element={it} onclick={viewmodel.startDonationsMenu} loggedin={loginviewmodel.loggedIn} />)
        }
    )
    
    
    //donating "" : "none"



    //flexWrap:"warp",, padding:"1rem 1rem 1rem 1rem"}
    return (
        <div>

            <div style={{filter: viewmodel.donating ? "blur(4px)" : ""}}>    
                <div style={{display:"flex", flexWrap:"wrap",gap:"1rem", justifyContent:"center", paddingTop:"2rem",paddingBottom:"2rem"}}>
                    {elements}
                </div>

                <div style={{display:"flex", justifyContent:"center",paddingBottom:"1.5rem", gap:"1rem"}}>
                    <Button onClick={viewmodel.prevPage} disabled={viewmodel.page <= 0}>Anterior</Button>
                    <input type="number" min={0} max={4} value={viewmodel.page} onChange={ (event)=>{viewmodel.setPage(event.target.value)} }/>
                    <Button onClick={viewmodel.nextPage} disabled={viewmodel.isEnd()}>Siguiente</Button>
                </div>

            </div>
            <DonationBox viewmodel={viewmodel}></DonationBox>


        </div>
        
    ) 


}

export default NeedsView;