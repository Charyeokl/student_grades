$(document).ready(function(){
    $('#add_student').on('click', function() {
        var student_id = $("#student_id").val();
        var name = $('#name').val();
        var grade = $('#grade').val();

        $.ajax({
            url: '/add',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({'student_id': student_id, 'name': name, 'grade': grade}),
            success: function(response) {
                alert(response.status);
            }
        });
    });
    $("update_grade").on('click', function() {
        var student_id = $('#update_student_id').val();
        var grade = $('#new_grade').val();

        $.ajax({
            url: '/update',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({'student_id': student_id, 'grade': grade}),
            success: function(response) {
                alert(response.status)
            }
        });
    }); 
});