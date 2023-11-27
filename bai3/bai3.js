let n = 5
for(i = 1; i <= n ;i++){
    for(j =1; j <= i; j++){
        document.write('*')
    }
    document.write( '<br />')
}
    

for(i =n;i >= 1; i--){
    for(j =1; j <= i; j++){
        document.write('*')
    }
    document.write('<br />')
}
for(i = 1; i <= n; i++){
    for(j =1; j <= n; j++){
        if(j <= n -i){
            document.write('&nbsp&nbsp')
        }else{
            document.write('*')
        }
    }
    document.writeln( '<br />')
}
for(i =1; i<= n;i++){
    for(j = 1; j <= n;j++){
        if(j<i){
            document.write('&nbsp&nbsp')
        }else{
            document.write('*')
        }
    }
    document.writeln( '<br />')
}


