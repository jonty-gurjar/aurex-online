import React, { useState } from 'react'
import aurexLogo from '@/assets/Aurex.png'
import loginArt from '@/assets/login_art.png'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-[#e8e6e1] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
      <div className="w-full max-w-[960px] bg-white rounded-[32px] shadow-2xl p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Artistic Botanical Image */}
        <div className="relative w-full h-[320px] md:h-[580px] rounded-[24px] overflow-hidden bg-[#d9d5ce] flex items-center justify-center">
          <img
            src={loginArt}
            alt="Artistic botanical sculpture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-[380px] mx-auto py-2 flex flex-col justify-center">
          {/* Logo & Brand */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src={aurexLogo} alt="Aurex" className="h-7 w-auto" />
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {isSignUp ? 'Create an account' : 'Login to your account'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {isSignUp
                ? 'Join Aurex Store for exclusive access and offers'
                : 'Welcome back! Enter your details to log in to your account'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                  />
                  <span>Remember login</span>
                </label>
                <a
                  href="#"
                  className="font-medium text-black hover:underline"
                >
                  Forget Password?
                </a>
              </div>
            )}

            <div className="pt-2">
              <InteractiveHoverButton
                type="submit"
                text={isSignUp ? 'Sign Up' : 'Login'}
                loadingText={isSignUp ? 'Creating Account...' : 'Logging in...'}
                successText={isSignUp ? 'Account Created!' : 'Success!'}
                classes="w-full py-3 !bg-black !text-white border-black shadow-md"
              />
            </div>
          </form>

          {/* Social Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-white px-3 text-xs text-gray-400">
              Or continue with
            </span>
          </div>

          {/* Social Sign-in Buttons */}
          <div className="space-y-2.5">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full bg-[#f2f1ef] hover:bg-[#e7e5e1] text-gray-800 font-medium text-xs sm:text-sm transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.37-6.08-3.48-2.82-7.46-7.55-11.96-14.18-7.3-10.74-13-22.56-17.1-35.47-4.1-12.9-6.15-24.96-6.15-36.18 0-15.86 3.97-29.08 11.9-39.67 7.94-10.59 17.88-15.99 29.83-16.2 4.47 0 9.49 1.15 15.06 3.47 5.58 2.31 9.38 3.52 11.4 3.63 1.79 0 5.69-1.26 11.7-3.79 6.01-2.54 11.07-3.74 15.19-3.6 11.06.84 20.06 4.97 27 12.38-9.87 5.96-14.7 14.3-14.5 25.04.22 8.37 3.42 15.42 9.61 21.14 6.18 5.72 13.56 8.95 22.14 9.68-2.3 6.9-5.1 13.39-8.4 19.46zM119.22 31.08c0-7.04 2.54-13.8 7.62-20.28 5.08-6.49 11.45-10.28 19.11-11.38.78 7.26-1.57 14.12-7.05 20.58-5.48 6.46-11.91 10.15-19.28 11.08h-.4c0-.52 0-.96 0-1.32z" />
              </svg>
              <span>Sign in with Apple</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full bg-[#f2f1ef] hover:bg-[#e7e5e1] text-gray-800 font-medium text-xs sm:text-sm transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12.5s.7 2.8 1.9 5.2l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 17C3.7 20.7 7.5 24 12 24z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>
          </div>

          {/* Switch Sign in / Sign up */}
          <div className="mt-6 text-center text-xs text-gray-500">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="font-semibold text-gray-900 hover:underline"
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                New here?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="font-semibold text-gray-900 hover:underline"
                >
                  Create account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
