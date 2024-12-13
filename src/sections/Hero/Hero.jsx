import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import youtubeLight from "../../assets/youtube-light.svg";
import youtubeDark from "../../assets/youtube-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const youtubeIcon = theme === "light" ? youtubeLight : youtubeDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} className={styles.hero} alt="Foto Raphael Garcia" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Raphael
          <br />
          Garcia
        </h1>
        <h2>Cientista de dados</h2>
        <span>
          <a href="https://www.youtube.com/@cliffsdesigner363" target="_blank">
            <img src={youtubeIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/RaphaelcliffsGarcia" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/devraphaelgarcia" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          "Os dados são a espada do século XXI, e quem conseguir manejá-los,
          será o Samurai."
        </p>
        <a href={CV} download>
          <button className="hover">Resumo</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
