

// What is backtracking?
// Backtracking is a way to explore all the possible and "backtrack" when you realize the path won't lead to  a solution 


//  Example 1 

const findAllSubsets = (nums) => {
    const result = [];
    
    function backtrack(path, start) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) { 
            path.push(nums[i])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    
    backtrack([],0)
    return result
}

console.log(findAllSubsets([1, 2, 3]));

