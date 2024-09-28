import Flick from './../public/Flick.png';
import React from 'react';
import './App.css';
// File: about.jsx
// Student: David Wald
// StudentID: 301273421
// Date: 9/27/2024

export default function About() {
       
     return (
      
       <div className='App'>
            <p>About David</p>
              
            <p className="rightText"><img src={Flick} alt="Pro" width="100px" height="350px" />
           
           David Wald is an upcoming computer programmer who has developed projects in
           the past few years in order to continue to increase his skills in computer
           software. He first discovered his passion for programming when he realized that
           his love of knowledge and creativity would fit best with software. Recongnizing
           the increase in technology, David knew that careers related to programming are the most sufficient
           as time goes. David is willing to come up with new ideas to advance society in
           a positive way.
           </p>
           <table>
<tr>
<th>Information</th>

</tr>
<tr>
<td>Background</td>
<td>Nationality: Canadian</td>
<td>Age: 23</td>
<td>Gender: Male</td>
</tr>
<tr>
<td>Upcoming Skills</td>
<td>Software Engineering</td>
<td>Concept Creator</td>
<td>Application Building</td>
</tr>
<tr>
<td>Hobbies</td>
<td>Video Games</td>
<td>Watching Videos</td>
<td>Research</td>
</tr>
</table>
<a href="/pdfname.pdf">Resume</a>
    
                   </div>
       
     );
       }
