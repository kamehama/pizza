var menu_list_array=[ "cheese pizza" ,"veggie lovers pizza" ,"vegan pizza" ,"spicy pizza"
]
   
    

function getmenu () {
    var htmldata="ol class= 'menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function getmenu() {
    var menu_list_array= document.getElementById(display_addmenu)
}
