import React, { useCallback } from "react";
import axios from "axios";
import "./style.css";
import Article from "./views/Article";
import Header from "./views/Header";
import Head from "./views/Head";

const api = {
  baseUrl: "https://api.github.com/",
  client_id: "e7b2f308dd49602e3887",
  client_secret: "3e5fafe97bd925f4b8e242f11622b80abf673a0a",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
    // try {
    //   axios
    //     .get(
    //       api.baseUrl +
    //         "search/repositories?q=language:java&sort=stars&page=1&client_id=" +
    //         api.client_id +
    //         "&client_secret=" +
    //         api.client_secret
    //     )
    //     .then((res) => {
    //       console.log("infos da API", res);
    //       this.setState({ githubData: res.data.items });
    //     });
    // } catch (err) {
    //   return err;
    // }
  }

  onSubmit(values) {
    console.log(values);
    const apiUrl = "http://localhost:3333";
    axios.post(`${apiUrl}/users`, values);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="root">
          <div class="article">
            <div class="descricao">
              <h1>Feito por desenvolvedores</h1>
              <p>
                O GitHub é uma plataforma de desenvolvimento inspirada na
                maneira como você trabalha. De
                <a>código aberto</a>
                aos
                <a>negócios</a>, você pode hospedar e revisar códigos, gerenciar
                projetos e criar software junto a 50 milhões de desenvolvedores.
              </p>
            </div>
            <div class="login">
              <form onSubmit={this.onSubmit()}>
                <div class="telaLogin">
                  <div class="rotulo">
                    <label>Usuário</label>
                  </div>
                  <div class="texto">
                    <input type="text" id="name" name="name" />
                  </div>
                  <div class="rotulo">
                    <label>Email</label>
                  </div>
                  <div class="texto">
                    <input type="text" id="email" name="email" />
                  </div>
                  <div class="rotulo">
                    <label>Senha</label>
                  </div>
                  <div class="texto">
                    <input type="password" id="password" name="password" />
                  </div>
                  <p class="regras">
                    Verifique se há pelo menos 15 caracteres OU pelo menos 8
                    caracteres, incluindo um número e uma letra minúscula.
                    <a>Saber mais.</a>.
                  </p>

                  <input
                    class="button2"
                    type="submit"
                    value="Inscreva-se no Github"
                  />
                  <p class="regras termos">
                    Ao clicar em "Inscreva-se no GitHub", você concorda com
                    nossos
                    <a>Termos de Serviço</a>e<a>Política de Privacidade</a>.
                    Ocasionalmente, enviaremos e-mails relacionados à sua conta.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
