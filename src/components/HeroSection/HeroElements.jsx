import styled from 'styled-components';
import {theme} from '../../utils/Theme';


export const HeroContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
padding: 20px;
`


export const LeftHero = styled.div`
height: 100%;
color: white;

`

export const HeroTitle = styled.div`
font-family: ${theme.fonts.header}
`

export const HeroDescription = styled.div`
h2 {
    margin-top: 13px;
    margin-left: 5px;
font-size:  ${theme.fontSizes.small};
font-family: ${theme.fonts.header}
}

p {
    margin-top: 25px;
    font-size: 1rem;
    font-family: ${theme.fonts.header};
    font-weight: medium;
}
`
export const RightHero = styled.img`
height: 200px;
width: 200px;
padding: 50px;
`

export const LearnMoreButtonContainer = styled.div`
display:flex;
flex-direction: row;
margin-top: 30px;

p {
    position: relative;
    left: 76px;
    top: 15px;
    font-family: ${theme.fonts.header};
}
`
