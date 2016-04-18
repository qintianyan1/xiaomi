window.onload=function() {//等待页面加载完成
	var anniuxs=document.  //获取类名的的方法
	getElementsByClassName('anniux');
	// console.log(anniuxs)
	var bannertus=document.  //获取类名的的方法
	getElementsByClassName('bannertu1');
	var index=0;
	var t=setInterval(function(){
      index++;
      if (index==bannertus.length) {
      	index=0
      } 
      for (var t=0;t<bannertus.length; t++) {
      	bannertus[t].style.display="none";
      	anniuxs[t].style.background="";
      };
      bannertus[index].style.display="block";
      anniuxs[index].style.background="rgba(0,0,0,0.4)";
		
	},3000)

	for (var i=0;i<anniuxs.length;i++) {
		anniuxs[i].index=i;
		anniuxs[i].onclick=function(){
		for (var j=0;j<bannertus.length;j++) {
			bannertus[j].style.display="none";
			anniuxs[j].style.background="";
		};
		bannertus[this.index].style.display=
		"block";
		anniuxs[this.index].style.background="rgba(0,0,0,0.4)";
		}




		var floors=getClass("da")[0].getElementsByClassName('f1');
		console.log(floors)
		alert(floors.length)
		var arr=[];
		for(var i=0;i<floors.length;i++){
			arr.push(floors[i].offsetTop);	
		}

		// console.log(arr)
		window.onscroll=function(){
			var top=document.body.scrollTop||document.documentElement.scrollTop;
			// console.log(top)
			var clientH=document.documentElement.clientHeight;
			// console.log(clientH)
			for(var i=0;i<arr.length;i++){
				if(arr[i]<top+clientH){
					var imgs=floors[i].getElementsByTagName('img');
					// console.log(imgs)
					for(var j=0;j<imgs.length;j++){

						imgs[j].src=imgs[j].getAttribute("asrc");
					}
				}
			}
		}
		window.onscroll();














	
	  };
}
