import Axios from "axios";
import React from "react";
import cookie from "react-cookies";

class Files extends React.Component {
  constructor() {
    super();
    this.state = {
      User: {},
      file: {},
      files: [],
      UserId: cookie.load("id"),
      User_isAdm: cookie.load("isAdm"),
    };
  }

  onSubmit(event) {
    try {
      Axios.get("http://localhost:3333/getFiles").then((res) =>
        this.setState({ files: res.data })
      );
      console.log(this.state.files);
    } catch (err) {
      return err;
    }
    event.preventDefault();
  }

  buscaPorNome(event) {
    try {
      Axios.get("http://localhost:3333/getFileByName", {
        params: {
          name: event.target[0].value,
        },
      }).then((res) => this.setState({ file: res.data }));
      console.log(this.state.file);
    } catch (err) {
      return err;
    }
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.User_isAdm == "true" && this.state.UserId ? (
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
        {this.state.UserId ? (
          <div>
            <form class="dark" onSubmit={this.onSubmit.bind(this)}>
              <label> Busca de arquivos -- </label>
              <input type="submit" value="Buscar" />
            </form>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <p> O usuario precisa estar logado para executar pesquisas</p>
            </div>
          </div>
        )}
        {this.state.files &&
          this.state.UserId &&
          this.state.files.map((file) => (
            <div className="row">
              <div className="col-md-12">
                <p>
                  {`nome: ${file.name}, 
              id: ${file.id}, 
              Path: ${file.path}`}
                  <img src={`http://localhost:3333/files/${file.path}`}></img>
                </p>
              </div>
            </div>
          ))}
        <form
          class="dark"
          action={"http://localhost:3333/logout"}
          method={"get"}
        >
          <input type="submit" value="Logout" />
        </form>

        <form
          class="dark"
          action={"http://localhost:8080/filesbyname"}
          method={"get"}
        >
          <input type="submit" value="Pesquisar por nome" />
        </form>
      </div>
    );
  }
}
export default Files;
