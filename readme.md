# Setup
Simply run ```npm install``` (or ```yarn install```). If you are using Visual Studio Code, you might want
to close and re-open the editor to make sure that auto-completion sees the newly created `node_modules`
folder.


# Running
Run the web server with: 

```bash
node_modules/.bin/http-server ./wwwroot -p 5000
```
 
Run webpack with: 

```bash
node_modules/.bin/webpack -w
```


# Modifying the application
The only files that need modification are in the `Client` folder. The bulk of the application is
`wizard.tsx` and the sub-components are located in `select_name.tsx`, `select_number.tsx`, and
`sum_numbers.tsx`. You should not need to modify `app.ts` and `api.ts`.


# Goals
* [] Run the simple hello world react component
* [] Setup the wizard state; the wizard will let users input:
  - [] their name;
  - [] a number;
  - [] another number;
  [] and then show their sum, computed by invoking Api method `Api.addNumbers`
* [] Create a Wizard component; its `render` method is a simple `switch` to invoke the proper step-component
* [] Build the step components: notice that the second and third steps are the same
* [] Build the sum component; make sure to handle `catch` (and use `setTimeout`) in order to retry
* [] (Optional but recommended) Build a recap component to give a bit of context to the user
* [] Build a dropdown to select the current number; the available numbers should come from `Api.getAvailableNumbers`
* [] Implement a `back` button
