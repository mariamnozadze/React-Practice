import React from "react";
import "../index.css";
import Content from "./content";
import activities from "./data";
import Header from "./header";

class App1 extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Content activities={activities} />
        </div>
      </div>
    );
  }
}

export default App1;
