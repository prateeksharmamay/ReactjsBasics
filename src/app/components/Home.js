/**
 * Created by Prateek on 4/19/2017.
 */
import React from 'react';
import PropTypes from 'prop-types'

export class Home extends React.Component{

    // es6 specific
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
        /*this.age+= 3;
        console.log(this.age);*/
        // Onclick this function our view is not changing because react only changes if the "STATE" has changes
    }

    render(){
        let data = this.props;
        console.log(this.props);
        return(
            <div>
                <p>In a New Component</p>
                <p>Your name: {data.name}</p>
                <p>Your age: {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                {/*Because of scope we have to bind the current 'this' to the current run of function*/}
                {/*<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make Me Older</button>*/}

                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make Me Older</button>
                {/*Another way to run this*/}
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
}

/* Code for Props Practice
export class Home extends React.Component{
    render(){
        let data = this.props;
        console.log(this.props);
        return(
            <div>
                <p>In a New Component</p>
                <p>Your name: {data.name}</p>
                <p>Your age: {data.age}</p>
                <p>User object: {data.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {data.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {data.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}*/

/*
Code for dynamic data
export class Home extends React.Component{
    render(){
        let content = "";
        let para =  "";

        if(true){
            content = "Aloha";
            para = <p>New Para</p>;
        }

        return(
            <div>
                <p>In a New Component</p>
                {2+1}
                {content}
                {para}
                {8 == 3 ? "Yes" : "No"}
            </div>
        );
    }
}*/
