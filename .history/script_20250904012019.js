const loadlesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then((json) => {
            displaylessons(json.data);
        })
}

loadlesson();

const loadLevelword = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then(res => res.json())
  .then((data) => {
     displaylevelword(data.data)
  })
}

const displaylevelword = (words) => {
   const wordContainer = document.getElementById('word-container');
   wordContainer.innerHTML = "";

    words.forEach((word) => {
        const card = document.createElement('div');
        card.innerHTML = `
         
        <p>cat</p>
        
        `
        wordContainer.appendChild()
    })
}

const displaylessons = (lessons) => {
    const levelcontainer = document.getElementById('level-container');
    levelcontainer.innerHTML = "";

    lessons.forEach(lesson => {
        const btndiv = document.createElement('div');
        btndiv.innerHTML = `
          
           <div>
                 <button onclick="loadLevelword(${lesson.level_no})" class="btn btn-outline btn-primary"> <i class="fa-solid fa-book"></i> lession - ${lesson.level_no} </button>
            </div>
          
          `

        levelcontainer.appendChild(btndiv);
    });
}


