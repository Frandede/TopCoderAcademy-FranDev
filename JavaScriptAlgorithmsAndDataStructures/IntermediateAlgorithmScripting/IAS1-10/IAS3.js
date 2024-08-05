function destroyer(arr) {
  const args = Array.from(arguments);
  const initialArray = args[0];
  const valuesToDestroy = args.slice(1);
  const resultArray = initialArray.filter(item => !valuesToDestroy.includes(item));

  return resultArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
