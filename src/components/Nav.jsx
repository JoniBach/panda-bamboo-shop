import styled from "styled-components";
import { Button } from "./Button";
import { List } from "./List";

const Container = styled('div')`
/* THEME: primary */
  border-bottom: forestgreen;
/* THEME: background */
    background: #000;
  /* height: 20px; */
  width: 100vw;
  display: flex;
padding: 10px;

  align-content: center;
`;
const Logo = styled('img')`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;

`;

const logo = 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?s=612x612'
const buttons = [
    {link: '/', label: 'Home',},
    {link: '/about', label: 'About us',},
    {type: 'menu', link: '/products', label: 'Products', menu: [
        {link: '/products/fargesia', label: 'Fargesia'},
        {link: '/products/phyllostachysglauca', label: 'Phyllostachys glauca'},
        {link: '/products/yushaniabrevipaniculata', label: 'Yushania brevipaniculata'},
        {link: '/products/bashaniafargesii', label: 'Bashania fargesii'},
    ]},
]


export const Nav = () => {
    return (
        <Container>

            <Logo src={logo} />
            {buttons?.map(({type, link, label, menu }, i) => (
                type === 'menu' ? <List items={menu} label={label} hover link={link}/> : <Button link={link}><h3>{label}</h3></Button>
            ))}

        </Container>
    )
}