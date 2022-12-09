### Setup
1. Fork and clone this repo
2. `cd` into it and run `npm install`
3. Run `npm start` and open http://localhost:8080/ in your browser

### To Do Demo
Open index.js and follow the prompts in the comments - use them in conjunction with the code here.

### Summary:
1. Add an input field in app > index.js
      <form>
        <label>
          Username:
          <input type="text"></input>
        </label>
    </form>

2. Add an onSubmit={handleSubmission} to the <form>

3. Create the handleSubmission function with a console.log:
    function handleSubmission(event) {
        event.preventDefault();
        console.log("my target:", event.target);
    }

4. Add name="username" to the <input>
- Adding the username lets us access that specific field on the form, using event.target.username.value

5. Add in conditonal rendering to show an error
The form should look like this:
```
 <form onSubmit={handleSubmit}>
          <label>
            Username: 
            <input type="text" name="username" onChange={changeHandler}></input>
          </label>
          {error && <p>Can't have more than 9 letters!! Try again</p>}
          <input type="submit"></input>
        </form>
```
