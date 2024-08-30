import "./App.css";
import { Outlet } from "react-router-dom";
import Demo from "./Components/Demo";
import Navbar from "./Components/Shared/Navbar";

function App() {

  return (
    <div>

      {/* header  */}
      <Navbar />
      {/* <Demo /> */}
      <div className='min-h-[calc(100vh-196px)] '>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
    </div>
  );
}

export default App;
