# LEARNING-REACT_Tab-Control

## Steps used to build the component

1. Import React and the "useState" hook from the "react" library.

2. Define a React functional component named "TabControl" that takes in props "tabs" and "className".

3. Use the "useState" hook to create state "selectedIndex" with a default value of 0 and a state updater function "setSelectedIndex".

4. Return a "div" element with the class "className" passed in as a prop.

5. Within the first "div", return another "div" element with the class "tab-list" and "role" attribute of "tablist".

6. Map over the "tabs" prop and return a "div" element for each item in the "tabs" array.

7. The returned "div" element has a class of "tab" and "selected" if the current "index" is equal to the "selectedIndex" state.

8. Within the "div" element, return a "button" element with the following attributes:

   - "role" of "tab"
   - "aria-selected" attribute equal to whether the current "index" is equal to "selectedIndex" state.
   - "aria-controls" equal to "panel-index"
   - "onClick" event handler that sets "selectedIndex" to the current "index" when clicked.
   - The "tab.label" as the button text.

9. Close the mapping of the "tabs" array.

10. Return another "div" element with the class "tab-content".

11. Within this "div" element, map over the "tabs" prop and return a "div" element for each item in the "tabs" array.

12. The returned "div" element has the following attributes:

    - "role" of "tabpanel"
    - "id" equal to "panel-index"
    - "aria-labelledby" equal to "tab.label"
    - "hidden" attribute equal to whether the current "index" is not equal to "selectedIndex" state.
    - "className" equal to "tab-panel"
    - "key" equal to "panel-index".
    - The "tab.content" is returned within the "div" element.

13. Close the mapping of the "tabs" array.

14. Close the two "div" elements.

15. Export the "TabControl" component as the default export.
