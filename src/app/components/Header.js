/**
 * Created by Prateek on 4/19/2017.
 */
import React from 'react';
// For components, that do not require to deal with states.
// We should create them as Stateless Components

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

/*
// Used Till We dont needed stateless components
export class Header extends React.Component{
    render(){
        return(
           <nav className="navbar navbar-default">
               <div className="container">
                   <div className="navbar-header">
                       <ul className="nav navbar-nav">
                           <li><a href="#">Home</a></li>
                       </ul>
                   </div>
               </div>
           </nav>
        );
    }
}*/
