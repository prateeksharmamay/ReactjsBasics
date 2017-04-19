/**
 * Created by Prateek on 4/19/2017.
 */
import React from 'react';
import PropTypes from 'prop-types'

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
}

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
