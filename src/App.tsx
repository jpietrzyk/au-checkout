import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

import Home from "./pages/home";
import Checkout from "./pages/checkout";
import {
  PrivacyPage,
  TermsPage,
  CookiesPage,
  ConsentsPage,
  ReturnsPage,
  ShippingPage,
  SecurityPage,
  ContactPage,
} from "./pages/legalPages";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Toaster />
        <div className="min-h-screen w-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Legal / compliance routes (PL) */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/consents" element={<ConsentsPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}
export default App;
