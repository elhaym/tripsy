import React from 'react';

import { Container } from '../../../Container/Container';
import BillboardBanner from './BillboardBanner';
import Button from '../../../Button/Button';
import { BrowserRouter, Link } from 'react-router-dom';

const guideButtonIcon = require('../../../../medias/images/icons/face_id_128x128.png');
const locateButtonIcon = require('../../../../medias/images/icons/location_star_128x128.png');


export class Billboard extends React.Component {
    render() {
        return (
            <section id="bb-s">
                <Container>
                    <div className="row h-100">
                        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 bb-title-wrapper">
                                <h1 className="bb-m-title slideInUp">Osez voyager différemment,</h1>
                                <h4 className="bb-c-title slideInUp">Réservez des expériences uniques guidés par des locaux à travers le monde et vivez des moments inoubliables</h4>
                                <div className="bb-act-prev">
                                    <h5>Tripsy, c'est vous</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <p>
                                                Faites découvrir les richesses de votre région. Rentabilisez votre activité.
                                                <br />
                                                <Link to="/">En savoir plus</Link>
                                            </p>
                                            <br />
                                            <Button type="button" model="dark" size="lg" custom="btn-jag">
                                                Proposez une expérience
                                            </Button>
                                        </div>
                                        <div className="col-6 justify-content-end">
                                            <p>
                                                Réservez une expérience de voyage. Découvrez des endroits uniques.
                                                <br />
                                                <Link to="/">En savoir plus</Link>
                                            </p>
                                            <br />
                                            <Button type="button" model="outline-primary" size="lg" custom="btn-jat">
                                                Trouvez un guide expérimenté
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