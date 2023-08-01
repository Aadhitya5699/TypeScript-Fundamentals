function demo() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("final:" + i); //out of scope because of Let
}
demo();
