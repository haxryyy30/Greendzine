// import logo from './logo.svg';
// import './App.css';

function Login() {
  return (
    <div className="bg_color">
    <div id="empty">
    <div className="icon">
    </div>
    <h2 className="Htag">
      We are Electric
    </h2>
    </div>

    <form className="w-full max-w-sm">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-white text-sm font-medium mb-2"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="email"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-white text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="Password"
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        className="LoginButton"
      >
        Login
      </button>
    </form>

    <a href="/forgot-password" className="ForgotPass">
      Forgot Password?
    </a>
    </div>
  );
}

export default Login;
