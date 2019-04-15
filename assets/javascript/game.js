var wins = 0,
    losses = 0,
    targetNumber = 0, 
    yourNumber = 0;

var game = {
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    init: function() {
        targetNumber = this.getRandomNumber(19, 120);
        yourNumber = 0;
        $('.target-number').text(targetNumber);
        $('.your-number').text(yourNumber);
        $('.fish-container').empty();
        var fish = '';
        for(var i = 1; i < 5; i++) {
            var fishValue = this.getRandomNumber(1, 12);
            fish += `<div class="col-6 col-sm-3 col-md-3 fish-col">
                                <img class="fish-img" src="assets/images/fish-${i}.jpg" data-value="${fishValue}">
                            </div>`;
        }
        $('.fish-container').append(fish);
    },
    win: function() {
        wins++;
        var result = `<div>
                        <h2 class="h1 mb-0">You Win!</h2>
                        <p class="mb-0">Starting a new game...</p>
                    </div>`;
        $('.fish-container').html(result);
        $('.win-count').text(wins);
        setTimeout(function() {
            game.init();
        }, 1200);
    },
    lose: function() {
        losses++;
        var result = `<div>
                        <h2 class="h1 mb-0">You Lose!</h2>
                        <p class="mb-0">Starting a new game...</p>
                    </div>`;
        $('.fish-container').html(result);
        $('.loss-count').text(losses);
        setTimeout(function() {
            game.init();
        }, 1200);
    }
}
game.init();

$(document).on('click', '.fish-img', function() {
    var fishValue = ($(this).attr('data-value'));
        fishValue = parseInt(fishValue);
        yourNumber += fishValue;
    $('.your-number').text(yourNumber);

    if (targetNumber === yourNumber) {
        game.win();
    }
    else if (targetNumber < yourNumber){
        game.lose();
    }
});