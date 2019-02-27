import React from 'react';

import { Container } from '../../../Container/Container';
import BillboardBanner from './BillboardBanner';
import Button from '../../../Button/Button';
import { Link } from 'react-router-dom';


export class Billboard extends React.Component {
    render() {
        return (
            <section id="bb-s">
                <Container>
                    <div className="row h-100">
                        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 bb-title-wrapper">
                                <h1 className="bb-m-title slideInUp">Finies les rondes incessantes,</h1>
                                <h4 className="bb-c-title slideInUp">Réservez des emplacements de parking pratiques partout dans le monde et économisez votre temps</h4>
                                <div className="bb-act-prev">
                                    <h5>Pealot, c'est vous</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <p>
                                                Offrez à des individus la possibilité de stationner. Rentabilisez votre place.
                                                <br />
                                                <Link to="/">En savoir plus</Link>
                                            </p>
                                            <br />
                                            <Button type="button" model="dark" size="lg" custom="btn-jag">
                                                Proposez un emplacement
                                            </Button>
                                        </div>
                                        <div className="col-6 justify-content-end">
                                            <p>
                                                Choisissez votre place. Garez vous librement et en toute sécurité.
                                                <br />
                                                <Link to="/">En savoir plus</Link>
                                            </p>
                                            <br />
                                            <Button type="button" model="outline-primary" size="lg" custom="btn-jat">
                                                Réservez un emplacement
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BillboardBanner />
                    </div>
                </Container>
            </section>
        );
    }
}