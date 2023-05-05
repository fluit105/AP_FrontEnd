let currentCategory = null;
let showWidth = true;

function detectViewportSize() {
  const width = window.innerWidth;
  let newCategory = null;

  if (width < 768) {
    newCategory = "xs";
  } else if (width < 992) {
    newCategory = "sm";
  } else if (width < 1200) {
    newCategory = "md";
  } else {
    newCategory = "lg";
  }

  if (newCategory !== currentCategory && showWidth) {
    currentCategory = newCategory;
    console.log(currentCategory);
  }
}

detectViewportSize();
window.addEventListener('resize', detectViewportSize);