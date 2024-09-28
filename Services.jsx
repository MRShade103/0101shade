import appy from './../public/appy.png';
import Weby from './../public/Weby.png';
import Softy from './../public/Softy.png';
import Dia from './../public/Dia.png';
// File: Services.jsx
// Student: David Wald
// StudentID: 301273421
// Date: 9/27/2024


export default function Services() {
     return (
     <>
     <p>Services</p>
     
     <p className="rightText"><img src={appy} alt="Pro"/>
     
     <p>1. App Development</p>
     
     </p>
     
     <p className="rightText"><img src={Weby} alt="Pro"/>

     <p>2. Web Design</p>

     </p>

     
     
     <p className="rightText"><img src={Softy} alt="Pro"/>
     
     <p>3. Software Scructure</p>
     
     </p>

     
     
     <p className="rightText"><img src={Dia} alt="Pro"/>
     
     <p>4. Programming Diagrams</p>
     
     </p>

     </>
     );
     }