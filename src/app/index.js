/**
 * Created by Prateek on 4/17/2017.
 */
import React from "react";
import {render} from "react-dom";
import '../css/main.scss'

import {Header} from './components/Header';
import {Home} from './components/Home';


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet(){
        alert("Hello");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    // render () - called by react whenever it feels it has to render the component
    render(){
        // return what should be rendered
        // This is JSX - Javascript mixed with XML/HTML
        // Following code is equivalent: to
        // document.createElement("div");
        // Following code is convenient way to do above command.
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home initialLinkName={this.state.homeLink} changeLink={this.onChangeLinkName.bind(this)} name={"Prateek"} initialAge={25} greet={this.onGreet}/>
                    </div>
                </div>
            </div>
        );
    }
}


/* Code for Props
class App extends React.Component{
    // render () - called by react whenever it feels it has to render the component
    render(){
        let user = {
            name: "Anna",
            hobbies: ["Soccer", "Swim","Sing"]
        }
        // return what should be rendered
        // This is JSX - Javascript mixed with XML/HTML
        // Following code is equivalent: to
        // document.createElement("div");
        // Following code is convenient way to do above command.
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Prateek"} age={25} user={user}>
                            <p>Check how to access this element in Home.js</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}*/

render(<App/>, window.document.getElementById("app"));