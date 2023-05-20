import logo from './logo.svg';
import './App.css';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import Grandfather from './Components/Grandfather/Grandfather';





function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: () => fetch('watch.json'),
            element: <Home></Home>
          },

          {
            path: '/orders',
            element: <Orders></Orders>
          },


          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '/grandfather',
            element: <Grandfather></Grandfather>
          }
        ]
      }
    ]
  )

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
