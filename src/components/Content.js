import React from "react";
import styled from "styled-components";

const Content = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentItem = styled.p`
  color: #000;
  font-size: 16px;
  text-align: center;
  font-family: "Read";
  width: 250px;
  padding: 10px;
  background-color: #ffe6f6;
  box-sizing: border-box;
  margin: 40px;
`;

export default function content() {
  return (
    <React.Fragment>
      <Content>
        <ContentItem>Usando Style Components</ContentItem>
        <ContentItem>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </ContentItem>
        <ContentItem>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </ContentItem>
        <ContentItem>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </ContentItem>
      </Content>
    </React.Fragment>
  );
}
