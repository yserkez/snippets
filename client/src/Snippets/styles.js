import styled from 'styled-components';
import {Row} from 'react-bootstrap'

export const placements = {
    "account-global": 'Account Global',
    "test-global": "Test Global",
    "variation-custom": "Variation Custom Code",
    "test-targeting": "Test Custom Targeting"
}

export const Snip = styled.li `
    box-shadow: 0 2px 10px -1px rgba(176,192,237,.22);
    background-color: rgb(255, 255, 255);
    margin: auto;
    padding: .5rem 2rem;
    margin-bottom: 10px;
    list-style: none;
    border: ${props => props.edit ? '3px solid rgb(255, 196, 196' : ''};
`;

export const Title = styled.h1 `
    text-align: left;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const Body = styled.div `
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

export const Description = styled(Row) `
    height: 75%;
    padding: 5px;
    background-color: rgba(255, 255, 241, 0.623);
    text-align: left;
    overflow: auto;
`
export const DescriptionText = styled.textarea `
    font-size: 1.2rem;
    width: 100%;
    resize: none;
    border: none;
    outline: none;
`

export const Meta = styled(Row) `
    width: 100%;    
    padding: 5px;
    background-color: aliceblue;
    font-weight: bold;
    position: absolute;
    bottom: 0;
`