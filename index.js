const track = document.getElementById("image-track")

window.onmousedown = e => {
   track.dataset.mousedownAt = e.clientX;

}

window.onmousemove = e => {
   if (track.dataset.mousedownAt === "0") return;

   const mouseDelta = parseFloat(track.dataset.mousedownAt) - e.clientX
   maxDelta = window.innerWidth / 2;

   const percentage = (mouseDelta / maxDelta) * -100;

   var nextPercentage = parseFloat(track.dataset.prevPercentage + percentage);

   track.dataset.percentage = nextPercentage;
   track.style.transform = `translate(${percentage}%,-50%)`
}

window.onmouseup = () => {
   track.dataset.mousedownAt = "0"
   track.dataset.prevPercentage = track.dataset.percentage;
}