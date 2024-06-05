// let amount = 10;

// while(amount > 0){
//   amount--;
//   console.log(amount);
// }

// const person = {
//     name:'john',
//     lastName:'peter',
//     age:40,
//     education:false,
//     married:true,
//     siblings:[
//         'anna','susan','peter'
//     ],
//     greeting:function(){
//         console.log('hello john')
//     }
// }

// const age = person.age;
// console.log(age);
// person.greeting();
// console.log(person)

const gas = [20,40,100,30];
const food = [10,40,50];

function calculate(item){
    let total = 0;
    for(let i = 0; i < item.length; i++){
        total += item[i];
    }
    return total;
}

const gasTotal = calculate(gas);
const foodTotal = calculate(food);
console.log(gasTotal);
console.log(foodTotal);