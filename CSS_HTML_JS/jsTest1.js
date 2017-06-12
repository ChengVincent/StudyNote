var string="i love";  //声明变量，记者每一句之后有分号
//var myarr=new Array();数组声明
//数组创建var myarray = new Array(66,80,90,77,59);//创建数组同时赋值
//var myarray = [66,80,90,77,59];//直接输入一个数组（称 “字面量数组”）
//myarray.length;获取长度，长度根据最后一位有值区域确定，要是给length赋值，值就是那个

//var Udate=new Date(); 
//var d = new Date(2012, 10, 1);  //2012年10月1日
//var d = new Date('Oct 1, 2012'); //2012年10月1日，第一种方法获取系统时间，其他是自己赋值

//字符串
//stringObject.charAt(index)//返回某位置的字符
//stringObject.indexOf(substring, startpos)//寻找字串首次出现位置
//stringObject.split(separator,limit)//分割字符串，返回数组，第一个是分割依据，第二个是分割数组大小限制
//stringObject.substring(startPos,stopPos) //提取两个下标之间字符串//n,m-1之间的，
//stringObject.substr(startPos,length)//开始位置到指定长度的子串
document.write(string);
document.write("javascript");  //js输出，利用它还可以输出html代码
document.write(string + "javascript");

if(7>=5)  //if-else语句
{
	document.write("7>5");
}
else
{
	document.write("5>7");	
}

function clickOutput()
{
	//document.write("点击成功");
	//alert("点击成功");   //弹出对话框只有确定
	if(confirm("这是一个选择界面") == true)  //confirm函数会弹出框让用户选择确定和取消，确定返回true，反之
		alert("选择");
	else
		alert("不选择");
}

function SelectInput()
{
	var score = prompt("请输入成绩成绩","默认数据");//prompt函数参数1是显示数据，2是默认文本框数据，返回用户输入
	if (score > 80)
		alert("棒棒哒");
	else
		alert("加油啊");
}

function OpenWindow()
{
	    window.open('http://www.imooc.com','_blank','height=600,width=400,top=100,left=0');  //这个函数打开一个新窗口
		//第一个参数网址，第二个       _blank：在新窗口显示目标网页 _self：在当前窗口显示目标网页 _top：框架网页中在上部窗口中显示目标网页
		//window.close()或者窗口对象.close()关闭。窗口对象是window.open付的置。
}

//document.getElementById(“id”) 通过id获取元素
//Object.innerHTML代表获取的元素内容，Object是通过id获取的对象，这个属性可以被赋值。
//Object.style.backgroundColor ="blue";通过对象更改属性值
//Object.style.display =none，block设置是否显示空间
//object.className = classname//此方法替换class css属性