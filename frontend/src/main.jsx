import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Login         from './components/GoogleLogin.jsx';
import App           from './App.jsx';
import DemoStudent   from './student/DemoStudent.jsx';
import FacultyDesktop from './faculty/faculty-desktop.jsx';
import AdminDesktop   from './admin/admin-desktop.jsx';
import NotFoundPage   from './pages/NotFoundPage.jsx';

import './index.css';

const clientId = '224681179431-dhurfnids0aq71dardp93keva4ceopdj.apps.googleusercontent.com';

function FacultyWrapper() {
  const navigate = useNavigate();
  return <FacultyDesktop onLogout={() => navigate('/')} />;
}

function AdminWrapper() {
  const navigate = useNavigate();
  return <AdminDesktop onLogout={() => navigate('/')} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/demo',
    element: <App />,
  },
  {
    path: '/demo/student',
    element: <DemoStudent />,
  },
  {
    path: '/demo/faculty',
    element: <FacultyWrapper />,
  },
  {
    path: '/demo/admin',
    element: <AdminWrapper />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
