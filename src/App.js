import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import CreateUser from "./CreateUser/CreateUser";
import GetUser from "./getUsers/GetUser";
import UpdateUser from "./updateUser/UpdateUser";
import CreateAssurance from "./CreateAssurance/CreateAssurance";
import GetAssurances from "./getAssurances/GetAssurances";
import Accueil from "./Accueil/Accueil";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      children:[
        {
          path:'',
          element:<Accueil/>
        },
        {
          path:'/addUser',
          element:<CreateUser/>
        },
        {
          path:'/getUsers',
          element:<GetUser/>
        },
        {
          path:'/updateUser/:userId',
          element: <UpdateUser/>
        },
        {
          path:'/createAssurance',
          element: <CreateAssurance/>
        },
        {
          path: '/getAssur',
          element: <GetAssurances/>
        }
      ]
    }
  ])
  return (
    <div className="App">
          <RouterProvider router={router}/>
    </div>
  );
}

export default App;
