import {createBrowserRouter,Route,createRoutesFromElements,} from "react-router-dom";
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
   0   </Route>
    )
   );
export default Route;