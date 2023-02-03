import React, { useState, useRef } from "react";

const TabControl = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabListRef = useRef(null);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        setSelectedIndex((selectedIndex - 1 + tabs.length) % tabs.length);
        break;
      case "ArrowRight":
        setSelectedIndex((selectedIndex + 1) % tabs.length);
        break;
      default:
        break;
    }
  };

  return (
    <div className="tab-control">
      <div
        className="tab-list"
        role="tablist"
        aria-orientation="horizontal"
        ref={tabListRef}
      >
        {tabs.map((tab, index) => (
          <button
            className="tab"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            tabIndex={selectedIndex === index ? 0 : -1}
            key={tab.label}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          tabIndex="0"
          role="tabpanel"
          hidden={selectedIndex !== index}
          id={`panel-${index}`}
          aria-labelledby={`tab-${index}`}
          key={tab.label}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default TabControl;
