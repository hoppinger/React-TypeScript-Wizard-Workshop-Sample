1. Setup a simple hello world react component
2. Setup the wizard state; the wizard will let users input:
  - their name;
  - a number;
  - another number;
  and then show their sum, computed by invoking Api method `Api.addNumbers`
3. Create a Wizard component; its `render` method is a simple `switch` to invoke the proper step-component
4. Build the step components: notice that the second and third steps are the same
5. Build the sum component; make sure to handle `catch` (and use `setTimeout`) in order to retry
6. (Optional but recommended) Build a recap component to give a bit of context to the user
7. Build a dropdown to select the current number; the available numbers should come from `Api.getAvailableNumbers`
8. Implement a `back` button
