import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="container"  style={{display:"flex", width:"100%", height:"100px",
        backgroundColor:"teal", color:"black", justifyContent:"space-between", alignItems:"center", fontSize:"24px"}}>
            <div className="left" style={{ width:"40%", fontSize:"24px", alignItems:"center"}}>
                Title
            </div>
            <div className="right" style={{display:"flex", width:"60%", fontSize:"24px",  justifyContent:"space-around"}}>
                 <div>Home</div>
                 <div>About</div>
                 <div>Blog</div>
                 <div>Contact</div>
                 <div>
                    <button>Button</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar