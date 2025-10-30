import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

import Home from "./pages/home";
import Checkout from "./pages/checkout";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Toaster />
        <div className="min-h-screen w-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}
export default App;
