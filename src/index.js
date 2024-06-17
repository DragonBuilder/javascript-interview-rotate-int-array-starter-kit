
/**
 * 
 * @param {int[]} arr - a sequence of integers
 * @returns {int[]} - the rotated array
 * 
 * This function will be called by our system. 
 * So fill in your code inside this function.
 * 
 */
function rotateArray(arr) {
    // WRITE YOUR CODE HERE....

}




/*
* **************************************************************************************
*                          DO NOT EDIT THE CODE BELOW.
* ***************************************************************************************
* This code is used to boostrap your solution to be checked for correctness by our system.
*/
function main() {
    const input = process.argv.slice(1)
    
    const arr = JSON.parse(input[0])

    const got = rotateArray(arr)
    console.log(JSON.stringify(got))
}


main()