class Team_Page {
	constructor() {
		this.type = "team";

		this.href = tools.full_path("/Team.html");

		this.my_part = document.getElementById("team-page");
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

var team_page = new Team_Page();

page.handlers["team"] = team_page;