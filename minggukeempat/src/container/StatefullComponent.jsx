import React from 'react';
import './StatefullComponent.css'

class StatefullComponent extends React.Component{
    
    render (){
        return (
            <div>
                
                <h2 className='p'>Form Login</h2>
                <div className='border'>
                    <h1 className='p'>Tugas Minggu</h1>
                    <h1>Keempat</h1>
                    <br></br>
                    <table align="center">
                        <thead>
                            <td><label>Username</label></td>
                            <td><input type="text" name="username" id="username" placeholder="masukan username"/></td>
                        </thead>
                        <tbody>
                            <td><label>Password</label></td>
                            <td><input type="text" name="username" id="username" placeholder="masukan password"/></td>
                        </tbody>
                    </table>
                    <button>Login</button><br></br>
                    <input type="checkbox" name="" id=""/><label>Remember Me</label><br></br><br></br>
                    <button className="cancel"> Cancel </button>
                </div>
            </div>
        )
    }
    
}

export default StatefullComponent;