// ////////////////
// ///////  KAHLESS
// ////////////////
function Kahless() {
	this.nameOf = "Kahless";
	this.species = "Klingon";
	this.hp = 100;

	this.primaryAttack = function(target) {
		target.hp = target.hp - 5;
	};

	this.specialAttack = function(target) {
		if (target.species == "Human") {
			target.hp = 0;
		} else if (Math.floor(Math.random() * 10) > 5) {
			target.hp = target.hp - 5;
		} else {
			target.hp = target.hp - 3;
		}
	};
}


// ////////////////
// /////////  CHANG
// ////////////////
function GeneralChang() {
	this.nameOf = "General Chang"
	this.species = "Klingon";
	this.hp = 100;

	this.primaryAttack = function(target) {
		target.hp = target.hp - 4;
	};

	this.specialAttack = function(target) {
		if (target.species == "Klingon") {
			target.hp = target.hp - 0;
		}
		if (target.species == "Human") {
			target.hp = 0;
		} else {
			target.hp = target.hp - 6;
		}
	};
}

// ////////////////
// ///////////  DAX
// ////////////////
function Dax() {
	this.nameOf = "Curzon Dax"
	this.species = "Trill";
	this.hp = 100;

	this.primaryAttack = function(target) {
		target.hp = target.hp - 4;
	};

	this.specialAttack = function(target) {
		if (target.species == "Klingon") {
			target.hp = target.hp - 14;
		} else {
			target.hp = target.hp - 6;
		}
	};
}

function Kirk() {
	this.nameOf = "James R. Kirk"
	this.species = "Human";
	this.hp = 100;

	this.primaryAttack = function(target) {
		if (target.species == "Klingon") {
			target.hp = target.hp - 1;
		} else {
			target.hp = target.hp - 3;
		}
	};

	this.specialAttack = function(target) {
		if (target.species == "Klingon") {
			target.hp = target.hp - 1;
		} else {
			target.hp = target.hp - 6;
		}
	};
}

function Janeway() {
	this.nameOf = "Kathryn Janeway"
	this.species = "Human";
	this.hp = 100;

	this.primaryAttack = function(target) {
		if (target.species == "Klingon") {
			target.hp = target.hp - 1;
		} else {
			target.hp = target.hp - 10;
		}
	};

	this.specialAttack = function(target) {
		if (target.species == "Klingon") {
			target.hp = target.hp - 1;
		} else {
			target.hp = target.hp - 15;
		}
	};
}

// ////////////////
// /////////  MOLOR
// ////////////////
function Molor(level) {
	this.species = "Klingon";
	this.hp = level * 100;

	this.primaryAttack = function(target) {
		target.hp = target.hp - 2;
	};

	this.specialAttack = function(target) {
		target.hp = target.hp - 5;
		// this.hp = this.hp + 2;
	};
}