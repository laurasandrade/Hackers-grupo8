class ClienteController {

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputNome = $("#nome");
		this._inputEmail = $("#email");		
		this._inputContratante = $("#contratante");	
		this._inputAnalise = $('#FormControlTextarea1');
		this._inputLidar = $('#FormControlTextarea2');
		this._inputSolucao = $('#FormControlTextarea3');
	}

	adiciona(event) {
		event.preventDefault();

		let cliente = new Cliente(
			this._inputNome.value,
			this._inputEmail.value,
			this._inputContratante.value,
			this._inputAnalise.value,
			this._inputLidar.value,
			this._inputSolucao.value
			);

		// console.log(cliente);
		if(cliente !== undefined) {
			let cont = cliente.nome.split(" ");
			if(cont.length < 2){
				alert("Insira seu nome completo")
			}else{
				//converter JSON cliente em uma string
				let stringCliente = JSON.stringify(cliente);

				//salvar no local storage
				window.localStorage.setItem('cliente', stringCliente);

				//Resgatando o dado
				let localCliente = window.localStorage.getItem('cliente', stringCliente);
				console.log(localCliente);

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
}