var board = [];
for(var i=0; i<3; i++) {
        if(board[i] == undefined){
             board[i] = []
        }
        for(var j=0; j<3; j++) {
           board[i][j] = i + "," + j;
        }//end of j
}//end of i
console.log(board);