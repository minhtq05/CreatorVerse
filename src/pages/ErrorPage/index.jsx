import { useRouteError } from "react-router-dom";
import "./styles.css";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>404 | This page doesn't exist</h1>
      <p>{error.data || "No error message"}</p>
    </div>
  );
};
