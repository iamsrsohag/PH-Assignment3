// https://github.com/iamsrsohag/PH-Assignment3

//Problem 1 

function kilometerToMeter(km){
    if(Number.isInteger(km) && km>0){
        //KM to Meter Calculation
        return km*1000;
    }
    else{
        return "Invalid Input";
    }
}


// Problem 2 
/**
 * Watch Price : 50, Phone Price: 100, Laptop Price: 500
 */

function budgetCalculator(watchQty,mobileQty,laptopQty){
    //Negative Checker
    if(watchQty<0 || mobileQty<0 || laptopQty<0){
        return "You can't buy less than zero product";
    }else{
        //Integer Validation
        if(Number.isInteger(watchQty) && Number.isInteger(mobileQty) && Number.isInteger(laptopQty)){
            return (watchQty*50)+(mobileQty*100)+(laptopQty*500);
        }
        else{
            return "Invalid Input";
        }
    }
}


//Problem 3 
/**
 * Discount applicable after 10 days. 
 */

function hotelCost(numOfDays){
    //Initializing Discount Days
    let discountTwenty = 0;
    let discountFifty = 0;
    //Integer & Negative Checker
    if(numOfDays<=0 || Number.isInteger(numOfDays)!=true){
        return "Invalid Input. Please a positive Integer above 0";
    }
    else if(numOfDays<10){
     return numOfDays*100;
    }
    else if(numOfDays>10 && numOfDays<=20){
        discountTwenty = numOfDays-10;
        return 10*100+(discountTwenty*80);
    }
    else{
        discountFifty = numOfDays - 20;
        discountTwenty = 10;
        return 10*100+(discountTwenty*80)+(discountFifty*50);
    }
}

//Problem 4

function megaFriend(friendsName){
    let largestName = ""; //Initializing Empty String
    if(Array.isArray(friendsName)!=true || friendsName.length === 0){
        return "Invalid Input";
    }
    else{
        for(let i = 0; i<friendsName.length; i++){
            //Comparing Length
            if(friendsName[i].length>largestName.length){
                largestName = friendsName[i];
            }
        }
        return largestName;
    }
}
