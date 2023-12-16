import React from "react";

function App() {
  return (
    <section>
      <form className="form">
        <label htmlFor="firstName"> Введите имя</label>
        <input type="text" id="firstName" placeholder="Имя" />
        <label htmlFor="lastName"> Введите фамилию </label>
        <input type="text" id="lastName" placeholder="Фамилия" />
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default App;
