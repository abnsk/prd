# Some Notes
* No CSS preprocessors were used. Since it's a small/demo project I didn't see any benefits of adding Sass or something similar.
* State management was done via Redux-toolkit. There is also a use of React hooks.
* I wasn't really sure how creating new tasks since there were no UI. I created a basic form in a modal without any form libraries.
* Creating a new task can be done via `+` button at top right.
* Currently there is no way of deleting a task.
* While task itself mentioned only 2 boards, I followed UI mocks and created 4 boards instead.
* Icons are exported from Figma using "Copy as SVG" functionality.
* Instead of using profile pictures gradients were used.


# How to Build/Run
Project was developed using
```
$ npm -v    : 7.3.0
$ node -v   : v15.5.0
```

In order to start app in development mode
```
npm run serve
```

To Build
```
npm build
```