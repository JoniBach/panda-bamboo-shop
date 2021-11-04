import styled from "styled-components";
import { Router, Link } from "@reach/router"

const Container = styled('div')`
width: 100%;
height: 50vh;
background-position: center;
background-repeat: none;
background: grey;
background-size: cover;
`;



export const Halo = ({image, full}) => {
    return (
       <Container style={{backgroundImage: `url("${image}")`, height: full ? '100vh' : '50vh'}}>
       </Container>

    )
}