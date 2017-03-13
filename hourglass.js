var sumOfHourGlass = function(array, start_row, start_column){
    // start_row validity
    // start_row should be a positive number
    // start_row should be within the first to 3rd row from last.
    if (start_row < 0 || start_row > array.length - 3){
        return null;
    }


    var row = array[start_row];

    // start_column validity
    // start_column should be a positive number
    // start_column should be within the first to 3rd column from last
    if (start_column < 0 || start_column > row.length - 3){
        return null;
    }

    var rows = array.slice(start_row, start_row + 3);

    // converts the given array to the hour glass 
    // (0,0 of the hourglass is translated from start_row, start_column)
    // As per the specification, hourglass is a 3X3 matrix
    var hourGlass = rows.map(function rowSplicer(_row, index){
        return _row.slice(start_column, start_column + 3);
    });
    
    var sum = -(hourGlass[1][0] + hourGlass[1][2]);

    var flattenedHourGlass = hourGlass.reduce(function rowFlatten(acc, row){
        return acc.concat(row);
    }, []);

    var hourGlassSum = flattenedHourGlass.reduce(function adder(acc, value){
        return acc + value;
    }, 0) + sum;
    
    return hourGlassSum;
}

var maxSumOfHourGlass = function(array){
    var sum = null;

    array.forEach(function rowProcessor(row, rowIndex){
        row.forEach(function columnProcessor(column, colIndex){
            var _sum = sumOfHourGlass(array, rowIndex, colIndex);
            sum = ( _sum == null || (sum != null && _sum < sum )) ? sum : _sum;
        });
    });

    return sum;
}

exports.sumOfHourGlass = sumOfHourGlass
exports.maxSumOfHourGlass = maxSumOfHourGlass
