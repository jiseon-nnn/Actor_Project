import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./component/Navbar";
import { MainPage } from "./page/MainPage";
import { CastingJobsPage } from "./page/CastingJobsPage";
import { ActorProfilePage } from "./page/ActorProfilePage";
import { SignUpPage } from "./page/SignUpPage";
import { LoginPage } from "./page/LoginPage";
import { PersonalSignUpPage } from "./page/PersonalSignUpPage";

function App() {
  return (
    <div className="w-full h-full items-center flex flex-col">
      <header className="flex justify-center items-center h-[100px] w-full">
        <Navbar />
      </header>
      <main className="flex justify-center items-center max-w-[1350px] w-full h-full ">
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/casting_jobs"} element={<CastingJobsPage />} />
          <Route path={"/actor_profile"} element={<ActorProfilePage />} />
          <Route path={"/sign_up"} element={<SignUpPage />} />
          <Route path={"/sign_up/personal"} element={<PersonalSignUpPage />} />
          <Route path={"/login"} element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
