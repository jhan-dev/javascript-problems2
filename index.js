/*
Grasshopper Order of Operations

You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
*/

function grassHopper(num) {
    //     2 + 2 = 4  *   2 + 2 = 4  * 2   
    return (num + num) * (num + num) * num;
  }
  
  console.log('grassHopper:',grassHopper(2));  //-->  32
  
  /*
  Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
  
  As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
  
  You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
  
  You are given 5 variables;
  
      sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
  
      sharkSpeed = how fast it can move in metres/second.
  
      pontoonDistance = how far you need to swim to safety in metres.
  
      youSpeed = how fast you can swim in metres/second.
  
      dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
  
      The pontoon, you, and the shark are all aligned in one dimension.
  
  If you make it, return "Alive!", if not, return "Shark Bait!".
  */
  
  function pontoon(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
      sharkSpeed *= .5;
    }
    if (sharkDistance / sharkSpeed < pontoonDistance / yourSpeed) {
      //console.log('Shark time:', sharkDistance / sharkSpeed);
      //console.log('Your time:', pontoonDistance / yourSpeed);
      return 'Shark Bait!';
    }
    else if (sharkDistance / sharkSpeed > pontoonDistance / yourSpeed) {
      //console.log('Shark time:', sharkDistance / sharkSpeed);
      //console.log('Your time:', pontoonDistance / yourSpeed);
      return 'Alive!'
    }
  }
  
  console.log('pontoon1:', pontoon(12, 50, 4, 8, true));
  //--> 'Alive!'
  console.log('pontoon2:', pontoon(7, 55, 4, 16, true));
  //-->  'Alive!'
  console.log('pontoon3:', pontoon(24, 0, 4, 8, true));
  //-->  'Shark Bait!'
  
  /*
  Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
  
  Hint for R users:
  
      The length of string is not always the same as the number of characters
  
  For example: (Input1, Input2) --> output
  
  ("1", "22") --> "1221"
  ("22", "1") --> "1221"
  */
  
  function solution(a, b){
    // your code here
    if (a.length > b.length) {
      return b+a+b;
    }
    else {
      return a+b+a;
    }
  }
  
  console.log('solution1:', solution('45', '1'));
  //-->  '1451'
  console.log('solution2:', solution('13', '200'));
  //-->  '1320013'
  console.log('solution3:', solution('Soon', 'Me'));
  //-->  'MeSoonMe'
  console.log('solution4:', solution('U', 'False'));
  //-->  'UFalseU'
  
  /*
  Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
  Examples
  
  "hello"     -->  "hll"
  "codewars"  -->  "cdwrs"
  "goodbye"   -->  "gdby"
  "HELLO"     -->  "HELLO"
  
      don't worry about uppercase vowels
  */
  
  function shortcut (string) {
    let result = '';
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        continue;
      }
      else {
        result += string[i];
      }
    }
    return result;
  }
  
  console.log('shortcut1:', shortcut('hello'));  
  //-->  'hll'
  console.log('shortcut2:', shortcut('What are you doing?'));  
  //-->  'Wht r y dng'
  console.log('shortcut3:', shortcut('complain'));  
  //-->  'cmpln'
  console.log('shortcut4:', shortcut('Never'));  
  //-->  'Nvr'
  
  /*
  You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
  
  Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
  
  Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
  
  Simples!
  */
  
  function fixTheMeerkat(arr) {
   //your code here
    let result = [];
    let first = arr[0];
    let mid = arr[1];
    let end = arr[arr.length-1];
    result.push(end, mid, first);
    return result;
  }
  
  console.log('fixTheMeerkat1:', fixTheMeerkat(["tail", "body", "head"]));  
  //-->  ['head', 'body', tail]
  console.log('fixTheMeerkat2:', fixTheMeerkat(["tails", "body", "heads"]));  
  //-->  ['heads', 'body', 'tails']
  console.log('fixTheMeerkat3:', fixTheMeerkat(["bottom", "middle", "top"]));  
  //-->  ['top', 'middle', 'bottom']
  console.log('fixTheMeerkat4:', fixTheMeerkat(["ground", "rainbow", "sky"]));  
  //-->  ['sky', 'rainbow', 'ground']
  
  /*
  Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:
  
  sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);
  
  First, determine the average of each array. Then, return the sum of all the averages.
  
      All numbers will be less than 100 and greater than -100.
      arr will contain a maximum of 50 arrays.
      After calculating all the averages, add them all together, then round down, as shown in the example below:
  
  The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.
  
      Calculate the average of each individual array:
  
      [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
      [21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
  
      Add the average of each array together:
  
      3 + 41.2 = 44.2
  
      Round the final average down:
  
      Math.floor(44.2) = 44
  
  import math
  math.floor(44.2) = 44
  */
  
  const sumAverage = (arr) => {
    // Your code here
    let result = 0;
    //iterate outerArr
    for (var i = 0; i < arr.length; i++) {
      //create currInnArr var
      let currInnArr = arr[i];
      //create arrTotal var
      let arrTotal = 0;
      //iterate currInnArr
      for (var j = 0; j < currInnArr.length; j++) {
        //create innerInd var
        let innerInd = currInnArr[j];
        //add innerInd to arrTotal & divide by currInnArr length
        arrTotal += innerInd / currInnArr.length;
      }
      //update result w/ each outer arr rounded down
      result += arrTotal
    }
    //return result
    return Math.floor(result);
  }
  
  console.log('sumAverage1:', sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));
  //-->  44
  console.log('sumAverage2:', sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]));  //-->  -6
  
  /*
  Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
  
  In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.
  */
  
  function howManyTimes(annualPrice, individualPrice) {
    // code here
    return Math.ceil(annualPrice/individualPrice);
  }
  
  console.log('howManyTimes:1', howManyTimes(40,15));
  //--> 3
  console.log('howManyTimes:2', howManyTimes(30,10));
  //--> 3
  console.log('howManyTimes:3', howManyTimes(80,15));
  //--> 6
  
  /*
  Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
  
  The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
  
  Upper or lower case letter does not matter -- "eNglisH" is also correct.
  
  Return value as boolean values, true for the string to contains "English", false for it does not.
  */
  
  function spEng(sentence){
    //write your code here
    sentence = sentence.toLowerCase();
    let eng = 'english';
    if (sentence.includes(eng)) {
      return true;
    }
    return false;
  }
  
  console.log('spEng:1', spEng("english"));
  //--> true);
  console.log('spEng:2', spEng("egnlish"));
  //--> false);
  
  /*
  Sentence Smash
  
  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
  
  Example
  
  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
  */
  
  function smash (words) {
    //create result var ''
    let result = '';
    //convert words to str w/ space between word
    words = words.join(' ');
    //iterate words str
    for (var i = 0; i < words.length; i++) {
      let currWord = words[i];
      //update result w/ currWord
      result += currWord;
    }
    //console.log(result);
    //return result
    return result;
  };
  
  console.log('smash1:', smash(["hello", "world"]));
  //-->  'hello world'
  console.log('smash2:', smash(["hello", "amazing", "world"]));
  //-->  'hello amazing world'
  console.log('smash3:', smash(["this", "is", "a", "really", "long", "sentence"]));
  //-->  'this is a really long sentence'
  
  /*
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
  Examples (Input -> Output):
  
  * "String"      -> "SSttrriinngg"
  * "Hello World" -> "HHeelllloo  WWoorrlldd"
  * "1234!_ "     -> "11223344!!__  "
  */
  
  function doubleChar(str) {
    // Your code here
    //create result var ''
    let result = '';
    //iterate str
    for (var i = 0; i < str.length; i++) {
      //update result w/ double char per iteration
      result += str[i]+str[i];
    }
    //return result
    return result;
  }
  
  console.log('doubleChar1:', doubleChar("abcd"));
  //-->  "aabbccdd");
  console.log('doubleChar2:', doubleChar("Adidas"));
  //-->  "AAddiiddaass");
  console.log('doubleChar3:', doubleChar("1337"));
  //-->  "11333377");
  console.log('doubleChar4:', doubleChar("illuminati"))
  //-->  "iilllluummiinnaattii");
  console.log('doubleChar5:', doubleChar("123456"));
  //-->  "112233445566");
  console.log('doubleChar6:', doubleChar("%^&*("));
  //-->  "%%^^&&**((");
  
  /*
  Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
  
  Example:
  
  sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
  
  This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
  */
  
  function sayHello( name, city, state ) {
    //return formatted output
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
  }
  
  console.log('sayHello1:', sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
  //-->  'Hello, John Smith! Welcome to Phoenix, Arizona!'
  console.log('sayHello2:', sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));
  //-->  'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
  console.log('sayHello3:', sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'));
  //-->  'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
  
  /*
  Write a function that returns a string in which firstname is swapped with last name.
  
  Example(Input --> Output)
  
  "john McClane" --> "McClane john"
  */
  
  function nameShuffler(str){
    //convert str to arr & reverse
    let name = str.split(' ').reverse();
    //return arr to str w/ space between
    return name.join(' ');
  }
  
  console.log('nameShuffler1:', nameShuffler('john McClane'));
  //-->  'McClane john');
  
  /*
  Given a string s consisting of words and spaces, return the length of the last word in the string.
  
  A word is a maximal substring consisting of non-space characters only.
  
  Example 1:
  
  Input: s = "Hello World"
  Output: 5
  Explanation: The last word is "World" with length 5.
  
  Example 2:
  
  Input: s = "   fly me   to   the moon  "
  Output: 4
  Explanation: The last word is "moon" with length 4.
  
  Example 3:
  
  Input: s = "luffy is still joyboy"
  Output: 6
  Explanation: The last word is "joyboy" with length 6.
  */
  
  var lengthOfLastWord = function(s) {
    //create count var
    let count = 0;
    //create word var w/ trim
    let word = s.trim();
    console.log(word);
    //iterate word
    for (var i = 0; i < word.length; i++) {
      let currWord = word[i];
      //if currWord = ' '
      if (currWord === ' ') {
        //count = 0
        count = 0;
      }
      //else
      else {
        //else add 1 to count
        count++;
      }
    }
    //return count
    return count;
  };
  
  console.log('lengthOfLastWord1:', lengthOfLastWord('Hello World'));
  //-->  5
  console.log('lengthOfLastWord2:', lengthOfLastWord('   fly me   to   the moon  '));
  //-->  4
  console.log('lengthOfLastWord3:', lengthOfLastWord('luffy is still joyboy'));
  //-->  6
  
  /*
  Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
  
  The geese are any strings in the following array, which is pre-populated in your solution:
  
    ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  
  For example, if this array were passed as an argument:
  
   ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  
  Your function would return the following array:
  
  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
  */
  
  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
  
    //create result arr
    let result = [];
    //iterate birds arr
    for (var i = 0; i < birds.length; i++) {
      let currBird = birds[i];
      //if geese is inside currbird from arr
      if (geese.includes(currBird)) {
        //continue
        continue;
      }
      //else
      else {
        //push currbird to result
        result.push(currBird);
      }
    }
    //return result
    return result;
  };
  
  console.log('gooseFilter1:' ,gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
  //-->  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
  console.log('gooseFilter2:' ,gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]));
  //-->  ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
  console.log('gooseFilter3:' ,gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));
  //-->  []
  
  /*
  Given an array of integers nums, return the number of good pairs.
  
  A pair (i, j) is called good if nums[i] == nums[j] and i < j.
  
  Example 1:
  
  Input: nums = [1,2,3,1,1,3]
  Output: 4
  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
  
  Example 2:
  
  Input: nums = [1,1,1,1]
  Output: 6
  Explanation: Each pair in the array are good.
  
  Example 3:
  
  Input: nums = [1,2,3]
  Output: 0
  */
  
  var numIdenticalPairs = function(nums) {
    //create result var
    let result = 0;
    //iterate nums arr for i
    for (var i = 0; i < nums.length; i++) {
      let currNum = nums[i];
      //iterate nums arr for j
      for (var j = i; j < nums.length; j++) {
        //if nums[i] = nums[j] && i < j
        if (currNum === nums[j] && i < j) {
          //result ++
          result++;
        }
      }
    }
    //return result
    return result;
  };
  
  console.log('numIdenticalPairs1:', numIdenticalPairs([1,2,3,1,1,3]));
  //-->  4
  console.log('numIdenticalPairs2:', numIdenticalPairs([1,1,1,1]));
  //-->  6
  console.log('numIdenticalPairs3:', numIdenticalPairs([1,2,3]));
  //-->  0
  
  /*
  You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
  
  Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
  
  Example 1:
  
  Input: salary = [4000,3000,1000,2000]
  Output: 2500.00000
  Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
  Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
  
  Example 2:
  
  Input: salary = [1000,2000,3000]
  Output: 2000.00000
  Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
  Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
  */
  
  var average = function(salary) {
    //create result var
    let result = 0;
    //sort salary arr by iteration w/ i
    for (var i = 0; i < salary.length; i++) {
      //iterate salary arr w/ j
      for (var j = i + 1; j < salary.length; j++) {
        //if ind[i] > ind[j]
        if (salary[i] > salary[j]) {
          //temp = ind[i]
          let temp = salary[i];
          //ind[i] = ind[j]
          salary[i] = salary[j];
          //ind[j] = temp
          salary[j] = temp;
        }
      }
    }
    //create min & max vars
    let min = salary[0];
    let max = salary[salary.length-1];
    //create count var
    let count = 0;
    //iterate salary arr excluding min and max
    for (var k = 1; k < salary.length-1; k++) {
      let currSalary = salary[k];
      //update currSalary to result
      result += currSalary;
      count++;
    }
    //return result
    return result/count;
  };
  
  console.log('average1:', average([4000, 3000, 1000, 2000]));
  //-->  2500.00000
  console.log('average2:', average([1000, 2000, 3000]));
  //-->  2000.00000
  console.log('average3:', average([8000, 9000, 2000, 3000, 6000, 1000]));
  //-->  4750.00000
  
  /*
  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
  
  Example 1:
  
  Input: s = "leetcode"
  Output: 0
  
  Example 2:
  
  Input: s = "loveleetcode"
  Output: 2
  
  Example 3:
  
  Input: s = "aabb"
  Output: -1
  */
  
  var firstUniqChar = function(s) {
    //create charCount Obj {}
    let charCount = {};
    //iterate string
    for (var i = 0; i < s.length; i++) {
      let currChar = s[i];
      //if currChar in Obj is undefined
      if (charCount[currChar] === undefined) {
        //add currChar into Obj w/ 1
        charCount[currChar] = 1;
      }
      //else add 1 to currChar in Obj
      else {
        charCount[currChar]++;
      }
    }
    for (let count in charCount) {
      //if count in Obj === 1
      if (charCount[count] === 1) {
        //return index of count from Obj
        return s.indexOf(count);
      }
    }
    //console.log(charCount);
    //return -1
    return -1;
  };
  
  console.log('firstUniqChar1:', firstUniqChar('leetcode'));
  //-->  0
  console.log('firstUniqChar2:', firstUniqChar('loveleetcode'));
  //-->  2
  console.log('firstUniqChar3:', firstUniqChar('aabb'));
  //-->  -1
  
  /*
  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
  
  Each letter in magazine can only be used once in ransomNote.
  
  Example 1:
  
  Input: ransomNote = "a", magazine = "b"
  Output: false
  
  Example 2:
  
  Input: ransomNote = "aa", magazine = "ab"
  Output: false
  
  Example 3:
  
  Input: ransomNote = "aa", magazine = "aab"
  Output: true
  */
  
  var canConstruct = function(ransomNote, magazine) {
    //parse ransom str to array
    let ransomArr = ransomNote.split('');
    //parse magazine str to array
    let magazineArr = magazine.split('');
    //create Empty magazine Object
    let magazineObj = {};
    //create result variable equaling true
    let result = true;
    //forEach var word w/ magazine Array
    magazineArr.forEach(word => {
      //if word in magazine Object does NOT equal 0
      if (!magazineObj[word]) magazineObj[word] = 0;
      //increment word in magazine Object
      magazineObj[word]++;
    });
    //forEach var word w/ ransom Array
    ransomArr.forEach(word => {
      //if word in magazine Object is True
      if (magazineObj[word]) {
        //decrement word in magazine Object by 1
        magazineObj[word]--;
        //if word in magazine Object is Less than 0, result equals false
        if(magazineObj[word] < 0) result = false;
      }
      //else
      else {
        //result equals false
        result = false;
      }
    });
    //return result
    return result;
  };
  
  console.log('canConstruct1:', canConstruct('a', 'b'));
  //-->  false
  console.log('canConstruct2:', canConstruct('aa', 'ab'));
  //-->  false
  console.log('canConstruct3:', canConstruct('aa', 'aab'));
  //-->  true
  console.log('canConstruct4:', canConstruct('hello', 'hello world'));
  //-->  true
  
  /*
  Given an integer n, return a string array answer (1-indexed) where:
  
      answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
      answer[i] == "Fizz" if i is divisible by 3.
      answer[i] == "Buzz" if i is divisible by 5.
      answer[i] == i (as a string) if none of the above conditions are true.
  
  Example 1:
  
  Input: n = 3
  Output: ["1","2","Fizz"]
  
  Example 2:
  
  Input: n = 5
  Output: ["1","2","Fizz","4","Buzz"]
  
  Example 3:
  
  Input: n = 15
  Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
  */
  
  var fizzBuzz = function(n) {
    //create empty result array
    let result = [];
    //start iteration at 1, until n + 1, increment by 1
    for (var i = 1; i < n+1; i++) {
      //if i is divisible by 3 & 5
      if (i % 3 === 0 && i % 5 === 0) {
        //push 'FizzBuzz'
        result.push('FizzBuzz');
      }
      //else if n is divisible by 3
      else if (i % 3 === 0) {
        //push 'Fizz'
        result.push('Fizz');
      }
      //else if n is divisible by 5
      else if (i % 5 === 0) {
        //push 'Buzz'
        result.push('Buzz');
      }
      //else if None of i is divisible by 3 & 5 OR divisibe by 3 OR divisible by 5 
      else if (!(i % 3 === 0 && i % 5 === 0 || i % 3 === 0 || i % 5 === 0)) {
        //push i as a String
        result.push(String(i));
      }
    }
    //return result
    return result;
  };
  
  console.log('fizzBuzz1:', fizzBuzz(3));
  //-->  ['1', '2', 'Fizz']
  console.log('fizzBuzz2:', fizzBuzz(5));
  //-->  ["1","2","Fizz","4","Buzz"]
  console.log('fizzBuzz3:', fizzBuzz(15));
  //-->  ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
  
  /*
  Google is launching a network of autonomous pizza delivery drones and wants you to create a flexible rewards system (Pizza Points™) that can be tweaked in the future. The rules are simple: if a customer has made at least N orders of at least Y price, they get a FREE pizza!
  
  Create a function that takes an object of customers, a minimum number of orders and a minimum order price. Return an array of customers that are eligible for a free pizza.
  Examples
  
   let customersObj = {
      "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
      "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
    }
  
    pizzaPoints(customersObj, 5, 20) ➞ ["Spider-Man"]
    pizzaPoints(customersObj, 3, 10) ➞ ["Batman", "Spider-Man"]
    pizzaPoints(customersObj, 5, 100) ➞ []
  
  Notes
  ⚠️Sort the returned array of customer names in alphabetical order.
  */
  
  function pizzaPoints(customers, minOrders, minPrice) {
      //create empty result array
    let result = [];
    //iterate Object for keys
    for (let key in customers) {
      //create count equaling Zero
      let count = 0;
      let customerOrders = customers[key];
      //iterate customerOrders
      for (var i = 0; i < customerOrders.length; i++) {
        let currOrder = customerOrders[i];
        //if currOrder >= minPrice
        if (currOrder >= minPrice) {
          //increment count by 1
          count++;        
        }
      }
      //if count > minOrders
      if (count > minOrders) {
        //push Object key into result array
        result.push(key)
      }
    }
    //return result
    return result;
  }
  
  let customersObj = {
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
  }
  
  console.log('pizzaPoints1:', pizzaPoints(customersObj, 5, 20));
  //-->  ['Spider-man']
  console.log('pizzaPoints2:', pizzaPoints(customersObj, 3, 10));
  //-->  ['Batman', 'Spider-Man']
  console.log('pizzaPoints3:', pizzaPoints(customersObj, 5, 100));
  //-->  []
  
  /*
  The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.
  
  Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.
  
      If you won more rounds than your spouse, return "ME!"
      If your spouse won more rounds, return "SPOUSE!"
      If you are tied, return "NOBODY!"
  
  Examples
  
  determineWinnerOfFight({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 5,
      spouse: 20,
    },
    round3: {
      me: 10,
      spouse: 10,
    },
  }) ➞ "NOBODY!"
  
  determineWinnerOfFight({
    round1: {
      me: 40,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 10,
    },
    round3: {
      me: 9,
      spouse: 10,
    },
  }) ➞ "SPOUSE!"
  */
  
  function determineWinnerOfFight(obj) {
    //create myTotal & spouseTotal vars
    let myWins = 0;
    let spouseWins = 0;
    //iterate Obj
    for (let round in obj) {
      //create myScore obj var
      let myScore = obj[round]['me'];
      //create spouseScore obj var
      let spouseScore = obj[round]['spouse'];
      //if myScore is Greater Than spouseScore
      if (myScore > spouseScore) {
        //increment myWins by 1
        myWins++;
      }
      //else //if myScore is Less Than spouseScore
      else if (myScore < spouseScore) {
        //increment spouseWin by 1
        spouseWins++;
      }    
      //else if myScore equals spouseScore
      else if (myScore === spouseScore) {
        //continue
        continue;
      }
    }
    //if myWins is Greater Than spouseWins
    if (myWins > spouseWins) {
      //return 'ME!'
      return 'ME!';
    }
    //else if myWins is Less Than spouseWins
    else if (myWins < spouseWins) {
      //return 'SPOUSE!'
      return 'SPOUSE!';  
    }
    //else
    else {
      //return 'NOBODY!'
      return 'NOBODY!';
    }
  }
  
  let determineWinnerOfFight1 = {
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 5,
      spouse: 20,
    },
    round3: {
      me: 10,
      spouse: 10,
    },
  }
  
  let determineWinnerOfFight2 = {
    round1: {
      me: 40,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 10,
    },
    round3: {
      me: 9,
      spouse: 10,
    },
  }
  
  console.log('determineWinnerOfFight1:', determineWinnerOfFight(determineWinnerOfFight1));
  //-->  'NOBODY!'
  console.log('determineWinnerOfFight2:', determineWinnerOfFight(determineWinnerOfFight2));
  //-->  'SPOUSE!'
  
  /*
  Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
  Examples
  
  sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
  sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
  sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]
  
  Notes
  
      Words will contain only lowercase letters, and may contain whitespaces.
      Frequency does not matter (e.g. if the first word is "loopy", then you can include words         with any number of o's, so long as they only contain o's, and not any other vowels).
  
  */
  
  function sameVowelGroup(words) {
      //create empty result arr
    let result = [];
    //create empty vowels array
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    //create empty vowelCount array
    let vowelCount = [];
    //create isVowel var
    let isVowel = false;
    //create fWord var
    let fWord = words[0];
    //iterate the first word for vowels
    for (var i = 0; i < fWord.length; i++) {
      //if vowels Array is included in letters of First word
      if (vowels.includes(fWord[i])) {
        //update isVowel to true
        isVowel = true;
        //push index of i Letter of First Word into vowelCount Array
        vowelCount.push(fWord[i]);
      }
      else {
        continue;
      }
    }
    if (isVowel) {
      //push first word into result array
      result.push(words[0]);
    }
    //iterate words array excluding First Word
    for (var j = 1; j < words.length; j++) {
      //create chars var by word of j from String to Array
      let chars = words[j].split('');
      //iterate chars Array
      for (var k = 0; k < chars.length; k++) {
        //if chars Array is included in vowelCount of k index
        if (chars.includes(vowelCount[k])) {
          //push words of j index into result
          result.push(words[j]);
          //break after update
          break;
        }
      }
    }
    //console.log(vowelCount);
    //return result
    return result;
  }
  
  let sameVowelGroup1 = ["toe", "ocelot", "maniac"];
  let sameVowelGroup2 = ["many", "carriage", "emit", "apricot", "animal"];
  let sameVowelGroup3 = ["hoops", "chuff", "bot", "bottom"];
  
  console.log('sameVowelGroup1:', sameVowelGroup(sameVowelGroup1));
  //-->  ["toe", "ocelot"]
  console.log('sameVowelGroup2:', sameVowelGroup(sameVowelGroup2));
  //-->  ["many"]
  console.log('sameVowelGroup3:', sameVowelGroup(sameVowelGroup3));
  //-->  ["hoops", "bot", "bottom"]
  
  /*
  Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.
  Examples
  
  getObject({
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  }) ➞ {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 16, name: "Robin", marks: "200" },
    "2": { age: 16, name: "Bella", marks: "300" }
  }
  
  getObject({
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
  }) ➞    {
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 16, name: 'Robin', marks: '200'},
    2: {age: 16, name: 'Bella', marks: '300'},
    3: {age: 16, name: 'john', marks: '250'}
  }
  */
  
  function getObject(args) {
      //create empty result Object
    let result = {};
    let compare = [];
    //iterate args Object
    for (var key in args) {
      //create marks var for quicker access from Object
      let marks = args[key].marks;
      if (result[key] === undefined) {
        compare.push(marks);
        result[key] = args[key];
      }
      //iterate compare Array for first num
      for (var i = 0; i < compare.length; i++) {
        //create first num var
        let fNum = compare[i];
        //iterate compare Array for second num
        for (var j = i + 1; j < compare.length; j++) {
          //create second num var
          let sNum = compare[j];
          //if first num equals second num
          if (fNum === sNum) {
            //remove last duplicate key
            delete result[key];
            //decrement key by 1
            //Stop loop
            break;
          }
          //else
          else {
            //update result Obj w/ key of args Obj
            result[key-1] = args[key];
          }
        }
      }
    }
    //return result
    return result;
  }
  
  let getObject1 = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  }
  
  let getObject2 = {
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
  }
  
  console.log('getObject1:', getObject(getObject1));
  /*-->  {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 16, name: "Robin", marks: "200" },
    "2": { age: 16, name: "Bella", marks: "300" }
  }*/
  console.log('getObject2:', getObject(getObject2));
  /*-->  {
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 16, name: 'Robin', marks: '200'},
    2: {age: 16, name: 'Bella', marks: '300'},
    3: {age: 16, name: 'john', marks: '250'}
  }*/