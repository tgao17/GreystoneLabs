import {
  Link,
  Navigate,
  useNavigate,
  Routes,
  Route,
  Router,
  Outlet,
  useRoutes,
} from 'react-router-dom';

const Landing = () => {
  return (
    <div className='masterStyle'>
      <h1>Welcome to Greystone Amortiztion</h1>
      <button className='simpleButton' id='landingButton1'>
        New User
      </button>
      <button className='simpleButton' id='landingButton2'>
        Existing User
      </button>
      <h3>What is loan Amortiztion?</h3>
      <h4>
        Amortization is an accounting technique used to periodically lower the
        book value of a loan or an intangible asset over a set period of time.
        Concerning a loan, amortization focuses on spreading out loan payments
        over time. When applied to an asset, amortization is similar to
        depreciation.
      </h4>
    </div>
  );
};

export default Landing;
