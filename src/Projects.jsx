import React from "react";
import Burger from './../public/Burger.png';
import Table from './../public/Table.png';
import Weather from './../public/Weather.png';
// File: Projects.jsx
// Student: David Wald
// StudentID: 301273421
// Date: 9/27/2024

export default function Projects() {
     return (
     <>
     <p>My Projects</p>


     <p className="rightText"><img src={Burger} alt="Pro"/>
     
     David Wald developed his own website for a restaurant called Fresh N Taste where eaters 
     can find a plethora of different foods ranging from burgers to baos and craft their own
     version of them with their own flavours!
     </p>

     <p className="rightText"><img src={Weather} alt="Pro"/>
     
     David Wald created a weather app from api and query that can automatically tell the user the weather and 
     climate of his or her location along with allowing the user to input the names of cities from 
     across the globe in order to find out their weather and climate.
     </p>

     <p className="rightText"><img src={Table} alt="Pro"/>
     
     David Wald has also developed a simple number table creator that allows the user to input 
     the number of columns and rows so that he or she can create a table with numbers going downwards and 
     sidewards for math.
     </p>
     </>
     );
     }
    