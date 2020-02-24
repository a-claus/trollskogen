window.onload = flexViews;

function flexViews(){
	const new ol.Map({
		view: new ol.View({
			center:[0,0],
			zoom: 4
		}),
		layers: [
		],
		target: "canvas"
	})


}

map.on("click", function(e)){
	console.log(e.cordinate)
}

const baseLayerGroup = new ol.layer.Group({
	layers:[]
})

//switcher logic
const baseLayerElements = document.querySelectorAll('.sidebar > input [type-radio]')
for (let baseLayerElement of baseLayerElements){
	baseLayerElement.addEventListener("change", function(){
		let baseLayerElementValue = this.value;
		baseLayerGroup.getLayers().forEach(function(element, index, array){
			let baseLayerTitle = element.get("title");
			element.setVisible(baseLayerTitle === baseLayerElementValue);
		})
	})
}


const circleStyle = new ol.style.Circle({
	fill: new ol.style.Fill({
	  color: [245, 49, 5, 1]
	}),
	radius:10,
	stroke: strokeStyle
  })
  
  /*
  ,
	   style: new ol.style.Style({
		image: circleStyle
	   })
  
  */
  