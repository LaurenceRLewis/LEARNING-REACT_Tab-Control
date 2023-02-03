import React, { useState, useRef } from "react";

const TabControl = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabListRef = useRef(null);

  const firstTabRef = useRef(null);
  const lastTabRef = useRef(null);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        if (event.target === firstTabRef.current) {
          setSelectedIndex(tabs.length - 1);
        } else {
          setSelectedIndex(selectedIndex - 1);
        }
        break;
      case "ArrowRight":
        if (event.target === lastTabRef.current) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex((selectedIndex + 1) % tabs.length);
        }
        break;
      case "Home":
        setSelectedIndex(0);
        break;
      case "End":
        setSelectedIndex(tabs.length - 1);
        break;
      case "Tab":
        const focusableEl = tabListRef.current.querySelector(
          ':not([tabIndex="-1"])'
        );
        if (focusableEl) focusableEl.focus();
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
        onKeyDown={handleKeyDown}
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
            ref={
              index === 0
                ? firstTabRef
                : index === tabs.length - 1
                ? lastTabRef
                : null
            }
            onClick={() => setSelectedIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          tabIndex={selectedIndex === index ? 0 : -1}
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
