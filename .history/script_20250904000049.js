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
          const btndiv = document.createElement('')
      });
}