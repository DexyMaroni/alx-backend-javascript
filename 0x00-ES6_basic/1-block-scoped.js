export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // Enclosing the conditional block inside its own scope
    {
      var task = true;
      var task2 = false;
    }
  }

  return [task, task2];
}

