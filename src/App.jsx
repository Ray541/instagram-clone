import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/auth" Component={AuthPage} />
          <Route path="/:username" Component={ProfilePage} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
