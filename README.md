# LEARNING-REACT_Radio-Button-Group
## Steps used to build the component
1. Import the necessary React components from the React library.
2. Create a RadioGroup component as a class component or functional component.
3. Use the fieldset and legend HTML elements to group the radio buttons and label the group with "My favourite animal".
4. Create the radio buttons for each of the options: Cat, Dog, and Horse, using the input HTML element with the type attribute set to "radio".
5. Set the aria-describedby attribute on the first radio button with an empty value.
6. Create a submit button and a reset button after the radio buttons.
7. Implement logic to handle the form submission, including displaying an error message "Please make a selection" if none of the radio buttons are selected.
8. On error, set the keyboard focus to the first radio button in the group using the ref attribute and the focus method.
9. Update the value of aria-describedby with the error ID on error, and clear the error and reset aria-describedby to an empty value when a radio button is 10. selected or the reset button is clicked.
11. Style the radio buttons using CSS Variables in a separate CSS file.
12. Render the RadioGroup component in the root element of the HTML document.
13. Wrap the rendered component in a StrictMode component from the React library.
