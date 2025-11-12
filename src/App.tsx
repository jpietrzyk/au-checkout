import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

import Home from "./pages/home";
import Checkout from "./pages/checkout";
import { PrivacyPage } from "./pages/legal/privacy";
import { TermsPage } from "./pages/legal/terms";
import { CookiesPage } from "./pages/legal/cookies";
import { ConsentsPage } from "./pages/legal/consents";
import { ReturnsPage } from "./pages/legal/returns";
import { ShippingPage } from "./pages/legal/shipping";
import { SecurityPage } from "./pages/legal/security";
import { ContactPage } from "./pages/legal/contact";

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
