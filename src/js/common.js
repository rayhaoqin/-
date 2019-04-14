//1.封装a-b的随机整数，包含a、b
function getRandomNum(a,b){
	return  parseInt(Math.random()*(b-a+1)+a);
}

//2.封装一个随机颜色 rgb(0-255,0-255,0-255)
function getRandomColor(){
	var r = getRandomNum(0,255);
	var g = getRandomNum(0,255);
	var b = getRandomNum(0,255);
	return 'rgb('+r+','+g+','+b+')';
}


//3.封装获取元素节点
var Element = {
	// 1.从所有节点的数组中，过滤出来只有元素节点的数组
	getElement : function(nodes){
		var eleArr = [];
		// eleArr = Array.prototype.filter.call(nodes,function(item){
		// 	return item.nodeType == 1;
		// })
		nodes.forEach(function(item){
			if(item.nodeType == 1){
				eleArr.push(item);
			}
		})
		return eleArr;
	},
	//2.获取所有子元素节点
	getSonElement : function(parent){
		return this.getElement(parent.childNodes);
	},
	//3.获取到下一个兄弟元素节点
	getNextElement : function(current){
		var next = current.nextSibling;
		if(next.nodeType != 1){
			next = next.nextSibling;
		}
		return next;
	}
	//...

}

//4.获取css样式
function getStyle(ele,key){
 	if(window.getComputedStyle){
		return window.getComputedStyle(ele)[key];
	}else if(ele.currentStyle){
		return ele.currentStyle[key];
	}else{
		return ele.style[key];
	}
}

// 5.事件绑定，兼容浏览器
function bind(ele,type,fn,iscapture){
	if(ele.addEventListener){
		ele.addEventListener(type,fn,iscapture);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+type,fn);
	}else{
		ele["on"+type] = fn;
	}
}



//封装匀速动画


//封装缓冲动画
// 开启定时器
//     （1）获取当前值，赋给变量
//     （2）动态计算速度。(目标值-当前值)/10.若为正值则向上取整，负值则向下取整
//     （3）对变量进行更新
//      * 在赋值样式之前进行边界处理：判断目标值==当前值，清除定时器
//     （4）将变量的更新后的值赋给样式
// *在事件里面使用定时器，一开始要清除定时器

//基础版
//1.获取到的当前值是有单位的
//(1)如何获取单位
//(2)如何只要current的值
//2.透明度变大100倍
// * 目标值的问题



// function bufferAnimation(ele,key,target,timer){
// 	target = key == "opacity"? target *100 : target;
// 	clearInterval(ele[key+"timer"]);
// 	ele[key+"timer"] = setInterval(function(){
// 		var current = window.getComputedStyle(ele)[key];//120px
// 		var unit = current.match(/[a-z]+/);
// 		unit = unit? unit[0] : "";
// 		current = parseFloat(current); 
// 		current = key == "opacity"? current *100 : current;
// 		var speed = (target-current)/10;
// 		speed = speed>0? Math.ceil(speed) : Math.floor(speed);
// 		current += speed;
// 		if(current == target){
// 			clearInterval(ele[key+"timer"]);
// 		}
// 		current = key == "opacity"? current/100 : current;
// 		ele.style[key] = current + unit;
// 	},timer)

// }

//进阶版
//1.考虑传递多个属性，用对象。
//	* for循环比定时器快。
//		* 块级作用域 
//		* 局部作用域
//2.等待所有动画执行完毕后，帮你执行回调函数
//	利用count统计有多少个动画，每执行完一次动画，count--。当count
// 为0，说明所有动画执行完毕，此时帮你执行回调函数
//3.判断传入的fn是否为函数，函数才执行

// 甲
function bufferAnimation(ele,obj,timer,fn){
	var count = 0;
	for(var key in obj){
		count ++;
		var target = obj[key];
		donghua(key,target);
	}
	function donghua(key,target){
		console.log(target);
		target = key == "opacity"? target *100 : target;
		clearInterval(ele[key+"timer"]);
		ele[key+"timer"] = setInterval(function(){
			var current = window.getComputedStyle(ele)[key];//120px
			var unit = current.match(/[a-z]+/);
			unit = unit? unit[0] : "";
			current = parseFloat(current); 
			current = key == "opacity"? current *100 : current;
			var speed = (target-current)/10;
			speed = speed>0? Math.ceil(speed) : Math.floor(speed);
			current += speed;
			if(current==target){
				clearInterval(ele[key+"timer"]);
				count--;
			}
			current = key == "opacity"? current/100 : current;
			ele.style[key] = current + unit;
			if(count == 0 ){
				typeof fn == "function"? fn() : fn;
			}
		},timer)

	}
}

//封装设置、获取、移除cookie
var Cookie = {
	setCookie : function(name,value,data,path){
		var str = `${name}=${value}`;
		if(data){
			str += `; expires=${data.toUTCString()}`;
		}
		if(path){
			str += `; path=${path}`;
		}

		document.cookie = str;
	},
	getCookie : function(name){
		var cookieArr = document.cookie.split("; ");
		var res = "";
		cookieArr.forEach(function(item){
			var arr = item.split("=");
			if(arr[0] == name){
				res = arr[1];
			}
		})
		return res;
	},
	removeCookie : function(name,path){
		var d = new Date();
		d.setDate(d.getDate()-1);
		this.setCookie(name,"",d,path)
	}
}