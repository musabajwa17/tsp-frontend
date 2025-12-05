import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "./App.css"
import TopBar from "./components/TopBar";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#2da77a',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <TopBar />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
