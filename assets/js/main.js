$(function () {

    $('#write-popup').hide();
    $('#start-btn').on('click', function(){
        $('#write-popup').show();
    })

    $('#close-btn').on('click', function(){
        if(confirm('먼지를 남기지 않으시겠습니까? 작성된먼지가 삭제됩니다')){
            closePopup();
        }else{
            //TODO bye하며 사라지는 애니메이션
        }
    })

    $('#save-btn').on('click', function(){

        renderItem();

    })

    viewColor();
});

function closePopup(){
    $('#write-popup').hide();
    $('#textareaMunze').val('');
    $('input[name="radioDefault"]').prop('checked', false);
}

function renderItem(){
    var memoValue = $('#textareaMunze').val();
    var selectColor = $('input[name="radioDefault"]:checked').val();
    var now = new Date(); // 현재 시간 객체 생성
    var dateString = now.toLocaleString();
    var listContainer = $('#board-wrap');

    //이건 저장된 데이터이다. 글 내용, 날짜, 선택한 색상이 들어가야한다.
    var MemoData  = {
        memo : memoValue,
        color : selectColor,
        dateCreate : dateString
    }
    var memoHtml = ''

    memoHtml += `
        <li class="color_value" class="${MemoData.color}">
          <p class="memo-text">${MemoData.memo}</p>
          <p class="create-date">${MemoData.dateCreate}</p>
        </li>
    `

    listContainer.prepend(memoHtml);
    closePopup();
}

function viewColor(){
    var colorArr = [
        {name:'_01', bgValue:'color1' },
        {name:'_02', bgValue:'color2' },
        {name:'_03', bgValue:'color3' },
        {name:'_04', bgValue:'color4' },
        {name:'_05', bgValue:'color5' },
        {name:'_06', bgValue:'color6' },
        {name:'_07', bgValue:'color7' },
        {name:'_08', bgValue:'color8' },
        {name:'_09', bgValue:'color9' },
        {name:'_10', bgValue:'color10' },
    ]

    var colorHtml = ''
    colorArr.forEach(function(item){
        colorHtml += `
                        <div class="form-check">
                            <input class="form-check-input ${item.name}" type="radio" name="radioDefault" value="${item.bgValue}">
                        </div>
                     `
    })

    $('#color-container').append(colorHtml)
}