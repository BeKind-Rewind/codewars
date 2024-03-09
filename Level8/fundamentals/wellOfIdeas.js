// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good 
// ideas 'good' and bad ideas 'bad'. If there are one or two good 
// ideas, return 'Publish!', if there are more than 2 return 'I 
// smell a series!'. If there are no good ideas, as is often the 
// case, return 'Fail!'.

// FUNDAMENTALSARRAYSSTRINGSREFACTORING

// SOLUTION

function well(x) {
  let goodIdea = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      goodIdea += 1
    }
  }
  return goodIdea === 1 || goodIdea === 2 ? 'Publish!' :
    goodIdea >= 2 ? 'I smell a series!' : 'Fail!'
}