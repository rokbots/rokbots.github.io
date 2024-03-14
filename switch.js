$( document ).ready(function() {
    console.log( "ready!" );
});
const myMap = new Map([
    [document.getElementById("vnflag"), "index.html"],
    [document.getElementById("enflag"), 'index_en.html'],
    ]);
$(".fa-beat-fade").click(function(e) {
    var page = myMap.get(e.target);
    document.location.href = page;
});

