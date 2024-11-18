export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  function apply(){
    if (trueOrFalse) {
      var task = true;
      var task2 = false;
    }
  }
  apply()

  return [task, task2];
}
