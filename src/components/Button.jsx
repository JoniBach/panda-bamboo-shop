import styled from "styled-components";
import { Router, Link } from "@reach/router"

const Container = styled('button')`
/* THEME: primary */
/* THEME: background */
    background: white;
    color: black;
    border: none;
    padding: 5px;
    height: 100%;
    margin: 2px;
    border-radius: 10px;
    
`;



export const Button = (props) => {
    return (
        <Link to={props.link} >

        <Container >
            
    {props.children}

        </Container>
        </Link>

    )
}