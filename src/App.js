import Routes from "./routes/Routes";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
    </Layout>
  );
}

export default App;
