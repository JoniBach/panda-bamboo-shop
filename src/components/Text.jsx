import styled from "styled-components";

const Section = styled('div')`
border-radius: 20px;
border: 1px solid black;
padding: 5px;
margin: 20px 10px 20px 10px;
background: #eee;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Head = styled('h2')`
border-radius: 20px;
width: 100%;
background: black;
color: white;
padding: 20px;
margin: 0px;

`;
const Content = styled('p')`
padding: 10px;
font-size: larger;

`;


export const Text = ({children, type, title}) => {
    switch (type) {
        case 'section': return (<Section>
            <Head>
                {title}
            </Head>
            <Content>
                {children}
            </Content>
        </Section>)
            
            break;
    
        default:
            break;
    }
    return (
        <div>
            {children}
        </div>
    )
}