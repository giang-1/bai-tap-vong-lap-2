let a = 0;
let b = 1;
let countFibo = prompt('bạn muốn thấy bao nhiêu số');

for (i = 0; i <= countFibo; i++) {
    let c;
    document.write(a + '<br />');
    c = a + b;
    a = b;
    b = c;
}