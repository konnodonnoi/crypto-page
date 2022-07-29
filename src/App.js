import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return <AppHomeHighFidelity {...appHomeHighFidelity} />;
  }
}

export default App;

class AppHomeHighFidelity extends 
React.Component {
  render() {
    const {
      yourWallet1,
      price1,
      crypto,
      yourWallet2,
      text5,
      price2,
      assests,
      add,
      bitcoin,
      text1,
      price3,
      x168000Btc,
      ethereum,
      text2,
      price4,
      x2150000Eth,
      dash,
      text3,
      price5,
      x43650000Eth,
      place,
      exchange,
      transaction,
      text4,
    } = this.props;

    return (
      <div className="container-center-horizontal">
<div className="app-home-high-fidelity screen">
  <div className="flex-col-1">
    <div className="flex-row-1">
      <div className="your-wallet">
        {yourWallet1}
      </div>
      <img className="vector" src=""/>
    </div>
  </div>
</div>
      </div>
    )
  }
}