$("#seeAnotherField").change(function() {
    if ($(this).val() == "yes") {
        $('#otherFieldDiv').show();
        $('#otherField').attr('required', '');
        $('#otherField').attr('data-error', 'This field is required.');
    } else if (($(this).val() == "No")) {
        $('#otherFieldDiv1').show();
        $('#otherField1').attr('required', '');
        $('#otherField').attr('data-error', 'This field is required.');
    } else {
        $('#otherFieldDiv').hide();
        $('#otherField').removeAttr('required');
        $('#otherField1').removeAttr('required');
        $('#otherField').removeAttr('data-error');
        $('#otherField1').removeAttr('data-error');
    }
});
$("#seeAnotherField").trigger("change");

function handleSubmit(e) {
    // alert('hi there');
    // fetch()
    e.preventDefault();
    let fname = document.getElementById('name').value;
    let lname = document.getElementById('name1').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let pan = document.getElementById('pan').value;
    let seeAnotherField = document.getElementById('seeAnotherField').value;
    let otherFieldDiv = document.getElementById('otherFieldDiv').value;
    let otherField = document.getElementById('otherField').value;
    // let fname = document.getElementById('');
    console.log('data , ', name)
    console.log('data , ', name1)
    console.log('data , ', email)
    console.log('data , ', mobile)
    console.log('data , ', pan)
    console.log('data , ', seeAnotherField)
    console.log('data , ', otherFieldDiv)
    console.log('data , ', otherField)
    const data = { name, name1, email, mobile, pan, seeAnotherField, otherFieldDiv, otherField };
    fetch('http://localhost:3000/mail', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            alert('Success:', data);
        })
        .catch((error) => {
            alert('Error:', error);
        });
}
