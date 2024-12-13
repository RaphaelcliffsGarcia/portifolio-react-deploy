import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import { SiPandas, SiNumpy, SiGit, SiFigma } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaCartArrowDown,
} from "react-icons/fa"; // Importando os ícones

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              HTML
              <FaHtml5 size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              CSS
              <FaCss3Alt size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              JavaScript
              <FaJs size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              Python
              <FaPython size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              Node
              <FaNodeJs size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              React
              <FaReact size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              Pandas
              <SiPandas size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              Numpy
              <SiNumpy size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              GitFlow
              <SiGit size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              Git
              <SiGit size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              WooCommerce Como CMS
              <FaCartArrowDown size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
        <SkillList src={checkMarkIcon} skill="UX" />
        <SkillList src={checkMarkIcon} skill="UI" />
        <SkillList
          src={checkMarkIcon}
          skill={
            <>
              Figma
              <SiFigma size={15} style={{ marginLeft: "10px" }} />
            </>
          }
        />
      </div>
    </section>
  );
}

export default Skills;
