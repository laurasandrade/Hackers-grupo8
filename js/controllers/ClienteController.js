class ClienteController {

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputNome = $("#nome");
		this._inputEmail = $("#email");		
		this._inputContratante = $("#perfil");	
		this._inputAnalise = $('#FormControlTextarea1');
		this._inputLidar = $('#FormControlTextarea2');
		this._inputSolucao = $('#FormControlTextarea3');
		this._ip =this.pegaIPCliente();
	}

	adiciona(event) {
		event.preventDefault();
		console.log(this._ip);
	
		let cliente = new Cliente(
			this._inputNome.value,
			this._inputEmail.value,
			this._inputContratante.value,
			this._inputAnalise.value,
			this._inputLidar.value,
			this._inputSolucao.value,
			this._ip
		);

		console.log(cliente);
		if(cliente !== undefined) {
			let cont = cliente.nome.split(" ");
			if(cont.length < 2){
				alert("Insira seu nome completo")
			}else{
				//converter JSON cliente em uma string
				let stringCliente = JSON.stringify(cliente);

				//salvar no local storage
				// window.localStorage.setItem('cliente', stringCliente);

				// //Resgatando o dado
				// let localCliente = window.localStorage.getItem('cliente', stringCliente);
				// console.log(localCliente);
				
				this.enviaDados(stringCliente);


				//Construção div de sucesso
				let div = document.getElementById("success");
				let conteudo = document.createTextNode("Cadastro Realizado com Sucesso!");
				let elemento = document.createElement("div");
				elemento.appendChild(conteudo);
				elemento.setAttribute("class", "success");
				div.appendChild(elemento); 	
			}
		}else {
			console.log("erro");
		}
	}

	enviaDados(dadosForm){
		function reqListener () {
	  		console.log(this.responseText);
		};

		let httpRequest = new XMLHttpRequest();

		let url = "https://landingpageii-3048a.firebaseio.com/cliente.json"; 
		httpRequest.onload = reqListener;
		httpRequest.open("post", url,false);
		httpRequest.setRequestHeader("Content-Type", "application/json");
		httpRequest.send(dadosForm);
		
	}


	pegaIPCliente() {
		var xmlhttp = new XMLHttpRequest();
  		xmlhttp.open("GET", 'http://meuip.com/api/meuip.php');
  		xmlhttp.send();
  		xmlhttp.onload = function(e) {
  		    return xmlhttp.response;
	}
 }
}