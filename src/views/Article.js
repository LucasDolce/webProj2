import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div id="root">
        <div class="article">
          <div class="descricao">
            <h1>Feito por desenvolvedores</h1>
            <p>
              O GitHub é uma plataforma de desenvolvimento inspirada na maneira
              como você trabalha. De
              <a>código aberto</a>
              aos
              <a>negócios</a>, você pode hospedar e revisar códigos, gerenciar
              projetos e criar software junto a 50 milhões de desenvolvedores.
            </p>
          </div>
          <div class="login">
            <form>
              <div class="telaLogin">
                <div class="rotulo">
                  <label>Usuário</label>
                </div>
                <div class="texto">
                  <input type="text" />
                </div>
                <div class="rotulo">
                  <label>Email</label>
                </div>
                <div class="texto">
                  <input type="text" />
                </div>
                <div class="rotulo">
                  <label>Senha</label>
                </div>
                <div class="texto">
                  <input type="password" />
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
                  Ao clicar em "Inscreva-se no GitHub", você concorda com nossos
                  <a>Termos de Serviço</a>e<a>Política de Privacidade</a>.
                  Ocasionalmente, enviaremos e-mails relacionados à sua conta.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
