import React from 'react'

function Contact() {
    return (<>
        <h2 style={{textAlign:"center"}}>Contact</h2>
        <div id='wrapper'>
           <form  action="">
          <label >
            First Name 
            <input type="text" placeholder='First Name' required/>
          </label>
          <label >
            Last Name 
            <input type="text" placeholder='Last Name ' required/>
          </label>
          <label >
            Age
            <input type="text" placeholder='age'required/>
          </label>
          <label >
           Email
            <input type="text" placeholder='Email' required/>
          </label>
          <label >
           Password
            <input type="text" placeholder='Password' required/>
          </label>
           </form>
    
           <div>
           <button>Submit</button>
           </div>
          
        </div>
        </>)
}

export default Contact
