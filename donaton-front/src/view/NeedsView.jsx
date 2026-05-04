import { Button, Card, ProgressBar, Spinner } from "react-bootstrap";
import { useCausesViewModel } from "../viewmodel/useCausesViewModel";


function TestElement() {
    const URL = "https://f4.bcbits.com/img/a1156589754_2.jpg"
    const R = Math.random()

    return (
        <Card >
            <Card.Img src={URL}></Card.Img>
            <h2>{"Comida"}</h2>
            <h5>[UBICACION]</h5>
            <h5>{"Progreso:" + Math.floor(R*40000000)+"/40000000"}</h5>
                

            
            <ProgressBar now={R} max={1}/>
            <div style={{paddingTop:".5rem"}}></div>
            <Button>Donar</Button>

        </Card>
    );    


}

  
function NeedsView() {
    const {
        getNeeds,
        page,
        setPage,
        nextPage,
        prevPage,
        isEnd
    } = useCausesViewModel()

    console.log(useCausesViewModel())
    //flexWrap:"warp",, padding:"1rem 1rem 1rem 1rem"}
    return (
        <div>    
            <div style={{display:"flex", flexWrap:"wrap",gap:"1rem", justifyContent:"center", paddingTop:"2rem",paddingBottom:"2rem"}}>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
                <TestElement/>
            </div>

            <div style={{display:"flex", justifyContent:"center",paddingBottom:"1.5rem", gap:"1rem"}}>
                <Button onClick={prevPage} disabled={page <= 0}>Anterior</Button>
                <input type="number" min={0} max={4} value={page} onChange={ (event)=>{setPage(event.target.value)} }/>
                <Button onClick={nextPage} disabled={isEnd()}>Siguiente</Button>

            </div>
        </div>
    ) 


}

export default NeedsView;