import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)

    // #1 - Prevent default (is specific to SUBMIT function)
        // event.preventDefault();
        // console.log("my target:", event.target);

    // #2 - Get the values from the form
        // (if we console.log(event.target.value) and submit, it's undefined)
    // Good thing we named it so we can find it:
        // console.log(event.target.username.value); // this works BECAUSE we gave it that name

    // #3 - Want to be able to update the state
        //setUsername(event.target.username.value);

    // #4 - When do we want to validate the input? Before it's submitted, and possibly again after!
        // Form validation can disable fields. What kind of event should we look for? 
        // Not keypress - what if voice to text? Not onClick - same reason!
        // Let's use onchange! Need to make a new function for onChange
//   function changeHandler(event) {
    //   const newUsername = event.target.value;
    //   console.log(newUsername); }  // this will log each letter as you go

    // #5 Form validation - check length
        // First, add a state for errors as well → const [error, setError] = useState(false);
        // if (newUsername.length > 9) { setError(true); }

    // #6 - How can we show user there's an issue with the length? Add element under submit
      // Use conditional rendering: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator

const Form = () => {
    const [error, setError] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        console.log("my event: ",event.target.username.value);
    }

    function changeHandler(event) {
        const userName = event.target.value;
        console.log(userName);
        if(userName.length > 9) {
            setError(true);
        }
        else {
            setError(false);
        }
    }

    return (
      <div id='container'>
        <h2>2211 Class Form</h2>
       {/* add form data here */}
      </div>
    )
}

root.render(<Form />)
