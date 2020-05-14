import React, { Component } from "react";
import "./BlogPost.css";
import Post from "./Post";
import firebase from "firebase";
import { logoutUser } from "../actions/auth";
import { connect } from "react-redux";
import semua from "../image/semua.jpg";

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listArtikel: [],
    };
  }

  ambilDataDariServerAPI = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  simpanDataKeServerAPI = () => {
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.simpanDataKeServerAPI();
    }
  }

  handleHapusArtikel = (idArtikel) => {
    const { listArtikel } = this.state;
    const newState = listArtikel.filter((data) => {
      return data.uid !== idArtikel;
    });
    this.setState({ listArtikel: newState });
  };

  handleTambahArtikel = (event) => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    let timestamp = new Date().getTime();
    formInsertArtikel["id"] = timestamp;
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  handleTombolSimpan = (event) => {
    let title = this.refs.judulArtikel.value;
    let body = this.refs.isiArtikel.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      const { listArtikel } = this.state;
      const indeksArtikel = listArtikel.findIndex((data) => {
        return data.uid === uid;
      });
      listArtikel[indeksArtikel].title = title;
      listArtikel[indeksArtikel].body = body;
      this.setState({ listArtikel });
    } else if (title && body) {
      const uid = new Date().getTime().toString();
      const { listArtikel } = this.state;
      listArtikel.push({ uid, title, body });
      this.setState({ listArtikel });
    }

    this.refs.judulArtikel.value = "";
    this.refs.isiArtikel.value = "";
    this.refs.uid.value = "";
  };
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-sm bg-blue navbar-black">
            <a>
              <img src={semua} width="40" height="40" center></img>
            </a>
            <a className="navbar-brand" href="#">
              Jamu "MAMA KERIZ"
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/home">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link active" href="/pembelian">
                  Pembelian
                </a>
                <a className="nav-item nav-link active" href="/komentar">
                  Komentar
                </a>
              </div>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="post-artikel">
          <div className="form pb-2 border-bottom">
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Nama
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  ref="judulArtikel"
                  onChange={this.handleTambahArtikel}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="body" className="col-sm-2 col-form-label">
                Komentar
              </label>
              <br></br>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="body"
                  name="body"
                  rows="4"
                  ref="isiArtikel"
                  onChange={this.handleTambahArtikel}
                ></textarea>
              </div>
            </div>
            <input type="hidden" name="uid" ref="uid" />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleTombolSimpan}
            >
              Simpan
            </button>
          </div>
          <h2>Komentar</h2>
          {this.state.listArtikel.map((artikel) => {
            // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
            return (
              <Post
                key={artikel.uid}
                judul={artikel.title}
                isi={artikel.body}
                idArtikel={artikel.uid}
                hapusArtikel={this.handleHapusArtikel}
              />
            ); // mappingkan data json dari API sesuai dengan kategorinya
          })}
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}

export default connect(mapStateToProps)(BlogPost);
