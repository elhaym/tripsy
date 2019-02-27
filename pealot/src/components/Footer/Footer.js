import React from 'react';
import { Link } from "react-router-dom";

import { Container } from '../Container/Container';

import data from './api/data.json';

export class Footer extends React.Component {
    constructor() {
        super();
        this.getPages = this.getPages.bind(this);
    }

    /**
     * Get all categories and their links
     * from the JSON data file
     */
    getPages = (data) => {
        let ct = 0;
        return (
            data.map((category, i) => {
                return (
                    <div className="col-2">
                        <h6>{category.name}</h6>
                        <ul className={"list-group list-group-flush footer-item-" + i}>
                            {
                                category.page.map((link, j) => {
                                    ct++;
                                    return (
                                        <li className={"list-group-item footer-cat-item-" + ct}>
                                            <Link to={"/" + link.path} className="nav-links">{link.name}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                );
            })
        );
    }
    render() {
        let aDate = new Date();
        return (
            <footer>
                <Container>
                    <div className="row">
                        <div className="col-4">P E A L O T</div>
                        {this.getPages(data)}
                    </div>
                    <div className="row copyright">
                        <div className="col-6">
                            Suivez-nous sur les réseaux sociaux
                        </div>
                        <div className="col-6 justify-content-end text-right">© {aDate.getFullYear()} Pealot, Inc. All rights reserved.</div>
                    </div>
                </Container>
            </footer>
        )
    }
}