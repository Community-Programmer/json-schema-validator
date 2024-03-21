import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.Navbar}>
      <Link to= '/'>
        <img
          className={styles.Logo}
          src="https://json-schema.org/img/logos/logo-blue.svg"
          alt="logo"
        />
      </Link>

      <div className="github__btn">
        <button onClick={()=>window.open('https://github.com/json-schema-org/json-schema-spec', '_blank')}><FaGithub  size={20} color="#fff"/> Star on Github</button>
      
      </div>
    </nav>
  );
};

export default Navbar;
