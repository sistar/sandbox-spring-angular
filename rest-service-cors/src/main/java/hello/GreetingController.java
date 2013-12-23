package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();
	private final Map<String, TodoItem> todoItemMap = new HashMap<String, TodoItem>();

	@RequestMapping("/greeting")
	public
	@ResponseBody
	Greeting greeting(
			@RequestParam(value = "name", required = false, defaultValue = "World") String name) {
		System.out.println("==== in greeting ==== with name: " + name);
		return new Greeting(counter.incrementAndGet(),
				String.format(template, name));
	}


	@RequestMapping(value = "/todoItems", method = RequestMethod.PUT)
	public
	@ResponseBody
	Map<String, Object> update(@RequestBody final TodoItem todoItem) {
		System.out.println("==== in update todoItem ==== with todoItem: " + todoItem);
		todoItemMap.put(todoItem.getText(), todoItem);
		final Map<String, Object> response = new HashMap<String, Object>();
		response.put("success", true);
		return response;
	}

	@RequestMapping(value = "/todoItems", method = RequestMethod.GET)
	public
	@ResponseBody
	Collection<TodoItem> getAll() {
		todoItemMap.put("Call Kathi",new TodoItem("Call Kathi",false));
		final Map<String, Object> response = new HashMap<String, Object>();
		response.put("success", true);
		return todoItemMap.values();
	}

}