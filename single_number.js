

const findNum = (arr) => {
    const map = new Map()
    
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
        
    }

    for (let [key, val] of map) {
        if(val===1) return key
    }
}

console.log(findNum([1,1,1,0,0,0,8]))