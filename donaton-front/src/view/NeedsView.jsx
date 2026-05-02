import { Card, ProgressBar } from "react-bootstrap";
import { useCausesViewModel } from "../viewmodel/useCausesViewModel";


function TestElement() {
    return (
            
        <div style={{display:"flex", gap:"1rem", padding:"1rem"}} href="https://kasaneteto.jp">
            <img src="https://media.discordapp.net/attachments/791435972683890729/1498372654472630475/IMG_20260427_131708741_HDR.jpg?ex=69f23d47&is=69f0ebc7&hm=6cc70e02e9557e7e2e3b76b3062cd770f9a2f707357c797aaff39ded4b231ea7&=&format=webp" style={{width:"20rem", height:"20rem"}}/>
            <div style={{display:"flex",flexDirection:"column", }}>
                
                <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
                    <h2>Comida [LUGAR]</h2>
                    <h4>Estado Donacion General:</h4>
                    <progress max="100" value="0" />

                </div>


                <div>
                    <h4 style={{alignSelf: "flex-end"}}>Santiago - Region Metropolitana</h4>
                </div>
            </div>
            
        </div>
    )
}

  
function NeedsView() {
    const {getNeeds} = useCausesViewModel()

    return <div style={{display:"flex", flexDirection:"column"}}>
        <TestElement/>
        <TestElement/>
        <TestElement/>
        <TestElement/>
        <TestElement/>
                        

    </div>


}

export default NeedsView;