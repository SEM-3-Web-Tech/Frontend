import React from "react";
import "../styles/Login.css";
//import axios from "axios";

class Login extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            register:props.register,
            username:"",
            email:"",
            pass:"",
            cpass:"",
            error:0,
            msg:""
        }
        console.log(this.state.register)
        this.handleRegesSubmit=this.handleRegesSubmit.bind(this)
        this.handleLogSubmit=this.handleLogSubmit.bind(this)
    }
    handleLogSubmit(e)
    {
      const {email,pass}=this.state
      console.log(email,pass)

      fetch("http://127.0.0.1:5000/db/login",{
        method:'POST',
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
          email:this.state.email,
          password:this.state.pass
        })
      }).then(res=>res.json()).then(data=>{console.log(data)
        
        if(data.error)
        {
          this.setState({error:1,msg:data.error})
        }
        else if(data.data)
        {
          window.localStorage.setItem("token",data.data)
          window.location.href="/"
        }
        else{
          this.setState({error:1,msg:"Something Went wrong!"})
        }
      })
    }

    handleRegesSubmit(e)
    {
      e.preventDefault()
      console.table(this.state)
      if(this.state.pass!=this.state.cpass)
      {
        this.state.error=1;
        this.state.msg="Passwords doesnt match"
      }
      else{
      fetch("http://127.0.0.1:5000/db/register",{
        method:'POST',
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
          username:this.state.username,
          email:this.state.email,
          password:this.state.pass
        })
      }).then(res=>res.json()).then(data=>{
        if(data.error=="exists")
        {
          this.setState({error:1,msg:"User With email already exists"})
        }
        else if(data.error){
          this.setState({error:1,msg:"Something Went wrong"})
        }
        else{
          window.location.href='/login'
        }
      })
    }
    }
    render() {
      const error=this.state.error
        if(!this.state.register){
    return (
      <div className="text-black">
        <div className="c1">
          <div className="form-box">
            {error? 
              <div className="p-2  text-center text-orange bg-yellowgreen rounded-md mt-3 font-bold text-lg" id="error" >
                <p>{this.state.msg}</p>
            </div>: "" }
            <div className="button-box">
              <div id="btn"></div>
              <button type="button" className="toggle-btn" >
                Predictor
              </button>
             
            </div>
            <form id="login"  className="input-group" action="__blank" method="POST" onSubmit={this.handleLogSubmit}>
              <input
                type="email"
                className="input-field"
                placeholder="Email ID"
                id="email_l"
                onChange={e=>this.setState({email:e.target.value})}
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                id="pass_l"
                onChange={e=>this.setState({pass:e.target.value})}
                required
              />              
              <button type="submit" className="submit-btn my-6" id="login_submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
        }
    else{
    return(
        <div className="text-black">
        <div className="c1">
          <div className="form-box">
          {error? 
              <div className="p-2  text-center text-orange bg-yellowgreen rounded-md mt-3 font-bold text-lg" id="error" >
                <p>{this.state.msg}</p>
            </div>: "" }
            <div className="button-box">
              <div id="btn"></div>
              <button type="button" className="toggle-btn">
                Predictor
              </button>
            </div>
                <form id="signup" className="input-group " onSubmit={this.handleRegesSubmit}>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                id="user_s"
                onChange={e=>this.setState({username:e.target.value})}
                required
              />
              <input
                type="text"
                className="input-field"
                placeholder="Email ID"
                id="email_s"
                onChange={e=>this.setState({email:e.target.value})}
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Create Password"
                id="epass_s"
                onChange={e=>this.setState({pass:e.target.value})}
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                id="rpass_s"
                onChange={e=>{
                  this.setState({cpass:e.target.value})}}
                required
              />
    
              <button type="submit" className="submit-btn left-48 mt-16" >
                Predictor
              </button>
            </form>
            </div>
            </div>
          </div>
    )
    }
  }
}

export default Login;

<style scoped>

</style>