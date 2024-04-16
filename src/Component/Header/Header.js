import './Header.css'
const Header = () => {
  return <>
    <div className="header">
      <div className="header-main">
        <div className="header-logo">
          <div className="logo"></div>
        </div>
        <div className="header-content">
          <div className="header-list">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact Us</span>
          </div>
          <div className="header-search">
            <div><input className='search' type="text " placeholder="Search"  ></input></div>
          
         
          <div className='search-icon'>
               <i class="fa-solid fa-magnifying-glass search-icon" ></i> 
          </div>
           
          </div>
           
          <div className="header-login">
          <i class = "fa fa-user"></i>
            <span className='login'>Login</span>
          </div>
          

          <div className="header-cart">
          <i class = "fa fa-shopping-cart"></i>
            <span className='login'>Cart</span>
          </div>
        </div>
      </div>
    </div>
   
  </>
}
export default Header

 {/* <div className='  container-fluid second m-3'>
      <div className='  second-header '>
      
          <div className='second-text'>
             <span>Designs</span>
             <span>Designers</span>
             <span>Products</span>
          
            </div> 
            <div className='line '></div>
      </div>
    </div> */}