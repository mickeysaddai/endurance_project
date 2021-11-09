import React from "react";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';

// import Unsplash from '../../../app/assets/images/unsplash.jpg'
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: false
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.processForm(user);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    handleClickShowPassword = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword})
    }

    render() {
        const { showPassword } = this.state;
    
        let navLink = this.props.formType === 'login' ? <Link to='/signup'>Sign Up</Link> : <Link to='/login'>Log In</Link>

        return (
        <div className="columns">
            <div className="column is-half">
                <div>
                    <img src="https://images.unsplash.com/photo-1553969546-6f7388a7e07c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80" alt="" />
                </div>
              </div>
             <div>   
            <form className="column" onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Please {this.props.formType} or {navLink} to get started with Endurance </h3>
                {this.renderErrors()}
            <div style={{ marginTop: "50px"}}> 
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
               <TextField
                    id="outlined-name"
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                /> 
                  </FormControl>
             <FormControl style={{marginTop: "20px"}} fullWidth sx={{ m: 1 }} variant="filled">
                   <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
               <OutlinedInput
                    id="outlined-name"
                    label="Password"
                    type={showPassword ? "password" : "text" }  
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                        /> 
                          </FormControl>
               
            </div>
             <FormControl fullWidth sx={{ m: 1 }} variant="filled">            
                <button className="button is-success is-rounded"  onClick={this.handleSubmit}>{this.props.formType === 'login' ? 'Log In' : 'Sign Up' }</button>
              </FormControl>

            </form>   
         </div>
        </div>
        )
    }
}

export default SessionForm;

