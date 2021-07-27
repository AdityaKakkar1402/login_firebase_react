import React from 'react';

const Hero =({handleLogout})=>{

   return(
       <>
           <nav>
               
               <button className="logoutnav" onClick={handleLogout}>Logout</button>

           </nav>
           
       </>
       
   )
}

export default Hero;