import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Tab.module.css";

const Tab = ({ icon, filename, path }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(path)}>
      <div className={`${styles.tab} ${path === pathname && styles.active}`}>
        <img src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </div>
  );
};

export default Tab;
