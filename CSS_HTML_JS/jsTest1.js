var string="i love";  //��������������ÿһ��֮���зֺ�
//var myarr=new Array();��������
//���鴴��var myarray = new Array(66,80,90,77,59);//��������ͬʱ��ֵ
//var myarray = [66,80,90,77,59];//ֱ������һ�����飨�� �����������顱��
//myarray.length;��ȡ���ȣ����ȸ������һλ��ֵ����ȷ����Ҫ�Ǹ�length��ֵ��ֵ�����Ǹ�

//var Udate=new Date(); 
//var d = new Date(2012, 10, 1);  //2012��10��1��
//var d = new Date('Oct 1, 2012'); //2012��10��1�գ���һ�ַ�����ȡϵͳʱ�䣬�������Լ���ֵ

//�ַ���
//stringObject.charAt(index)//����ĳλ�õ��ַ�
//stringObject.indexOf(substring, startpos)//Ѱ���ִ��״γ���λ��
//stringObject.split(separator,limit)//�ָ��ַ������������飬��һ���Ƿָ����ݣ��ڶ����Ƿָ������С����
//stringObject.substring(startPos,stopPos) //��ȡ�����±�֮���ַ���//n,m-1֮��ģ�
//stringObject.substr(startPos,length)//��ʼλ�õ�ָ�����ȵ��Ӵ�
document.write(string);
document.write("javascript");  //js��������������������html����
document.write(string + "javascript");

if(7>=5)  //if-else���
{
	document.write("7>5");
}
else
{
	document.write("5>7");	
}

function clickOutput()
{
	//document.write("����ɹ�");
	//alert("����ɹ�");   //�����Ի���ֻ��ȷ��
	if(confirm("����һ��ѡ�����") == true)  //confirm�����ᵯ�������û�ѡ��ȷ����ȡ����ȷ������true����֮
		alert("ѡ��");
	else
		alert("��ѡ��");
}

function SelectInput()
{
	var score = prompt("������ɼ��ɼ�","Ĭ������");//prompt��������1����ʾ���ݣ�2��Ĭ���ı������ݣ������û�����
	if (score > 80)
		alert("������");
	else
		alert("���Ͱ�");
}

function OpenWindow()
{
	    window.open('http://www.imooc.com','_blank','height=600,width=400,top=100,left=0');  //���������һ���´���
		//��һ��������ַ���ڶ���       _blank�����´�����ʾĿ����ҳ _self���ڵ�ǰ������ʾĿ����ҳ _top�������ҳ�����ϲ���������ʾĿ����ҳ
		//window.close()���ߴ��ڶ���.close()�رա����ڶ�����window.open�����á�
}

//document.getElementById(��id��) ͨ��id��ȡԪ��
//Object.innerHTML�����ȡ��Ԫ�����ݣ�Object��ͨ��id��ȡ�Ķ���������Կ��Ա���ֵ��
//Object.style.backgroundColor ="blue";ͨ�������������ֵ
//Object.style.display =none��block�����Ƿ���ʾ�ռ�
//object.className = classname//�˷����滻class css����