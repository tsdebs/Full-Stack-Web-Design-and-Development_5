var monday = 'a market day'
if(monday){
   console.log('monday, is a market day')
}
if('sunday is a church day'){
  console.log('true')
}
else{'go on monday'}


if('monday is not a market day' && 'sunday is not a market day'){
console.log('go on saturday')
}
else('saturday is a market day')



// Classwork solution
var marketDay = true
var notAMarketday = false

var monday = notAMarketday
var saturday = notAMarketday
var sunday = notAMarketday

if(monday == true){
    console.log('monday is not a market day')
}
else if(sunday == true){
console.log('sunday is not a market day')}

else if(saturday == true){
    console.log('most saturdays are market days')
}

else{
    console.log('we either go to work or rest on these days')
}



// Classwork
 var empty = []
 var fullValues = [1,2,3,4,5,6,'name', 'class', 7,8]
 console.log(fullValues)
 var fullValues
 fullValues.push('subject')
 console.log(fullValues[10])

 fullValues.pop()
 console.log(fullValues)

 fullValues.shift()
 console.log(fullValues)

 var clauses = []
 clauses.unshift('My name is Deborah', 'I am learning Javascript')
 console.log(clauses)

 var things = [ 'bird', 'ant', 'plate']
 console.log(things.indexOf('bird')) // 0
 console.log(things.indexOf('plate'))

 console.log(things.includes('bird'))
 console.log(things.includes('fish'))

 console.log(things)
 console.log(things.reverse())

 console.log(fullValues)
 console.log(fullValues.slice(5))

 console.log(fullValues)
 console.log(fullValues.splice(5,2, 'fish'))
 console.log(fullValues)

 var combine = fullValues.concat(things)
 console.log(combine)


 var two = [
    [4,5,6],
    [7,8,9]
 ]
 console.log(two[0][2]) // 6
 console.log(two[1][1]) //8

 var three = [
    [
        ['apple','ball', 'chair'],
        ['desk', 'egg', 'fan'],
        ['gift', 'house', 'ink']
    ],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        ['jug','kettle','lamp'],
        ['mask','net','orange'],
        ['pot','queen','rat']
    ]
 ]
 console.log(three[0][1][2]) //fan
 console.log(three[1][2][2]) // 9
 console.log(three[2][1][0]) // mask
 



 var dog = {
    color: 'brown',
    breed: 'German shephard',
    age: '6 months',
 }
 console.log(dog)

 var dogBreed = dog.breed
 var dogColor = dog.color
 var dogAge = dog.age
 console.log(` dog color is ${dogColor}, \n dog breed is ${dogBreed}, \n  dog age is ${dogAge}`)

 var food = {
    types: ['rice', 'garri and soup','beans', 'yam']
 }
 var healthyDiet = food.types[1]
 console.log(healthyDiet)

 var places = [
    { world: 'spain', Capital: 'madrid'},
    {world: 'Nigeria', Capital: 'Abuja'},
    {world: 'US', Capital: 'Washington'}
 ]
 var beautifulPlaces = places[2].world
 console.log(beautifulPlaces)

 var number = 1
 while(number < 6){
    console.log(number)
    number = number + 1
 }
for (var number = 1; number < 6; number++){
   console.log(number)
}
var dog = {
   breed: 'German shephard',
   age: '6 months',
   color: 'brown'
}
for(var dogSpecie in dog){
   console.log(dogSpecie + '=' + dog [dogSpecie])
}


console.log('\nClasswork')
var countries = ['Nigeria', 'spain', 'Germany', 'Brazil', 'Croatia']
countries.forEach((country)=>{
   console.log(country)
})
console.log('\nMap method')
var somethingNew = countries.map((country)=>{
   return country
})
console.log(somethingNew)
console.log('\nFilter method')

var favorite =  ['blue', 1, 2,'pink', 'orange']
var onlyString = favorite.filter((best)=>{
   if(typeof best == 'string'){
      return best
   }
})
console.log(onlyString)


var number = [ 5,4,8,1,3]
var initialValue = 100
var sum = number.reduce((prev, current)=>{
   return prev + current
},initialValue)
console.log(sum)


const h1 = new(function(){
   const h1 = document.querySelector('h1');
})

console.log(h1)