import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import CreateUser from "./CreateUser/CreateUser";
import GetUser from "./getUsers/GetUser";
import UpdateUser from "./updateUser/UpdateUser";
import CreateAssurance from "./CreateAssurance/CreateAssurance";
import GetAssurances from "./getAssurances/GetAssurances";
import Accueil from "./Accueil/Accueil";
import GetOneUser from "./getUser/GetOneUser";
import Inscription from "./Inscription/Inscription";
import { Provider } from "react-redux";
import { store } from "./redurcers/store";
import Pensions from "./Pensions/Pensions";
import ShowStudents from "./admin/showStudent/ShowStudents";

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
          path: '/addUser',
          element: <CreateUser />
        },
        {
          path: '/getUsers',
          element: <GetUser />
        },
        {
          path: '/updateUser/:userId',
          element: <UpdateUser />
        },
        {
          path: '/createAssurance',
          element: <CreateAssurance />
        },
        {
          path: '/getAssur',
          element: <GetAssurances />
        },
        {
          path: '/getUser/:userId',
          element: <GetOneUser />
        },
       {
        path:'/pension',
        element: <Pensions/>
       },
       {
        path:'showStudents',
        element:<ShowStudents/>
       }
      ],
      
    },
    {
      path: '/student/inscription',
      element: <Inscription />
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
