// Description:
// In this kata, you are given the sum of the number of vertices, edges, and faces of an
// N-sided prism, which is equal to s. Your task is to determine and return a tuple 
// containing four values: the number of vertices, edges,
// faces, and the number of sides of the base of the prism.

// A prism is a polyhedron with two parallel, congruent bases 
// and rectangular lateral faces connecting the corresponding sides of the bases.
// triangular prism example:

// For an N-sided prism:
// Vertices (V): The total number of vertices.
// Edges (E): The total number of edges.
// Faces (F): The total number of faces.
// Base sides (B): The number of sides of the base of the prism.

// Given the sum 𝑠 = 𝑉 + 𝐸 + 𝐹, return the tuple (V ,E ,F ,B).

// Constraints:

// 1. The number of sides of the base B is an integer greater than or equal to 3.

// 2. The sum s is an integer in the range 4 ≤ 𝑠 ≤ 1000

// MathematicsAlgorithms

// SOLUTION

function prismProperties(s) {
  // base
  // vertices is always 2x base
  // edges will be 3x base
  // faces will be base + 2
  // therefore we can say s = V + E + F
  // s = 2B + 3b + b + 2
  // s = 6b + 2
  // b = (s - 2 / 6)
  
  const base = (s - 2)/6;
  return [2 * base, 3 * base, base + 2, base];
}