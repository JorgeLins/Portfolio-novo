import styled from "styled-components";

export const LeftCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 91%;
  height: 198px;
  gap: 19rem;
  margin-bottom: 100px;
`;

export const LeftName = styled.h2`
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 84px;
  letter-spacing: -0.08em;
  color: #F3DBC7;
  align-self: flex-start;
`;
export const LeftDescription = styled.h4`
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #F3DBC7;
  align-self: flex-start;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 91%;
  height: 198px;
  gap: 19rem;
  margin-bottom: 100px;
`;

export const RightName = styled.h2`
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 84px;
  letter-spacing: -0.08em;
  color: #F3DBC7;
  align-self: flex-end;
`;
export const RightDescription = styled.h4`
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #F3DBC7;
  align-self: flex-end;
`;
