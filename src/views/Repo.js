import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const api = {
  baseUrl: "https://api.github.com/",
  client_id: "e7b2f308dd49602e3887",
  client_secret: "3e5fafe97bd925f4b8e242f11622b80abf673a0a",
};

class repo extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
    try {
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
    } catch (err) {
      return err;
    }
  }

  render() {
    const { params } = this.props;
    const { githubData } = this.state;

    // <div className="container app">
    //   <div className="row">
    //     {githubData.map((name) => (
    //       <div className="col-md-12">
    //         <p>{name.name === params.name ? name : ""}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>;
  }
}

repo.propTypes = {
  params: PropTypes.object,
};

export default repo;
