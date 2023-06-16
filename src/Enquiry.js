import React from 'react'
import styled from 'styled-components'

const Enquiry = () => {
  return (
    <Wrapper className="tabl py-4">
        <table className="table scrolldown">
            <thead style={{background: "linear-gradient(90deg, #FBDA61 0%, #FDECB0 100%)"}}>
              <tr>
                <th scope="col"><strong>S.No.</strong></th>
                <th scope="col"><strong>Name</strong></th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope='col'>Address</th>
                <th scope='col'>Query</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aman Sharma</td>
                <td>testing@gmail.com</td>
                <td>9259297316</td>
                <td>Ganga Nagar</td>
                <td>This is only for testing purpose</td>
              </tr>
            </tbody>
          </table>
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
          
     th{
      width : 186px;
     }
          
      tbody td {
         width : 186px;
         border-right: 1px solid black;
      }
      td {
         text-align:center;
      }
`
export default Enquiry