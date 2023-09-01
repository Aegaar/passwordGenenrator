import classes from "./App.module.css";
// import PasswordValue from "./src/PasswordValue";
// import PasswordSettings from "./src/PasswordSettings";
import PasswordSettings from "./components/PasswordSettings";
import PasswordValue from "./components/PasswordValue";

function App() {
  return (
    <>
      <header className={classes.fd}>Password Generator</header>
      <main>
        <PasswordValue />
        <PasswordSettings />
      </main>
    </>
  );
}

export default App;
