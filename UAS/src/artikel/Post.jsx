import React from "react";
import semua from "../image/semua.jpg";

const Post = (props) => {
    return (
      <div className="artikel">
        <div className="gambar-artikel">
          <img src={semua} width="400" height="470" center></img>
        </div>
        <div className="konten-artikel">
          <div className="judul-artikel">{props.judul}</div>
          <p className="isi-artikel">{props.isi}</p>
          <button
            className="btn btn-sm btn-warning"
            onClick={() => {
              if (window.confirm("Apakah anda yakin menghapus artikel ini ?"))
                props.hapusArtikel(props.idArtikel);
            }}
          >
            Hapus
          </button>
        </div>
      </div>
    );
}

export default Post;