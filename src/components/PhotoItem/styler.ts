import styled from "styled-components";

export const ImgCard = styled.div`
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    display: block;
  }
  label {
    width: 100%;
    text-align: right;
    color: #eee;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2rem;
    background-color: #000000a1;
    padding: 2% 0;
    animation: all 1.5s;
    opacity: 0;
  }
  label:hover {
    height: 7rem;
    opacity: 1;
  }
`;
