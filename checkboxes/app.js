const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let start = 0;
let end = 0;
const handleCheck = (e) => {
  if (e.shiftKey) {
    end = Number(e.target.id.slice(8));
  } else {
    start = Number(e.target.id.slice(8));
  }
  if (start > 0 && end > 0) {
    if (end < start) {
      const temp = start;
      start = end;
      end = temp;
    }
    for (let i = start; i < end - 1; i += 1) {
      checkboxes[i].checked = true;
    }
  }
};

document.addEventListener('click', handleCheck);
