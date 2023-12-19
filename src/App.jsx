import React, { useState } from "react";
import { Checkbox } from "./components/Checkbox/Checkbox";

function App() {
  const [rulesChecked, setRulesChecked] = useState(false);
  const [mailChecked, setMailChecked] = useState(false);

  return (
    <section>
      <form className="form">
        <Checkbox isChecked={rulesChecked} onChange={setRulesChecked}>
          Принимаю <a href="./documents/rules.pdf">правила</a> участия в акции
        </Checkbox>
        <Checkbox isChecked={mailChecked} onChange={setMailChecked}>
          Соглашаюсь на рассылку новостей
        </Checkbox>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default App;
