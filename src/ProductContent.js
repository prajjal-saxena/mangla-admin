import React from 'react'
import styled from 'styled-components'
import imgg from './images/item.png'
import {GoKebabVertical} from 'react-icons/go';

const ProductContent = () => {
  return (
    <Wrapper className='container'>
        <div className='text-right'>
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Item</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content bg-[#f8c301]">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-center block w-100 underline" id="exampleModalLabel"><strong>ADD NEW PRODUCTS</strong></h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
                  <div className="row">
                     <div className="col-12">
                        <div class="mb-3">
                          <select name="cars" className='border-solid border-1 border-[#dee2e6] w-100 py-[6px] px-[9px] rounded-md'>
                          <option value="volvo">Select One</option>
                            <option value="volvo">Domestic</option>
                            <option value="saab">VIOM Products</option>
                          </select>
                        </div>
                     </div>
                     
                  </div>
                  
                 <div className="row">
                 <div className="col-6">
                        <div class="mb-3">
                          <input type="text" class="form-control" placeholder='Product Name'/>
                        </div>
                     </div>
                   <div className="col-6">
                      <div class="mb-3 text-left">
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                      </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-12">
                      <div class="mb-3 text-left">
                          <div class="mb-3 text-left justify-between">
                            <div className='row'>
                               <div className='flex-col col-3'>
                                  <div>
                                   <input className='ml-4' type="checkbox" name="" id="" />12gms
                                  </div>
                                  <div>
                                   <input type="text" name="" style={{width : "100%"}} placeholder='Price' id="" />
                                  </div>
                               </div>
                               <div className='flex-col col-3'>
                                  <div>
                                   <input className='ml-4' type="checkbox" name="" id="" />25gms
                                  </div>
                                  <div>
                                   <input type="text" style={{width : "100%"}} name="" placeholder='Price' id="" />
                                  </div>
                               </div>
                               <div className='flex-col col-3'>
                                  <div>
                                   <input className='ml-4' type="checkbox" name="" id="" />60gms
                                  </div>
                                  <div>
                                   <input type="text" style={{width : "100%"}} name="" placeholder='Price' id="" />
                                  </div>
                               </div>
                               <div className='flex-col col-3'>
                                  <div>
                                   <input className='ml-4' type="checkbox" name="" id="" />160gms
                                  </div>
                                  <div>
                                   <input style={{width : "100%"}} type="text" name="" placeholder='Price' id="" />
                                  </div>
                               </div>
                            </div>
                          </div>                      
                      </div>
                   </div>
                 </div>
                 
                 <div className="row">
                   <div className="col-12">
                    <textarea placeholder='Description' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                  
                   </div>
                 </div>
                 
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>

                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabl py-4">
        <table className="table scrolldown">
            <thead style={{background: "linear-gradient(90deg, #FBDA61 0%, #FDECB0 100%)"}}>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Product</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'>Image</th>
                <th scope='col'></th>

              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr>
                <td>1</td>
                <td>Gulab</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia.</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
                <td><img src={imgg} width="40%" alt="" /></td>
                <td>
                  <div class="dropdown">
                    <a class="" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <GoKebabVertical/>
                    </a>

                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Edit</a></li>
                      <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Gulab</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia.</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
                <td><img src={imgg} width="40%" alt="" /></td>
                <td>
                  <div class="dropdown">
                    <a class="" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <GoKebabVertical/>
                    </a>

                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Edit</a></li>
                      <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Gulab</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia.</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
                <td><img src={imgg} width="40%" alt="" /></td>
                <td>
                  <div class="dropdown">
                    <a class="" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <GoKebabVertical/>
                    </a>

                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Edit</a></li>
                      <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Gulab</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia.</td>
                <td>Agarbatti</td>
                <td>15</td>
                <td>Rs 100</td>
                <td><img src={imgg} width="40%" alt="" /></td>
                <td>
                  <div class="dropdown">
                    <a class="" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <GoKebabVertical/>
                    </a>

                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Edit</a></li>
                      <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </td>
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
      .btn{
        background: #000;
      }
`
export default ProductContent