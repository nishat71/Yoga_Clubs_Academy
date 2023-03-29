import './App.css';
import Home from './Components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FAQS from './Components/FAQS/FAQS';
// import FAQS from './Components/FAQ/FAQS';



function App() {

  return (
    <div>
      <Home></Home>
      {/* <FAQS></FAQS> */}
      <FAQS></FAQS>
    </div>
  );
}

export default App;
