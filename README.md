# MUSA 611, Week 3

## Review

You can review the concepts raised in the Codecademy exercises in [review.md](review.md).

## Attributions

* Philadelphia School Facility Data from [OpenDataPhilly.org](https://opendataphilly.org/dataset/schools)
* Food icon by cindy clegane from [NounProject.com](https://thenounproject.com/icon/food-3000974/)
* Idea icon by cindy clegane from [NounProject.com](https://thenounproject.com/icon/idea-3125903/)


## Assignment

### Reading

The chapter on [JavaScript Interactivity](http://132.72.155.230:3838/js/javascript-interactivity.html) from [Introduction to Web Mapping](http://132.72.155.230:3838/js/index.html).

## Exercises

### Tools

* A GitHub account
* A git client (e.g., the [`git` CLI](https://git-scm.com/downloads), or [GitHub Desktop](https://desktop.github.com/))
* A code editor with syntax highlighting, such as Atom, VS Code, or Sublime.
* A browser with a JavaScript console

### Exercises

Like all previous exercises, this one will be submitted via pull request, and will have automated tests run against it.

1.  Fork this repository to your own GitHub account, and clone it to your computer.
1.  Run `npm install` if you want to run the tests and linter locally (optional, but highly recommended).

#### Part 1-4

1.  Open the HTML file from the corresponding folder in your browser.
1.  Open your JavaScript console to see the output from the tasks.
1.  Open the exercise's `.js` file in your code editor of choice.
1.  Follow the instructions in the file.

#### Part 5

Coming soon...

#### Submitting your code

When you submit your pull request, your code will be linted and tested automatically. If all of the tests pass you will see green check marks on the pull request. If any of the tests fail, you should see red X's. You can see what tests fail by clicking on the failed tasks and reading the logs. Edit your copy of the code until all the tests show green checks (_you do not have to re-submit a new PR to get the tests to re-run; as soon as you change your code on GitHub the tests will run_).

> **NOTE:** You can **run the tests on your computer** before submitting a pull request, or even before committing your code. You will have to install [Node.js](https://nodejs.org/en/) version 16 or later first. After you do, you can run the following in your terminal, working from the week folder:
> ```bash
> # Install test dependencies (this only has to be done once)
> npm install
>
> # Run the linter
> npx eslint exercise
>
> # Run the web server; this is needed for the tests
> npx http-server --port 8000
>
> # Open a new terminal and run the tests
> npx jest
> ```
