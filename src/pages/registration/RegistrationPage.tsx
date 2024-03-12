
import {  useNavigate } from 'react-router-dom';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';
import { userActions } from '../../actions/UserActions';
import React, { useState } from 'react';



export default function RegistrationPage() {
  localStorage.getItem("userId")
const [user, setUser] = useState({ username: '' });
const [email, setEmail] = useState({ email: '' });
const [credential, setPassword] = useState({ password: '' });
const navigate = useNavigate();
const registerUser = async () => {

  if (user.username  && email.email && credential.password) {
    //this.setState({ submitted: true });           
    const newRecord = { asdfads: email.email, password: credential.password };
    console.log(newRecord);
    var login_response = await userActions.register(email.email, credential.password);
    if(login_response.statusCode == 200){
      alert('User Registered successfully');
      navigate('/dashboard/default', { state: { reg: "Dashboard" } });
    }
    else{
      alert('Server Error');
    }
  } else {
    alert('Please fill all the details');
  }

};


  return (
  <div id="main-registration-container">

      <div id="register">     
      <Form id="login" className="login-form" >
      <div className="Welcome">
        <h1>
          <span className="font-weight-bold">Registration</span>
        </h1>
        <h2>Welcome</h2>
      </div>
      <FormGroup>
        <Label>Name</Label>
        <Input type="email" name="userName" value={user.username} placeholder="enter user Name" className="textfield"
          onChange={e => setUser({ username: e.target.value })} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" value={email.email} placeholder="enter user Name" className="textfield"
          onChange={e => setEmail({ email: e.target.value })} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" value={credential.password} placeholder="password" className="textfield"
          onChange={e => setPassword({ password: e.target.value })} />
      </FormGroup>
      <Button
        variant="contained"
        onClick={registerUser}
        className="btn btn-lg btn-dark btn-block button ">Register</Button>
     
    </Form>
      </div>
  </div>
  );
};

