// import $ from 'jquery';
// import '@fancyapps/fancybox';
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// Fancybox.bind('[data-fancybox="gallery"]', {
// 	//
//   });
  
// $(document).ready(function() {
//   $('[data-fancybox]').fancybox();
// });	

$(document).ready(function() {
	var url = '/css/my/test.css';
	var doc = document;
	var link = doc.createElement("link");
	link.setAttribute("rel","stylesheet");
	link.setAttribute("type","text/css");
	link.setAttribute("href",url);
	var heads = doc.getElementsByTagName("head");
	if (heads.length) {
		heads[0].appendChild(link);
	}else{
		doc.documentElement.appendChild(link);
	}
});

// document.addEventListener('DOMContentLoaded', function() {
// 	// 获取所有具有 'slider' 类的元素
//   //   var sliderContainer = document.getElementById('slider-container');
// 	var sliders = document.querySelectorAll('.slider');
  
// 	// 遍历每个 slider 元素并初始化 Flickity
// 	Array.prototype.forEach.call(sliders, function(slider) {
// 	  new Flickity(slider, {
// 		// 配置选项
// 		// 可以根据需要进行配置，例如设置滑动速度、自动播放等
// 		// 例如：autoPlay: true, prevNextButtons: false
// 	  });
// 	});
//   });
  