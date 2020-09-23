import React from "react";
import Header from "./views/Header";
import Article from "./views/Article";
import Head from "./views/Head";
import axios from "axios";
import "./style.css";

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
    axios
      .get(
        api.baseUrl +
          "search/repositories?q=language:java&sort=stars&page=1&client_id=" +
          api.client_id +
          "&client_secret=" +
          api.client_secret
      )
      .then((res) => {
        console.log("infos da API", res);
        this.setState({ githubData: res.data.items });
      });
  }
  render() {
    return (
      <html>
        <div>
          <Head />
          <Article />
          <Header />
        </div>
      </html>
    );
  }
}

export default App;
