import styled from "styled-components";
import { Router, Link } from "@reach/router";
import { useState } from "react";
import { Button } from "./Button";

const Container = styled("div")`
  /* THEME: primary */
  /* THEME: background */
  /* height: 100%; */
  position: relative;
  transition: 0.4s;

  .menu {

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  transition: 0.4s;

  }

`;
const Item = styled("div")`
  /* THEME: primary */
  /* border-bottom: forestgreen; */
  /* THEME: background */
  /* height: 20px; */
  width: 100%;
  padding: 10px;
  background: #000;
  margin-bottom: 2px;
  box-sizing: border-box;
  color: white;

`;

export const List = ({ items, link, label }) => {
    const [state, setstate] = useState(false)
  return (
    <Container onMouseEnter={() => setstate(true)} onMouseLeave={() => setstate(false)} >
        <Button link={link} > <h3>{label}</h3></Button>
        <div className='menu' style={{height: state ? '100vh' : '0%'}}>

{items.map(({ label, link,}, i) => (
  <Link to={link}>
    <Item >{label}</Item>
  </Link>
))}
        </div>
            
    </Container>
  );
};
