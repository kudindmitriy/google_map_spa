import styled from 'styled-components';

export const WrapperModal = styled.div `
position: absolute;
top: 29%;
left: 29%;
width: 40%;
height: fit-content;
padding: 4em 2em;
text-align: center;
background: white;
border-radius: 1em;
z-index: 1000500;

  .district_address h1 {
    text-decoration: underline;
  }
  .coords_city {
    overflow-y: scroll;
    max-height: 200px
  }
  .closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: orange;
    font-size: 1.5em;
    transition: .75s;
  }
  .closeBtn:hover {
    color: deepskyblue;
  }
`;