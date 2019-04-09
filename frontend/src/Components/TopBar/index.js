import React, { useState } from "react";
import styled, { css } from "styled-components";

const TopBar = ({ theme }) => {
  const [scroll, setScroll] = useState(0);

  if (theme === "home") {
    window.addEventListener("scroll", e => {
      setScroll(document.documentElement.scrollTop);
    });
  }
  return (
    <>
      <Container theme={theme} scroll={scroll}>
        <Wrapper>
          <WrapperLeft>
            <Logo theme={theme} scroll={scroll}>
              WeMeet
            </Logo>
            <MenuWrapper>
              <Menu theme={theme} scroll={scroll}>
                소개
              </Menu>
              <Menu theme={theme} scroll={scroll}>
                일정 만들기
              </Menu>
              <Menu theme={theme} scroll={scroll}>
                내 일정
              </Menu>
            </MenuWrapper>
          </WrapperLeft>
          <WrapperRight>
            <Login theme={theme} scroll={scroll}>
              로그인
            </Login>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 60px;

  padding-left: 60px;
  background: none;
  transition: all 0.3s ease;
  z-index: 12;

  ${props =>
    props.theme !== "home" &&
    css`
      background: white;
    `}

  ${props =>
    props.theme === "home" &&
    css`
      ${props =>
        props.scroll !== 0 &&
        css`
          background: white;
          border-bottom: 1px solid #dcdcdc;
        `}
      &:hover {
        background: white;
        border-bottom: 1px solid #dcdcdc;
      }
    `}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  height: 100%;
`;

const WrapperLeft = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  height: 35px;
  font-family: "Audiowide", sans-serif;
  margin-right: 60px;
  cursor: pointer;

  /* for Design*/
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  ${props =>
    props.theme === "home" &&
    css`
      color: white;
      ${props =>
        props.scroll !== 0 &&
        css`
          color: black;
        `}
      ${Container}:hover & {
        color: black;
      }
    `}
`;

const MenuWrapper = styled.ul`
  height: 100%;
`;

const Menu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 100px;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  color: black;

  ${props =>
    props.theme === "home" &&
    css`
      color: white;

      ${props =>
        props.scroll !== 0 &&
        css`
          color: black;
        `}

      ${Container}:hover & {
        color: black;
      }
    `}

  &:hover {
    border-bottom: 2px solid black;
    margin-top: 1px;
  }
`;

const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Login = styled.div`
  float: right;
  width: 100px;
  font-size: 16px;
  cursor: pointer;

  ${props =>
    props.theme === "home" &&
    css`
      color: white;

      ${props =>
        props.scroll !== 0 &&
        css`
          color: black;
        `}

      ${Container}:hover & {
        color: black;
      }
    `}
`;

export default TopBar;
