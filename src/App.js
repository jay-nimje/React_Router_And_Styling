import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Compo/Header";
import Footer from "./Compo/Footer";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Sign_In from "./Pages/Sign_In";
import Sign_up from "./Pages/Sign_up";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/>  <Footer/> </>}></Route>
          <Route path="/about" element={<> <Header/> <About/>  <Footer/> </>}></Route>
          <Route path="/shop" element={<> <Header/> <Collection/>  <Footer/> </>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/>  <Footer/> </>}></Route>
          <Route path="/login" element={<> <Header/> <Sign_In/>  <Footer/> </>}></Route>
          <Route path="/register" element={<> <Header/> <Sign_up/>  <Footer/> </>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
