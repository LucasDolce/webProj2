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
    // let User = Axios.get("http://localhost:3333/getUser");
    // console.log(User);
  }

  render() {
    return (
      <div>
        <form
          class="dark"
          action={"http://localhost:3333/uploadFile"}
          method={"post"}
        >
          <label>Usuario Adm -- cadastro de arquivos -- </label>
          <label for="username">nome</label>
          <input type="text" name="name" />
          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg"
          />
          <input type="submit" value="Salvar" />
        </form>
        <form
          class="dark"
          action={"http://localhost:3333/getFile"}
          method={"get"}
        >
          <label> Listagem de arquivos -- </label>
          <label for="username">nome</label>
          <input type="text" name="nome" />
          <label for="password">file</label>
          <input type="password" name="file" />
          <input type="submit" value="Buscar" />
        </form>
      </div>
    );
  }
}
export default Files;
