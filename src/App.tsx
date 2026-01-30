import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function Home() {
  return (
    <>
      <h1 className="flex text-center">Home Page</h1>
      <div className="flex text-center">This is a mock up page</div>
    </>
  );
}

function LogIn() {
  return (
    <>
      <body className="m-4"></body>
      <h1>Log In</h1>
      <Login></Login>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <body className="m-4"></body>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
