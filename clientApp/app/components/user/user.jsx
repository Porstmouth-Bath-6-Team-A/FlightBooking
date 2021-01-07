import React from 'react';
import {Link} from 'react-router-dom';

export default class user extends React.Component {

    constructor(){
        super();
    }
    
    

    render(){
        return(
            <div>I am user
                <Link to={"/user/register"}>register</Link>
            </div>
        );
    }

}