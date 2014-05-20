

var battle = function() {
  $('.choices').remove();
  $('.battle-menu').addClass('active');
  $('.battle-menuh1').addClass('active');

  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
}

var enemyLevel = 1;

$('.choose-Kahless').click(function() {
  player = new Kahless();
  enemy = new Kirk();

  battle();
});

$('.choose-Chang').click(function() {
  player = new GeneralChang();
  enemy = new Molor(enemyLevel);

  battle();
});

$('.choose-Dax').click(function() {
  player = new Dax();
  enemy = new Kirk();
  // enemy = new Molor(enemyLevel);

  battle();
});

function renderPlayerInfo(player) {
  if (player.hp < 1) {
    showGameOver();
  } else {
      $('.player-info').html("Player has " + player.hp + "hp");
  }
}

function renderEnemyInfo(enemy) {
  if (enemy.hp < 1) {
    $('.player-info').html("<span class='green'>You win!</span>");
    $('.enemy-info').html("<span class='red'>Enemy has been slain</span>");
    $('.status').remove();


  } else {
      $('.enemy-info').html("Enemy has " + enemy.hp + "hp");
  }
}

$('.primary').click(function() {
  player.primaryAttack(enemy);
  $('.status').html('You attack ' + enemy.nameOf + '!');
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
      $('.status').html( enemy.nameOf + ' special attack!');
    } else {
      enemy.primaryAttack(player);
      $('.status').html( enemy.nameOf + ' attacked you!');
    }

    renderPlayerInfo(player);
    renderEnemyInfo(enemy);
  }, 1000);
}



var gameOver = _.template($('.gameOverTemplate').text());

$('.game-over').append(gameOverTemplate);


// 