class Cliente {
	constructor(nome,email,contratante,analise,lidar,solucao,telefone,ip,data) {
		this._nome = nome;
		this._email = email;
		this._contratante = contratante;
		this._analise = analise;
		this._lidar = lidar;
		this._solucao = solucao;
		this._telefone = telefone;
		this._ip = ip;
		this._data = data;
		Object.freeze(this);
	}

	get nome() {
		return this._nome;
	}

	get email() {
		return this.email;
	}

	get contratante() {
		return this.contratante;
	}

	get analise() {
		return this._analise;
	}

	get lidar() {
		return this._lidar;
	}

	get solucao() {
		return this._solucao;
	}

	get telefone(){
		return this._telefone;
	}

	get ip() {
		return this._ip;
	}
	get data() {
		return this._data;
	}


}