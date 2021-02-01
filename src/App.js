import Main from "./components/Main";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import UploadCV from "./components/UploadCV";
import ShowCV from "./components/ShowCV";
import UploadVacancy from "./components/UploadVacancy";
import ShowVacancy from "./components/ShowVacancy";

function App() {
  return (
    <BrowserRouter className="App">
        <Switch>
            <Route path="/CV/Upload"><UploadCV/></Route>
            <Route path="/Vacancy/Upload"><UploadVacancy/></Route>
            <Route path="/Vacancy"><ShowVacancy/></Route>
            <Route path="/CV"><ShowCV/></Route>
            <Route path="/"><Main/></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
