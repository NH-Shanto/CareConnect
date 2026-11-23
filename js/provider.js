function addCatalogueItem() {
    var name = document.getElementById("item_name").value;
    var price = document.getElementById("price").value;

    if (name == "" || price == "") {
        alert("Please enter item name and price.");
        return false;
    }

    alert("Item '" + name + "' added to catalogue successfully!");
    return false;
}

function deleteCatalogueItem(button) {
    if (confirm("Delete this item from catalogue?")) {
        alert("Item removed from catalogue.");
    }
}

function updateDeliveryStatus(button) {
    alert("Order delivery status updated successfully!");
}
