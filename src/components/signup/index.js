import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'regenerator-runtime';
import Button from '../UI/button/Button';
import classes from './signup.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../redux/actions';
import SocialSignin from '../UI/socialSignin/SocialSignin';
import Spinner from '../UI/spinner/Spinner';
import SignupSkeleton from './skeleton';

const signup = (props) => {
  const { loading, error, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  let registerButton = <Button btnType="Success" id="submit">Register</Button>;

  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setSkeleton(true);
    const timer = setTimeout(() => {
      setSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    registerButton = (
      <Button btnType="Success" disabled>
        <Spinner />
        Register
      </Button>
    );
  }
  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  const [misMatch, setMisMatch] = useState('');
  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setMisMatch("Passwords don't match");
    } else {
      dispatch(
        auth(data.firstName, data.lastName, data.email, data.password, data.confirmPassword),
      );
      reset();
    }
  };

  useEffect(() => {
    if (message) {
      toast.success('Account created successfully.', {
        delay: 1000,
      });
      setTimeout(() => {
        props.history.push({
          pathname: '/login',
        });
      }, 8000);
    } else if (error && typeof error === 'string' && error.indexOf('$') > -1) {
      toast.warning('Sorry, We are in troubleshoting the system');
    } else if (error) {
      toast.error(error.data.error);
    }
  }, [message, error]);

  return (
    <div className=" bg-white h-5/6 bg-no-repeat bg-cover w-full mx-1">
      {skeleton && <SignupSkeleton />}
      {!skeleton && (
        <div className="grid grid-cols-1 md:grid-cols-3 card w-3/4 mx-auto">
          <div className="md:w-3/6 md:col-span-3 py-4 mx-auto bg-white">
            <h1 className="text-blue-600 font-medium text-lg mx-4">Get started for free</h1>
            <h1 className="text-white-600 font-medium text-lg mx-4">Over 1000 campanies trust Barefoot-nomad worldwide</h1>
            <div className={classes.Auth}>
              <ToastContainer />
              <form
                data-testid="form"
                className="grid mx-0 mt-4 md:grid-cols-2 gap-1 w-full "
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  data-testid="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="col-span-2 row-start-1 md:w-4/5 md:col-span-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"
                  ref={register({ required: true })}
                />
                <p className="col-span-2 md:col-span-1 text-red-500 text-center">
                  {errors.firstName && <span role="alert">No first name provided</span>}
                </p>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="col-span-2 md:col-span-1 md:row-start-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"
                  ref={register({ required: true })}
                />
                <p className="col-span-2 md:col-span-1 text-red-500 text-center">
                  {errors.lastName && <span role="alert">No last name provided</span>}
                </p>

                <input
                  data-testid="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  className="col-span-2  border-primary-100 rounded p-4 my-4  shadow-md h-10 text-primary-100"
                  ref={register({ required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                />
                <p className="col-span-2 text-red-500 text-center">
                  {errors.email && errors.email.type === 'required' && (
                    <span role="alert">No email provided</span>
                  )}
                </p>

                <p className="col-span-2 text-red-500 text-center">
                  {errors.email && errors.email.type === 'pattern' && (
                    <span role="alert">E-mail is not valid</span>
                  )}
                </p>

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="col-span-2  border-primary-100 rounded p-4 my-4 shadow-md h-10 text-primary-100"
                  ref={register({ required: true, minLength: 8 })}
                />
                <p className="w-full col-span-2 text-red-500 text-center">
                  {errors.password && errors.password.type === 'required' && (
                    <span role="alert">No password provided</span>
                  )}
                </p>

                <p className="w-full col-span-2 text-red-500 text-center">
                  {errors.password && errors.password.type === 'minLength' && (
                    <span role="alert">Password should be at-least 8 characters.</span>
                  )}
                </p>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="col-span-2  border-primary-100 rounded p-4 my-4 shadow-md h-10 text-primary-100"
                  ref={register({ required: true })}
                />
                <p className="w-full col-span-2 text-red-500 text-center">
                  {errors.confirmPassword
                  && <span role="alert">Retype your password please</span>}
                </p>
                <p className="w-full col-span-2 text-red-500 text-center">
                  <span role="alert">{misMatch}</span>
                </p>
                {registerButton}
              </form>
              <p>Or use your social accounts to register</p>

              <SocialSignin />

              <p>
                Already have an account?
                {' '}
                <a className="text-primary-100-500 text-sm font-medium" href="/login">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default signup;
