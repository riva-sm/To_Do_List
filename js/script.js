$(function () {
  var $tasksList = $("#tasksList");
  var $taskInput = $("#taskInput");
  var $notification = $("#notification");

  var displayNotification = function () {
    if (!$tasksList.children().length) { //находит дочерние эл-ты, а потом возвращает число выбранных элементов
      $notification.fadeIn("fast"); //появляется с быстрой скоростью блок "список задач"
    } else {
      $notification.css("display", "none") //в обратном случае вызывается метод, скрывающий блок
    }
  };

  $("#taskAdd").on("click", function () { //вызываем обработчик событий при нажатии на кнопку +
    taskAdd();
  });

  // enter или ctrl+enter
  $taskInput.keydown(function (event) {
    if (event.keyCode === 13 || (event.ctrlKey && event.keyCode === 13)) {
      taskAdd();
    }
  });

  function taskAdd() {
    if (!$taskInput.val()) {
      return false;
    } //проверяем значение Инпута, возвращаем пустое значение

    $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>"); //добавляем пункт списка в веденным в поле инпут значением
    //добавляем кнопку для удаления
    $taskInput.val(""); //очистка поля для ввода

    displayNotification(); //вызов функции для отображения или скрытия заданий

    $(".delete").on("click", function () {
      var $parent = $(this).parent();

      $parent.css("animation", "fadeOut .3s linear");

      setTimeout(function () { //устанавливаем время
        $parent.remove();
        displayNotification();
      }, 295);
    })
  }
});