// File: Layout.jsx
// Student: David Wald
// StudentID: 301273421
// Date: 9/27/2024

import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
<>
 <h1>Who Is David?</h1>
 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/Services">Services</Link>| <Link to="/Projects">Projects</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 

</>
 );
}
