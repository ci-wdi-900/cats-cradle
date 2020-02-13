# Testing Template Repo

### Basic Setup

1. Copy this repo. Either do it manually (`rm -rf .git && git init` in the copied directory), or by forking and renaming on GitHub, or (best of all) creating a new repo on GitHub and choosing this repo as its template.
2. Go into the repo and run `npm i` to install the `jest` testing framework.
3. Run `npm test` in a terminal, preferably a full-screened one for a proper display of your test results. Or, alternately, use an in-line test runner if you have one.
4. Write some tests in `main.test.js` that will test your student's code, and then write the code in `main.js` that your students should write. Don't forget to add anything you want tested to the `module.exports` object in `main.js`, and declare them in `main.test.js` in the `require` deconstruction curlies.
5. Delete your code; that's the student's job now. Or, even better: make this repo a solutions repo for a repo you'll now make without the solution in it.
6. DELETE THIS README! These directions are not for your students. Even better: rewrite this readme to be directions that _are_ for your students.