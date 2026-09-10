import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <div className="grain" aria-hidden />
      <div className="relative min-h-screen bg-paper text-zinc-900 dark:bg-ink dark:text-zinc-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/laptop-price-predictor" element={<Navigate to="/projects/laptop-price-predictor" replace />} />
          <Route path="/motor-project" element={<Navigate to="/projects/motor-project" replace />} />
          <Route path="/elevator-project" element={<Navigate to="/projects/elevator-project" replace />} />
          <Route path="/cpu" element={<Navigate to="/projects/cpu" replace />} />
          <Route path="/research-intern" element={<Navigate to="/projects/research-intern" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
