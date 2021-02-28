import React, {Component, useState} from "react";
import FlashyButton from 'littleComponents/flashyButton';


const SignInGoogleBase = (props) => {
    const [error, setError] = useState(null);

    return (
        <form>
            <button type="submit">Sign In with Google. bouton inutilisable.</button>

            {error && <p>{error.message}</p>}
        </form>
    );

}
export default SignInGoogleBase;