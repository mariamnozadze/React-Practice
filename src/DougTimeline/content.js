import React from "react";
import "../index.css";
import ActivityItem from "./ActivityItem";
import activities from "./data";

class Content extends React.Component {
  render() {
    //const activity = this.props.activity; **same as**
    const { activity } = this.props; // ES6 destructuring
    return (
      <div className="content">
        <div className="line"></div>
        {/* Timeline item */}
        {activities.map((activity) => (
          <ActivityItem activity={activity} />
        ))}
      </div>
    );
  }
}
export default Content;
