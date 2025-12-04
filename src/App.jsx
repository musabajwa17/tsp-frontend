import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
