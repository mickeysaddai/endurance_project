import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import UserFormContainer from "./profile/user_form_container"
import CreateActivityFormContainer from './activities/create_activity_form_container'
import ActivityIndexContainer from "./activities/activity_index_container"
import EditActivityFormContainer from "./activities/edit_activity_form_container"
import { AuthRoute } from "../util/route_util";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import UserForm from "./profile/user_form";
import Navbar from '../components/navbar';
import { render } from "react-dom";
import { connect } from "react-redux";

class App extends React.Component{

    render(){

        return (
         <div>  
             <Navbar /> 
              <Switch>
                   <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <div className="columns"> 
                <div className="column" />
            <div className="column is-two-thirds">
                <Route exact path='/activities/profile' component={UserFormContainer}></Route>
                <Route exact path='/activities/new' component={CreateActivityFormContainer}></Route>
                <Route exact path='/activities/edit/:id' component={EditActivityFormContainer}></Route>
                <Route exact path='/' component={ActivityIndexContainer}></Route>
            </div>
              <div className="column" />
           
        </div>
          </Switch>
        </div>
        )
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
         fetchActivities: () => dispatch(fetchActivities()),
    }

}


export default connect(null, mapDispatchToProps)(App);