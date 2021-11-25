import "./App.css";
import About from "./components/about";
import Content from "./components/content";
import Plans from "./components/plans";
import styles from "./styles/Nav.module.css";
import Gif from "./components/gifs";
function App() {
  return (
    <div classNameName="App">
      <nav id="navbar-example2" className={styles.container}>
        <ul className="nav nav-pills">
          <div className={styles.listContainer}>
            <li className="nav-item">
              <a className={styles.linkItem} href="#home">
                <span className={styles.textMenu}>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={styles.linkItem} href="#planos">
                <span className={styles.textMenu}>Planos</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={styles.linkItem} href="#empresarial">
                <span className={styles.textMenu}>Plano Empresarial</span>
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabindex="0"
      >
        <h4 id="home">
          <Content />
        </h4>
        <h4 id="planos">
          <Plans />
        </h4>
        <h4 id="empresarial">
          <Gif />
        </h4>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
