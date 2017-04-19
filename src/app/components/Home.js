/**
 * Created by Prateek on 4/19/2017.
 */
import React from 'react';

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
}