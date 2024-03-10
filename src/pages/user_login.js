import React from 'react';
import { HeadDescription } from '../components/Styles';
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
} from '../components/Styles';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        email: email,
        password: password,
      };

      const { data } = await axios.post('http://localhost:4000/api/auth', obj);

      alert(data.success);
      window.location = '/home';
    } catch (error) {
      console.log(error, 'error');
      alert(error.response.data);
    }
  };

  const buttonStyle = {
    backgroundColor: '#ffa500', // Change color to orange, you can use any color code
    color: '#fff', // Text color
  };

  return (
    <div>
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: '130px' }}>User Login</HeadTitle>
          <form style={{ marginTop: '50px', marginLeft: '550px' }} onSubmit={handleLogin}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                placeholder='Enter your username'
                id='name'
                name='name'
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter your password'
                id='pw'
                name='pw'
              />
            </FormGroup>

            <Button
              style={{ ...buttonStyle, marginLeft: '110px', marginTop: '50px' }}
              type='submit'
            >
              Login
            </Button>
            <HeadDescription style={{ marginLeft: '30px' }}>
              New User? <a href='/signup'>Signup!</a>{' '}
            </HeadDescription>
          </form>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Login;
