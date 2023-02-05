



import React from "react";
import Kartica from "./Kartica";
 

function Pocetna({knjige,onAdd}) {

  return (
    <div className="pocetna">
      
       {knjige.map((k)=><Kartica key={k.id} knjiga={k} onAdd={onAdd} ></Kartica>)}
      
    </div>
  );
}
export default Pocetna;