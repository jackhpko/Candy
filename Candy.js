var candy = function(ratings) {
    var i, res; rates = [];
    rates[0] = 1;
    for(i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i - 1]){
            rates[i] = rates[i - 1] + 1;
        }else{
            rates[i] = 1;
        }
    }
    res = rates[ratings.length - 1];
    for(i = ratings.length - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1] && rates[i] <= rates[i + 1]){
            rates[i] = rates[i + 1] + 1;
        }
        res += rates[i];
    }
    return res;
};