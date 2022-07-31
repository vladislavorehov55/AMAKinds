import StepsBlock from "./components/StepsBlock/StepsBlock";
import Field from "./components/Field/Field";
import ParamsForm from "./components/ParamsForm/ParamsForm";
import s from './App.module.css';
function App() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>Лабиринт</h1>
      <main className={s.main}>
        <ParamsForm/>
        <Field/>
        <StepsBlock/>
      </main>
    </div>
  );
}

export default App;
