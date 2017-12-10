export const arrangeToysArray = function (originalToys) {
  var indexOfLastSmall;
  for (j = originalToys.length - 1; j >= 0; j--) {
    if (originalToys[j].toysType === 'small') {
      indexOfLastSmall = j;
      break;
    }
  }
  //concat() creates new array, we don't manipulate this.state.
  const toys = originalToys.concat(originalToys[indexOfLastSmall]);
  toys.splice(indexOfLastSmall, 1);
  let newData = [];
  let indexSmall = -1;
  for (i = 0; i < toys.length; i++) {
    const item = Array.of(toys[i]);
    if (toys[i].toysType === 'small' && indexSmall === -1) {
      newData.push(item);
      indexSmall = newData.indexOf(item);
    } else if (toys[i].toysType === 'small') {
      newData[indexSmall].push(toys[i]);
      indexSmall = -1;
    }
    if (toys[i].toysType === 'big') {
      newData.push(Array.of(toys[i]));
    }
  }
  return newData;
}