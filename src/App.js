import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Global from "./theme/global";
import Content from "./components/Content";
function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
