import styled, { keyframes } from "styled-components";
import ImgBg1 from "./assets/img/headerImg1.jpg";

export const Container = styled.div`
  width: 100vw;
  height: auto;
`;
export const HeaderShow = styled.header`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImgBg1});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    background-size: cover;
  }
`;

const fadeInHeader = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const HeaderImgSecondary = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${fadeInHeader} 2s linear forwards;
  animation-delay: 2.1s;
  object-fit: cover;
`;

export const Main = styled.main`
  width: 100vw;
  height: auto;
  /* background-color: #0b1426;
   */
  background: rgb(11, 20, 38);
  background: linear-gradient(
    180deg,
    rgba(11, 20, 38, 1) 19%,
    rgba(14, 33, 129, 1) 83%,
    rgba(18, 39, 172, 1) 99%
  );
  z-index: 0;
`;
export const Header = styled.header`
  max-height: 10%;
  padding: 2% 3%;
  display: flex;
  justify-content: space-between;
  color: #eee;
`;

export const HeaderTitle = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.7rem;
  font-family: "Quicksand", sans-serif;
  flex: 2;
`;

export const HeaderItem = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-family: "Quicksand", sans-serif;
  flex: 1;
`;
export const HeaderBtnUpContent = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 9rem;
  text-align: center;
  font-size: 1.4rem;
  font-family: "Quicksand", sans-serif;
  position: relative;

  button {
    text-align: center;
    font-size: 1.4rem;
    font-family: "Quicksand", sans-serif;
    background-color: transparent;
    border: none;
    color: #eee;
    cursor: pointer;
  }
  .menu.active {
    opacity: 1;
    visibility: visible;
  }

  .menu {
    opacity: 0;
    visibility: hidden;
  }
`;

export const NavMenuDropdrown = styled.nav`
  position: absolute;
  width: 12rem;
  top: 80%;
  background-color: rgb(11 20 38);
  border-bottom: 1px solid #b61b78db;
  padding: 1%;
  right: 19%;
  box-shadow: 1px 3px 5px #000;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  z-index: 1;

  ul {
    width: 100%;
    height: 100%;
    padding: 5% 0;
    margin: 0;
  }
  li {
    width: 100%;
    text-align: center;
    padding: 2% 1%;
    font-size: 1rem;
    list-style: none;
  }
`;

export const Field = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: transparent;
`;
const scroll = keyframes`
from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(46px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IconScroll = styled.div`
  &:before {
    position: absolute;
    left: 50%;
  }
  & {
    position: absolute;
    left: 50%;
    width: 30px;
    height: 55px;
    margin-left: -20px;
    top: 50%;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
    animation-delay: 5s;
  }
  &:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${scroll};
  }
`;

const spin = keyframes`
  to {
		transform: rotate(360deg);
	}
`;

export const ScreenLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;

  .loading {
    width: 200px;
    height: 200px;
    border: 5px solid #e342f538;
    border-top-color: #e342f5;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
  p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 2rem;
    color: #ffffff;
  }
`;

export const PhotosContent = styled.div`
  width: -moz-fit-content;
  width: fit-content;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  padding: 2%;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UploadForm = styled.form`
  position: relative;
  width: 200px;
  text-align: center;
  margin: 0 auto;
  display: block;
  padding: 20px 0;
  color: #fff;
  .wrapperInputs {
    display: flex;
    box-shadow: 1px 1px 2px #464545;
  }

  .label {
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 100%;
    background: #0b1426;
    cursor: pointer;
    color: #fff;
    padding: 12px 0;
    /* text-transform: uppercase; */
    font-size: 0.8rem;
    border-bottom: 1px solid #e342f6;
    border-radius: 5px 0px 0px 5px;
  }
  #inputImg {
    display: inline-block;
    position: absolute;
    z-index: 1;
    width: 60%;
    height: 38px;
    top: 22px;
    left: 2px;
    opacity: 0;
    cursor: pointer;
  }
  .btnSumit {
    background-color: #1b2946;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 0 5px 5px 0;
    margin: 0;
    cursor: pointer;
    border-bottom: 1px solid #e342f5;
  }
`;
