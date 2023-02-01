import React from "react";
import TabControl from "./TabControl";
import "./TabControl.css";

const tabs = [
  {
    label: "Tab 1",
    content: <p>Content for Tab 1</p>
  },
  {
    label: "Tab 2",
    content: <p>Content for Tab 2</p>
  },
  {
    label: "Tab 3",
    content: <p>Content for Tab 3</p>
  },
  {
    label: "Tab 4",
    content: <p>Content for Tab 4</p>
  }
];

function App() {
  return <TabControl tabs={tabs} className="tab-control" />;
}

export default App;
