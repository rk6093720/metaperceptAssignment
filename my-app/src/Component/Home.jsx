import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from "axios";
const Home = () => {
    const [data,setData]= useState([]);


     const getData=()=>{
        return axios.get("http://localhost:8080/my-app")
        .then((r)=>{
           console.log(r.data);
           setData(r.data)
        })
        .catch((e)=>{
            console.log(e)
        })
     }

    useEffect(()=>{
       getData()
    },[])
  return (
    <div>
        <Navbar/>
        {/* secondpart */}
        <div style={{ border:"1px solid blue", width:"100%", height:"300px",marginTop:"5px", backgroundColor:"blueviolet"}}>
            <div style={{width:"50%", margin:"auto"}}>
                <div style={{ textAlign:"center", fontSize:"25px", color:"white"}}>
                    <p>Title</p>
                </div>
                 <div style={{  textAlign:"center",marginLeft:"30px", fontSize:"20px", color:"white"}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing edit.Masecenas risus mi, egestas et imperdiet quis, tristique non mi. </p>
                     
                </div>
                <div style={{width:"20%", height:"50px", margin:"auto", fontSize:"25px", color:"black", backgroundColor:"white",alignItems:"center"}}>
                    Read More
                </div>

            </div>
        </div>
        {/* thirdpart */}
          <div style={{width:"100%",height:"1300px", margin:"5px", backgroundColor:"grey"}}>
               <div style={{width:"80%",height:"100vh",margin:"auto"}}>
                       <div style={{width:"50%", margin:"auto"}}>
                       <div style={{ textAlign:"center", fontSize:"25px", color:"white"}}>
                                <p>Title</p>
                        </div>
                        <div style={{  marginLeft:"5px", fontSize:"24px", color:"white"}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing edit.Masecenas risus mi, egestas et imperdiet quis, tristique non mi. </p>
                     
                          </div>
                       </div>


                       {/* data   */}
                       <div style={{width:"100%",height:"100%", display:"grid", gridTemplateColumns:"repeat(3,400px)", gridGap:"20px",marginLeft:"40px"}}>
                        {
                            data.map((item)=>{
                                return <div style={{border:"1px solid black"}} >
                                    <div style={{width:"100%"}}>
                                        <img src={item.ImageUrl} alt="" />
                                    </div>
                                    <div  style={{  fontSize:"15px", color:"white"}}>{item.ID}</div>
                                    
                                    <div style={{  fontSize:"15px", color:"white"}}>
                                        {item.Name}
                                    </div>
                                    <div style={{  fontSize:"15px", color:"white"}}>
                                        {item.ShortDesc}
                                    </div>
                                    <div style={{width:"100px", height:"50px"}}>
                                      <button >
                                        view
                                      </button>
                                      </div>
                                    </div>
                            })
                        }

                       </div>
               </div>
          </div>
    </div>
  )
}

export default Home