// Today we learn about Call in Javascript..
// call is used when you want to control the scope that will be used in the function called. 
// You might want the this keyword to be something else than the scope you assigned the function to, 
// in those cases you can use call or apply to call the function with your own scope.
//func.call(thisArg, arg1, arg2, ...)


// ######### FIRST PROGRAM #############

const Bharat = {
    name: 'Bharat',
    city: 'Mumbai',
    state: 'Maharastra',
    Profession: 'Writer',
    printData : function(){
        console.log('Hey '+this.name+' You Live in '+this.city+' which is loacted in '+this.state+' and you worked as a '+this.Profession+' \nNice to meet you!!');
    }
}

const Neha = {
    name: 'Neha',
    city: 'Gurugram',
    state: 'Haryana',
    Profession: 'Content-Writer'
}

Bharat.printData(); // In this we directly call Bharat. bcoz it is owned by the Bharat obj.. it is the part of Bharat obj so we use . with bharat bofore printData..
Bharat.printData.call(Neha); //In this we call method for Neha obj. Means its working for neha now..

// ## we can use this with many ways. the second way is here..
// we use 1 after every variable, which we used above for better understanding..
// in this example i remove printData1 from the Bharat1. Now it not the property of Bharat1.
const Bharat1 = {
    name: 'Bharat',
    city: 'Mumbai',
    state: 'Maharastra',
    Profession: 'Writer',
}

const Neha1 = {
    name: 'Neha',
    city: 'Gurugram',
    state: 'Haryana',
    Profession: 'Content-Writer'
}

// we use it here seperatly.. 
printData1 = function(){
    console.log('Hey '+this.name+' You Live in '+this.city+' which is loacted in '+this.state+' and you worked as a '+this.Profession+' \nNice to meet you!!');
}

printData1.call(Bharat1); // Now its working for Bharat1, all the code in printData is working for Bharat1. Lets move on second example

// ## Arguments with Function/Method..

// we can use args with it as we read above func.call(thisArg, arg1, arg2, ...) the first is use for thisArgs.

printData1 = function(greetings){
    console.log('Hey '+this.name+' You Live in '+this.city+' which is loacted in '+this.state+' and you worked as a '+this.Profession+' \nNice to meet you!! '+greetings);
}
printData1.call(Bharat1,'Take Care'); //with the help of call, we add a extra var in this as prop. the first Bharat1 is always reserve for this, you can add extra args after this.

// "I hope I have cleared all of your doubts related to call, and I hope it helps."
//Thanks || Bharat Bhushan