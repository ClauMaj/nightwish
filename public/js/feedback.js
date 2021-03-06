$(()=>{


    $('.feedback-form').submit(e =>{
        e.preventDefault();

        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback)
        
    })


    const updateFeedback = (data) =>{

        
            let output = '';
            
            //concatenate output
            data.forEach((item, key) =>{
                console.log(key);
                output += '     <div class="feedback-item item-list media-list">';
                output += '       <div class="feedback-item media">';
                output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger mx-3"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
                output += '         <div class="feedback-info media-body">';
                output += '           <div class="feedback-head">';
                output += '             <div class="feedback-title">' + item.title + '</div>';
                output += '           </div>';
                output += '           <div class="feedback-message">' + item.message + '</div>';
                output += '           <div class="feedback-user"><small class="feedback-name label label-info">' + item.name +' ' + item.datetime +'</small></div>';
                output += '         </div>'; 
                output += '       </div>';
                output += '     </div>';
            });

            $('.feedback-messages').html(output)
    }

    $.getJSON('/api', updateFeedback) 

})