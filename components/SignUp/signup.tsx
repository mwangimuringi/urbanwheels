"use client";
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CustomButton from '../CustomButton';

// SignInButton Component
export const SignInButton = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      callbackUrl: `${window.location.origin}`,
    });

    if (!result) {
      console.error('Sign-in failed: No result returned');
      return;
    }

    if (result.error) {
      router.push('/signup'); // Redirect to sign-up page if sign-in fails
    } else if (result.url) {
      router.push(result.url);
    } else {
      router.push('/'); // Default redirect if result.url is not provided
    }
  };

  return (
    <CustomButton
      title="Sign In"
      btnType="button"
      containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      textStyles=""
      isDisabled={false}
      onClick={handleSignIn}
    />
  );
};

// SignOutButton Component
export const SignOutButton = () => {
  return (
    <CustomButton
      title="Sign Out"
      btnType="button"
      containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      textStyles=""
      isDisabled={false}
      onClick={() => signOut()}
    />
  );
};


const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <SignInButton />
          </div>
        </form>
        <div className="mt-6 text-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
