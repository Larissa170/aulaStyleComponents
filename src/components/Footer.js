import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #546;
`;
const FooterItem = styled.div`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export default function footer() {
  return (
    <React.Fragment>
      <Footer>
        <FooterItem> Aula Sobre Styled Components</FooterItem>
      </Footer>
    </React.Fragment>
  );
}
