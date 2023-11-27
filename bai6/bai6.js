let a = 7;
for(i = 1; i <= a; i++){
    for(j =1; j <= a; j++){
        if(i == 1 && (j == 2 || j == 3 || j == 5  || j == 6)){
            document.write('*')
        }else if(i ==2 || i ==3 ){
            document.write('*')
        }else if(i == 4 && (j >1 && j <7)){
            document.write('*')
        }else if(i == 5 && (j == 3 || j == 4 || j == 5 )){
            document.write('*')
        }else if(i == 6 &&(j ==4)){
            document.write('*')
        }else{
            document.write('&nbsp&nbsp')
        }
    }
    document.write('<br />')
}