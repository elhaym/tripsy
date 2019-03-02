import React from 'react';
import { Link } from 'react-router-dom';


import Button from '../../../Button/Button';


const LoginForm = (props) => {
    return (
        <form>
            <div className="form-group">
                <label for="loginInputEmail1">Adresse email</label>
                <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email" />
                <small id="emailHelp" className="form-text text-muted">Vérifiez si vous avez confirmé votre adresse email lors de votre inscription.</small>
            </div>
            <div className="form-group">
                <label for="loginInputPassword1">Mot de passe</label>
                <input type="password" className="form-control" id="loginInputPassword1" placeholder="Mot de passe" />
               <a href="#"><small id="accountHelp1" className="form-text text-muted">J'ai oublié mon mot de passe →</small></a>
               <Link to="/signup"><small id="accountHelp2" className="form-text text-muted">Vous n'avez pas de compte ?</small></Link>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="loginCheck1" onChange="" />
                <label className="form-check-label" for="loginCheck1">Se souvenir de moi</label>
            </div>
            <Button type="submit" model="primary" size="lg" custom="btn-jat btn-lgn">Se connecter</Button>
        </form>
    )
}

export default LoginForm;