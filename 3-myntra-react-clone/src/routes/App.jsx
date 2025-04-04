import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function App() {
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatusActions.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
