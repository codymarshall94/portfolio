import './app.css';
import AboutComponent from './Components/AboutComponent';
import ContactComponent from './Components/ContactComponent';
import HomeComponent from "./Components/HomeComponent";
import NavComponent from "./Components/NavComponent";
import ProjectsComponent from "./Components/ProjectsComponent";


function App() {
  return (
    <div className="App">
      
      <HomeComponent />
      <NavComponent />
      <ProjectsComponent />
      <AboutComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
