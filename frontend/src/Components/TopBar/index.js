import React, { useState, useContext, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { toast } from "react-toastify";

import { Store } from "../../GlobalState/store";
import { useQuery, useMutation } from "react-apollo-hooks";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { SIGN_IN_GOOGLE, GET_PROFILE } from "./queries";

const TopBar = ({ theme, history }) => {
  const { state, dispatch } = useContext(Store);
  const [scroll, setScroll] = useState(0);
  const [isProfilePop, setProfilePop] = useState(false);
  const popMenuRef = useRef(null);
  const signInMutation = useMutation(SIGN_IN_GOOGLE);

  const { data } = useQuery(GET_PROFILE, { skip: !state.isLoggedIn });

  const GOOGLE_API_KEY =
    "523687604846-qft63kb3lg7vhj51vqoafqu2c8uafidt.apps.googleusercontent.com";

  const setScrollEvent = e => {
    setScroll(document.documentElement.scrollTop);
  };

  const setClickEvent = e => {
    if (popMenuRef.current && popMenuRef.current.className) {
      const compareTarget = e.path.filter(object => {
        return object.className === popMenuRef.current.className;
      });

      if (compareTarget.length > 0) {
        return;
      }
    }
    setProfilePop(false);
  };

  const goNextPage = page => {
    if (state.isLoggedIn === false) {
      toast.error(`해당 기능은 로그인이 먼저 필요합니다.`);
      return false;
    }

    history.push(`/${page}`);
  };

  useEffect(() => {
    window.addEventListener("mousedown", setClickEvent, false);

    if (theme === "home") {
      window.addEventListener("scroll", setScrollEvent);
    }
    return () => {
      window.removeEventListener("scroll", setScrollEvent);
      window.removeEventListener("mousedown", setClickEvent, false);
    };
  }, [scroll]);

  return (
    <>
      <Container theme={theme} scroll={scroll}>
        <Wrapper>
          <WrapperLeft>
            <Logo
              theme={theme}
              scroll={scroll}
              onClick={() => {
                history.push("/");
              }}
            >
              WeMeet
            </Logo>
            <MenuWrapper>
              <Menu
                theme={theme}
                scroll={scroll}
                onClick={() => goNextPage("create/title")}
              >
                일정 만들기
              </Menu>
              <Menu
                theme={theme}
                scroll={scroll}
                onClick={() => goNextPage("myMeet")}
              >
                내 일정
              </Menu>
            </MenuWrapper>
          </WrapperLeft>
          <WrapperRight>
            {!state.isLoggedIn && (
              <GoogleLogin
                clientId={GOOGLE_API_KEY}
                autoLoad={false}
                render={renderProps => (
                  <Login
                    theme={theme}
                    scroll={scroll}
                    onClick={renderProps.onClick}
                  >
                    로그인
                  </Login>
                )}
                buttonText="Login"
                onSuccess={responseGoogle => {
                  const {
                    profileObj: { name, email, imageUrl }
                  } = responseGoogle;

                  signInMutation({
                    variables: {
                      userEmail: email,
                      userName: name,
                      profileImage: imageUrl
                    }
                  }).then(
                    result => {
                      const {
                        data: {
                          SignIn: { ok, error, token }
                        }
                      } = result;

                      if (ok === true) {
                        localStorage.setItem("jwt", token);
                        dispatch({ type: "LOGIN", payload: token });
                        toast.info(`반가워요! ${name}님!`);
                      } else {
                        alert(error);
                      }
                    },
                    error => {
                      alert(`Login failed with Google Account`);
                    }
                  );
                }}
                onFailure={() => {
                  alert(`Login failed with Google Account`);
                }}
              />
            )}
            {state.isLoggedIn && (
              <>
                {data && data.GetProfile && data.GetProfile.User && (
                  <StatusMenu
                    onClick={() => {
                      setProfilePop(!isProfilePop);
                    }}
                    ref={popMenuRef}
                  >
                    <HelloText theme={theme} scroll={scroll}>
                      반가워요 {data.GetProfile.User.userName}님!
                    </HelloText>
                    <StatusMenuMoreIcon theme={theme} scroll={scroll} />
                    {isProfilePop && (
                      <PopMenu
                        onClick={e => {
                          e.stopPropagation();
                        }}
                      >
                        <PopMenuRow theme={theme}>
                          <StatusMenuText>내 일정</StatusMenuText>
                        </PopMenuRow>
                        <PopMenuRow theme={theme}>
                          <StatusMenuText>일정 만들기</StatusMenuText>
                        </PopMenuRow>
                        <PopMenuRow theme={theme}>
                          <StatusMenuText>정보 수정하기</StatusMenuText>
                        </PopMenuRow>
                        <GoogleLogout
                          clientId={GOOGLE_API_KEY}
                          buttonText="Logout"
                          autoLoad={false}
                          onLogoutSuccess={() => {
                            toast.info(`다음에 우리 또 만나요!`);
                            localStorage.removeItem("jwt");
                            dispatch({ type: "LOGOUT" });
                          }}
                          render={renderProps => (
                            <PopMenuRow
                              onClick={renderProps.onClick}
                              theme={theme}
                            >
                              <StatusMenuText>로그아웃</StatusMenuText>
                            </PopMenuRow>
                          )}
                        />
                      </PopMenu>
                    )}
                  </StatusMenu>
                )}
              </>
            )}
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

  /*padding-left: 60px;*/
  background: none;
  transition: all 0.3s ease;
  z-index: 12;

  ${props =>
    props.theme !== "home" &&
    css`
      background: white;
      border-bottom: 1px solid #dcdcdc;
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
  width: 90%;
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

  @media (max-width: 650px) {
    display: none;
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

const StatusMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  /*padding-right: 45px;*/
`;

const HelloText = styled.p`
  font-size: 12px;

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

const StatusMenuMoreIcon = styled(MdKeyboardArrowDown)`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;

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

const PopMenu = styled.div`
  position: absolute;
  width: 200px;
  top: 30px;
  /*left: -50px;*/
  right: -5%;
  border: 1px solid #dcdcdc;
  background: white;
`;

const PopMenuRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dcdcdc;

  ${props =>
    props.theme === "home" &&
    css`
      ${Container}:hover & {
        padding-top: 1px;
      }
    `}
`;

const StatusMenuText = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #5c5c5c;
`;
export default withRouter(TopBar);
