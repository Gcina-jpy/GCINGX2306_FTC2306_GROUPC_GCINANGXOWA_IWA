const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  }
  
  // Only edit below
  
  const [firstList = [], secondList = [], thirdList = []] = data.lists.map(([name, values]) => values);
  
  const extractBiggest = () => {
    const firstMax = Math.max(...firstList, -Infinity);
    const secondMax = Math.max(...secondList, -Infinity);
    const thirdMax = Math.max(...thirdList, -Infinity);
  
    if (firstMax > secondMax) {
      return firstList;
    } else if (thirdMax > 1) {
      return thirdList;
    } else {
      return secondList;
    }
  }
  
  // Only edit above
  
  const result = [];
  
  for (let i = 0; i < 15; i++) {
    result.push(extractBiggest());
  }
  
  console.log(result);
  