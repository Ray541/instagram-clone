import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/auth" Component={AuthPage} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
