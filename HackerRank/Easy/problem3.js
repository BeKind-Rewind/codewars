// Compare the triplets

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
// awarding points on a scale from 1 to 100 for the three categories: problem clarity, originality, and difficulty

// The rating for alice's challenge in the triplet a = (a[0], a[1], a[2]), and the rating for Bob's is the triplet b = (b[0], b[1], b[2])

// The task is to find their comparrison points by comparing a[0] w b[0]
// if a[i] > b[i] alice gets one point
// if equal no points

// comparrison points is the total points the person earned


// SOLUTION

function compareTriplets(a,b){
  let alice = 0
  let bob =0
  for(let i = 0; i < a.length; i++){
    if (a[i] > b[i]){
      alice++
    }
    if (a[i] < b[i]){
      bob++
    }
    
  }
  return [alice, bob]
}