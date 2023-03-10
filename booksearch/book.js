// ajax 
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술 
// fetch() 로도 구현 가능 (일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용 

let page = 1;

const query = document.querySelector(".query");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e => {
    e.preventDefault();
    if (query !== "") {
        page = 1;
        searchRequest(query.value, page);
    }
});

function searchRequest(query, page) {
    console.log("query :", query);

    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 4d16de5615a2664a8ad58468da4bfffa"
        },
    })
        .done((response) => {
            // container 안에 

            /*
           <div class="result-card">
            <img class="book-img" src="/book.png">
                <h4 class="book-title">도서제목</h4>
                <p class="book-description">도서상세정보</p>
                <span class="price">1000원</span>
                <p class="book-info">
                    <span class="author">저자</span>|<span class="publisher">출판사</span>
                </p>
            </div>
            */

            // 새로 생성 및 구성 완료한 result-card 요소를 추가
        });
}
