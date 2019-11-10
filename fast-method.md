memoization - remembering the result of previous computations

top down dp - recursive solution
bottom up dp - iterative solution


FAST Method

find the first possible solution
  * no global variables
  * no tail recursion, where tail recursion is a case of recursion where the calling function does no more computation after making a recursive call
  * no unnecessary variables

analyze the first solution
  * analyze if it has optimal substructure
  * does it have overlappig subproblems?

subproblems
  * understanding the meaning of the subproblem faciliates adding a cache 
  * the exact subproblems to memoize must be codified
  

turn the solution around
  * once top down solution is reached, flip it
  * iteratively compute results of subproblems

