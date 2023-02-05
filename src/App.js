
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './komponente/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Pocetna from './komponente/Pocetna';

function App() {
  const [knjige] = useState([
    {
      id: 1,
      image: "https://www.delfi.rs/_img/artikli/2023/01/crni_leptiri_vv.jpg",
      name: "Crni leptiri",
      autor:" Mark Miler",
      description:  "Solanž je takođe spokojna, sedi prekrštenih nogu na svojoj ležaljci okrenuta prema moru, sa slamnatim šeširom i čašom soka od jabuke. I ona misli, isto kao ja, da nam se ni sada ništa neće desiti, kad nam se ništa nije desilo ni pre deset godina. ",
      price:688,
      published:2015,
      cart: 0
    },
    {
      id: 2,
      image: "https://www.delfi.rs/_img/artikli/2022/12/saka_anegdota_takodje_opus_incertum_v.jpg",
      name: "Saka anegdota",
      autor:"Hans Magnus Encensberger",
      description:  "Lucidna sećanja na godine formiranja jednog od najznačajnijih nemačkih književnika i najuticajnijih intelektualaca, koja su takođe portret Nemačke pod nacizmom. ",
      price:764,
      published:2022,
      cart: 0
    },
    {
      id: 3,
      image: "https://www.delfi.rs/_img/artikli/2022/12/knjiga_vv.jpg",
      name: "Knjiga",
      autor:"Amarant Borsuk",
      description:  "Posmatrajući knjigu kao objekat, sadržaj, ideju i interfejs, ona nam ukazuje da je njena fizička forma oduvek bila poprište eksperimenta i igre. Umesto što insistiramo na lažnoj dihotomiji između štampanog i digitalnog medija, Borsuk poručuje da bi trebalo da cenimo njegov kontinuitet.",
      price:1210,
      published:2018,
      cart: 0
    },

    {
      id: 4,
      image: "https://www.delfi.rs/_img/artikli/2022/12/kastigulja_vv.jpg",
      name: "Kastigulja",
      autor:"Jasenka Lalovic",
      description:  "  Iskrena i inspirativna pripovest o širini ljudske duše koja uspeva da se uzdigne i da oprosti – prvo sebi, a potom i drugima. Romanom Kastigulja zaokružuje se saga o četiri generacije žena jedne crnogorske porodice. Naslov je veoma intrigantan jer ta reč ne predstavlja samo običnu uvredu već ostaje kao sramni beleg koji se nikako ne može izbrisati",
      price:1799,
      published:2022,
      cart: 0
    },
  ])

 

  return (
    <BrowserRouter className="App">
      <NavBar ></NavBar>
      <Routes>
        <Route  path="/"  element={<Pocetna knjige={knjige} />} />  </Routes>
      
  </BrowserRouter>
  );
}

export default App;
