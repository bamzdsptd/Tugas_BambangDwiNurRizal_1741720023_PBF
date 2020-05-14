import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import semua from "../image/semua.jpg";
import satu from "../image/satu.jpeg";
import dua from "../image/dua.jpeg";
import tiga from "../image/tiga.jpeg";
import { Button } from "react-bootstrap";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
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
                    {isLoggingOut && <p>Logging Out....</p>}
                    {logoutError && <p>Error logging out</p>}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div align="center">
          <br />
          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
              <img
                className="card-header"
                src={satu}
                width="190px"
                height="400px"
              ></img>
              <div className="card-title">
                <div className="P">BERAS KENCUR</div>
              </div>
              <div className="card-body">
                <p className="card-text">Manfaat : </p>
                <p>Tambah stamina tubuh</p>
                <p>Bantu dapatkan tubuh ideal</p>
                <p>Singkirkan kolesterol jahat</p>
                <p>Kaya antioksidan bagi tubuh</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Beli</Button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
              <img
                className="card-header"
                src={dua}
                width="190px"
                height="400px"
              ></img>
              <div className="card-title">
                <div className="P">KUNIR MADU</div>
              </div>
              <div className="card-body">
                <p className="card-text">Manfaat :</p>
                <p>Membersihkan Tubuh dari Racun</p>
                <p>Meningkatkan Daya Tahan Tubuh</p>
                <p>Mengatasi Keputihan</p>
                <p>Meningkatkan Fungsi Otak</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Beli</Button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
              <img
                className="card-header"
                src={tiga}
                width="190px"
                height="400px"
              ></img>
              <div className="card-title">
                <div className="P">SINOM</div>
              </div>
              <div className="card-body">
                <p className="card-text">Manfaat</p>
                <p>Mengatasi masuk angin</p>
                <p>Mengurangi nyeri saat haid</p>
                <p>Mengobati sembelit</p>
                <p>Kontrol gula darah</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Beli</Button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.handleLogout}>Logout o</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}
export default connect(mapStateToProps)(Home);
