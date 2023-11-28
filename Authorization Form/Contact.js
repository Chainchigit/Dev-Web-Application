import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(true);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth) 
  }
    const login = (
      <form action = "#">
        <input type="password" placeholder="Password"/>
        <input type="submit"/>
      </form>
      );
    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

  return (
      <div id="authorization">
        <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
        <form onSubmit={handleSubmit }>
         <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         </label>
        <button type="submit">Submit</button>
        </form>
        <h1>{authorized ? 'contactInfo' : 'login'}</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
        
      </div>
  );
}

export default Contact;
