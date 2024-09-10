class Solar_System_Page {
	constructor() {
		this.type = "solar_system"
		this.href = tools.full_path("/Solar-System.html")

		this.my_part = document.getElementById("solar_system-page")
	}

	async initialize() {
		page.hide_actions_button(); // Hide actions button, not needed here

	}

	hide() {
		this.my_part.classList.remove("active");
	}

	async make_push() {
		await tools.sleep(100);
		tools.fake_push({
			"page": "solar_system"
		}, this.href);
	}

	show() {
		this.my_part.classList.add("active");
		page.show_actions_button();

		
		this.make_push();

	}

	clear() {
	}

	on_action_button() {
		page.move_to_top();
	}

}

var solar_system_page = new Solar_System_Page();

page.handlers["solar_system"] = solar_system_page;