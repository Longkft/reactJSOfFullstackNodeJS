import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

// import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            username: event.target.value,
        });
        // console.log(event.target.value);
    }

    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
        // console.log(event.target.value);
    }

    handleLogin = (event) => {
        console.log('username:' + this.state.username);
        console.log('password:' + this.state.password);
    }

    handleSoHidePassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <form action="" id="form-login">
                            <h1 class="form-heading">Form đăng nhập</h1>
                            <div className='all-group'>
                                <div class="form-group">
                                    <i class="far fa-user"></i>
                                    <input type="text" class="form-input" placeholder="Tên đăng nhập"
                                        value={this.state.username}
                                        onChange={(event) => { this.handleOnChangeInput(event) }}
                                    />
                                </div>
                                <div class="form-group">
                                    <i class="fas fa-key"></i>
                                    <input type={this.state.isShowPassword ? "text" : "password"}
                                        class="form-input" placeholder="Mật khẩu"
                                        value={this.state.password}
                                        onChange={(event) => { this.handleOnchangePassword(event) }}
                                    />
                                    <span className='ic' onClick={(event) => { this.handleSoHidePassword(event) }}>
                                        <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                    </span>
                                </div>
                                <div class="form-submit"
                                    onClick={(event) => { this.handleLogin(event) }}>
                                    Đăng nhập
                                </div>
                                <div className='forgot'>
                                    <span>Forgot password?</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
