<<<<<<< HEAD
function Mario() {
    this.hp = 15;

    this.primaryAttack = function(target) {
        target.hp = target.hp - 2;
    };

    this.specialAttack = function(target) {
        if (target.spikey == true) {
            this.hp = 0;
        } else {
            target.hp = target.hp - 20;
        }
    };
}


function Enemy(level) {
    this.hp = level * 10;

    this.primaryAttack = function(target) {
        target.hp = target.hp - (10 + level / 4);
    };

    this.specialAttack = function(target) {
        target.hp = target.hp - 10;
        this.hp = this.hp + 10;
    };
}

var enemyLevel = 1;

$('.choose-mario').click(function() {
    player = new Mario();
    enemy = new Enemy(enemyLevel);

    $('.choices').remove();
    $('.battle-menu').addClass('active');

    renderPlayerInfo(player);
    renderEnemyInfo(enemy);

});

function renderPlayerInfo(player) {
    if (player.hp < 1) {
      showGameOver();
    } else {
      $('.player-info').html("Player has " + player.hp + "hp");
    }
=======


var battle = function() {
  $('.choices').remove();
  $('.battle-menu').addClass('active');
  $('.battle-menu-h1').html(player.nameOf + "<br> Challenges <br>" + enemy.nameOf);

  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
};

var enemyLevel = 1;

$('.choose-Kahless').click(function() {
  player = new Kahless();
  enemy = new Molor();

  battle();
});

$('.choose-Chang').click(function() {
  player = new GeneralChang();
  enemy = new Kirk(enemyLevel);

  battle();
});

$('.choose-Dax').click(function() {
  player = new Dax();
  enemy = new Janeway();
  // enemy = new Molor(enemyLevel);

  battle();
});

function renderPlayerInfo(player) {
  if (player.hp < 1) {
    showGameOver();
  } else {
      $('.player-info').html(player.nameOf + " has " + player.hp + "hp");
  }
>>>>>>> 5e1ec7ad4415fdcc0a328bf9388e91c787beaa24
}

function renderEnemyInfo(enemy) {
  if (enemy.hp < 1) {
<<<<<<< HEAD
    $('.enemy-info').html("<span class='red'>Enemy has dead</span>");
  } else {
    $('.enemy-info').html("Enemy has " + enemy.hp + "hp");
=======
    $('.player-info').html("<span class='green'>You win!</span>");
    $('.enemy-info').html("<span class='red'>Enemy has been slain</span>");
    $('.status').remove();


  } else {
      $('.enemy-info').html( enemy.nameOf + " has " + enemy.hp + "hp");
>>>>>>> 5e1ec7ad4415fdcc0a328bf9388e91c787beaa24
  }
}

$('.primary').click(function() {
  player.primaryAttack(enemy);
<<<<<<< HEAD
  $('.status').html('You attack!');
=======
  $('.status').html('You attack ' + enemy.nameOf + '!');
>>>>>>> 5e1ec7ad4415fdcc0a328bf9388e91c787beaa24
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);

  triggerEnemyAttack(player);

});

$('.special').click(function() {
  player.specialAttack(enemy);
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);

  triggerEnemyAttack();
});

function showGameOver() {
  $('.game-over').addClass('active');
}


function triggerEnemyAttack() {
  setTimeout(function() {
    if (Math.floor(Math.random() * 10) > 6) {
      enemy.specialAttack(player);
<<<<<<< HEAD
      $('.status').html('Enemy special attack!');
    } else {
      enemy.primaryAttack(player);
      $('.status').html('Enemy attack!');
=======
      $('.status').html( enemy.nameOf + ' special attack!');
    } else {
      enemy.primaryAttack(player);
      $('.status').html( enemy.nameOf + ' attacked you!');
>>>>>>> 5e1ec7ad4415fdcc0a328bf9388e91c787beaa24
    }

    renderPlayerInfo(player);
    renderEnemyInfo(enemy);
<<<<<<< HEAD
  }, 2000);
}

//////////////
// CLASS NOTES
//////////////
  function exampleFunction (){
    console.log('wow');
  }
  
  $('.button').click( exampleFunction )









=======
  }, 1000);
}

>>>>>>> 5e1ec7ad4415fdcc0a328bf9388e91c787beaa24


// 