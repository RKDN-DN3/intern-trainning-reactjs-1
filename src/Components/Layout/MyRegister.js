

import React from "react";
import "./MyRegister.css";
class MyRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["username"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({ input: input });
            alert("Form is submitted");
        }
    }


    //date pass email name
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username !";
        }

        if (typeof input["username"] !== "undefined") {
            const re = /^\S*$/;
            if (input["username"].length < 6 || !re.test(input["username"])) {
                isValid = false;
                errors["username"] = "Please enter valid username !";
            }
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address !";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address !";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password !";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password !";
        }

        if (typeof input["password"] !== "undefined") {
            if (input["password"].length < 6) {
                isValid = false;
                errors["password"] = "Please add at least 6 charachter !";
            }
        }

        if (
            typeof input["password"] !== "undefined" &&
            typeof input["confirm_password"] !== "undefined"
        ) {
            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match !";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div className="container-register">
                <div className="tab-register">
                    <h5 className="title-h5">
                        Sign up for an account
                    </h5>
                    <form className="form-tab-register"
                        onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="Label" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="Input"
                                type="text"
                                name="username"
                                value={this.state.input.username}
                                onChange={this.handleChange}
                                id="username"
                            />

                            <div className="text-error">{this.state.errors.username}</div>
                        </div>

                        <div className="form-group">
                            <label className="Label" htmlFor="name">
                                Email
                            </label>
                            <input
                                className="Input"
                                type="text"
                                name="email"
                                value={this.state.input.email}
                                onChange={this.handleChange}
                                id="email"
                            />

                            <div className="text-error">{this.state.errors.email}</div>
                        </div>

                        <div className="form-group">
                            <label className="Label" htmlFor="name">
                                Password
                            </label>
                            <input
                                className="Input"
                                type="password"
                                name="password"
                                value={this.state.input.password}
                                onChange={this.handleChange}
                                id="password"
                            />

                            <div className="text-error">{this.state.errors.password}</div>
                        </div>

                        <div className="form-group">
                            <label className="Label" htmlFor="name">
                                Confirm Password
                            </label>
                            <input
                                className="Input"
                                type="password"
                                name="confirm_password"
                                value={this.state.input.confirm_password}
                                onChange={this.handleChange}
                                id="confirm_password"
                            />

                            <div className="text-error">
                                {this.state.errors.confirm_password}
                            </div>
                        </div>
                        <button className="btn-myregister">Register</button>
                    </form>
                    <div className="tab-image-register">

                    </div>
                </div>
            </div>
        );
    }
}

export default MyRegister;