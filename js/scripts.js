function newItem(){
    // 1. Add a new item to the list of items
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === ""){
        alert("You must write something!");
    } else {
        $("#list").append(li);
    };

    // 2. Cross out an item from the list of items

    li.on("click", function crossOut(){
        li.toggleClass("strike");
    });

    // 3. Add the delete button
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
    
    crossOutButton.on("dblclick", function deleteListItem(){
        li.addClass("delete");
    })

    // 4. Reorder the items
    $("#list").sortable(); 
    
    // 5. Clear input field
    $("input").val(null);
}

// Add new item to the list of items when pressing RETURN key 
$(document).ready(function(){
    $("#input").on("keydown", function(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            newItem();
        }
    })
});
