import React from 'react';

import { Container } from '../../../Container/Container';
import BillboardBanner from './BillboardBanner';
import FilledButton from '../../../Button/FilledButton';
import OutlinedButton from '../../../Button/OutlinedButton';
import { BrowserRouter, Link } from 'react-router-dom';

const guideButtonIcon = require('../../../../medias/images/icons/face_id_128x128.png');
const locateButtonIcon = require('../../../../medias/images/icons/location_star_128x128.png');


export class Billboard extends React.Component {
    render() {
        return (
            <section id="bb-s">
                <Container>
                    <div className="row h-100">
                        <div className="col-6 col-lg-6 col-sm-12 col-md-7">
                            <div className="col-12 bb-title-wrapper">
                                <h1 className="bb-m-title slideInUp">Osez voyager différemment,</h1>
                                <h4 className="bb-c-title slideInUp">Réservez des expériences uniques guidés par des locaux à travers le monde et vivez des moments inoubliables</h4>
                                <div className="bb-act-prev">
                                    <h5>Concept, c'est vous</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <p>
                                                Faites découvrir les richesses de votre région. Rentabilisez votre activité.
                                                <br />
                                                <Link to="/">En savoir plus</Link>
                                            </p>

                                            <br />
                                            <FilledButton type="dark" size="lg" custom="btn-jag">
                                                Proposez une expérience
                                                <img src={guideButtonIcon} className="img-fluid float-right" alt="Proposez une expérience" width="36" />
                                            </FilledButton>
                                        </div>
                                        <div className="col-6 justify-content-end">
                                            <p>
                                                Réservez une expérience de voyage. Découvrez des endroits uniques.
                                                <br />
                                                <Link to="/">En savoir plus</Link>
                                            </p>
                                            <br />
                                            <OutlinedButton type="primary" size="lg" custom="btn-jat">
                                                Trouvez un guide expérimenté
                                                <img src={locateButtonIcon} className="img-fluid float-right" alt="Trouvez un guide expérimenté" width="36" />
                                            </OutlinedButton>
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