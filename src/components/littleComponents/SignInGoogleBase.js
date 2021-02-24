import React, {Component, useState} from "react";
import FlashyButton from './flashyButton';


const SignInGoogleBase = (props) => {
    const [error, setError] = useState(null);

    return (
        <form>
            <FlashyButton type="submit">Sign In with Google. bouton inutilisable.</FlashyButton>

            {error && <p>{error.message}</p>}
        </form>
    );

}
export default SignInGoogleBase;