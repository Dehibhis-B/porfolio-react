
import './App.css';
import { NavBar, Home, Portfolio } from './Components';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Skills from './Components/Skills';
import { FaFileDownload } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";




function App() {
  return (
    <>

      <div className="App bg-gray-900  ">
        {/* NavBar */}
        <NavBar />

        <div className="main-content grid place-items-center h-20">
          <button className='text-xs font-semibold border text-gray-400 flex items-center justify-center border-gray-300
           hover:border-emerald-400 hover:text-emerald-400 dark:text-gray-300 
            rounded-md focus:outline-none px-3 py-2'>
            < MdOutlineArchive className='mr-2' />Descarga CV
          </button>

        
        </div>

        {/* Home */}
        <Home />
       <AboutMe/>
        {/* Home */}
        
        
        {/* Skills */}
        <Skills />
        {/* Portfolio */}
        <Portfolio />

        {/* Companies */}
        <Companies />
        {/* Contact Us */}
        <ContactUs />

        <Footer />
      
        {/* About Me */}
      </div>






    </>

  );
}

export default App;
