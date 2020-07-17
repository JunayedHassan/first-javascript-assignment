// feet to mile converter
function feetToMile(feet){
    if(feet>0){
        mile = 0.000189394 * feet;  
        console.log(feet + ` feet = ` + mile.toFixed(2) + ` miles`)
    }
    else{
        console.log(`Please enter a positive number greater than zero.`)
    }
}
// var result = feetToMile(1000000);




// wood calculator
function woodCalculator(chair, table, bed){
    if(table>0 && chair>0 && bed>0){
        var tableWoods = table * 3;
        var bedWoods = bed * 5;
        var totalWoods = tableWoods + bedWoods + chair;
        console.log(`For `+ chair +` chair, `+ table+ ` table & `+ bed+ ` bed, you will need `+ totalWoods+` cubic woods.`);
    }
    else {
        console.log(`Please enter a positive number which is greater than zero.`)
    }
}
// var result = woodCalculator(1, 2, 3);




// brickCalculator
function brickCalculator(totalFloors){
    if(totalFloors<=0){
        console.log(`Please provide a positive number greater than zero.`)
    }
    else {
        if(totalFloors>20){
            totalBricks = ((totalFloors-20)*10000) + 150000 + 120000; // (totalFloors-20) = counts floor avobe 20.
            // 1 to 10 floor * 15 feet * 1000 or (10*15*1000) = 150000 similarly 11 to 20 floor (10*12*1000) = 120000.
        }
        else if(totalFloors<21 && totalFloors>10) {
            totalBricks = ((totalFloors-10)*12000) + 150000; // 12 feet *  1000 bricks
        }
        else {
            totalBricks =  totalFloors*15000; // 15 feet *  1000 bricks
        }
        console.log(`To build `+ totalFloors +` floor building, you will need = `+ totalBricks + ` bricks.`);
    }
}
// var result = brickCalculator(30);




// tinyFriend
function tinyFriend(friends){
    if(friends != null){
    var smallestName = friends[0];
        for(var i=0; i<friends.length; i++){
        var element = friends[i]
            if(element.length < smallestName.length){
                smallestName = element;
            }
        }
        console.log(smallestName + ` has the smallest name.`);
        }
        else{
        console.log(`Please provide your friends name.`)
        }
    }
//  var result = tinyFriend(['rustbucket', 'monika', 'kaneki', 'ryuk', 'yagami', 'lawleit', 'gian', 'mishio'])



