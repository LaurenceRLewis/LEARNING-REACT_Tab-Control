import React, { useState } from "react";

const TabControl = ({ tabs, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={className}>
      <div className="tab-list" role="tablist">
        {tabs.map((tab, index) => (
          <div
            className={`tab ${selectedIndex === index ? "selected" : ""}`}
            key={`tab-${index}`}
          >
            <button
              role="tab"
              aria-selected={selectedIndex === index}
              aria-controls={`panel-${index}`}
              onClick={() => setSelectedIndex(index)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            role="tabpanel"
            id={`panel-${index}`}
            aria-labelledby={tab.label}
            hidden={selectedIndex !== index}
            className="tab-panel"
            key={`panel-${index}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabControl;
