import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function DisplayBranches() {
  const [managers, setManagers] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/branches'
    );

    setManagers(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Branch Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-branchM"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-branchM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Branch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to = "/display-branchM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Branches</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to = "/assign-branchM"><i class="fa fa-desktop" aria-hidden="true"></i> Assign Branch</Link>
              </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
          <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="App">
      <h1>All Branches</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Branches
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students"style={{width:"70%",marginLeft:"50px"}}>
        {managers &&
          managers.map((manager, index) => {
            return (
              <div className="student" key={index}>
                <h3 className="badge bg-success">Branch {index + 1}</h3>

                <div className="details">
                  <div>
                    <div style={{float:"right"}}>
                      <img src ={"images/" + manager.photo} style={{width:"200px" , height:"200px"}}
                      className = "border border-danger rounded-circle"
                      />
                    </div>
                    <h2 ><center><b style={{color:"red"}}> </b>{manager.name}</center></h2>
                    <p >👫<b style={{color:"blue"}}>City: </b>{manager.city}</p>
                    <p >🏃<b style={{color:"green"}}>ID  : </b>{manager.branchID} </p>
                    <p >👫<b style={{color:"blue"}}>Address: </b>{manager.address}</p>
                    <p >❤️<b style={{color:"orange"}}>Contact: </b>{manager.contactNo}</p>
                    <p >👨<b style={{color:"red"}}>Email   : </b>{manager.email}</p>
                  </div>
                
                  <a href="/edit-branchM"><button className="btn btn-secondary">Edit</button></a>
                  
    
                </div>
              </div>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}