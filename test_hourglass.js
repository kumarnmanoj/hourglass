var hourglass = require("./hourglass.js");

var inputs = 
    {
       "valid_1":  [
                    [1, 1, 1, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0],
                    [1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0]
                 ],

        "valid_2": [
                    [ 0, -4, -6,  0, -7, -6],
                    [-1, -2, -6, -8, -3, -1],
                    [-8, -4, -2, -8, -8, -6],
                    [-3, -1, -2, -5, -7, -4],
                    [-3, -5, -3, -6, -6, -6],
                    [-3, -6,  0, -8, -6, -7]
                 ],

        "invalid_1": [
                    [0, 0],
                    [1, 1]
                 ]
    }


exports.testSumHourGlass = function(test){
    sum = hourglass.sumOfHourGlass(inputs["valid_1"], 0, 0)
    console.log(sum)
    test.equal(7, sum, "The sum is not as expected :)")
    test.done();
}

exports.testSumHourGlassWithInvalidRow = function(test){
    sum = hourglass.sumOfHourGlass(inputs["valid_1"], 4, 0)
    test.equal(null, sum, "For invalid row sum is not null");
    test.done();
}

exports.testSumHourGlassWithInvalidColumn = function(test){
    sum = hourglass.sumOfHourGlass(inputs["valid_1"], 2, 4);
    test.equal(null, sum, "For invalid column sum is not null");
    test.done();
}

exports.testMaxSumHour = function(test){
    sum = hourglass.maxSumOfHourGlass(inputs["valid_1"]);
    test.equal(7, sum, "The max sum is not as expected :)");
    test.done();
}

exports.testMaxSumHour2 = function(test){
    sum = hourglass.maxSumOfHourGlass(inputs["valid_2"]);
    test.equal(-19, sum, "The max sum is not as expected :)");
    test.done();
}

exports.testInvalidMaxSumHour = function(test){
    sum = hourglass.maxSumOfHourGlass(inputs["invalid_1"]);
    test.equal(null, sum, "The sum is not null for invalid input");
    test.done();
}
