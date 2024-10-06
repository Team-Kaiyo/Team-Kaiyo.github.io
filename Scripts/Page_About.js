class About_Page extends PageHandlerTemplate {
	constructor() {
		super();
		this.type = "about"

		this.href = tools.full_path("/About.html")

		this.my_part = document.getElementById("about-page")
	}
	
	async initialize() {
		console.log("About_Page constructor")
		console.log(this.my_part)
		page.hide_actions_button(); // Hide actions button, not needed here
	}

	clear() {
	}


}

var about_page = new About_Page();

page.handlers["about"] = about_page;