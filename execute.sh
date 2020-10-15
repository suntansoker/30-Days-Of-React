#!/bin/bash
git add .
git commit -m $1
git push origin exercise-solutions
git fetch upstream
git merge upstream/master exercise-solutions
git push origin exercise-solutions
git checkout master
git merge upstream/master master
git push origin master
git checkout exercise-solutions