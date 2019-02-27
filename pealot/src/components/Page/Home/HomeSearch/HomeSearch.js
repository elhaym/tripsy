import React from 'react';
import { Container } from '../../../Container/Container';
import Icon from '../../../Icon/Icon';


export class HomeSearch extends React.Component {
    render() {
        return (
            <section id="hs-s">
                <Container>
                    <div className="row justify-content-center align-items-center hs-d">
                        <div className="col-11 h-100 hs-b">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-8 cb cb-lft">
                                    <div className="row row h-100 align-content-center">
                                        <div className="col-9 overflow-hidden">
                                            <h2>Un gain de temps quotidien</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at mi imperdiet, porta metus in, ultrices enim. Aliquam id viverra odio.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 cb">
                                </div>
                            </div>
                            <div className="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 offset-3 info">
                                <div className="row row h-100 align-content-center">
                                    <div className="col-7">
                                        <h5>Trouvez un emplacement</h5>
                                    </div>
                                    <div className="col-5 align-self-center text-right">
                                        <Icon>arrow_forward</Icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 h-100 hs-f">
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}