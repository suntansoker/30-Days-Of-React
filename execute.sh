#!/bin/bash
git add .
git commit -m $1
git push origin exercise-solutions
git fetch upstream
git merge upstream/master exercise-solutions
git push origin exercise-solutions
