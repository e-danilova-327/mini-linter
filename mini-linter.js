let story =
    'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//Using the .split() method to separate items in the story in order to make them countable (using the .length property)
let storyWords = story.split(' ');
//console.log(storyWords.length); --- output: 188

//Filtering the storyWords to exclude the words 'extremely', 'literally', 'actually' contained in the unnecessaryWords array
const remainingrWords = (arr1, arr2) => {
    return arr1
        .concat(arr2)
        .filter((word) => !arr1.includes(word) || !arr2.includes(word));
};

let betterWords = remainingrWords(storyWords, unnecessaryWords);
//console.log(betterWords);

//Counting how many times the words 'really', 'very', 'basically' from the overusedWords array were used in betterWords
const wordCount = () => {
    let totalAppearances = 0;
    for (let i = 0; i < betterWords.length; i++) {
        if (betterWords[i] === 'really') {
            totalAppearances += 1;
        } else if (betterWords[i] === 'very') {
            totalAppearances += 1;
        } else if (betterWords[i] === 'basically') {
            totalAppearances += 1;
        }
    }
    return totalAppearances;
};

//console.log(wordCount()); --- output: 8

//Counting how many sentences there are in the betterWords
const sentenceCount = () => {
    let total = 0;
    for (let i = 0; i < betterWords.length; i++) {
        if (betterWords[i].includes('.')) {
            total += 1;
        } else if (betterWords[i].includes('!')) {
            total += 1;
        }
    }
    return total;
};

//console.log(sentenceCount()); ---output: 12

//Creating a function that logs all of the previous items
const loggingAll = () => {
    return `There are ${
        storyWords.length
    } words and ${sentenceCount()} sentences in the original paragraph. The words 'really', 'very' and 'basically' appear ${wordCount()} times. These are really overused!`;
};

console.log(loggingAll()); //---output: There are 188 words and 12 sentences in the original paragraph. The words 'really', 'very' and 'basically' appear 8 times. These are really overused!

//Logging the betterWords array as a single string using .join() method
console.log(betterWords.join(' '));
