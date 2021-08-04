import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { VerifIsLoggedIn } from "./Redux/Actions/AuthActions";
import { useEffect } from "react";
import SafeRouter from "./Router/SafeRouter";
import Router from "./Router/Router";

function App() {
  const { Auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(VerifIsLoggedIn());
  }, [dispatch]);

  return (
    <div>
      {!Auth.isLoggedIn && <SafeRouter />}
      {Auth.isLoggedIn && <Router />}
    </div>
  );
}

export default App;
