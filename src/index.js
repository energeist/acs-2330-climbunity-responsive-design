import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import ClimbingWall from './components/ClimbingWall';
import ClimbingAreas from './components/ClimbingAreas';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <title>Climbunity</title>
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="/" element={<ClimbingArea />} /> */}
        <Route path="/wall" element={<ClimbingWall />} />
        <Route path="/" element={<ClimbingAreas />} />
        <Route path="about" element={<About />} />
        {/* <Route path="/route/:routeId" element={<ClimbingRoute />} /> */}
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();