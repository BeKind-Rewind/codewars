// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order!
// Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// LISTSSORTINGFUNDAMENTALSARRAYS

// GIVEN

function sorter(textbooks) {
  return textbooks;
}

// SOLUTION

function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 :
    a.toLowerCase() < b.toLowerCase() ? -1 : 0)
}

// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, 
// now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their 
// sequences of UTF-16 code units values.