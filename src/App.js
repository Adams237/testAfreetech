import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import { Provider } from "react-redux";
import { store } from "./redurcers/store";
import Auth from "./auth/Auth";
import Home from "./Home/Home";
import Inscription from "./Inscription/Inscription";
import 'react-toastify/dist/ReactToastify.css';
import Pension from "./Pension/Pension";
import Tables from "./Tables/Tables";
import School from "./School/School";
import SignUP from "./auth/SignUP";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '',
          element: <Accueil />
        },
        {
          path:"inscription",
          element: <Inscription />
        },
        {
          path:'pension',
          element: <Pension/>
        },
        {
          path:"facture",
          element:<Tables/>
        },
        {
          path:"ecole",
          element:<School/>
        }
        
      ],
      
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path:"/signup",
      element:<SignUP/>
    }
  ])
 
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>
  );
}

export default App;
