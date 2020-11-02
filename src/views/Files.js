import Axios from "axios";
import React from "react";
import cookie from "react-cookies";

class Files extends React.Component {
  constructor() {
    super();
    this.state = {
      User: {},
      UserId: cookie.load("id"),
      User_isAdm: cookie.load("isAdm"),
    };
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    // try {
    //   Axios.get("http://localhost:3333/getUser", {
    //     params: {
    //       id: this.state.UserId,
    //     },
    //   }).then((res) => this.setState({ User: res }));
    // } catch (err) {
    //   console.log(err);
    // }
    console.log(this.state.UserId);
    console.log(this.state.User_isAdm);
  };

  render() {
    return (
      <div>
        {this.state.User_isAdm == "true" ? (
          <form
            class="dark"
            action="http://localhost:3333/uploadFile"
            method="post"
            enctype="multipart/form-data"
          >
            <label>Usuario Adm -- cadastro de arquivos -- </label>

            <input type="file" name="file" accept="image/png, image/jpeg" />
            <input type="submit" value="Salvar arquivo" />
          </form>
        ) : null}
        <form
          class="dark"
          action={"http://localhost:3333/getFile"}
          method={"get"}
        >
          <label> Busca de arquivos -- </label>
          <label for="username">nome</label>
          <input type="text" name="nome" />
          <input type="submit" value="Buscar" />
        </form>
        <form
          class="dark"
          action={"http://localhost:3333/logout"}
          method={"get"}
        >
          <input type="submit" value="Logout" />
        </form>
      </div>
    );
  }
}
export default Files;
