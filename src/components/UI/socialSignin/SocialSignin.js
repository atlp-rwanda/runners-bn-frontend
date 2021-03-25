import React from 'react';
import fbIcon from '../../../../assets/images/fb.png';
import googleIcon from '../../../../assets/Gmail-logo.png';
import Button from '../button/Button';

const socialSignin = () => (
  <div>
    <Button btnType="GoogleSignup">
      <img className="h-5 w-5 mr-3" src={googleIcon} alt="google" />
      <p>Continue with Google</p>
    </Button>

    <Button btnType="fbSignup">
      <img className="h-5 w-5 mr-3" src={fbIcon} alt="facebook" />
      <p>Continue with Facebook</p>
    </Button>
  </div>
);
export default socialSignin;
