import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Sitebar = () => {
  // const [color, changeColor] = useState('bg-[#FDEBA9]')
  // const handleChange = () =>{
  //    const dashli = document.querySelector('.dashli');
  //    dashli.classList.add("bgg")

  // }
  return (
    <Wrapper>
        <div className="container">
        <ul className='dashboard-list'>
            <li className="bg-[#FDEBA9]"><Link to="/dashboard"><strong>Dashboard</strong></Link></li>
            <li className="bg-[#FDEBA9]"><Link to="/products"><strong>Products</strong></Link></li>
            <li className="bg-[#FDEBA9]"><Link to="/category"><strong>Category</strong></Link></li>
            <li className="bg-[#FDEBA9]"><Link to="/enquiry"><strong>Enquiry Details</strong></Link></li>
        </ul>
        </div>
       
    </Wrapper>
  )
}

const Wrapper = styled.section`
 .bgg{
   background: #000;
 }
.dashboard-list{
      list-style: none;
   }
   .dashboard-list li{
      margin-bottom: 2px;
      padding: 5px 30px;
   }
   a{
    text-decoration: none ;
   }

`;

export default Sitebar