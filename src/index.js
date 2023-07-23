import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import './fonts.css';
import './index.css';
import { FirstTask } from './pages/FirstTask';
import { SecondTask } from './pages/SecondTask';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([{
	path: "/task-1",
	element: <FirstTask />,
}, {
	path: "/task-2",
	element: <SecondTask />,
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
