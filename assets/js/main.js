var allList = [];

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
        closePopup();
    })
    viewColor();
});

function closePopup(){
    $('#write-popup').hide();
    $('#textareaMunze').val('');
    $('input[name="radioDefault"]').prop('checked', false);
}

function renderItem(){
    //이건 저장된 데이터이다. 글 내용, 날짜, 선택한 색상이 들어가야한다.
    var MemoData  = {
        memo : $('#textareaMunze').val(),
        color : $('input[name="radioDefault"]:checked').val(),
        dateCreate : new Date().toLocaleString()
    }
    allList.unshift(MemoData);

    displayItem(allList);
    orderChange()
}

function displayItem(arrayData){
    var listContainer = $('#board-wrap');
    var memoHtml = ''


    arrayData.forEach(function(item){
        memoHtml += `
                        <li style="background-color: ${item.color};" >
                          <p class="memo-text">${item.memo}</p>
                          <p class="create-date">${item.dateCreate}</p>
                        </li>
                    `
    })

    listContainer.html(memoHtml);
}

function viewColor(){
    var colorArr = [
        {name:'_01', bgValue:'color1', bg:'#D1D161' },
        {name:'_02', bgValue:'color2', bg:'#FF7D59' },
        {name:'_03', bgValue:'color3', bg:'#FFBDEB' },
        {name:'_04', bgValue:'color4', bg:'#FFFAED' },
        {name:'_05', bgValue:'color5', bg:'#99B8ED' },
        {name:'_06', bgValue:'color6', bg:'#FFE5E0' },
        {name:'_07', bgValue:'color7', bg:'#FAAB99' },
        {name:'_08', bgValue:'color8', bg:'#FFDE94' },
        {name:'_09', bgValue:'color9', bg:'#CDDBF9' },
        {name:'_10', bgValue:'color10', bg:'#9A7DE9' },
    ]

    var colorHtml = ''
    colorArr.forEach(function(item){
        colorHtml += `
                        <div class="form-check">
                            <input class="form-check-input ${item.name}" type="radio" name="radioDefault" value="${item.bg}">
                        </div>
                     `
    })

    $('#color-container').append(colorHtml)
}

function orderChange(){
    var sortType = $('.order-select').val();
    var copyList = [...allList];

    if(sortType == 'oldest'){
        copyList.reverse();
        displayItem(copyList);
    }
}