// Document Ready
$(() => {
  /**
   * [setUp description]
   * @param {[type]} elRef [description]
   */
  const renderTodoList = (el) => {
    $(el).html('');
    $(el).append(getTodos());
  };

  fetch('http://localhost:3000/load') // externalize
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    todos = json;
    renderTodoList('#todolist');
  })
  .catch(function (err) {
  // Error :(
  });

  $('#add').on('keypress', (e) => {
    if (e.which === 13) {
      addTodo($('#add').val());
      $('#add').val('');
      renderTodoList('#todolist');
    }
  });

  $('#btnsave').click(saveTodos);

  $(document).on('click', '.btndelete', (e) => {
    const label = $(e.target).parent().find('span').text();
    rmTodo(label);
    renderTodoList('#todolist');
  });

  $('#benchmark').click(() => {
    const t = performance.now();
    const itemCount = 1000;

    $('#benchmark').html('running...');

    let c = todos.length;
    while (c--) {
      $('.btndelete').click();
    }

    const e = jQuery.Event('keypress');
    e.which = 13;
    c = itemCount;
    while (c--) {
      $('#add').val(c).trigger(e);
    }
    todos = [];

    const duration = ((performance.now() - t) / 1000).toFixed(4);
    renderTodoList('#todolist');
    $('#benchmark').html(`completed ${duration}`);
  });
});
