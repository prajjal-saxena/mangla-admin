import React from 'react'
import styled from 'styled-components'

const Dashboard = () => {
  return (
    <Wrapper className="container">
        <div className="row justify-between">
            <div className="col-3">
                <div className="dash1 p-4 rounded-xl">
                    <p><strong>Total Sales</strong></p>
                    <p>1000</p>
                </div>
            </div>
            <div className="col-3">
                <div className="dash1 p-4 rounded-xl">
                    <p><strong>Total Sales</strong></p>
                    <p>1000</p>
                </div>
            </div>
            <div className="col-3">
                <div className="dash1 p-4 rounded-xl">
                    <p><strong>Total Sales</strong></p>
                    <p>1000</p>
                </div>
            </div>
        </div>

        <div className="tabl py-4">
        <table class="table scrolldown">
            <thead style={{background: "linear-gradient(90deg, #FBDA61 0%, #FDECB0 100%)"}}>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Products</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr>
                <td>1</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Gulab</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
              </tr>
            </tbody>
          </table>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   .dash1{
      background: linear-gradient(90deg, #FBDA61 0%, #FDECB0 100%);
   }
   table.scrolldown {
         width: 100%;
         border-spacing: 0;
         border: 1px solid black;
      }
          
      table.scrolldown tbody, table.scrolldown thead {
         display: block;
      }   
           
      table.scrolldown tbody {
         height: 250px; 
         overflow-y: auto;
         overflow-x: hidden; 
      }
          
     
          
      tbody td, thead th {
         width : 186px;
         border-right: 1px solid black;
      }
      td {
         text-align:center;
      }
`;
export default Dashboard