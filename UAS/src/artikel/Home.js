import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import semua from "../image/semua.jpg";

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
          <img src={semua} width="400" height="470" center></img>
          <div class="P">JAMU " MAMA KERIZ "</div>
          <div class="p">
            <p>
              Jamu adalah sebutan untuk obat tradisional dari Indonesia.
              Belakangan populer dengan sebutan herba atau herbal. Jamu dibuat
              dari bahan-bahan alami, berupa bagian dari tumbuhan seperti
              rimpang (akar-akaran), daun-daunan, kulit batang, dan buah. Ada
              juga menggunakan bahan dari tubuh hewan, seperti empedu kambing,
              empedu ular, atau tangkur buaya. Seringkali kuning telur ayam
              kampung juga dipergunakan untuk tambahan campuran pada jamu
              gendong.
            </p>
            <p>
              Jamu biasanya terasa pahit sehingga perlu ditambah madu sebagai
              pemanis agar rasanya lebih dapat ditoleransi peminumnya. Bahkan
              ada pula jamu yang ditambah dengan anggur. Selain sebagai
              pengurang rasa pahit, anggur juga berfungsi untuk menghangatkan
              tubuh. Kabupaten Sukoharjo[1] merupakan sentra penjualan jamu
              tradisional yang cukup dikenal di Indonesia. Kabupaten Sukoharjo
              merupakan salah satu kabupaten yang termasuk dalam Provinsi Jawa
              Tengah.
            </p>
            <p>
              Dari banyaknya pedagang jamu tradisional di Kabupaten Sukoharjo,
              maka didirikanlah patung identitas Sukoharjo yaitu patung Jamu
              Gendong yang ada di Bulakrejo. Biasa disebut patung Jamu Gendong
              karena patungnya menggambarkan seorang petani dan seorang penjual
              jamu gendong. Daerah Sukoharjo, khususnya kecamatan Nguter, memang
              terkenal sebagai daerah asal penjual jamu gendong di berbagai kota
              besar, seperti Jakarta, Bandung, Bogor, Surabaya
            </p>
          </div>
        </div>
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
