import styled from 'styled-components';

export const WrapperModal = styled.div `
position: absolute;
top: 29%;
left: 29%;
width: 50%;
height: fit-content;
max-height: 50%;
text-align: center;
background: white;
border-radius: 1em;
z-index: 1000500;

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