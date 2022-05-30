import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((Response) => setActivities(Response.data));
  }, []);
  return (
    <div>
      <Header as="h2" icon="users" content="Activitities" />
      <List.Header>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List.Header>
      <Header />
    </div>
  );
}

export default App;
