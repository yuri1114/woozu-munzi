$(function () {

    $('#write-popup').hide();
    $('#start-btn').on('click', function(){
        $('#write-popup').show();
    })

    $('#close-btn').on('click', function(){
        if(confirm('먼지를 남기지 않으시겠습니까? 작성된먼지가 삭제됩니다')){
            $('#write-popup').hide();
            $('#textareaMunze').val('');
        }else{
            //TODO bye하며 사라지는 애니메이션
        }
    })

    $('#save-btn').on('click', function(){
        //저장로직
    })
});
