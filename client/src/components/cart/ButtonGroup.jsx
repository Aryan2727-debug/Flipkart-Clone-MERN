import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import styled from "@emotion/styled";

const Component = styled(ButtonGroup)`
   margin-top : 30px;
`;

const StyledButton = styled(Button)`
   border-radius : 50%;
`;

function GroupedButton(){
    return(
        <>
            <Component>
                <StyledButton>-</StyledButton>
                <StyledButton disabled>1</StyledButton>
                <StyledButton>+</StyledButton>
            </Component>
        </>
    );
};

export default GroupedButton;