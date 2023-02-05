



import React from "react";
import Kartica from "./Kartica";
 

function Pocetna({knjige}) {

  return (
    <div className="pocetna">
      
       {knjige.map((k)=><Kartica key={k.id} knjiga={k}></Kartica>)}
      
    </div>
  );
}
export default Pocetna;