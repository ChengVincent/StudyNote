
document.write('<script language="javascript" src="animation.js"></script>');


/*
�趨�¼�
*/
window.onload = function(){
	var oDiv1 = document.getElementById("div1");  //�ƶ��¼�
	oDiv1.onmouseover = function(){
		startMove(oDiv1,{left:0},30);
	}
	oDiv1.onmouseout = function(){
		startMove(oDiv1,{left:-200},30);
	}

	var oDiv2 = document.getElementById("div2");  //�ƶ��¼�
	oDiv2.onmouseover = function(){
		startMove(oDiv2,{height:400},30,function(){
			startMove(oDiv2,{width:400},30,function(){
				startMove(oDiv2,{opacity:100},30)
			})
		})
	}

	oDiv2.onmouseout = function(){
		startMove(oDiv2,{opacity:30},30,function(){
			startMove(oDiv2,{width:200},30,function(){
				startMove(oDiv2,{height:200},30)
			})
		})
	}
		
	// var oDiv2 = document.getElementById("div2");  //ǳɫ�¼�
	// oDiv2.onmouseover = function(){
		// startMove2();
	// }
	// oDiv2.onmouseout = function(){
		// startMoveOut2();
	// }		
}
