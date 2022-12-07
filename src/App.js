import "./util/styles/App.css";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useState, createContext } from "react";

import Items from './components/items/Items';
import Games from './components/games/Games';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={[data, setData]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="games" element={<Games />}/>
          <Route path="games/:params" element={<Games />}/>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
