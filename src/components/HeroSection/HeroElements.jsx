import styled from 'styled-components';
import {theme} from '../../utils/Theme';


export const HeroContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 20px;
flex-direction: column;

@media(min-width: 1400px) {
    display:flex;
    flex-direction: row;
}


`


export const LeftHero = styled.div`
height: 100%;
color: white;

@media(max-width: 1440px;)
display:flex;
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

@media(min-width:1400px) {

}

`
export const RightHero = styled.div`
height: 200px;
width: 200px;
padding: 50px;

@media(min-width: 1400px) {
    height: 500px;
    width: 500px;
    float:right;
}
`

export const HeroLogo = styled.img`
height: 400px;
width: 400px;

@media(min-width: 1400px) {
    height: 500px;
    width: 500px;
}
`

export const LearnMoreButtonContainer = styled.div`
display:flex;
justify-content:flex-start;
margin-top: 20px;
align-items:center;
`
