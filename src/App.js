import classes from "./App.module.css";
import PasswordSettings from "./components/PasswordSettings";
import PasswordValue from "./components/PasswordValue";
import PasswordProvider from "./context/PasswordProvider";

function App() {
  return (
    <PasswordProvider>
      <header className={classes["app-name"]}>Password Generator</header>
      <main>
        <PasswordValue />
        <PasswordSettings />
      </main>
    </PasswordProvider>
  );
}

export default App;



