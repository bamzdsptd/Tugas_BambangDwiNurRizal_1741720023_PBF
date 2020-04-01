import React, { useState } from "react";
import "./App.css";
import Logo from "./bamz.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import blogpost from "./container/BlogPost/BlogPost";
import satu from "./image/satu.jpeg";
import dua from "./image/dua.jpeg";
import tiga from "./image/tiga.jpeg";
import semua from "./image/semua.jpeg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function JamuMamaKeriz() {
  return (
    <Router>
      <div class="topnav">
        <Link to="/Home" class="active">
          Home
        </Link>
        <Link to="/jamu">Jamu " MAMA KERIZ "</Link>
        <Link to="/about">About</Link>
        <AuthButton />
      </div>
      <div>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
            <Footer />
          </Route>
          <PrivateRoute path="/jamu">
            <Jamu />
            <hr />
            <Footer />
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About />
            <Footer />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true; //fake async
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div className="Q">
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/Home"));
        }}
      >
        Sign Out
      </button>
      </div>
  ) : (
    <div className="Q">
    <button>Login</button>
    </div>
  );
}

//Pembungkus untuk <Route> yang mengarahkan ke login
//tampilan jika anda belum terkonfirmasi

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

function Home() {
  return (
    <div align="center">
      <br />
      <img src={semua} width="700" height="500" center></img>
      <div class="P">JAMU " MAMA KERIZ "</div>
      <div class="p">
      <p>
        Jamu adalah sebutan untuk obat tradisional dari Indonesia. Belakangan
        populer dengan sebutan herba atau herbal. Jamu dibuat dari bahan-bahan
        alami, berupa bagian dari tumbuhan seperti rimpang (akar-akaran),
        daun-daunan, kulit batang, dan buah. Ada juga menggunakan bahan dari
        tubuh hewan, seperti empedu kambing, empedu ular, atau tangkur buaya.
        Seringkali kuning telur ayam kampung juga dipergunakan untuk tambahan
        campuran pada jamu gendong.
      </p>
      <p>
        Jamu biasanya terasa pahit sehingga perlu ditambah madu sebagai pemanis
        agar rasanya lebih dapat ditoleransi peminumnya. Bahkan ada pula jamu
        yang ditambah dengan anggur. Selain sebagai pengurang rasa pahit, anggur
        juga berfungsi untuk menghangatkan tubuh. Kabupaten Sukoharjo[1]
        merupakan sentra penjualan jamu tradisional yang cukup dikenal di
        Indonesia. Kabupaten Sukoharjo merupakan salah satu kabupaten yang
        termasuk dalam Provinsi Jawa Tengah.
      </p>
      <p>
        Dari banyaknya pedagang jamu tradisional di Kabupaten Sukoharjo, maka
        didirikanlah patung identitas Sukoharjo yaitu patung Jamu Gendong yang
        ada di Bulakrejo. Biasa disebut patung Jamu Gendong karena patungnya
        menggambarkan seorang petani dan seorang penjual jamu gendong. Daerah
        Sukoharjo, khususnya kecamatan Nguter, memang terkenal sebagai daerah
        asal penjual jamu gendong di berbagai kota besar, seperti Jakarta,
        Bandung, Bogor, Surabaya.
      </p>
      </div>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  alert(`You must log in to view the page at ${from.pathname}`);
  const [username, setUsername] = useState("bambang_react");
  const [password, setPassword] = useState("bambang_react");
  return (
    <div className="border">
      <h1>JAMU</h1>
      <h1>" MAMA KERIZ "</h1>
      <br></br>
      <table align="center">
        <thead>
          <td>
            <label>Username</label>
          </td>
          <td>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              placeholder="masukan username"
            />
          </td>
        </thead>
        <tbody>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="masukan password"
            />
          </td>
        </tbody>
      </table>
      <button
        type="submit"
        className="b"
        disabled={!username || !password}
        onClick={login}
      >
        Login
      </button>
      <br></br>
      <input type="checkbox" name="" id="" />
      <label>Remember Me</label>
      <br></br>
      <br></br>
      <button className="cancel"> Cancel </button>
    </div>
  );
}

function Jamu() {
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <div className="row mt-5">
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
              <Button variant="btn btn-primary">
                <Link
                  class="warnaB"
                  to={`${url}/Anda berhasil membeli jamu kunir madu!`}
                >
                  Beli
                </Link>
              </Button>
            </div>
          </div>
        </div>

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
              <Button variant="btn btn-primary">
                <Link
                  class="warnaB"
                  to={`${url}/Anda berhasil membeli jamu beras kencur!`}
                >
                  Beli
                </Link>
              </Button>
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
              <Button variant="btn btn-primary">
                <Link
                  class="warnaB"
                  to={`${url}/Anda berhasil membeli jamu sinom!`}
                >
                  Beli
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path={path}>
            <h3> </h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function About() {
  
  return (
    <div className ="p">
      <table class="table-noborder">
        <tr>
          <td rowSpan="10">
            <img src={Logo} alt="" width="500px" height="550px"></img>
          </td>
          <td>Nama</td>
          <td>:</td>
          <td>Bambang Dwi Nur Rizal</td>
        </tr>
        <tr>
          <td>TTL</td>
          <td>:</td>
          <td>Sukoharjo, 1 Juni 1999</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>:</td>
          <td>Laki - laki</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>JL. Sukun Sidomulyo RT.04 RW.07</td>
        </tr>
        <tr>
          <td>No. HP</td>
          <td>:</td>
          <td>089514574261</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>:</td>
          <td>Mahasiswa</td>
        </tr>
        <tr>
          <td>Hobi</td>
          <td>:</td>
          <td>Makan</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>bambangdnr09@gmail.com</td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td>:</td>
          <td>https://github.com/bamzdsptd/Tugas_</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td>BambangDwiNurRizal_1741720023_PBF</td>
        </tr>
      </table>
      <blogpost />
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div className="R">
      <h3>{topicId}</h3>
    </div>
  );
}

const Footer = () => {
  return (
    <div class="footer">
      <p>Copyright © Bambang Dwi Nur Rizal 2020</p>
    </div>
  );
};
