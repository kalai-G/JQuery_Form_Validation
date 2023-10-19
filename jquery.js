$(document).ready(function(){
    $("#reg").validate({
        rules:{
            fname:
            {required: true,},
            lname:
            {required:true,},
            email:
            {required:true,},
            number:
            {required:true,},
            city:
            {required:true,},
            code:
            {required:true,},
        },
        message:{
            fname:{
                required:'Enter a FirstName',
            },
            lname:{
                required:'Enter a Lastname',
            },
            email:{
                required:'Enter a email',
            },
            number:{
                required:'Enter the Number',
            },
            city:{
                required:'Enter the city',
            },
            code:{
                required:'Enter the code',
            },
        },
        submitHandler:function(form){
            form.submit();
        }
    });

});

