// function Title(t1) 
// { this.mytitle = t1;
// }

// Title.prototype.getName = function () 
// { 
// return (this.mytitle);
// }

// var socialMedia = {
//   facebook : 'http://facebook.com',
//   twitter: 'http://twitter.com',
//   flickr: 'http://flickr.com',
//   youtube: 'http://youtube.com'
// };

// var t = new Title("CONNECT WITH ME!");

var count = 3, btnSubcount = 0;


// Show the details by hiding the dropdown on click.

function dropDetails(event) {
    
    var row = event.parentNode.parentNode.nextElementSibling;
    if(row.style.display === "block") {
        row.style.display = "none";
        event.src = "down.png";
    } else{
        row.style.display = "block";
        event.src = "up.jpg"
    }
}


//Greyed out the submit button and non-clickable
document.getElementById("button").style.backgroundColor ="gray";
document.getElementById("button").style.pointerEvents ="none";

// added function to add students 

function addnewstudent(){
    count++;


    var newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td><input type="checkbox"/><br /><br /><img src="down.png" width="25px" onclick="dropDetails(this);"/></td>
    <td>Student `+count+`</td>
    <td>Teacher `+count+`</td>
	<td>Approved</td>
	<td>Fall</td>
	<td>TA</td>
	<td>23456</td>
	<td>100%</td>
    `;

    document.getElementById("lists").appendChild(newRow);


    //create new-details row and copy details from other row 
    var expandedRow = document.createElement("tr");
    expandedRow.innerHTML = document.getElementsByClassName('dropDownTextArea')[0].innerHTML;

    document.getElementById("lists").appendChild(expandedRow);
    expandedRow.style.display = "none";
    alert("New Record added Successfully");
}

// checkbox click operation

document.getElementById("myTable").addEventListener("click", function(event) {

    var checkBox = event.target;

    //check if only checkbox is clicked
    if(event.target.tagName === "INPUT" && event.target.type === "checkbox") {

        var row = checkBox.parentNode.parentNode;
        var expandedRow = checkBox.parentNode.parentNode.nextElementSibling;

        //changing the row colour to yellow by on-click
        if(checkBox.checked){
            btnSubcount++;

             //display edit and delete column

            document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("hideCol");
            document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("hideCol");
            
            //add new student row and student details row and change colour to yellow
            const td1 = document.createElement('td');
            row.appendChild(td1);

            const td2 = document.createElement('td');
            row.appendChild(td2);
            row.style.backgroundColor = "yellow";

            // change submit colour and enable it
            document.getElementById("button").style.backgroundColor = "orange";
            document.getElementById("button").style.pointerEvents = "auto";

            //add delete button
            var btnDelete = document.createElement("button");
            btnDelete.innerHTML = "Delete";
            btnDelete.addEventListener("click", function(){
                row.remove();
                expandedRow.remove();
                count--;
                btnSubcount--;
                if(count === 0 || btnSubcount === 0) {
                    document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hideCol");
                    document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hideCol");
                }
                alert("Record of Student Deleted Successfully");
            });

            row.children[8].appendChild(btnDelete);

            //add edit button
            var btnEdit = document.createElement("button");
            btnEdit.innerHTML = "Edit";
            btnEdit.addEventListener("click", function() {
                alert("Edit the details:");
            });
            row.children[9].appendChild(btnEdit);

        } else {
            btnSubcount--;
            row.style.backgroundColor = "white";

            row.removeChild(row.lastChild);
            row.removeChild(row.lastChild);

            if(btnSubcount === 0) {

                document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hideCol");
                document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hideCol");

                document.getElementById("button").style.backgroundColor = "gray";
                document.getElementById("button").style.pointerEvents ="none";
            }
        }
    }
});

