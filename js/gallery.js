/* ==========================================================================
   ★ 활동기록 데이터 자동화 시스템 (Gallery Automation) ★
   ========================================================================== */

// 1. [데이터 창고] 여기에 활동 내용을 계속 추가하면 됩니다. (수천 개도 가능!)
const activities = [
    {
        id: 1,
        sortDate: "2025-03-17",
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
        sortDate: "2025-03-28",
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
        sortDate: "2025-03-29",
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
            "images/aa9.jpg",
        ]
    },

    {
        id: 4,
        sortDate: "2025-04-01",
        title: "학교 밖 청소년과 함께 식사",
        date: "2025.04.01",
        location: "진주시 식당",
        desc: "검정고시를 준비하는 친구들에게 맛있는 밥을 사주는 활동을 했습니다.",
        tags: ["#찾아가기", "#청소년"],
        mainImg: "images/a.jpg",
        subImgs: [
            "images/a1.jpg",
            "images/a2.jpg",
            "images/a3.jpg",
            "images/a1.jpg",
        ]
    },

    {
        id: 5,
        sortDate: "2025-04-07",
        title: "학교 밖 청소년 외부활동(채계산 등반)",
        date: "2025.04.07",
        location: "전북 순창군",
        desc: "지친 일상 속에서 다시 힘을 충전하기 위해 함께 등산을 하러 떠났습니다.",
        tags: ["#등산", "#구름다리", "#체력"],
        mainImg: "images/a4.jpg",
        subImgs: [
            "images/a5.jpg",
            "images/a6.jpg",
            "images/a7.jpg",
            "images/a8.jpg",
        ]
    },

    {
        id: 6,
        sortDate: "2025-04-19",
        title: "취약계층 대상 농촌 힐링 프로그램",
        date: "2025.04.19",
        location: "진주초원 사회적협동조합 공용 텃밭",
        desc: "지친 일상을 보내는 취약계층 학생들이 평화로운 농촌 자연 속에서 몸과 마음의 온전한 회복을 경험했습니다.",
        tags: ["#심고거둠", "#무럭무럭", "#자라나길"],
        mainImg: "images/a9.jpg",
        subImgs: [
            "images/a10.jpg",
            "images/a11.jpg",
            "images/a12.jpg",
            "images/a13.jpg",
        ]
    },

    {
        id: 7,
        title: "취약계층 대상 농촌 힐링 프로그램",
        date: "2024.01.19",
        location: "진주초원 사회적협동조합 공용 텃밭",
        desc: "지친 일상을 보내는 취약계층 학생들이 평화로운 농촌 자연 속에서 몸과 마음의 온전한 회복을 경험했습니다.",
        tags: ["#심고거둠", "#무럭무럭", "#자라나길"],
        mainImg: "images/a9.jpg",
        subImgs: [
            "images/a10.jpg",
            "images/a11.jpg",
            "images/a12.jpg",
            "images/a13.jpg",
        ]
    },

    // 새로운 활동을 추가하려면 위 { ... } 덩어리를 복사해서 여기에 붙여넣고 내용만 바꾸세요!
];

// 2. [공장 설정]
let currentIndex = 0;      
const itemsPerLoad = 3;    // ★ 한 번에 3개씩 보여주기

// 3. [공장 기계]
function renderGallery() {
    const container = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    activities.sort((a, b) => {
        return new Date(b.sortDate) - new Date(a.sortDate);
    });

    const nextBatch = activities.slice(currentIndex, currentIndex + itemsPerLoad);

    nextBatch.forEach(item => {
        let subImagesHTML = '';
        item.subImgs.forEach(img => {
            subImagesHTML += `<img src="${img}" alt="추가 사진">`;
        });

        let tagsHTML = '';
        item.tags.forEach(tag => {
            tagsHTML += `<span>${tag}</span>`;
        });

        const cardHTML = `
            <div class="project-card">
                <div class="gallery-container">
                    <div class="main-view">
                        <img src="${item.mainImg}" alt="${item.title}">
                    </div>
                    <div class="hidden-views">
                        ${subImagesHTML}
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title" style="color:#2c5f2d;">${item.title}</h3>
                    <div class="project-meta">
                        <span><strong>일시:</strong> ${item.date}</span>
                        <span><strong>장소:</strong> ${item.location}</span>
                    </div>
                    <p class="project-desc">${item.desc}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });

    currentIndex += nextBatch.length;

    if (currentIndex >= activities.length) {
        loadMoreBtn.style.display = 'none'; // 다 보여줬으면 버튼 숨김
    }
}

// 4. [작동 시작]
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    document.getElementById('loadMoreBtn').addEventListener('click', renderGallery);
});