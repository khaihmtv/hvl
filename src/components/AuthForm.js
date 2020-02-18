import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label ,Alert,
  Card,
  CardBody,
  CardHeader,} from 'reactstrap';

class AuthForm extends React.Component {
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();
    console.log(authState)
    this.props.onChangeAuthState(authState);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props)
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} value={usernameInputProps} onChange={(e)=>{console.log(e.target)}} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
        )}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            {this.isSignup ? (
              <a onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
              <a onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a>
            )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

const AuthForma=(props)=>{
  const [isLogin,setIsLogin]=React.useState(props.isLogin)
  const [email,setEmail]=React.useState('')
  const [pass,setPass]=React.useState('')
  const [repass,setRepass]=React.useState('')
  
  const handleSubmit = event => {
    event.preventDefault();
    if(isLogin){
      let url = `http://${process.env.PUBLIC_URL}/auth/login`;
      let options = {
          method: 'POST',
          body: JSON.stringify({email: email, pass: pass}),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          crendentials: 'include'
      }

      window.fetch(url, options)
      .then(r=>r.json())
      .then(data => {
          alert(data)
      })
      .catch(console.error)
      }
    if(!isLogin){
      const url = `http://${process.env.PUBLIC_URL}/auth/register`;
      const options = {
          method: 'POST',
          body: JSON.stringify({email: email, pass: pass, repass:repass}),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          crendentials: 'include'
      }

      window.fetch(url, options)
      .then(r=>r.json())
      .then(data => {
          alert(data)
      })
      .catch(console.error)
    }
  };
  return (
    
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='Email'>Email</Label>
        <Input type="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for='Password'>Mật khẩu</Label>
        <Input value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      </FormGroup>
      {!isLogin && (
        <FormGroup>
          <Label for='repass'>Nhập lại mật khẩu</Label>
          <Input value={repass} onChange={(e)=>{setRepass(e.target.value)}}/>
        </FormGroup>
      )}
      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}>
        {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
      </Button>

      <div className="text-center pt-1">
        <h6>or</h6>
        <h6>
          {!isLogin ? (
            <a onClick={()=>{setIsLogin(!isLogin)}}>
              Đăng Nhập
            </a>
          ) : (
            <a onClick={()=>{setIsLogin(!isLogin)}}>
              Đăng Ký
            </a>
          )}
        </h6>
      </div>

      {props.children}
    </Form>
  );
}
export default AuthForma;
