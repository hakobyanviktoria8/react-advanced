import "./util/styles/App.css";
import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
import { useState, createContext } from "react";

import Items from './components/items/Items';
import Games from './components/games/Games';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import { Posts } from "./components/posts/Posts";
import { User } from "./components/items/User";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={[data, setData]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Items />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="games" element={<Games />}/>
          <Route path="games/:params" element={<Games />}/>
          <Route path="posts" element={<Posts />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />}>
              <Route path="history" element="This is history component"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
