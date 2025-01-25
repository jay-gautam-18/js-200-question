const favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];
//ques 31
console.log(favoriteMovies);

//ques 32
console.log(favoriteMovies[1]);

//ques 33
favoriteMovies.unshift("The Shawshank Redemption", "Fight Club");
console.log(favoriteMovies);

//ques 34
favoriteMovies.pop();
console.log(favoriteMovies);

//ques 35
const firstThreeMovies = favoriteMovies.slice(0, 3);
console.log(firstThreeMovies);

//ques 36
const index = favoriteMovies.indexOf("Interstellar");
console.log(index);

//ques 37
const exists = favoriteMovies.includes("The Matrix");
console.log(exists);

//ques 38
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = array1.concat(array2);
console.log(combinedArray);

//ques 39
const numbers = [5, 2, 9, 1];
for(var i = 0 ; i < numbers.length ;i++){
    for(var j = 0 ; j < (numbers.length-i) ;j++){
        if(numbers[j]>numbers[j+1]){
            var t = numbers[j]
            numbers[j]=numbers[j+1]
            numbers[j+1]=t
        }
    }
}
console.log(numbers);

//ques 40
const originalArray = [1, 2, 3, 4];
let copy = [...originalArray]
console.log(copy);
