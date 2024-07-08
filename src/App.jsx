import AdminPanel from "./components/AdminPanel";
import Navbar from "./components/Navbar";
import UserPanel from "./components/UserPanel";
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route index element={<UserPanel/>}/>
        <Route path="/admin" element={<AdminPanel/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
