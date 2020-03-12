//PRAKTIKUM 1 :ROUTER

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function BasicExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <br />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About(){
//   return(
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard(){
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

//PRAKTIKUM 2: PARAMS

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

// export default function ParamsExample(){
//   return(
//     <Router>
//       <div>
//        <h2>
//          Accounts
//        </h2>
//        <ul>
//          <li>
//            <Link to="/netflix">Netflix</Link>
//          </li>
//          <li>
//            <Link to="/gmail">Gmail</Link>
//          </li>
//          <li>
//            <Link to="/yahoo">Yahoo</Link>
//          </li>
//          <li>
//            <Link to="/amazon">Amazon</Link>
//          </li>
//        </ul>
//        <Switch>
//          <Route path="/:id" children={<Child />} />
//        </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child(){
//   let { id } = useParams();

//   return(
//     <div>
//       <h3>ID : {id}</h3>
//     </div>
//   );
// }

//PRAKTIKUM 3 : USE NESTING ROUTER


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

// export default function NestingExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
          // <Route exact path="/">
          //   <Home />
          // </Route>
          // <Route path="/topics">
          //   <Topics />
          // </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }

// function Topics(){
//   let { path, url } = useRouteMatch();
//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata Alama, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// function Topic(){
//   let {topicId} = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   )
// }

//PRAKTIKUM 4 : USE REDIRECTS (AUTH)

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";

// export default function AuthExample(){
//   return(
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
          // <Route path="/login">
          //   <LoginPage />
          // </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated:false,
//   authenticate(cb){
//     fakeAuth.isAuthenticated =true; //fake async
//     setTimeout(cb, 100);
//   },
//   signout(cb){
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton(){
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!(" ")
//       <br />
//       <button onClick={() =>{
//         fakeAuth.signout(() => history.push("/"));
//       }}>
//         Sign Out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// }

// //Pembungkus untuk <Route> yang mengarahkan ke login
// //tampilan jika anda belum terkonfirmasi

// function PrivateRoute({ children, ...rest}) {
//   return(
//     <Route {...rest} render={({location}) => fakeAuth.isAuthenticated ? (
//       children
//       ) : (
//       <Redirect to ={{pathname: "/login", state: { from: location}}} />
//       ) 
//       }  
//     />
//   );
// }

// function PublicPage(){
//   return <h3>Public</h3>;
// }

// function ProtectedPage(){
//   return <h3>Private</h3>
// }

// function LoginPage(){
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || {from:{pathname:"/"}};
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log In</button>
//     </div>
//   );
// }

//TUGAS

import React from 'react';
import './App.css';
import Logo from './bamz.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";



export default function Navbar() {
  return (
    <Router>
        <div class="topnav">
          
            
            <Link to="/Home" class="active">Home</Link>
            <Link to="/rumahtangga">Kategori Rumah Tangga</Link>
            <Link to="/mobil">Kategori Mobil</Link>
            <Link to="/motor">Kategori Motor</Link>
            <AuthButton /> 
            
          </div>
          <div>
          <hr />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/rumahtangga">
            <RumahTangga />
          </PrivateRoute>
          <PrivateRoute path="/mobil">
            <Mobil />
          </PrivateRoute>
          <PrivateRoute path="/motor">
            <Motor />
          </PrivateRoute>
        </Switch>
        <Footer />
        </div>
    </Router>
    
    
  );
}

const fakeAuth = {
  isAuthenticated:false,
  authenticate(cb){
    fakeAuth.isAuthenticated =true; //fake async
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      <button onClick={() =>{
        fakeAuth.signout(() => history.push("/Home"));
      }}>
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

//Pembungkus untuk <Route> yang mengarahkan ke login
//tampilan jika anda belum terkonfirmasi

function PrivateRoute({ children, ...rest}) {
  return(
    <Route {...rest} render={({location}) => fakeAuth.isAuthenticated ? (
      children
      ) : (
      <Redirect to ={{pathname: "/login", state: { from: location}}} />
      ) 
      }  
    />
  );
}

function Home() {
  return (
    <div>
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
    </div>
  )
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  

  let { from } = location.state || {from:{pathname:"/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  alert(`You must log in to view the page at ${from.pathname}`)
  return (
    
    <div class= "">
      <button onClick={login}>Log In</button>
    </div>
      
    
  );
}




function RumahTangga(){
  return (
    <div>
      <h2>INI PAGE KATEGORI RUMAH TANGGA</h2>
    </div>
  )
}

function Mobil(){
  return (
    <div>
      <h2>INI PAGE KATEGORI MOBIL</h2>
    </div>
  )
}

function Motor(){
  return (
    <div>
      <h2>INI PAGE KATEGORI MOTOR</h2>
    </div>
  )
}

const Footer = () => {
  return(
    <div class="footer">
      <p>Copyright © Bambang Dwi Nur Rizal 2020</p>
    </div>
  )
}






