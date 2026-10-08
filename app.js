function maintenanceRequest() {
    alert("Maintenance request booked successfully!");
}


// Facility Booking

function bookFacility() {
    alert("Facility booked successfully!");
}


// Resident Search

function searchResident() {

    var search = document.getElementById("residentSearch").value;

    search = search.toLowerCase();

    var table = document.getElementById("residentTable");

    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {

        var name = rows[i].getElementsByTagName("td")[1].innerText;

        name = name.toLowerCase();

        if (name == search) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }
    }
}