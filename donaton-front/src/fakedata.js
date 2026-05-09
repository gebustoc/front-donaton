


const Need = {
    idNeeds:0,
    needs:"Comida",

    idNeedsState:{
        idsNeedsState:0,
        curValue:25,
        max:160,
        
        needsState:"Donacion"
    },

    idNeedsType:{
        type:0,
        needsType:"Donacion Monetaria"
    },

    idUbicacion:{
      idUbicacion:0,
      street:"",
      idDistrict:{
        id:0,
        district:"pudahuel",
        idRegion:{
            idRegion:0,
            region:"Metropolitana"
        }
      }
    }
}

const DummyNeed = ()=>[
    Need,
    Need,
    Need,
    Need,
    Need    
]

export default DummyNeed;