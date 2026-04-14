import Header from "./Header";
import { useState } from "react";


const Login = () =>
{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>
    {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>

            <Header />
            <div className="absolute">
                <img className="w-full" src = "https://assets.nflxext.com/ffe/siteui/vlv3/6a77b075-d304-4342-a055-c9e435c98b6f/web/IN-en-20260406-TRIFECTA-perspective_82b47017-148f-45be-8db8-d82a0f936d18_large.jpg" alt="logo" />
            </div>

            <form className="w-3/12 absolute p-10 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && 
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700  text-black" />
                }
                <input type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-700  text-black" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700  text-black" />
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now": "Already registered? Sign In now"}</p>
            </form>

        </div>  
        
    )
}

export default Login;