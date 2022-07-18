import React from "react";
import "../index.css";
import ActivityItem from "./ActivityItem";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
  }
  render() {
    const { activities } = this.props; // ES6 destructuring
    return (
      <div className="content">
        <div className="line" />
        {/* Timeline item */}
        {activities.map((activity) => (
          <ActivityItem activity={activity} />
        ))}
      </div>
    );
  }
}
export default Content;
