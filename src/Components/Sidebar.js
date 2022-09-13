import React, { useState,useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import {IoLogoCodepen} from 'react-icons/io';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {MdContentPasteOff} from 'react-icons/md';
import {BiCategoryAlt} from 'react-icons/bi';
import {HiInformationCircle} from 'react-icons/hi';
import {FaQuestionCircle} from 'react-icons/fa';
import {GrNotification} from 'react-icons/gr';
import {BiUserPlus} from 'react-icons/bi';
import '../styles.css'
import { NavLink } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


const SideBar = ({children}) => {

    const[open,setOpen] = useState(false)
    const[details,setDetails]=useState([])
    useEffect(()=>{
      axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01`)
      .then((res)=>{
          const newdata = res.data.data.data
  
          setDetails(newdata)
          console.log(details)
      })
    })
    const toggle = () =>{setOpen(!open)}
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
        path: "/wowuser",
        name: "Wow User",
        icon: <AiOutlineUser />,
      },
      {
        path: "/videoclips",
        name: "Video Clips",
        icon: <BsFillCameraVideoFill />,
      },
      {
        path: "/reportedcontent",
        name: "Reported Content",
        icon: <MdContentPasteOff />,
      },
      {
        path: "/category",
        name: "Category",
        icon: <BiCategoryAlt />,
      },
      {
        path: "/infopage",
        name: "Info Page",
        icon: <HiInformationCircle />,
      },
      {
        path: "/faq",
        name: "FAQ",
        icon: <FaQuestionCircle />,
      },
      {
        path: "/pushnotification",
        name: "Push Notifiaction",
        icon: <GrNotification />,
      },
      {
        path: "/internaluser",
        name: "Internal User",
        icon: < BiUserPlus/>,
      }
  ];
  return (
  
  
  <div className="container">
    <div className="sidebarcontainer">
  <div style={{width:open ? "300px":"50px"}} className="sidebar">
  <div className="topsection">
    
    <div style={{marginLeft:open ? "50px":"0px"}} className="bars"><IoLogoCodepen onClick={toggle}/></div>
    <h1 style={{display:open ? "block":"none"}} className="logo">WOW</h1>
    <div className="settings"><FiSettings/></div>

    </div>
    
    {menuItem.map((item,index)=>
    (
        <NavLink to={item.path} key= {index} className= "link" activeclassname="active">
            <div className="icon">{item.icon}</div>
            <div  style={{display:open ? "block":"none"}} className="linktext">{item.name}</div>
        </NavLink>

        

    ))}


</div>
<main>{children}</main>
  </div>
  <div className="toptablecontainer">
  <div className="topcontainer">
    <div className="topsubcontainer">
      <h1>hello</h1>

    </div>

  </div>
  
  <div className="tablecontainer">
  <div className="dropdowncontainer">
    <span>Show</span>
  <Form.Select size="sm" aria-label="Default select example" className="dropdown">
      <option>50</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <span>Entries</span>
  </div>
  <div> <Table striped bordered hover style={{width:"100%"}}>
    <thead style={{backgroundColor:"black",fontSize:"14px",color:"white",textAlign:"center",width:"100px",height:"20px"}}>
      <tr>
        <th>Date</th>
        <th>Day Installs</th>
        <th>Platform</th>
        <th>Day Uninstalls</th>
        <th>Platform</th>
        <th>Churn Rate</th>
        <th>Churn Platform</th>
      </tr>
    </thead>
    {/* { details && details.map((item,index)=>( */}
         <tbody style={{backgroundColor:" rgb(101, 88, 101)",fontSize:"15px",color:"white",textAlign:"center"}}>
         <tr>
           {/* <td>{item.created_At}</td> */}
           <td>1</td>
           <td>2 </td>
           <td>3</td>
           <td>4</td>
           <td>5</td>
           <td>6</td>
           <td>7</td>
         </tr>
        
        
       </tbody>

    {/* ))} */}
   
  </Table></div>
  </div>

  </div>
  </div>
  )
};

export default SideBar;
