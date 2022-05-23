function findLongestWord(str) {
    let word = "";
    for (let i = 0; i < str.length; i++) {
      if (word.length < str[i].length) {
        word = str[i];
      }
    }
    return word;
  }
   console.log(findLongestWord(["hi", "hello","ImEagerToFinishThisCourse"]))

//  What is the space complexity? O(n)
