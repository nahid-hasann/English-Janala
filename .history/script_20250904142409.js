// ** 

const loadlesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then((json) => {
            displaylessons(json.data);
        })
}

loadlesson();



const displaylessons = (lessons) => {
    const levelcontainer = document.getElementById('level-container');
    levelcontainer.innerHTML = "";

    lessons.forEach(lesson => {
        const btndiv = document.createElement('div');
        btndiv.innerHTML = `
          
           <div id="lession-btn-${lesson.level_no}">
                 <button  onclick="loadLevelword(${lesson.level_no})" class="btn btn-outline btn-primary"> <i class="fa-solid fa-book"></i> lession - ${lesson.level_no} </button>
            </div>
          
          `
        levelcontainer.appendChild(btndiv);
    });
}

// ** 

const loadLevelword = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            displaylevelword(data.data)
            const clickbtn 
        })
}

const displaylevelword = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    if (words.length == 0) {

        wordContainer.innerHTML = `
    
     <div class="text-center flex flex-col justify-center items-center col-span-full">
                <img class="mb-[14px] w-[96px] h-[96px]"   src="assets/alert-error.png" alt="">
                <h5 class="text-[14px] text-[#79716B] font-bangla">আপনি এখনো কোন Lesson Select করেন নি</h5>
                <h1 class="text-[34px] font-medium my-[14px] text-[#292524] font-bangla">একটি Lesson Select করুন।</h1>
    </div>
    
    `
        return;
    }

    words.forEach((word) => {
        const card = document.createElement('div');
        card.innerHTML = `
         
         <div class="bg-white text-center py-[20px] px-[30px]">
            <h1 class="text-[32px] font-bold">${word.word ? word.word : "Empty"}</h1>
            <p class="text-[20px] font-medium my-[14px]">Meaning /Pronounciation</p>
            <h1 class="text-[32px] font-semibold font-bangla">"${word.meaning ? word.meaning : "empty"} / ${word.pronunciation}"</h1>
            <div class="flex justify-between">
                <div class="bg-[#e7f3fe] p-[10px] rounded-md flex justify-center items-center"><i class="fa-solid fa-circle-info text-[25px]"></i></div>
                <div class="bg-[#e7f3fe] p-[10px] rounded-md flex justify-center items-center"><i class="fa-solid fa-volume-low text-[25px]"></i></div>
            </div>
        </div>
        
        `
        wordContainer.appendChild(card);
    })
}

// ** 