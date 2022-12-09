### Setup
1. Fork and clone this repo
2. `cd` into it and run `npm install`
3. Run `npm start` and open http://localhost:8080/ in your browser

### Create a Form
1. Add an input field
      <form>
        <label>
          Username:
          <input type="text"></input>
        </label>
        </form>

2. Add onSubmit={handleSubmission} to the <form>
3. Create the handleSubmission function with a console.log:
    function handleSubmission(event) {
        event.preventDefault();
        console.log("my target:", event.target);
    }
4. Add name="username" to the <input>
