import React from 'react';

import RegisterForm from './RegisterForm/RegisterForm';
import { Container } from '../../Container/Container';

export class Register extends React.Component {
    render() {
        return (
            <section id="register">
                <Container>
                    <div className="row">
                        <div className="col-8">
                            <div className="row sign-form">
                                <div className="col-12">
                                    <h1>Créer un compte</h1>
                                    <RegisterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}