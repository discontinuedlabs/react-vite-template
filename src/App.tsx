import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

export default function App() {
    console.log("test 5");
    return (
        <main className="h-screen bg-black text-green-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}