import styled from "styled-components";


const Blockquote = styled.blockquote`
    font-size: 1em;
    padding: 1em;
    margin: 3em;
    border-radius: 5px;
    background-color: green;
    width: 250px;
    `
const Cite = styled.cite`
    padding-left: 125px;`


const Quote = ({by, source, children}) => {
    return (
        <main>
            <Blockquote>"{children}"</Blockquote>
            <Cite>-{by}</Cite>
        </main>
    )
}

export default Quote