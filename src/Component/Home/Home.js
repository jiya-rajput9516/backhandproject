import './Home.css';
import "./Home1"
import axios from "axios";
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
// import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
const Home = () => {

    const [homedesign, sethomdesigns] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/design/viewAllRoomType")
            .then(response => {
                console.log(response.data.data)
                sethomdesigns(response.data.data)
            }).catch(err => {
                console.log("errorr")
                console.log(err);
            })
    }, []);
    const [homeproduct, sethomeproduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/product/getCategory")
            .then(response => {
                // console.log("product:",response.data.products)
                sethomeproduct(response.data.products)
            }).catch(err => {
                console.log("errorr")
                console.log(err);
            })
    }, []);
    const [homedesigner, sethomedesigner] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/admin/professionalList")
            .then(response => {
                console.log("product:", response.data.data)
                sethomedesigner(response.data.data)
            }).catch(err => {
                console.log("errorr")
                console.log(err);
            })
    }, []);

    return <>
        <Header />
        <div className="home mt-1 border border-dark">
            <div className="home-container">
                <div className="home-banner">
                    <div className="home-video">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active slider" aria-current="true" aria-label="Slide 1" ></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='slider' aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='slider' aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./image.png" className="d-block w-100" alt="..." ></img>
                                    <div className="carousel-caption ">
                                        <h1>Making Your Personal Gateway To Dreamland </h1>
                                        <h1 className='color'>, A Reality</h1>

                                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./Slider-5-Living.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Entertain In Limited Edition Encusivity  </h1>
                                        <h1 className='color'>A Reality</h1>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./Slider-1-Bedroom.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Get Inspinrd With Top Interior </h1>
                                        <h1 className='color'> Style</h1>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>


          

      

        <div className='design-section mt-5'>

            <div className="home-homeproduct text-center">
                {<span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">Designs</span>}
                <div className="containerr mt-5 mb-3 d-flex align-items-center">
                    <div className="containerr-inline d-flex align-items-center mb-3">
                        {homedesign.map((design, index) => <div key={index}>
                            {<div className="product-box d-flex flex-column align-items-center justify-content-start">
                                <div className="product-img m-1"><img src={design.image_url} style={{ height: "100%", width: '100%' }} />

                                    <div className="overlay">
                                        <div className='fav'>
                                            <h4 className="text-white">{design.roomType}</h4>
                                            <i className="fa-solid fa-heart fa-xl" ></i>
                                        </div>

                                        <button className='viewmore '>View more</button>
                                    </div>

                                </div>


                            </div>}
                        </div>)}
                    </div>

                </div>

            </div>

        </div>
        <div className='design-section mt-5'>

            <div className="home-homeproduct text-center">
                {<span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">The Product Market</span>}

                <div className="containerr mt-5 mb-3 d-flex align-items-center">
                    <div className="containerr-inline d-flex align-items-center mb-3">
                        {homeproduct.map((product, index) => <div key={index}>
                            {<div className="product-box d-flex flex-column align-items-center justify-content-start">
                                <div className="product-img m-1"><img src={product.category_image} style={{ height: "100%", width: '100%' }} />

                                    <div className="overlay">
                                        <div className='fav'>
                                            <h4 className="text-white">{product.category_name}</h4>
                                            <i className="fa-solid fa-heart fa-xl" ></i>
                                        </div>

                                        <button className='viewmore '>View more</button>
                                    </div>

                                </div>


                            </div>}
                        </div>)}
                    </div>

                </div>

            </div>

        </div>
        <div className=" container-fulid m-2  ">
            <div className="row mb-5 home-homeproduct text-center bg-info"style={{width:"1500px",height:"500px"}}>
                <div className="col-md-8 mx-auto text-center">
                    {/* <h6 className="text-primary">TEAM</h6> */}
                    <h1 className='heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4'>Our Designers</h1>
                    <p >Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet eaque fuga
                        in cumque optio consectetur harum vitae debitis sapiente praesentium aperiam aut</p>
                </div>
                <div className="row text-center g-4 containerr mt-5 mb-3 d-flex align-items-center bg-dark"style={{width:"1500px"}}>
                {/* <marquee  direction="left"> */}
                    <div className="col-lg-3 col-sm-6 gap-5 d-flex ms-4 ">

                        {homedesigner.map((designer, index) => <div key={index}>
                            <div className="team-member designer-div card-effect mb-4 designer-box">
                                <img className=' designer-img mt-3' src={designer.profileImg_URL} />
                                <h5 className="mb-0 mt-4">{designer.professional_name}</h5>
                                <p>Location:{designer.city}</p>
                                {/* <div className="social-icons">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                        </div> */}
                            </div>
                        </div>)}
                    </div>
                  {/* </marquee> */}
                </div>
            </div>
        </div>
        <About/>
        <Contact/>
        <Footer/>
        </div>
        </div>
       
        
    </>
}
export default Home;





