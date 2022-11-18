// my-component.js
export default {
	data() {
		return {
			title: "Vue / Bootstrap Single Page Template"
		}
	},
	methods: {
		changeTitle() {
			this.title = this.title.split(" - ")[0] + " - " + new Date().toISOString()
		},
	},
}
