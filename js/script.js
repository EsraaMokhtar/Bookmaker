var bookNameInp = document.getElementById('bookName');

var siteURLInp = document.getElementById('siteURL');

var submit = document.querySelector('.submit');

var tbody = document.getElementById("tbody");


// submit.addEventListener('click',addSite);

if(localStorage.getItem('bookList') == null){
    var bookList = [];
}else{
    var bookList = JSON.parse(localStorage.getItem('bookList'))
}

//main function
function addSite(){
    var  bookInfo = {
        bookName : bookNameInp.value,
        siteURL : siteURLInp.value 
    };
  
    bookList.push(bookInfo);

    setOnLocalStorage()

    console.log(bookList)

    displaysite();
}

displaysite();

function displaysite(){
    var str ="";
    for( var i = 0 ; i < bookList.length ; i++){
        str +=` 
        <tr>
            <td>${i}</td>
            <td>${bookList[i].bookName}</td>
            <td>${bookList[i].siteURL}</td>
            <td>
                <button onclick="visitSite(${i});" class="btn btn-outline-info"><a href="${bookList[i].siteURL}" target=' _blank'>visit</a></button>
            </td>
            <td>
                <button onclick="deleteSite(${i});" class="btn btn-outline-danger">delete</button>
            </td>
        </tr>`

    }
    tbody.innerHTML = str ;
}

function deleteSite(index){
    var deleted = bookList.splice(index,1);
    setOnLocalStorage();
    displaysite()
}


//support function

function setOnLocalStorage(){
    var stringOfList = JSON.stringify(bookList);
     
    localStorage.setItem('bookList',stringOfList);
}