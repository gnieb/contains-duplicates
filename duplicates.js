function containsDuplicate (arr) {
    let store = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in store) {
            return true
        }
        store.push(arr[i])
    }
    return false
}


if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: true");
    console.log("=>", containsDuplicate([11, 4, 7, 2, 3, 7]) );
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", containsDuplicate([1, 2, 3, 4]));

    console.log("Expecting: false");
    console.log("=>", containsDuplicate([]));
  }


module.exports = containsDuplicate;



// return true if there is more than one element in the array. 
// can iterate through the arrya and iterate a second time OR create a hashmap. 

// what if it's an empty array