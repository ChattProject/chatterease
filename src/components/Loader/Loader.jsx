import "../Loader/Loader.scss";

export const Loader = () => {
  return (
    <div className="parent">
      <span className="loader"></span>
      <div className="overlay"></div>
    </div>
  );
};