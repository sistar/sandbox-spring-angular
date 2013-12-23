function TodoCtrl($scope,$http){
	$scope.todos = [
	{text: "learn AngularJS", done: false},
	{text: "apply for a job at Google", done: false}
	];
	$scope.greeting = {greeting: ""}
	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		})	
		return count;
	};
	$scope.addTodo = function() {
		var newEntry = {text: $scope.todoText, done: false};
		$scope.todos.push(newEntry);
		saveToBackend(newEntry);
	};
	saveToBackend = function(entry) {
		$http.put('http://localhost:8080/todoItems',entry);
	};

	$http.get('http://localhost:8080/greeting').
	success(function(data) {
		$scope.greeting = data;
	});

	$http.get('http://localhost:8080/todoItems').then(
		function(result) {
		result.data.forEach(function(val,i){
			$scope.todos.push(val);
		});
	}, function(error) {
        alert(error.message);
    });
}