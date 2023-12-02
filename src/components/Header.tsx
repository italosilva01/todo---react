import style from "./Header.module.scss";
import logo from "assets/Logo.svg";
export const Header = () => {
  return (
    <div className={style.header}>
      <h1>
        <img src={logo} alt="logo todo" />
      </h1>
    </div>
  );
};
