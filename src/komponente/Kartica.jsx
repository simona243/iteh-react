



import React from "react";
 

function Kartica({knjiga}) {

  return (
    <div className="wrapper">
    <div className="product-img">
      <img src={knjiga.image} height="420" width="327"/>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>{knjiga.name}</h1>
        <h2>by {knjiga.autor}</h2>
        <p>  {knjiga.description} </p>
      </div>
      <div className="product-price-btn">
        <p><span>{knjiga.price}</span>din</p>
        <button type="button">Dodaj u korpu</button>
      </div>
    </div>
  </div>
   
  );
}
export default Kartica;