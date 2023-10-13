import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import SignIn from "./components/SignIn";
function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}
const styles = {
  app: {
    padding: 50,
  },
};
export default App;
