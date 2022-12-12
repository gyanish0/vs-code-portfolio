import ThemeInfo from "../components/ThemeInfo";
import styles from "../styles/SettingsPage.module.css";
import gitIcon from "../components/icon/github-dark.png";
import darculaIcon from "../components/icon/dracula.png";
import ayuIcon from "../components/icon/ayu.png";
import nordIcon from "../components/icon/nord.png";
import owlIcon from "../components/icon/night-owl.png";
const SettingsPage = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon={gitIcon}
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for VS Code"
        />
        <ThemeInfo
          name="Dracula"
          icon={darculaIcon}
          publisher="Dracula Theme"
          theme="dracula"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
        <ThemeInfo
          name="Ayu Dark"
          icon={ayuIcon}
          publisher="teabyii"
          theme="ayu-dark"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon={ayuIcon}
          publisher="teabyii"
          theme="ayu-mirage"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Nord"
          icon={nordIcon}
          publisher="arcticicestudio"
          theme="nord"
          description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
        />
        <ThemeInfo
          name="Night Owl"
          icon={owlIcon}
          publisher="sarah.drasner"
          theme="night-owl"
          description="A VS Code theme for the night owls out there."
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Settings" },
  };
}

export default SettingsPage;
