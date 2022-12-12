import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";
import reacticon from "./icon/react_icon.svg"
import htmlicon from "./icon/html_icon.svg"
import cssicon from "./icon/css_icon.svg"
import jsicon from "./icon/js_icon.svg"
// import jsonicon from "./icon/json_icon.svg"
import markicon from "./icon/markdown_icon.svg"
const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon={reacticon} filename="home.jsx" path="/" />
      <Tab icon={htmlicon} filename="about.html" path="/about" />
      <Tab icon={cssicon} filename="contact.css" path="/contact" />
      <Tab icon={jsicon} filename="projects.js" path="/projects" />
      {/* <Tab icon={jsonicon} filename="articles.json" path="/articles" /> */}
      <Tab icon={markicon} filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
