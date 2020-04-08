import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
           <div className="gambar-artikel">
             <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-danger" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;




// import React from "react";

// const Post = (props) => {
//     return(
//         <div className = "artikel">
//             <div className = "gambar-artikel">
//                 <img src = "http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
//             </div>
//             <div className = "konten-artikel">
//                 <div className = "judul-artikel">{props.NIM}</div>
//                 <p className = "isi-artikel">{props.nama}</p>
//                 <p className = "isi-artikel">{props.alamat}</p>
//                 <p className = "isi-artikel">{props.hp}</p>
//                 <p className = "isi-artikel">{props.angkatan}</p>
//                 <p className = "isi-artikel">{props.status}</p>
//                 <button className="btn btn-sm btn-warning" onClick={() => props.hapusDataMaha(props.NIM)}>Hapus</button>
//             </div>
//         </div>

//     )
// }

// export default Post;