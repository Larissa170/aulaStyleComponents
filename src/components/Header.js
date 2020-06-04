import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #f089;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
`;
const Item = styled.a`
  font-size: 18px;
  font-family: "Read";
  font-weight: bold;
  padding: 20px;
  color: #eee;
`;

export default function header() {
  return (
    <Header>
      <Item>Home</Item>
      <Item>Sobre</Item>
      <Item>Contato</Item>
    </Header>
  );
}
