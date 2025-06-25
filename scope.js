function testHoisting() {
    // console.log(a); // ✅ undefined (hoisted)
    // var a = 5;
    // console.log(a); // ✅ undefined (hoisted)

    console.log(b); 
    let b = 10;
}
testHoisting();
