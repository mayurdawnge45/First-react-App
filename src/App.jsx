// import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import "../src/Assets/Style/style.scss"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={< Home />}>
          </Route>
          <Route exact path='/about' element={< About />}>
          </Route>
          <Route exact path='/service' element={< Service />}>
          </Route>
          <Route exact path='/contact' element={< Contact />}>
          </Route>
        </Routes>
      </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
