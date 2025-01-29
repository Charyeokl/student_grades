$(document).ready(function(){
    $('#add_student').on('click', function() {
        var student_id = $("#student_id").val();
        var name = $('#name').val();
        var name = $('#grade').val();

        $.ajax({
            url: '/add',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({'student_id': student_id, 'name': name, 'grade': grade}),
            success: function(response){
                alert(response.status);
            }
        })
    });
});
