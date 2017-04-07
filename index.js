'use strict';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Registration = function(_React$Component) {
    _inherits(Registration, _React$Component);

    function Registration() {
        var _this;

        _classCallCheck(this, Registration);

        (_this = _possibleConstructorReturn(this, _React$Component.call(this)), _this), _this.state = {
            errorUserMessage: '',
            username: '',
            password: '',
            conPassword: '',
            error: 0
        };
        return _this;
    }

    Registration.prototype.onUsernameChange = function onUsernameChange(e) {
        var usernameExists = ['chelle', 'username', 'venturina'];

        this.setState({
            username: e.target.value
        }, function() {
            if (usernameExists.indexOf(this.state.username) > -1) {
                this.setState({
                    errorUserMessage: 'Username already exists! Please try again',
                    error: +1
                });
            } else {
                this.setState({
                    errorUserMessage: '',
                    error: -1
                });
            }
        });
    };

    Registration.prototype.onEmailChange = function onEmailChange(e) {
        this.setState({
            email: e.target.value
        });

        if (String(this.state.email).match(/(.+)@(.+){2,}\.(.+){2,}/)) {
            this.setState({
                errorEmailMessage: '',
                error: -1
            });
        } else {
            this.setState({
                errorEmailMessage: 'Invalid email',
                error: +1
            });
        }
    };

    Registration.prototype.onPasswordChange = function onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    };

    Registration.prototype.onConPasswordChange = function onConPasswordChange(e) {
        this.setState({
            conPassword: e.target.value
        });
    };

    Registration.prototype.validatePass = function validatePass(e) {

        if (this.state.password === this.state.conPassword) {
            this.setState({
                errorPasswordMessage: '',
                error: -1
            });
        } else {
            this.setState({
                errorPasswordMessage: 'Password not match!',
                error: +1
            });
        }
    };

    Registration.prototype.onSubmit = function onSubmit(e) {
        if (this.state.username === '' || this.state.email === '' || this.state.password === '' || this.state.conPassword === '') {
            this.setState({
                errorMessage: 'Please Fill up all required fields.'
            });
        } else {
            if (this.state.error > -1) {
                console.log(this.state.error);
                this.setState({
                    errorMessage: 'Please fixed all the errors in fields'
                });
            } else {
                this.setState({
                    errorMessage: 'You Successfully created an account!'
                });
            }
        }
    };

    Registration.prototype.render = function render() {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div', {
                    className: 'container'
                },
                React.createElement(
                    'h2',
                    null,
                    'SIGN UP'
                ),
                React.createElement(
                    'div', {
                        className: 'errorMessage'
                    },
                    this.state.errorMessage
                ),
                React.createElement(
                    'form',
                    null,
                    React.createElement('input', {
                        type: 'text',
                        value: this.state.username,
                        onChange: this.onUsernameChange.bind(this),
                        onKeyDown: this.onUsernameChange.bind(this),
                        placeholder: 'Enter Username *'
                    }),
                    React.createElement(
                        'div', {
                            className: 'errorMessage'
                        },
                        this.state.errorUserMessage
                    ),
                    React.createElement('input', {
                        type: 'email',
                        value: this.state.email,
                        onChange: this.onEmailChange.bind(this),
                        placeholder: 'email@mail.com  *'
                    }),
                    React.createElement(
                        'div', {
                            className: 'errorMessage'
                        },
                        this.state.errorEmailMessage
                    ),
                    React.createElement('input', {
                        type: 'password',
                        value: this.state.password,
                        onChange: this.onPasswordChange.bind(this),
                        onKeyUp: this.validatePass.bind(this),
                        placeholder: 'Password *'
                    }),
                    React.createElement('input', {
                        type: 'password',
                        value: this.state.conPassword,
                        onChange: this.onConPasswordChange.bind(this),
                        onKeyUp: this.validatePass.bind(this),
                        placeholder: 'Confirm Password *'
                    }),
                    React.createElement(
                        'div', {
                            className: 'errorMessage'
                        },
                        this.state.errorPasswordMessage
                    ),
                    React.createElement('br', null),
                    React.createElement('input', {
                        type: 'button',
                        value: 'SUBMIT',
                        onClick: this.onSubmit.bind(this)
                    })
                ),
                React.createElement('br', null)
            )
        );
    };

    return Registration;
}(React.Component);

ReactDOM.render(React.createElement(Registration, null), document.getElementById('app'));
