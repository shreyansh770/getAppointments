import {React , useState} from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Admin from './Components/Admin';
import Doctor from './Components/Doctor';
import Patient from './Components/Patient';
import Login from "./Login";


function App() {

  const [user, setUser] = useState(null);
  

  return (
    <>
     <Router>
        <Routes>
         <Route path="/" element={<Login setUser={setUser}/>}/>
         <Route path="patient" element={<Patient user={user} setUser={setUser} />}/>
         <Route path="admin" element={<Admin user={user} setUser={setUser}/> }/> 
         <Route path="doctor" element={<Doctor user={user} setUser={setUser}/>}/>
        </Routes>
     </Router>
    </>
  );
}

export default App;
