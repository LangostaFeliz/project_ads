$('#task_box').addClass('hidden');
$('#login').addClass('hidden');
$('#registro_box').addClass('hidden');
$(document).ready(function(){
    console.log("SI funciona JGUERY");

    $('#opcion_login').click(function(){
        console.log("hola");
        $('#login').removeClass('hidden');
        $('#registro_box').addClass('hidden');
        $('#task_box').addClass('hidden');
    })
    $('#opcion_registro').click(function(){
        console.log("hola");
        $('#login').addClass('hidden');
        $('#task_box').addClass('hidden');
        $('#registro_box').removeClass('hidden');
    })

    // FUNCION PARA LOGIN
    $("#form_Login").submit(function(e){
        e.preventDefault();
        
        $('#login').addClass('hidden');
        $('#task_box').removeClass('hidden');
        let username=$('#username').val();
        console.log(username);

        $.ajax({
            url:'databaseServer/consultaCorreo.php',
            type:"POST",
            data:$('#form_Login').serialize(),
            success:function(response){
                let jsonData=JSON.parse(response);
                
                
                let temp='';
                jsonData.forEach(function(task){
                    temp+='<tr>'+'<td>'+task.matricula+'</td>'+'<td>'+task.correo+'</td>'+'<td>'+task.password+'</td>'+'<td>'+task.nombre+'</td>'+'</tr>';
                    console.log(task);
                });
                console.log(jsonData);
                $('#tasks').html(temp);

            },
            error:function(response){
                alert("errr");
            }
        })


    })
    $('#buttonExit').click(function(){
        $('#task_box').addClass('hidden');
        $('#login').removeClass('hidden');
    })




})
