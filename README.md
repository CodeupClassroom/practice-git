# Git Practice Exercise

## What this exercises:
- Cloning repositories
- Creating your own branch
- Adding and committing files to your own branch
- Pushing your branch to a remote repository

## Why is this important
1. Git proficiency is crucial for working with source code in a collaborative way
2. Employer partners often share with Codeup that they'd graduates 
3. The topics of this exercise will be assessed later in the Codeup course
 
## Overview of Directions
1. Clone this repository to your development environment
2. Create a branch named your firstname-lastname. For instance, Grace Hopper would create a branch called grace-hopper
3. Go to index.html and add an `<h1>` element that contains your name.
4. Add and commit your changes.
5. Push your local firstname-lastname branch to GitHub.

## Detailed Instructions for IntelliJ Users
1. Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo. The clone address of the repo is found by clicking the green "Clone or download" button on the repo's page.

2. Create a branch named firstName-lastLastname where firstName is your first name and lastName is your last name. In IntelliJ, go to VCS, then Git, then Branches, and click "+ New Branch" and name it accordingly.

3. Either do Command+K or go to VCS, Git, then commit your work in IntelliJ.

4. Push your branch to GitHub with Command+Shift+K or go to VCS, Git, then Push. This will push your firstname-lastname branch to this GitHub repository. 

## Detailed Instructions for Command Line
1. Open up your terminal application
2. Navigate to your projects directory or wherever you normally add new projects.
3. Clone this repository: `git clone https://github.com/CodeupClassroom/practice-git.git`
4. Change directories into your copy of this project `cd practice-git`
5. Create a branch in your name. `git checkout -b firstName-lastName` where the first and last names are your first and last name.
6. Run `git status` to double check the new branch is created and you are working inside of it.
7. In your prefered editor, open up `index.html` and add an `h1` tag with your name. Be sure to save your work.
8. Running `git status` should show that you have uncommitted changes in `index.html`
9. Running `git diff` should show the changes that you have made to any files.
10. Run `git add index.html` to add the changes `index.html`
11. Run `git commit -m "adding my changes to index.html"`
12. Run `git push -u origin firstName-lastName`
13. In your browser, navigate to this repository on GitHub and double check to make sure your branch is pushed.

## Setup requirements
- Instructors must add students to a team named after the class name.
- Students must accept the invite from GitHub in order to be able to contribute to this repo
