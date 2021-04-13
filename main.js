var list = ["Chicken peperoni pizza", "Margerita", "Tandoori Panner", "Tripple Chicken Feast", "Farmer's Pick"];

function showmenu() {
    list.sort();
    var display = "<ol>";
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        display = display + "<li>" + element + "</li>"
    }
    display = display + "</ol>";
    document.getElementById("menu_list").innerHTML = display;
}
function add_item(){
    var viewitem=document.getElementById("add_item").value;
    list.push(viewitem);
    list.sort()
    var display = "<div class='cards'>";
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        display = display + "<div class='card'>" + element + "</div>"
    }

    display = display + "</div>";
    document.getElementById("display_addedmenu").innerHTML = display;
}