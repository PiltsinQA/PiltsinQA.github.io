// Ищем кнопку с помощью класса, id или другого селектора для точного указания
const button = document.querySelector('.button-link'); // если у вас кнопка с классом button-link

// Навешиваем обработчик события для клика на кнопку
button.addEventListener('click', function() {
  alert('Хорошо делай - хорошо будет');
});