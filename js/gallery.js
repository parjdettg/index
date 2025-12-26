/* ==========================================================================
   ★ 활동기록 데이터 자동화 시스템 (Gallery Automation) ★
   ========================================================================== */

// 1. [데이터 창고] 여기에 활동 내용을 계속 추가하면 됩니다. (수천 개도 가능!)
const activities = [
    {
        id: 1,
        title: "학교 밖 청소년 대상 삼겹살 나눔",
        date: "2025.03.17",
        location: "진주초원 사회적협동조합",
        desc: "검정고시 공부로 끼니를 챙기기 힘든 학교 밖 청소년들의 배고픔을 덜어주고자, 지역 사회의 이름없는 손길들이 모여 맛있는 삼겹살을 무료로 나누었습니다.",
        tags: ["#삼겹살", "#야외식사"],
        mainImg: "images/aaa.jpg",       
        subImgs: [   
            "images/aaa1.jpg",
            "images/aaa2.jpg",
            "images/aaa3.jpg",
            "images/aaa4.jpg"
        ]
    },

     {
        id: 2,
        title: "학교 밖 청소년과 함께 한라산 탐방",
        date: "2025.03.28",
        location: "제주도",
        desc: "검정고시 공부에 지친 청소년들에게 이름없는 손길이 모여 무료 제주도 여행을 선물했습니다.",
        tags: ["#한라산", "#제주도"],
        mainImg: "images/aa.jpg",       
        subImgs: [   
            "images/aa1.jpg",
            "images/aa2.jpg",
            "images/aa3.jpg",
            "images/aa4.jpg"
        ]
    },

     {
        id: 3,
        title: "학교 밖 청소년 대상 요리 실습",
        date: "2025.03.29",
        location: "진주초원 사회적협동조합 실습실",
        desc: "검정고시 공부를 끝내고 온 청소년들이 무료 요리 실습을 통해 스스로 건강한 한 끼를 챙기는 법을 배웠습니다.",
        tags: ["#요리실습", "#재료후원","#감사합니다"],
        mainImg: "images/aa5.jpg",       
        subImgs: [   
            "images/aa6.jpg",
            "images/aa7.jpg",
            "images/aa8.jpg",
            "images/aa9.jpg"
        ]
    },

    // ★ 새로운 활동을 추가하려면 위 { ... } 덩어리를 복사해서 여기에 붙여넣고 내용만 바꾸세요!
];


// 2. [공장 기계] 데이터를 가져와서 HTML로 찍어내는 함수
function renderGallery() {
    const container = document.getElementById('gallery-grid'); // HTML의 빈 상자를 찾음
    let htmlString = ''; // 여기에 HTML 코드를 차곡차곡 쌓을 예정

    // 데이터 하나씩 꺼내서 반복(Loop)
    activities.forEach(item => {
        
        // 추가 사진(subImgs)들을 HTML로 만드는 과정
        let subImagesHTML = '';
        item.subImgs.forEach(img => {
            subImagesHTML += `<img src="${img}" alt="추가 사진">`;
        });

        // 태그(tags)들을 HTML로 만드는 과정
        let tagsHTML = '';
        item.tags.forEach(tag => {
            tagsHTML += `<span>${tag}</span>`;
        });

        // ★ 우리가 만들었던 그 '매직 앨범' 디자인 틀에 내용을 끼워넣기
        htmlString += `
            <div class="project-card">
                <div class="gallery-container">
                    <div class="main-view">
                        <img src="${item.mainImg}" alt="${item.title}">
                    </div>
                    <div class="hidden-views">
                        ${subImagesHTML} </div>
                </div>

                <div class="project-info">
                    <h3 class="project-title" style="color:#2c5f2d;">${item.title}</h3>
                    <div class="project-meta">
                        <span><strong>일시:</strong> ${item.date}</span>
                        <span><strong>장소:</strong> ${item.location}</span>
                    </div>
                    <p class="project-desc">${item.desc}</p>
                    <div class="project-tags">
                        ${tagsHTML} </div>
                </div>
            </div>
        `;
    });

    // 완성된 HTML 뭉치를 화면에 뿌리기
    container.innerHTML = htmlString;
}

// 3. [공장 가동] 페이지가 로드되면 기계를 돌려라!
document.addEventListener('DOMContentLoaded', renderGallery);