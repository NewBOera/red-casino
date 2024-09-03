const toggleMenu = () => {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.classList.toggle('show');
};

document.getElementById('menu-toggle').addEventListener('click', function () {
  const sideMenu = document.getElementById('side-menu');
  sideMenu.classList.toggle('-translate-x-full');
});
