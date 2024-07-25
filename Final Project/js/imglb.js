function lunbo() {
    var a = document.getElementById("img_a");
    var img = document.getElementById("img");
    var word = document.getElementById("word");
    var i = 0; 

    setInterval(function() {
        i++;
        if (i == 1) {
            a.href = "manhua.html";
            img.src = "img/family.jpg";
            word.textContent = "漫威漫画";
        } else if (i == 2) {
           a.href = "mwsn.html";
           img.src = "img/family3.jpg";
           word.textContent = "漫威十年";
        } else {
            i = 0;
        }
    }, 1000); 
}

window.onload = function() {
    lunbo(); 
};

function golog(){
	window.location.href="log.html";
}
function goreg(){
	window.location.href="reg.html";
}


function log(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	if(username==" "||pwd==" ")
	{
		alert("输入不能为空!");
		return false;
	}
	if(localStorage.getItem("uname"))
	{
		var uname=localStorage.getItem("uname").toString();
		var pass=localStorage.getItem("pwd").toString();
		if(username==uname)
		{
			if(pwd==pass)
			{
				sessionStorage.setItem("username",uname);
				alert("登陆成功!");
				window.location.href="index.html";
			}
			else
			{
				alert("输入的密码不正确!");
			}
		}
		else
		{
			alert("输入的用户名有误!");
		}
	}
	else
	{
		alert("请先注册!");
	}
}

function reg(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	var repwd=document.getElementById("repassword").value;
	if(username==" ")
	{
		alert("用户名不能为空");
		return false;
	}
	if(pwd==" "||repwd==" ")
	{
		alert("密码不能为空");
		return false;
	}
	if(pwd!=repwd)
	{
		alert("两次密码不一致");
		return false;
	}
	
	localStorage.setItem("uname",username);
	localStorage.setItem("pwd",pwd);
	alert("注册成功");
	window.location.href="log.html";
}