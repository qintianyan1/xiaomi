/* */
function getClass (classname,obj) {
	 var obj=obj || document
	if (document.getElementsByClassName) {
      return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName('*');
		for(var i = 0;i <alls.length;i++) {
			if (alls[i].ClassName==classname) {
                  arr.push(alls[i]);
			};

		};
		return arr
	}
}




function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr]
		}else{
			return getComputedStyle(obj,null)[attr];
		}
	}




	function move(obj,val){//函数声明
		if (val==undefined) {
          if(obj.textContent==undefined){//分支结构判断条件是否等于undefined
            return obj.innerText//否就执行另一种
		} else{
			return obj.textContent
		};
		} else{
        obj.innerText=val;
		};
		
	}






	function $(selector,context){// 获取值  范围
       if(typeof selector=="string"){//检测值是否是字符串
           context=context||document;//判断值
       	if(selector.charAt(0)=="#") {//获取ID值的截取
           return context.getElementById(selector.substring(1));//返回ID类名的获取值范围并截取        
       	}else if(selector.charAt(0)=="."){//获取类名值得截取
       		return getClass(selector.substring(1));//返回类名的获取值并截取
       	}else if(/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)){//判断正则数判断获取值
       		return context.getElementsByTagName(selector)//返回标签名的值
       	}else if(/^[a-zA-Z][A-Za-z1-6]{0,10}$/.test(selector)){
       		return document.createElement(selector.slice(1,-1));
       	}
       }
        if(typeof selector=="function"){//判断类型是否是函数
       	  on(window,"load",selector)//是函数就执行函数
                  	 
       
 	}
 }
















 function strm(str,type){   //去前后空格
 	type=type||"lr"
 	if(type=='a'){//all
 		return str.replace(/^\s*/g,"");
 	}
 	if (type=='l') {//left
 		return str.replace(/^\s*/g,"");
 	} 
 	if (type=="r") {//right
 		return str.replace(/\s*$/g,"");
 	}
 	if (type=="lr") {//left  right
 		return str.replace(/^\s|\s*$/g,"");
 	};
 }






//参数1 对象    参数2 a只要元素节点     b元素 文本(不要空格)
function getChild(obj,type){
  var type=type||"b";    //不传参数type   默认为b
  var newarr=[];               //声明新数组
  var childs=obj.childNodes;    //找出他的子节点
  if (type=="a"){             //如果a
   for(var i=0; i <childs.length;i++) {
   	if(childs[i].nodeType==1){
   		newarr.push(childs[i]);
   	   }
	};
  }
  if (type=="b"){
  	for (var i=0; i<childs.length; i++) {
  		if (childs[i].nodeType==1||(childs[i].nodeType==3&&strm(childs[i].nodeValue)!="")){//元素节点||文本节点且不是空文本
  			newarr.push(childs[i]);
  		};
  	};
  };
  return newarr;
}



function getFirst(parent,type){
  return getChild(parent,type)[0];
}
function getLast(parent,type){
 var all=getChild(parent,type);
 return all[all.length-1];
}
function getNum(parent,index,type){
	return getChild(parent,type)[index];
}


function getNext(obj){ //获得下一个节点的引用  兄弟  同级
	var next=obj.nextSibling;  //声明 下一个节点引用赋值
	if (next==null) { //判断下一个节点是为空
		return false;// 返回错误
	};
	while(next.nodeType==8||(next.nodeType==3&&strm(childs[i].nodeValue)=="")){//当下一个节点类型等于注释节点或者文本节点等于空的时候
		next=next.nextSibling;//继续寻找下一个节点
		if (next==null) {//如果next等于空
			return false//直接退出
		};
	}
	return next
}



function getUp(obj){
	var up=obj.previousSibling;
	if (up==null) {
		return false;
	};
	while(up.nodeType==8||(next.nodeType==3&&strm(childs[i].nodeValue)=="")){
		up=up.nextSibling;
		if (up==null) {
			return false
		};
	}
	return up
}




function on(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListener(event,fn,false)
	}else{
		obj.attachEvent('on'+event,fn)
	}
}

function off(obj,event,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fn,false)
	}else{
		obj.detachEvent('on'+event,fn)
	}
}