$(document).ready(function(){
    $("#reg").click(function(){
        var f_name=$('#fname').val();
        var l_name=$('#lname').val();
        var gender=$("input[name='gender']:checked").val();
        // console.log(gender);
        var email=$('#email').val();
        var num=$('#number').val();
        var city=$('#city').val();
        var code=$('#code').val();
        
       //First Name
        if(f_name == ''){
            $('#fname').addClass('border-Err');    
            $('#fnameErr').text('*This field is empty');
        }
       else if(f_name.length<3){
            $('#fnameErr').text('Enter atleast 3 characters');
            $('#fname').addClass('border-Err');
        }
        else if(!vali_fname(f_name)){
            $('#fnameErr').text('Enter correct format');
            $('#fname').addClass('border-Err');
        }
        else{
            $('#fname').removeClass('border-Err');
            $('#fnameErr').text('   ');
        }      
        //last Name
       if(l_name==''){
           $('#lname').addClass('border-Err');
           $('#lnameErr').text('*This field is required');
       }
       else{
            $('#lname').removeClass('border-Err');
            $('#lnameErr').text('   ');
       }
       //Gender
       if(gender != 'on')
       {
            $('#genderErr').text('Select Gender');
       }
       else{
            $('#genderErr').text('   ');
       }
       //email
       if(email==''){
            $('#email').addClass('border-Err');
            $('#emailErr').text('*This field is required');
       }
       else if(!vali_email(email)){
            $('#emailErr').text('Enter correct format');
            $('#email').addClass('border-Err');
       }
       else{
            $('#email').removeClass('border-Err');
            $('#emailErr').text('   ');
       }  
       //mobile number
       if(num==''){
            $('#number').addClass('border-Err');
            $('#numberErr').text('*This field is required');
       }
       else if(num.length ==11 ){
            $('#number').addClass('border-Err');
            $('#numberErr').text('Mobile Number Should Be Greater Than 4 Digits');       
       }
       else if(!vali_num(num)){
             $('#number').addClass('border-Err');
             $('#numberErr').text('Enter only Digits'); 
       }
       else{
             $('#numberErr').text('');
             $('#number').removeClass('border-Err');     
        }
        //city
        if(city=='')
       {
             $('#cityErr').text('*This field is required');
             $('#city').addClass('border-Err');
       }
       else{
            $('#cityErr').text('');
            $('#city').removeClass('border-Err');
       }
       // code
        if(code=='')
         {
            $('#codeErr').text('*This field is required');
            $('#code').addClass('border-Err');
          }
        else if(code.length== 6){
            $('#codeErr').text('Enter correct format');
            $('#code').addClass('border-Err');
        }
       else if(!vali_code(code)){
           $('#codeErr').text('*Enter correct format');
           $('#code').addClass('border-Err');
       }
      else{
          $('#codeErr').text('  ');
          $('#code').removeClass('border-Err');
       }
   
});
//Onchange
    $(document).on('change','#fname',function(){
        let fname=$(this).val();
        if(fname !=''){
           if(!vali_fname(fname)){
            $(this).addClass('border-Err');
           }
           else{
            $(this).removeClass('border-Err');
            $('#fnameErr').text('');
           };
        }
    });
    $(document).on('change','#lname',function(){
        let lname=$(this).val();
        if(lname!=''){
            if(!vali_fname(lname)){
                $(this).addClass('border-Err');
            }
            else{
                $(this).removeClass('border-Err');
                $('#lnameErr').text('  ');
            };
        }
    });
    $(document).on('change','.gender',function(){
        let gen=$("input[name='gender']:checked").val();
        if(gen!='on')
        {
             $('#genderErr').text('*Select Gender');
        }
        else{
             $('#genderErr').text('   ');
        }
    });



    $(document).on('change','#email',function(){
        let email=$(this).val();
        if(email!='')
        {
            if(!vali_email(email)){
                $(this).addClass('border-Err');
            }
            else{
                $(this).removeClass('border-Err');
                $('#emailErr').text('  ');
            }
        }
    });
    $(document).on('change','#number',function(){
        let num=$(this).val();
        if(num=='')
        {
            $('#number').addClass('border-Err');
            $('#numberErr').text('*This field is required');
           }
         else if(num.length == 11){
            $('#number').addClass('border-Err');
            $('#numberErr').text('Mobile Number Should Be 10 Digits');
            
        }else if(!vali_num(num)){
            $('#number').addClass('border-Err');
            $('#numberErr').text('Enter only digits');
          
        }else{
            $('#numberErr').text('  ');
            $('#number').removeClass('border-Err');
            
        }
        });
        $(document).on('change','#city',function(){
            let city=$(this).val();
            if(city==' ')
            {
                $('#cityErr').text('*This field is required');
                $('#city').addClass('border-Err');
            }
            else{
                $('#cityErr').text('  ');
                $('#city').removeClass('border-Err');
            }
        });
        $(document).on('change','#code',function(){
            let code=$(this).val();
            if(code!=""){
                if(!vali_code(code)){
                    $(this).text('Incorrect');
                    $('#city').addClass('border-Err');
                }
                else{
                    $('#code').text('   ');
                    $('#code').removeClass('border-Err');
                }
            }
        });
//Functions
       function vali_fname(f_name){
          var re = /^[a-zA-Z .]*$/;
          return re.test(f_name)
       }
       function vali_code(code){
           var re = /^[0-9.]*$/;
           return re.test(code)
       }
       function vali_email(email){
           var re = /^[a-zA-Z0-9_\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
           return re.test(email);
       }
       function vali_num(num){
           var re =/^[0-9.]*$/;
           return re.test(num);
      }   
});