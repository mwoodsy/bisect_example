# git bisect example

simple example for git bisect

This script does something simple, it counts to 10. Somewhere along the way it broke and now counts by 2s to 10. to find the commit that broke this script run the following

```
git bisect start
git bisect bad
git bisect good 448b60edeb8f3bc366e940c7e00ab89fd45d6d13
```

448b60edeb8f3bc366e940c7e00ab89fd45d6d13 is a commit where we know the script worked correctly.

git bisect will choose a previous commit somewhere between the current commit and the good commit. Run `node index.js` if the results are 1...10 counting by 1s type `git bisect good` if the results are 2...10 counting by 2's type `git bisect bad` eventually git bisect will report the commit that broke the script. After you find the bad commit type `git bisect reset` to exit out of git bisect. 