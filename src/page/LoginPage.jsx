import React, { useState } from 'react'
import aurexLogo from '@/assets/Aurex.png'
import loginVideo from '@/assets/Aurex (1).mp4'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated redirect after login animation completes
    setTimeout(() => {
      window.location.href = '/'
    }, 2500)
  }

  return (
    <div className="h-screen overflow-hidden bg-[#e8e6e1] flex items-center justify-center p-3 sm:p-4 md:p-6 font-sans">
      <div className="w-full max-w-[960px] max-h-full overflow-hidden bg-white rounded-[32px] shadow-2xl p-4 sm:p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
        {/* Left Side: Brand Video */}
        <div className="relative hidden w-full rounded-[24px] overflow-hidden bg-[#d9d5ce] md:flex md:h-[min(580px,calc(100vh-112px))] items-center justify-center">
          <video
            src={loginVideo}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-[380px] mx-auto py-2 flex flex-col justify-center">
          {/* Logo & Brand */}
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <img src={aurexLogo} alt="Aurex" className="h-7 w-auto" />
          </div>

          {/* Heading */}
          <div className="text-center mb-4 md:mb-6">
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
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
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
                classes="w-full bg-black py-2.5 text-white border-black shadow-sm hover:bg-black"
              />
            </div>
          </form>

          {/* Social Divider */}
          <div className="relative my-4 md:my-6 text-center">
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
              <svg
                className="h-[18px] w-[18px] shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.05 12.08c-.03-2.95 2.41-4.37 2.52-4.44-1.38-2.02-3.52-2.29-4.27-2.32-1.8-.19-3.55 1.08-4.46 1.08-.93 0-2.33-1.06-3.84-1.03-1.95.03-3.77 1.16-4.77 2.93-2.06 3.57-.53 8.81 1.45 11.7.99 1.42 2.14 3 3.66 2.94 1.48-.06 2.03-.94 3.82-.94 1.77 0 2.29.94 3.84.91 1.6-.03 2.6-1.42 3.55-2.85 1.14-1.63 1.59-3.24 1.61-3.32-.04-.01-3.08-1.18-3.11-4.66zM14.13 3.41c.8-.99 1.34-2.34 1.2-3.71-1.16.05-2.61.8-3.44 1.76-.74.86-1.4 2.27-1.23 3.58 1.3.1 2.64-.66 3.47-1.63z" />
              </svg>
              <span>Sign in with Apple</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full bg-[#f2f1ef] hover:bg-[#e7e5e1] text-gray-800 font-medium text-xs sm:text-sm transition-colors"
            >
              <svg
                className="h-[18px] w-[18px] shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
          <div className="mt-4 md:mt-6 text-center text-xs text-gray-500">
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
