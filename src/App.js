import './app.css';
import HomeComponent from "./Components/HomeComponent";
import NavComponent from "./Components/NavComponent";
import ProjectsComponent from "./Components/ProjectsComponent";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HomeComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
