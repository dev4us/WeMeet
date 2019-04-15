import React from "react";
import styled, { css } from "styled-components";

import { FaShareAlt } from "react-icons/fa";

import moment from "moment";

const Card = ({ title, thumbnail, desc, confirmDay, participantsCount }) => {
  console.log(typeof confirmDay);
  return (
    <Container>
      {thumbnail !== "" && <TopFrame thumbnail={thumbnail} />}

      <BottomFrame>
        <Header>{title}</Header>
        <Description>{desc}</Description>
        <SubDescription>{participantsCount} 명 참여</SubDescription>
        <Controller>
          <LeftFrame>
            {typeof confirmDay !== "undefined" &&
              moment
                .unix(confirmDay / 1000)
                .format("YYYY년 MM월 DD일 HH시 mm분")}
            {typeof confirmDay === "undefined" && "정해진 일자가 없습니다."}
          </LeftFrame>
          <RightFrame>
            <SharingIcon />
          </RightFrame>
        </Controller>
      </BottomFrame>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 386px;
  height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),
    0 3px 6px rgba(0, 0, 0, 0.1725);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12),
      0 6px 12px rgba(0, 0, 0, 0.1725);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.1725);
  }
`;

const TopFrame = styled.div`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #ececec;
  ${props =>
    props.thumbnail !== "" &&
    css`
      background:url('${props => props.thumbnail}');
      background-size:100% 100%;
      background-repeat:no-repeat;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
  `}
`;

const BottomFrame = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  height: 70%;
  padding: 15px 15px 0px 15px;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #5c5c5c;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 10px;
  color: #9c9b9b;
  max-height: 50px;
  overflow: hidden;
  padding-left: 2px;
  padding-right: 30px;
  margin-bottom: 3px;
`;

const SubDescription = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #5c5c5c;
`;

const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 354px;
  height: 35px;
  border-top: 1px solid #ececec;
  padding: 5px 5px 5px 5px;
`;

const LeftFrame = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: #9c9b9b;
  font-size: 12px;
`;

const RightFrame = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const SharingIcon = styled(FaShareAlt)`
  color: #3077eb;
  font-size: 16px;
`;

export default Card;
