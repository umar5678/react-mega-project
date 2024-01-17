import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return !loading ? (
    <div className="min-h-screen bg-slate-400 w-full">
      <Header />
      <main className="mx-auto my-auto w-80">
        {/* <Outlet /> // todo  */}
        <h2 className="text-blue-600 text-4xl ">Hello world</h2>
      </main>
      <Footer />
    </div>
  ) : null;
};

export default App;
