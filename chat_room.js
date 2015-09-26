function masukCroom(){
	if(!((localStorage.name === 'admin1' && localStorage.pass === '123') ||
		 (localStorage.name === 'admin2' && localStorage.pass === '123') ||
		 (localStorage.name === 'admin3' && localStorage.pass === '123')
		))
		window.location = "./login.html";
	//tampilkan pengguna
	var pengguna = localStorage.name;
	var pengguna_html = "<li id='p_"+pengguna+"'>"+pengguna+"</li>";
	document.getElementById('pengguna').innerHTML += pengguna_html;

	//tampilkan chat
	document.getElementById('chatboard').innerHTML = localStorage.chat;

	//tampilkan penghapus chat, cek kondisi setiap 3 detik
	setInterval(function(){
		var hitung = document.getElementById('chatboard').innerHTML;
		if(hitung.length > 0)
			document.getElementById('removechat').style.display = "inline-block";
		else{
			document.getElementById('removechat').style.display = "none";
		}
	},3000);
}

function hapuschat(){
	document.getElementById('chatboard').innerHTML = null;
	document.getElementById('removechat').style.display = "none";
	localStorage.chat = "";
}

function keluar(){
	var pengguna = document.getElementById('pengguna');
	var hapus = document.getElementById('p_'+localStorage.name);
	pengguna.removeChild(hapus);
	delete localStorage.name;
	delete localStorage.pass;
	window.location = './login.html';
}
function enter(e,  textarea){
	var kode_ketik = (e.keyCode ? e.keyCode : e.which);
	if(kode_ketik == 13){
		var isi_chat = document.getElementById('isi_chat').value;
		localStorage.chat += "<li id='c_"+localStorage.name+"'><p>"+isi_chat+"</p></li>";
		document.getElementById('chatboard').innerHTML = localStorage.chat;
		document.getElementById('isi_chat').value = null;

	}
}
