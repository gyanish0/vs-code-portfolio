import React, { useState } from "react";
import styles from "../styles/Explorer.module.css";
import ChevronRight from "../components/icons/ChevronRight";
import { useNavigate } from "react-router-dom";
import reacticon from "./icon/react_icon.svg";
import htmlicon from "./icon/html_icon.svg";
import cssicon from "./icon/css_icon.svg";
import jsicon from "./icon/js_icon.svg";
// import jsonicon from "./icon/json_icon.svg";
import markicon from "./icon/markdown_icon.svg";
const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: reacticon,
  },
  {
    name: "about.html",
    path: "/about",
    icon: htmlicon,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: cssicon,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: jsicon,
  },
  // {
  //   name: "articles.json",
  //   path: "/articles",
  //   icon: jsonicon,
  // },
  {
    name: "github.md",
    path: "/github",
    icon: markicon,
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <p onClick={() => navigate(item.path)} key={item.name}>
              <div className={styles.file}>
                <img src={item.icon} alt={item.name} height={18} width={18} />
                <p>{item.name}</p>
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
