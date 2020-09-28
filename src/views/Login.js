import React from "react";
import { browserHistory } from "react-router";

class Login extends React.Component {
  render() {
    return (
      <form
        class="dark"
        action={"http://localhost:3333/sessions"}
        method={"post"}
      >
        <label for="username">E-mail</label>
        <input type="text" name="email" />
        <label for="password">Senha</label>
        <input type="password" name="password" />
        <input
          type="submit"
          value="Entrar"
          // onClick={browserHistory.push("/content")}
        />
      </form>
    );
  }
}
export default Login;
