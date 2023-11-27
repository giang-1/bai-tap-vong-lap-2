let a = 4
let b = 6
for(i = 1 ; i <= a; i++){
    for(j = 1; j <= b; j++){
        if(i == 1 || i == a ||j == 1 || j == b){
            document.write('*')
        }else{
            document.write('&nbsp&nbsp')
        }
        
    }
    document.write('<br />')
}