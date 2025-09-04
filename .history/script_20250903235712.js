const loadlesson = () => {
   fetch("https://openapi.programming-hero.com/api/levels/all")
   .then(res => res.json())
   .then((json) => {
      displaylessons(json);
   })
}

loadlesson();

const displaylessons = (lessons) => {
      const levelcontainer 
      levelcontainer.innerHTML = "";

      lessons.forEach( lesson => {
          console.log(lesson);
      });
}