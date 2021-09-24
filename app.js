const inquirer = require("inquirer");

const question = [
    {
        type: "confirm",
        name:"tue",
        message:"Is it Tuesday?",
        default: false,
    },

    {
        type: "list",
        name: "whatDay",
        message: "What day is it then?",
        choices: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }

]

inquirer.prompt(question).then((answer) =>{
    console.log(answer.tue)
    console.log(answer.whatDay)
    if(answer.tue == false){
        console.log("Boo, we want Tuesday")
    } else{
        console.log("Yay, it's tuesday")
    }
    if(answer.whatDay == "Monday"){
        console.log(`Grrr Yuck, who likes ${answer.whatDay}`)
    }else if(answer.whatDay == "Tuesday" && answer.tue == false){
        console.log(`It's ${answer.whatDay}? You lied to me!`)
    }else if(answer.whatDay == "Tuesday"){
        console.log(`Oh, I like ${answer.whatDay}`)
    }else if(answer.whatDay == "Wednesday"){
        console.log(`What the hell, it's no man's land ${answer.whatDay}`)
    }else if(answer.whatDay == "Thursday"){
        console.log(`Ok, it is  ${answer.whatDay}, and it is almost friday`)
    }else if(answer.whatDay == "Friday"){
        console.log(`Thank God it's ${answer.whatDay}`)
    }else if(answer.whatDay == "Saturday"){
        console.log(`It's ${answer.whatDay}, time to party!`)
    }else if(answer.whatDay == "Sunday"){
        console.log(`It is time to Relax`)
    }
})