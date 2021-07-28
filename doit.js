document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, div, span, a').forEach(el => {
  el.innerHTML = el.innerHTML.replace(/\*innen|:innen|Innen|-innen|_innen|\/innen/g, '')
})