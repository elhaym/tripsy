import React from 'react';
import { Container } from '../../Container/Container';
import LoginForm from './LoginForm/LoginForm';

export class Login extends React.Component {
    render() {
        return (
            <section id="login">
                <Container>
                    <div className="row">
                        <div className="col-6">
                            <div className="row lgn-form">
                                <div className="col-12">
                                    <h1>Connexion au compte</h1>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row h-100">
                                <div className="col-12 lgn-banner">
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}