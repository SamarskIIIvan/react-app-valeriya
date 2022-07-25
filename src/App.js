
import './App.css';
import {Header} from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Nano} from "./Components/Header/Pages/Nano/Nano";
import {History} from "./Components/Header/Pages/History/History";
import {Dev} from "./Components/Header/Pages/Development/Dev";
import {Tasks} from "./Components/Header/Pages/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path={"/nano"} element={<Nano/>}/>
          <Route path={"/history"} element={<History/>}/>
          <Route path={"/dev"} element={<Dev/>}/>
          <Route path={"/tasks"} element={<Tasks/>}/>
        </Routes>
    </div>
  );
}

export default App;
