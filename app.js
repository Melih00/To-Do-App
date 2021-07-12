const theUl = document.querySelector(".theUl");
const theBtn = document.querySelector(".theButton");
const inputValue = document.querySelector("#unpit");
const inputs = document.querySelectorAll(".inputs");
const lis = document.querySelector(".lis");
const beHappy = document.getElementById("beHappy");
const times = {};
theBtn.addEventListener("click", function () {
  const newLi = document.createElement("LI");
  const newContent = document.createTextNode(
    inputValue.value ? inputValue.value : "_Empty Task_"
  );

  
  newLi.classList.add("lis");
  times.time1 = new Date().toString();
  newLi.appendChild(newContent);
  const before = newLi.innerHTML;
  theUl.appendChild(newLi);

  inputValue.value = "";


  newLi.addEventListener("mouseenter", () => {
    newLi.textContent = "Added on" + times.time1.substr(7, 17);
  });
  newLi.addEventListener("mouseout",Delete);



  newLi.addEventListener('click',()=>{
    newLi.innerHTML = 'Task is done!';
    
    newLi.addEventListener('mouseout',()=>{
      removeFadeOut( newLi, 1000 )
    })
    newLi.removeEventListener("mouseout", Delete)
  }
  )
  function Delete () {
    newLi.innerHTML = before;
  }
});  
const beforeHappy = beHappy.innerHTML;

beHappy.addEventListener("mouseenter", () => {
  beHappy.textContent = "__Always__";
});
beHappy.addEventListener("mouseout", () => {
  beHappy.textContent = beforeHappy;
});



  





function removeFadeOut( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
  setTimeout(function() {
      el.parentNode.removeChild(el);
  }, speed);
}
