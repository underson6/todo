function saveData() {
	var tasks = [];
	$("#task li").each(function() {
		tasks.push($(this).text());
	});

	var doings = [];
	$("#doing li").each(function() {
		doings.push($(this).text());
	});

	var dones = [];
	$("#done li").each(function() {
		dones.push($(this).text());
	});

	localStorage.setItem("tasks", JSON.stringify(tasks));
	localStorage.setItem("doings", JSON.stringify(doings));
	localStorage.setItem("dones", JSON.stringify(dones));

	addDeleteEvent();
}


function loadData() {
	var conditionName = ["tasks", "doings", "dones"];
	var tagIdName = ["task", "doing", "done"];
	for (var j = 0; j < conditionName.length; j++) {
		if (localStorage.getItem(conditionName[j])) {
			var tasks = JSON.parse(localStorage.getItem(conditionName[j]));
			for (var i = 0; i < tasks.length; i++) {
				if (tasks[i] === "タスク追加") {
					continue;
				}
				var task = $("<li>");
				task.attr("class", "ui-state-default ui-sortable-handle");
				task.text(tasks[i]);
				task.appendTo($("#" + tagIdName[j]));

				var span = $("<span>");
				span.attr("class", "delete ui-icon ui-icon-close");
				span.appendTo(task);
			}
		}

	}

	addDeleteEvent();
}

function addDeleteEvent() {
	$(".delete").on("click", function() {
		$(this).parent().remove();
		saveData();
	});

}