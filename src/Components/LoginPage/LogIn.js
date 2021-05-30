import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { useHistory, useLocation } from 'react-router';

import Appbar from '../HomePage/Appbar/Appbar';
import { UserContext } from '../../App';


const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                console.log(user)
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    return (
        <div style={{ backgroundColor: '#12161f', height: "1000px" }}>
            <Appbar></Appbar>
            <div style={{ paddingTop: "100px" }} className="text-center">
                <div>
                    <h1 className="text-light  px-5 mx-5">Welcome To Epic Eateries .Please Sign In With Your Google Account To See Your Orders And To Confirm It...!!!!</h1>
                </div>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_AXoQyR.json"
                    background="transparent"
                    speed="1"
                    style={{ height: "600px" }}
                    loop
                    autoplay></lottie-player>
                <button style={{ width: "350px", height: "80px", fontSize: "30px" }} onClick={handleGoogleSignIn} className="btn h1 btn-danger btn-lg mt-1"><FontAwesomeIcon icon={faUserPlus} /> Sign In With Google </button>
            </div>
        </div>
    );
};

export default LogIn;