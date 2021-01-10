import React from 'react';
import {Link} from 'react-router-dom';
import { userActions } from '../../enums/actions';

export default class user extends React.Component {

    constructor(){
        super();
    }
    
    

    render(){
        return(
            <div>I am user
                <Link to={"/user/register"}>register</Link>
                <br></br>
                <Link to ={"/user/update"}>update</Link>
            </div>
        );
    }

}