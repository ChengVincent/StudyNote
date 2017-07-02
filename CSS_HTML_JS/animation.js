/*js运动框架
参数列表
obj：对象
json：改变属性的列表
fn：保证连续动画执行的函数参数
time：动画执行速度
*/
function startMove(obj,json,time,fn)
{
	clearInterval(obj.timer);    /*清除前面的定时器*/
	
	obj.timer = setInterval(function(){
		var flag = true;        //针对并行动画，保证动画执行完毕
		for(var attr in json)   //遍历处理动画
		{
			//取出当前值
			var oattr = 0;
			if(attr == "opacity")   //针对深浅颜色单独处理
			{
				oattr = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			}
			else
			{
                oattr = parseInt(getStyle(obj, attr));				
			}
			
			var speed = (json[attr] - oattr) / 20; //缓冲动画
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);  //对计算结果取整
			
			if(oattr != json[attr])   //确定所有的动画执行完毕
			{
				flag = false;
			}
			
			//计算当前动画位置
			if(attr == "opacity")
			{
				obj.style.filter = 'alpha('+ attr + ':' + (oattr + speed) + ')';
				obj.style[attr] = (oattr + speed) / 100;
			}
			else
			{
				obj.style[attr] = oattr + speed + 'px';
			}

            if(flag)
			{
				clearInterval(obj.timer);
				if(fn)
				{
					fn(obj);
				}
			}
        }			
	},time);
}

function getStyle(obj,attr)  //针对不同浏览器取出元素值
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
}