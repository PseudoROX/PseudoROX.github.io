document.getElementById('more').addEventListener('click',
function() {
  document.querySelector('.modal').style.display = 'flex';
});
document.getElementById('close').addEventListener('click',
function() {
  document.querySelector('.modal').style.display = 'none';
});
