import React from 'react';
import { Container } from '../../../Container/Container';
import Button from '../../../Button/Button';

export class SignBanner extends React.Component {
    render() {
        return (
            <section id="hs-sign">
                <Container>
                    <div className="row h-100 sb-row">
                        <div className="col-12 align-self-center text-center h-100 sb-content">
                            <h1>Inscrivez-vous gratuitement et commencez dès aujourd'hui.</h1>
                            <Button type="button" model="primary" size="lg" custom="btn-jag">S'inscrire maintenant</Button>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}