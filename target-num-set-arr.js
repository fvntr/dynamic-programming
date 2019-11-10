/*
Find the total sets of numbers that add up to a target number
*/ 

const countSets = (arr, total) => {
    let memo = {}; 
    const tail = arr.length -1; 
    return countSetsDP(arr, total, tail, memo); 
}; 

const countSetsDP = (arr, total, i, memo) => {
		const key = `${total}:${i}`; 
		let totalSets; 
    if(memo[key]){
    	return memo[key]; 
    } 
    if(total === 0){
			return 1;  
		} else if(total < 0 || i < 0){
			return 0;  
		} else if (total < arr[i]){
			totalSets = countSetsDP(arr, total, i-1, memo); 
		} else {
			totalSets = countSetsDP(arr, total - arr[i], i-1, memo) + countSets(arr, total, i-1, memo); 
		}
		return totalSets; 
}; 

