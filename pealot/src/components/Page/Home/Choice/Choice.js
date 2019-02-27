import React from 'react';
import { Container } from '../../../Container/Container';
import Icon from '../../../Icon/Icon';
import Button from '../../../Button/Button';


export class Choice extends React.Component {
    render() {
        return (
            <section id="h-uc">
                <Container>
                    <div className="row align-content-center c-row">
                        <div className="col-6 text-center h-100 c-col-1">
                            <Icon>verified_user</Icon>
                            <h3>Hôte</h3>
                            <p>Voulez-vous contribuer au futur du parking ?</p>
                            <Button type="button" model="dark" size="large" custom="btn-jag">Rejoignez Pealot</Button>
                        </div>
                        <div className="col-6 text-center h-100 c-col-2">
                            <Icon>directions_car</Icon>
                            <h3>Loueur</h3>
                            <p>Vous avez du mal à trouver une place dans votre ville ?</p>
                            <Button type="button" model="outline-primary" size="lg" custom="btn-jag">Utilisez Pealot</Button>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}