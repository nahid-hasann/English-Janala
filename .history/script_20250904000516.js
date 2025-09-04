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
          
           <div class="border-[2px] py-[5px] px-[10px] border-[#6d5de0] rounded-md">
                <h1 class="text-[#422ad5]"><i class="fa-solid fa-book mr-[5px]"></i>lesson-1</h1>
            </div>
          
          
          `

          levelcontainer.appen
      });
}