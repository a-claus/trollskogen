Vue.component("buttar", {
	props: ["bbs"],
	template:
		'<div><div v-for= "bb in bbs" id = "knappval">{{ bb.text}}</div></div>'
})

Vue.component("buttar2", {
	props: ["bb"],
	template:
		'<div class = "pr_rad"><div class = "pr_ruta">{{ bb.text }}</div></div>'
})

Vue.component("v_knapp", {
	
	template:
		' <div id="knapp" onclick= "knappval(7)"></div>'})

app = new Vue({
	el: '#passRuta',
	component: ['buttar2'],
	data: {
		bbs:[
			{id: 1,  text: "aaa"},
			{id: 2,  text: "bbb"}
		],
		test: [],
		item: ""

		},
		methods:{
			adderaPassLista: function(){
				console.log("varhär")
				//test.push("{id: 2,  text:' {{ item }} '"   );
				//this.passLista.push({passNr: "namn"})
			}
			


		}
	
})