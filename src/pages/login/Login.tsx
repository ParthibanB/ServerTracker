import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userActions } from '../../actions/UserActions';
import { alertService } from '../../actions/AlterActions';
import MuiAlert from "@material-ui/lab/Alert";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ username: '' });
  const [credential, setPassword] = useState({ password: '' });
  var isLoggedIn = localStorage.getItem("userName");
 // var isLoggedIn =  false;
  // on login submit
  const submitLogin = async () => {

    if (email.username && credential.password) {
      //this.setState({ submitted: true });           
      const newRecord = { asdfads: email.username, password: credential.password };
      console.log(newRecord);
      var login_response = await userActions.login(email.username, credential.password);
      if(login_response.statusCode == 200){
       // alert('user logged in successfully');
        //NotificationManager.success("user logged in successfully");
        toast.success("user logged in successfully", {
          position: "top-center"
        });
        navigate('/dashboard/default', { state: { reg: "Dashboard" } });
      }
      else{
        alert('Server Error');
      }
    } else {
      toast.error("Please Enter Username && Password!", {
        position: "top-center"
      });
    }

  };

  const routeChange = () => {
    navigate('/registration', { state: { reg: "Registraion" } });
  };

  if(!isLoggedIn) {
  return (
    
    <Form id="login" className="login-form" action="" >
      <div className="Welcome">
        <h1>
          <span className="font-weight-bold">Login</span>
        </h1>
        <h2>Welcome</h2>
      </div>
    
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" value={email.username} placeholder="enter user Name" className="textfield"
          onChange={e => setEmail({ username: e.target.value })} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" value={credential.password} placeholder="password" className="textfield"
          onChange={e => setPassword({ password: e.target.value })} />
      </FormGroup>
      <Button
        variant="contained"
        onClick={submitLogin}
        className="btn btn-lg btn-dark btn-block button ">Login</Button>
      <Button onClick={routeChange} className="btn btn-lg btn-dark btn-block ">Register</Button>
      <ToastContainer/>
    </Form>
  );
}else {
  return (
    
            <div> Logged User {isLoggedIn} </div>
  );
}
}
