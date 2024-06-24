

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screen/LoginScreen";
import NotesScreen from "./screen/NotesScreen";

const router = createBrowserRouter([
  /*{
    path: "/",
    element : <LoginScreen/>,
  },*/
  {
    path: "/",
    element: <NotesScreen/>,
  },
])


const App = () => {
  return (
      <RouterProvider router = {router}/>
      
  );
}

export default App;
