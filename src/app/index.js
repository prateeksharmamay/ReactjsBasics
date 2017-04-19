/**
 * Created by Prateek on 4/17/2017.
 */
import React from "react";
import {render} from "react-dom";
import '../css/main.scss'


class App extends React.Component{
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
                        <h1>hello!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));