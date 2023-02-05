



import React from "react";
 
import { MDBDataTableV5 } from 'mdbreact';
 

function Korpa({knjige}) {
    const [datatable, setDatatable] = React.useState({
       
        columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Autor',
            field: 'autor',
            width: 200,
          },
          {
            label: 'Price',
            field: 'price',
            width: 270,
          }
           
        ],
        rows:  knjige.map(k=>{
            return{
                name: k.name,
                autor: k.autor,
                price: k.price
            }
            

        })
       
    })      
    return <div className='tabela'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;

}
export default Korpa;