import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./Layouts/HeaderLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeaderLayout />}>
                    <Route index element={<Home />} />
                    <Route index path="about" element={<About />} />
                    <Route index path="experience" element={<Experience />} />
                    <Route index path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
