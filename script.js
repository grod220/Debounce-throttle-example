
// Throttle

// let proceed = true;
// addEventListener('mousemove',event=>{
//   if (proceed) {
//     let content = document.getElementById('content');
//     content.innerHTML = `Cordinates: X:${event.pageX}, Y:${event.pageY}`;
//     proceed = false;
//     setTimeout(()=>{
//       proceed = true;
//     },1000)
//   }
// })



// Debounce

let timer;
addEventListener('mousemove',event=>{
  clearTimeout(timer);
  timer = setTimeout(()=>{
    let content = document.getElementById('content');
    content.innerHTML = `Cordinates: X:${event.pageX}, Y:${event.pageY}`;
  },1000)
})
