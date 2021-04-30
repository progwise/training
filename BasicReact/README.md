# React training@progwise

## Tooling

This is an md file, md = markdown
https://www.markdownguide.org/basic-syntax/


## Node + npm + npx + yarn

https://docs.npmjs.com/


* node = nodejs is a javascript environment without internet browser like Chrome, Edge, Firefox, Safari

* npm = node package manager to maintain your npm based project/library/app - start with



* npm init generates a basic package.json which defines the new package (=app, lib, frontend)
    
    Exercise 1
    ```
    mkdir exercise
    npm init
    ```
    
    ..You just created your first npm package
    

* npx = npm which can execute scripts directly from the internet - the package you run needs no install before you execute

    Exercise 2
    ```
    cd lesson1_npm
    npx create-react-app my-first-app
    ```

    look at the package.json and the other files you just created

# git

.gitignore file ignores files to add

```
git clone
git status
git pull
git push
git branch
git checkout
git remote
git rebase
git merge

git log
....
```

Normal workflow can be

```
git clone https git@github.com:progwise/training.git
cd training
git checkout -b 'feature-branch-name'
vim README.md
# working with you editor, create files, ...
git status # showing your changes
git add -p # (or -A or whatever git add) - these files are staged for change
git commit -m 'describe your changes'
git push # push it to the cloud, e.g. to github.com

