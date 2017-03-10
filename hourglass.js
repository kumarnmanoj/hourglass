var sumOfHourGlass = function(array, start_row, start_column){

    // start_row validity
    // start_row should be a positive number
    // start_row should be within the first to 3rd row from last.
    if (start_row < 0 || start_row > array.length - 3){
        return null;
    }


    row = array[start_row];

    // start_column validity
    // start_column should be a positive number
    // start_column should be within the first to 3rd column from last
    if (start_column < 0 || start_column > row.length - 3){
        return null;
    }

    
    var sum = -(array[start_row+1][start_column] + array[start_row+1][start_column+2]);

    for ( var i = start_row; i <= start_row + 2; i++ ){
        for ( var j = start_column; j <= start_column + 2; j++){
            sum += array[i][j];
        }
    }

    return sum;
}

var maxSumOfHourGlass = function(array){
    var sum = null;

    for (var i = 0 ; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            var _sum = sumOfHourGlass(array, i, j);
            if ( _sum == null ){
                continue;
            }

            if ( sum == null || sum < _sum ){
                sum = _sum;
            }
        }
    }

    return sum;
}
exports.sumOfHourGlass = sumOfHourGlass

exports.maxSumOfHourGlass = maxSumOfHourGlass
