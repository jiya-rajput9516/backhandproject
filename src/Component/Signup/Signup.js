import "./Signup.css";
const Signup=()=>{
    return<>
      <div class="container">
      <div class="image-container">
            <img src = "1706133346-180e0b130e6f38b1b36671f6c3853fe0-3.jpeg" alt = "signUp-img"/>
        </div>
        <div class="signup-form">
          
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" required></input>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required></input>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div class="form-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <p class="login-text">Already have an account? <a href="#">Login</a></p>
        </div>
       
    </div>
    </>

}    
export default Signup;   

    
    
    

