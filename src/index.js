
/**
 * 
 * @param {int[]} arr - a sequence of integers
 * @param {int} n - the number of times to rotate the array
 * @returns {int[]} - the rotated array
 * 
 * This function will be called by our system. 
 * So fill in your code inside this function.
 * 
 */
function rotateArray(arr, n) {
    // WRITE YOUR CODE HERE....

}




/*
* **************************************************************************************
*                          DO NOT EDIT THE CODE BELOW.
* ***************************************************************************************
* This code is used to boostrap your solution to be checked for correctness by our system.
*/
function main() {
    const input = process.argv.slice(2)
    
    const arr = JSON.parse(input[0])
    const n = parseInt(input[1])

    const got = rotateArray(arr, n)
    console.log(JSON.stringify(got))
}


main()