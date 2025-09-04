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

      lessons.forEach( lesson => {
          const btndiv = document.createElement('div');
          btndiv.innerHTML = `
          
           <div>
                 <button onclick="loadlevelworld" class="btn btn-outline btn-primary"> <i class="fa-solid fa-book"></i> lession - ${lesson.level_no} </button>
            </div>
          
          `

          levelcontainer.appendChild(btndiv);
      });
}