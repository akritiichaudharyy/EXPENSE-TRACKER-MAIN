import React,{useState} from 'react';
import {Form,Input,message} from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../Components/Spinner';
const Login = () => {
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
    //from submit
    const submitHandler = async(values) => {
      try {
        setLoading(true)
       const {data} = await axios.post('/users/login',values)
       setLoading(false)
        message.success('Login Success')
        localStorage.setItem('user', JSON.stringify({...data,password:' '}))
        navigate('/');
      } catch (error) {
        setLoading(false)
        message.error('something went wrong');

      }
      };
  return (
    <>
       <div className="register-page ">
        {loading && <Spinner />}
             <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>
              <Form.Item label="Email" name="email">
                <Input type='email'/>
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type='password'/>
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">Not a User? Click Here to Register</Link>
                <button className="btn btn-primary">Login</button>
              </div>
             </Form>
            </div>
    </>
  );
};

export default Login;