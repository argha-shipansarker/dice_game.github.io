// html elements

const roll_button = document.querySelector('#roll-button');

// game variables

const ludu = {
    riya: null,
    bot: null,
    riya_score: 0,
    bot_score: 0,
    is_game_live: true,
    winner: null,
}

const roll_sound = new Audio('sounds/dice_roll.wav');


// Event Handlers

const roll_button_funtion = (value) => {
    ludu.riya = Math.ceil(Math.random()*6);
    ludu.bot = Math.ceil(Math.random()*6);
    dice_image_delete_function();
    dice_image_show_function();
    winner_calculate_function(ludu.riya, ludu.bot);
    show_result_value_funtion();
    show_result_notice_funtion();
    roll_sound.play();
}

const dice_image_delete_function = () => {
    let image_parant = document.querySelector('.dice-image-show');

    let riya_image_delete = document.querySelector('#riya-image');
    let bot_image_delete = document.querySelector('#bot-image');
    image_parant.removeChild(riya_image_delete);
    image_parant.removeChild(bot_image_delete);
}

const dice_image_show_function = () => {

    let image_parant = document.querySelector('.dice-image-show');
    let riya_image = document.createElement('img');
    let bot_image = document.createElement('img');
    riya_image.setAttribute('src', `/images/dice${ludu.riya}.png`)
    riya_image.setAttribute('id', 'riya-image');
    image_parant.appendChild(riya_image);
    bot_image.src = `/images/dice${ludu.bot}.png`;
    bot_image.id = 'bot-image';
    image_parant.appendChild(bot_image);
}

const winner_calculate_function = (riya, bot) => {
    if(riya > bot){
        ludu.riya_score++;
        ludu.winner = 'Congratulations PRINCESS!!!';
    }else if(bot > riya){
        ludu.bot_score++;
        ludu.winner = 'FORGIVE ME, Riya';
    }else{
        ludu.winner = 'THANKS GOD , ITS A DRAW';
    }
}

const show_result_value_funtion = () => {
    document.querySelector('#riya-score').textContent = ludu.riya_score;
    document.querySelector('#bot-score').textContent = ludu.bot_score;
}

const show_result_notice_funtion = () => {
    if(!ludu.is_game_live){
        document.querySelector('#result-notice').removeChild(document.querySelector('#notice'));
    }
    let notice = document.createElement('h1');
    notice.textContent = ludu.winner;
    notice.id = 'notice';
    document.querySelector('#result-notice').appendChild(notice);
    console.log(ludu.winner);
    ludu.is_game_live = false;
}


// Event listeners

roll_button.addEventListener('click', roll_button_funtion);
