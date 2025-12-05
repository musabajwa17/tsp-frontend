import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import TopBar from "./components/TopBar";
export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
