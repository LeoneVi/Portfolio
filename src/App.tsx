import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Adventures from './pages/adventures/Adventures'
import Cheshire from './pages/adventures/Cheshire'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adventures" element={<Adventures />} />
                <Route path="/adventures/cheshire" element={<Cheshire />} />
            </Routes>
        </BrowserRouter>
    )
}