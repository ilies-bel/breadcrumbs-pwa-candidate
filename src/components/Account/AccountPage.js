import React, {Component} from 'react';

import {withFirebase} from '../Firebase';
import {Switch, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FlashyButton from "../littleComponents/flashyButton";

const user_info =
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Elon_Musk_and_Hans_Koenigsmann_at_the_SpaceX_CRS-8_post-launch_press_conference_%2826223624532%29_%28cropped%29.jpg",
        first_name: "Brandon",
        last_name: "Bannon",
        email: "iliesb.pro@gmail.com",
        notification_email: true,
        notification_push: false
    }

const onSendPasswordResetEmail = () => {
    console.log("Password reset")
};


const AccountPage = props => {

    const [user, setUser] = React.useState({
        user_info
    });


    return (

        <div>


            <div>
                <h2>
                    Private information
                </h2>
                <form>
                    <TextField

                        id="first_name"
                        name="first_name"
                        label="FIRST NAME"
                        defaultValue={user_info.first_name}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        id="last_name"
                        name="last_name"
                        label="LAST NAME"
                        defaultValue={user_info.last_name}
                        fullWidth
                        margin="normal"
                    />


                    <TextField
                        id="email"
                        name="email"
                        label="EMAIL ADDRESS"
                        defaultValue={user_info.email}
                        fullWidth
                        margin="normal"
                    />

                    <h2>
                        Password
                    </h2>

                    <Button
                        variant="contained"
                        onClick={onSendPasswordResetEmail}>
                        Send Password Reset
                    </Button>




                    <h2>
                        Notifications
                    </h2>

                    <div>
                        <h3>
                            Push Notifications
                        </h3>

                        <p>
                            Allow Breadcrumbs to send push
                            notifications
                        </p>

                        <Switch

                            checked={user.notification_email}
                            color="primary"
                            name="notification_email"
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                    </div>


                    <div>
                        <p>
                            User notification
                        </p>
                        <Switch
                            checked={user.notification_push}
                            color="primary"
                            name="notification_push"
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                    </div>



                    <FlashyButton>
                        SAVE CHANGES
                    </FlashyButton>

                </form>


                <span>





            </span>
            </div>


        </div>


    )
}

export default AccountPage;
