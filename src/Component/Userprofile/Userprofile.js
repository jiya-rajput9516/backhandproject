import './Userprofile.css'
const UserProfile=()=>{
    return<>
    {/* <section className='Uprofile-section'>
        <div className='Uprofile-div1'>
              <div className='Uprofile-div2 '>
                <div className='Uprofile-div3'></div>
                <div className='Uprofile-div4'>
                <div className='Uprofile-div5  '>
                  <span className='icon-1'></span>
                    <h3>My profile</h3>
                    <hr></hr>
                    <h3>Order List</h3>
                    <hr></hr>
                    <h3>Favourite List</h3>
                    <hr></hr>
                    <h3>Logout</h3>
                    <hr></hr>
                </div>
                <div className='Uprofile-div6'>
                    <div className='div6-child1'>
                       <div className='circle'>
                     

                       </div>
                       <div>
                        <h3>Hani Rajput</h3>
                       </div>
                    </div>
                    <div className='div6-child2'></div>
                </div>
              </div>
              </div>
        </div>
    </section> */}

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3 left-div mt-5'>
          <div className='container left-div-child1 m-4 d-flex '>
          <i class="fa-regular fa-user fa-xl mt-3"></i>
          <h4>My Pofile</h4>
          </div>
          <hr></hr>
          <div className='container left-div-child1 m-4 d-flex '>
          <i class="fa-regular fa-rectangle-list fa-xl mt-3" ></i>
          <h4>Orders</h4>
          </div>
          <hr></hr>
          <div className='container left-div-child1 m-4 d-flex '>
          <i class="fa-regular fa-heart fa-xl mt-3"></i>
          <h4>Favourite List</h4>
          </div>
          <hr></hr>
          <div className='container left-div-child1 m-4 d-flex '>
          <i class="fa-solid fa-right-from-bracket fa-xl mt-3" style={{color:'#302f2f'}}></i>
          <h4>Logout</h4>
          </div>
          <hr></hr>
        </div>
        <div className='col-lg-9 right-div mt-5'>
          <div className='container right-div-child1 d-flex '>
          
            <div className='child1-div1'>
              <div className='circle m-1'></div>
              <h3 className='m-3'>Hani Rajput</h3>
            </div>
            <div className='child1-div2'>
              <div className='container'>
               <div className='row'>
                <div className='col-lg-12 mt-4 text-center '>
                  <h3>Update your Information</h3>
                  <div className='textline mx-auto'></div>
                </div>
                <div className='row mt-3'>
                  <div className='col-6'>
                    <div className='from-group'>
                    <label htmlFor="name">Name</label>
                        <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="name" name="name"  />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='from-group'>
                    <label htmlFor="name">Email</label>
                        <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="name" name="name"  />
                    </div>
                  </div>
                  
                </div>
                
                <div className='row mt-3'>
                  <div className='col-12 '>
                    <div className='from-group'>
                    <label htmlFor="name">Address</label>
                        <input type="text" className="form-control form-control-lg custom-input custom-input mb-3" id="name" name="name"  />
                    </div>
                  </div>
                  </div>
                  <div className='row mt-3'>
                  <div className='col-6 '>
                    <div className='from-group'>
                    <label htmlFor="name">Mobile No.</label>
                        <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="name" name="name"  />
                    </div>
                  </div>
                  <div className='col-6 '>
                    <div className='from-group'>
                    <button className='btn m-4'>Back</button>
                    <button className='btn  '>Update</button>
                    </div>
                  </div>
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}
export default UserProfile