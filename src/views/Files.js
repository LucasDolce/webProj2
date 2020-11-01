import Axios from "axios";
import React from "react";

class Files extends React.Component {
  constructor() {
    super();
    this.state = {
      User: {},
    };
  }
  componentDidMount() {
    let User = Axios.get("http://localhost:3333/getUser");
    console.log(User);
  }
  render() {
    return (
      <form class="dark" action={"http://localhost:3333/file"} method={"get"}>
        <label for="username">nome</label>
        <input type="text" name="nome" />
        <label for="password">file</label>
        <input type="password" name="file" />
        <input type="submit" value="Entrar" />
      </form>
    );
  }
}
export default Files;
