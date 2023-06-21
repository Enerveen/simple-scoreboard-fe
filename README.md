# Simple Scoreboard (React version)
This is the Front-end implementation of the scoreboard code exercise. The original solution can be found [here](https://github.com/Enerveen/simple-scoreboard).
Use `yarn dev` to start a live server with the application and `yarn test` to run the tests.

## Notes and thoughts
Working on this excercise, I've tried to implement the simplest possible solution, as it is mentioned in the code excercise. Ideally, I would also add some validation on user inputs and segregated the scoreboard handling logic from the `<Scoreboard/>` component and make it look better in terms of styling. Also, to achieve more sustainability for the cases of sorting matches with the same total score, I would add `startTimestamp` field to the Match type. However, considering that we add matches to the scoreboard immediately after their start, it works as it is.

