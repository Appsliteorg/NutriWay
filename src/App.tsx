import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import PermissionExplanation from "./pages/PermissionExplanation";
import ScanPage from "./pages/Scan";
import ProductResult from "./pages/ProductResult";
import ResultsPage from "./pages/Results";
import SettingsPage from "./pages/Settings";
import AboutPage from "./pages/About";
import MethodologyPage from "./pages/Methodology";
import DataSourcesPage from "./pages/DataSources";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfUsePage from "./pages/TermsOfUse";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/permission-info" element={<PermissionExplanation />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/product/:code" element={<ProductResult />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/data-sources" element={<DataSourcesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;