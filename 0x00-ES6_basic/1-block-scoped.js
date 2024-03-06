export default function taskBlock(trueOrFalse) {
  let task;
  let task2; // Declare variables at the top of the function

  task = false;
  task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
