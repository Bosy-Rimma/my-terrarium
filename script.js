/* Make every element with class="cat" draggable */
document.querySelectorAll('.cat').forEach(dragElement);

function dragElement(cattreeElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  cattreeElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    cattreeElement.style.top = (cattreeElement.offsetTop - pos2) + "px";
    cattreeElement.style.left = (cattreeElement.offsetLeft - pos1) + "px";
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
