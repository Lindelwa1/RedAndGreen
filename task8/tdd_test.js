TestMyCode.run("testing hello_world function", function(assert){ 
    var result = helloWorld();
   
    assert.equals("hello world!", result, "testing hello_world function");
});


TestMyCode.run("testing Lindelwa function", function(assert){ 
    var result = Lindelwa();
    // is the result as we expected?
    
    assert.equals("Lindelwa!", result, "testing Lindelwa function");


});

TestMyCode.run("testing HelloWin function", function(assert){ 
    var result = HelloWin();
    
    assert.equals("HelloWin", result, "testing HelloWin function");
});




