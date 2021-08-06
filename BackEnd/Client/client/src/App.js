import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { VerifIsLoggedIn } from "./Redux/Actions/AuthActions";
import { useEffect } from "react";
import SafeRouter from "./Router/SafeRouter";
import Router from "./Router/Router";
import { GLOBALTYPES } from "./Redux/Actions/GlobalType";
import LoadingComponent from "./Components/LoadingComponent";
function App() {
  const { Auth, Loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GLOBALTYPES.LOADING_ON });
    dispatch(VerifIsLoggedIn());
  }, [dispatch]);

  return (
    <div>
      {Loading.Loading === true ? (
        <LoadingComponent />
      ) : Loading.Loading === false ? (
        <div>
          {!Auth.isLoggedIn && <SafeRouter />}
          {Auth.isLoggedIn && <Router />}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;