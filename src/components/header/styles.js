import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.3rem;
  background-color: #0d0d0e;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  margin-top: 29px;
  /* border-bottom: 1px solid #E8DDD2; */
`;

export const Border = styled.hr`
  width: 97%;
  color: #e8ddd2;
  margin-top: 20px;
`;

export const Logo = styled.h2`
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #e8ddd2;
`;
export const Anchors = styled.div`
  display: flex;
  gap: 1.875rem;
`;

export const Anchor = styled.a`
  font-family: "Fira Code", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #e8ddd2;
`;
