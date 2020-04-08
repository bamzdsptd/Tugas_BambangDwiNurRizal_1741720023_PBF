import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../services";

class BlogPost extends Component{
    state = { // komponen state dari react untuk statefull component
        mahasiswa:[], //variabel array yang digunakan untuk menyimpan data API
        insertDataMaha:{ //variable yang digunakan untuk menampung sementara data yang akan di insert
            id : 1,
            NIM: 1, // kolom userid, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json
            nama: "",
            alamat: "",
            hp: 1,
            angkatan: 1,
            status:""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                mahasiswa: result
            })
        })
    }

    componentDidMount(){ // komponen untuk mengecek ketika component telah di mount-int, maka panggil API
        this.ambilDataDariServerAPI();
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }
    
    handleTambahArtikel = (event) => {
        let formInsertDataMaha = {...this.state.insertDataMaha};
        let timestamp = new Date().getTime();
        formInsertDataMaha['id'] = timestamp;
        formInsertDataMaha[event.target.name] = event.target.value;
        this.setState({
            insertDataMaha: formInsertDataMaha
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertDataMaha)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return(
            <div className = "post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">HP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>DATA MAHASISWA</h2>
                {
                    this.state.mahasiswa.map(dataMaha => {
                        return <Post key={dataMaha.id} idMahasiswa ={dataMaha.id}  NIM={dataMaha.NIM} nama={dataMaha.nama} 
                        alamat={dataMaha.alamat} hp={dataMaha.hp} angkatan={dataMaha.angkatan} 
                        status={dataMaha.status} hapusDataMaha={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;