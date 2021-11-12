
import styled from 'styled-components';
//estilos de la barra de navegación

let fontTitle = "'Syncopate',sans-serif";
let color1 = "#07689F";
let color2 = "#E9E7E7";
export const A = styled.a`
    text-decoration:none;
    font-family:${fontTitle} ;
    color: ${color2};
    font-size:1rem;
    &:hover{
        color:#D0CDCD;
    };
`;

export const Li = styled.li`
    list-style:none;
`;
export const Ul = styled.ul`
    display:flex;
    margin:0px;
    align-items: center;
    justify-content: space-around;
    padding:0px;
   
`;
export const Nav = styled.nav`
    background-color: ${color1};
    margin-top:0px;
    padding-top:0.3125rem;
    padding-bottom:0.3125rem;
`;