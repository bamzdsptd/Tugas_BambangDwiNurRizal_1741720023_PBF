import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Logo from './bamz.jpg';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Table/>
      <Footer/>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="navbar">
      <navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Bamz.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">My Biodata <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Bamz</a>
            <a class="nav-item nav-link" href="#">Dnr</a>
          </div>
        </div>
      </navbar>    
    </div>
  );
}



const Table = () => {
  return(
      <table class="table-noborder">
      <tr>  
        <td rowSpan="10"><img src={Logo} alt="" width="500px" height="550px"></img></td>
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
  )
}
const Footer = () => {
  return(
    <div class="navbar fixed-bottom">
      <p>bambangdnr09@gmail.com</p>
    </div>
  )
}





export default App;
