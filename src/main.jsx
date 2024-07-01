import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserContextProvider } from './context/UserContext.jsx';
import { CourseContextProvider } from './context/CourseContext.jsx';

export const server = 'https://backend-skill.onrender.com'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
   <CourseContextProvider>
    <App />
   </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
