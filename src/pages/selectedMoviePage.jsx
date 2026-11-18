import { useContext } from "react";
import AppContext from "../context/AppContext";

const SelectedMoviePage = () => {
  const { appContext, setAppContext } = useContext(AppContext);

  return (
    <>
      <h1>Selected Movie</h1>
      <h3>{appContext.title}</h3>
    </>
  );
};

export default SelectedMoviePage;
