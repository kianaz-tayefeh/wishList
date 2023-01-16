import "./button.scss";

export const Button = ({ color, children, size, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};
