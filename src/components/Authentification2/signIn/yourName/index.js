import React from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {useHistory} from "react-router-dom";

export const FormNamePage = () => {
    const history = useHistory();
    return (
        <div>
            <PageDescription>Now, let us know your</PageDescription>

            <input type="text" placeholder="your First name" aria-label="firstname"/>
            <input type="text" placeholder="your Last name" aria-label="lastname"/>
            <FlashyButton onClick={() => history.push("/auth/signin/email")} > Next <ArrowRightAltOutlined/> </FlashyButton>

        </div>
    )
}