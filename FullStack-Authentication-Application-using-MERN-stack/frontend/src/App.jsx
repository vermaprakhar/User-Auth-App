import "./App.css";
import Body from "./components/Body";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./components/Singin";
import Singin from "./components/Signup";
import Profile from "./components/profile";
import Signup from "./components/Signup";
import SignIn from "./components/Singin";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/singup",
    element: <Signup/>,
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {

  return (
    <RouterProvider router={appRouter}/>
  );
}


export default App;
