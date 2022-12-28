function circumference(r){
    if(Number.isNaN(Number.parseFloat(r))){
        return 0 ;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));//มันตัดแค่ที่มันรู้พวกabcdefghไม่รู้ก็ตัดออก

console.log(circumference("abcdefgh"));