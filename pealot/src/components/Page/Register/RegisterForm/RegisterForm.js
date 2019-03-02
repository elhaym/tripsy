import React from 'react';
import Button from '../../../Button/Button';

const RegisterForm = () => {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="registerInputFirstName1">Prénom</label>
                    <input type="text" className="form-control" id="registerInputFirstName1" placeholder="John" />
                </div>
                <div className="form-group col-md-6">
                    <label for="registerInputLastName1">Nom</label>
                    <input type="text" className="form-control" id="registerInputLastName1" placeholder="Doe" />
                </div>
            </div>
            <div className="form-group">
                <label for="registerInputAddress1">Adresse</label>
                <input type="text" className="form-control" id="registerInputAddress1" placeholder="Bâtiment, rue, voie etc." />
            </div>
            <div className="form-group">
                <label for="registerInputAddress2">Complément d'adresse</label>
                <input type="text" className="form-control" id="registerInputAddress2" placeholder="Appartement, studio, étage etc." />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="registerInputCity1">Ville</label>
                    <input type="text" className="form-control" id="registerInputCity1" placeholder="Ville" />
                </div>
                <div className="form-group col-md-4">
                    <label for="registerInputState1">Département/Etat</label>
                    <input type="text" className="form-control" id="registerInputState1" placeholder="Départment" />
                </div>
                <div className="form-group col-md-2">
                    <label for="registerInputZip1">Code postal</label>
                    <input type="text" className="form-control" id="registerInputZip1" placeholder="Code postal" />
                </div>
            </div>
            <div className="form-group">
                <label for="registerInputEmail1">Adresse email</label>
                <input type="email" className="form-control" id="registerInputEmail1" placeholder="example@pealot.com" />
            </div>
            <div className="form-group">
                <label for="registerInputEmail2">Confirmer adresse email</label>
                <input type="email" className="form-control" id="registerInputEmail2" placeholder="example@pealot.com" />
            </div>
            <div className="form-group">
                <label for="registerInputPassword1">Mot de passe</label>
                <input type="password" className="form-control" id="registerInputPassword1" aria-describedby="passwordHelp" placeholder="Mot de passe" />
                <small id="passwordHelp" className="form-text text-muted">Un mot de passe comprenant au moins 8 caractères alphanumériques, spéciaux, en majuscules et minuscules est fortement recommandé pour la sécurité de votre compte.</small>
            </div>
            <div className="form-group">
                <label for="registerInputPassword2">Confirmer votre mot de passe</label>
                <input type="password" className="form-control" id="registerInputPassword2" placeholder="Resaisissez votre mot de passe" />
            </div>
            <Button type="button" model="primary" size="lg" custom="btn-jag btn-sign">Passer à l'étape suivante →</Button>
        </form>
    )
}

export default RegisterForm;