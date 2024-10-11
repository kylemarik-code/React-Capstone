import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path='*' exact={true} element={<UnderConstruction />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
