import React, { useContext, useState } from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/BooksPoster/BookPic.png'
import { AuthContext } from '../contects/AuthProvider';
import GoogleLogo from '../assets/BooksPoster/googleLogo.webp'

const Login = () => {
  const {login,loginwithGoogle} = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
          const user = userCredential.user;
          alert("Log In Successfully..!");
          navigate(from, {replace: true})
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
        })

   
    }

    //sign up with google account
    const handleRegister= () =>{
        loginwithGoogle().then((result) => {
            const user = result.user;
            alert("LogIn Successfully...")
            navigate(from, {replace: true});

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Google Sign-In Error:", errorMessage);
            setError(errorMessage);
        });
    }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        src={Logo}
        className="mx-auto h-22 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Log in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleLogIn} action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder='Example: google@gmail.com'
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-red-400 hover:text-red-600">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder='Example: Book@1234'
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {error ? <p className='text-red-500 text-base'>Email or Password is Invalid ):</p> : ""}
       
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
          </button>
        </div>
       
        <p>If you have not an account. Please <Link to="/sign-up" className='text-blue-500 underline'>SignUp</Link> Here</p>
        <hr />
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
            <button onClick={handleRegister} className='block'><img src={GoogleLogo} alt='' className='w-12 h-12 inline-block'/> Login with Google</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
