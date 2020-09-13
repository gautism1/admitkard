import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
   
} from "react-router-dom";
const Otp = lazy(() => import('./components/otp'));  
const Errorboundary = lazy(() => import('./components/errorboundary'));
//errorboundary lagate hi error aane lagi
const Login = lazy(() => import('./components/login'));
 const Success = lazy(() => import('./components/success'));

const renderLoader=() =>
   <p>
   Loading 
   </p>


function App() {
  return (
    <Router>
    
      <Suspense fallback={renderLoader()}>
      <Errorboundary>
         <div className="App">
           <div className="OtpVerify">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/otp" component={Otp} />    
                <Route exact path="/success" component={Success} />       
          </Switch>
                 
           </div>
           </div>
            </Errorboundary>
      </Suspense>
 
   </Router>
  );
}

export default App;
