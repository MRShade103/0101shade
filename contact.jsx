import { useState } from "react";
import './App.css';
// File: contact.jsx
// Student: David Wald
// StudentID: 301273421
// Date: 9/27/2024
export default function Contact() {

  
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
   const { name, value } = event.target;
   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
   event.preventDefault();
   alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
   );
};

     return (
      <div className="App">
     <form onSubmit={handleSubmit}>
      <p>Contact</p>
      <p>
      <table>
      <tr>
      <td>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      </td>
      </tr>
      <tr>
      <td>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      </td>
      </tr>
      <tr>
      <td>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
      </td>
      </tr>
      <tr>
      <td>
      <button type="submit">Submit</button>
      </td>
      </tr>
      </table>

      <table>
        <tr>
            <th>Contact Info</th>
            
        </tr>
        <tr>
            <td>First Name: David</td>
           
        </tr>
        <tr>
            <td>Last Name: Wald</td>
           
        </tr>
        <tr>
            <td>Email: davidwald0101@gmail.com</td>
           
        </tr>
        <tr>
            <td>Phone: (416) 434-9130</td>
            
        </tr>
        <tr>
            <td>WhatsApp: +1 (416) 434-9130 </td>
            
        </tr>
    </table>
      </p>
     </form>
     </div>
     );
     }
    