import "./AddToCategory.css"

export default () => {
    return <>
        <div className="container-fluid">
            <div className="container box-shadow">
                {/* <img src={image} height={"600px"} width={"100%"} /> */}
                {/* <div className="form-group border d-flex justify-content-center align-item-center"> */}
                {/* style={{width:"50%",height:"60vh"}} */}

                {/* style={{border:"2px solid violet"} */}
                <div className="row ">

                    {/* ,border:"2px solid yellow" */}
                    <p class="text-center mt-5 fs-5 " style={{ fontWeight: "bold", textDecorationLine: "underline", marginBottom: "50px", height: '1rem', fontFamily: "inter" }}>CATEGORY DETAILS</p>

                    {/* border:"2px solid red" */}
                    <div class="form-group col-md-7 " style={{ marginBottom: "14rem", marginLeft: "9rem" }}>
                        <label for="exampleInputEmail1">Category Name</label>

                        {/* style={{borderRadius: "10px"} */}
                        <input type="category" class="form-control mt-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter category name" />
                        {/* <button type="submit" style={{}}>Submit</button> */}
                        <div class="for-margin mt-5"></div>


                        <button type="button" class="btn btn-outline-danger" style={{ width: "80px", height: "35px" }}>Back</button>

                        <button type="submit" class="btn btn-danger " style={{ marginLeft: "10rem" }}>Submit</button>
                    </div>

                </div>

            </div>
            {/* </div> */}
        </div>
    </>

}