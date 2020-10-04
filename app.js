$('#task_box').addClass('hidden');
$(document).ready(function(){
    console.log("SI funciona JGUERY");

    // FUNCION PARA LOGIN
    $("#formTest").submit(function(e){
        e.preventDefault();
        
        $('#myModal').addClass('hidden');
        $('#task_box').removeClass('hidden');
        let username=$('#username').val();
        console.log(username);

        $.ajax({
            url:'databaseServer/consultaCorreo.php',
            type:"POST",
            data:$('#formTest').serialize(),
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
        $('#myModal').removeClass('hidden');
    })




})
