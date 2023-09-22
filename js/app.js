window.addEventListener('DOMContentLoaded', () => {

    var turn = 1;
    const customSquareList = document.querySelectorAll('.custom-square');
    const turnSpan = document.querySelector('#turn');
    turnSpan.innerText = 'Player 1 (X)';
    turnSpan.classList.add('text-info');

    const cell1 = document.querySelector('#c1');
    const cell2 = document.querySelector('#c2');
    const cell3 = document.querySelector('#c3');

    const cell4 = document.querySelector('#c4');
    const cell5 = document.querySelector('#c5');
    const cell6 = document.querySelector('#c6');

    const cell7 = document.querySelector('#c7');
    const cell8 = document.querySelector('#c8');
    const cell9 = document.querySelector('#c9');

    customSquareList.forEach(item => {
        item.addEventListener('click', () => {
            if (turn % 2 === 1) {
                item.innerText = 'X';
                turn++;
                item.disabled = true;
                turnSpan.innerText = 'Player 2 (O)';
                turnSpan.classList.remove('text-info')
                turnSpan.classList.add('text-danger')
            } else {
                item.innerText = 'O';
                turn++;
                item.disabled = true;
                turnSpan.innerText = 'Player 1 (X)';
                turnSpan.classList.remove('text-danger')
                turnSpan.classList.add('text-info')
            }

            if ((cell1.innerText === 'X' && cell2.innerText === 'X' && cell3.innerText === 'X') || (cell1.innerText === 'O' && cell2.innerText === 'O' && cell3.innerText === 'O')) {
                cell1.classList.add('bg-danger', 'text-white');
                cell2.classList.add('bg-danger', 'text-white');
                cell3.classList.add('bg-danger', 'text-white');
                if (cell1.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();


            } else if ((cell4.innerText === 'X' && cell5.innerText === 'X' && cell6.innerText === 'X') || (cell4.innerText === 'O' && cell5.innerText === 'O' && cell6.innerText === 'O')) {
                cell4.classList.add('bg-danger', 'text-white');
                cell5.classList.add('bg-danger', 'text-white');
                cell6.classList.add('bg-danger', 'text-white');

                if (cell4.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if ((cell7.innerText === 'X' && cell8.innerText === 'X' && cell9.innerText === 'X') || (cell7.innerText === 'O' && cell8.innerText === 'O' && cell9.innerText === 'O')) {
                cell7.classList.add('bg-danger', 'text-white');
                cell8.classList.add('bg-danger', 'text-white');
                cell9.classList.add('bg-danger', 'text-white');

                if (cell7.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if ((cell1.innerText === 'X' && cell4.innerText === 'X' && cell7.innerText === 'X') || (cell1.innerText === 'O' && cell4.innerText === 'O' && cell7.innerText === 'O')) {
                cell1.classList.add('bg-danger', 'text-white');
                cell4.classList.add('bg-danger', 'text-white');
                cell7.classList.add('bg-danger', 'text-white');

                if (cell1.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if ((cell2.innerText === 'X' && cell5.innerText === 'X' && cell8.innerText === 'X') || (cell2.innerText === 'O' && cell5.innerText === 'O' && cell8.innerText === 'O')) {
                cell2.classList.add('bg-danger', 'text-white');
                cell5.classList.add('bg-danger', 'text-white');
                cell8.classList.add('bg-danger', 'text-white');

                if (cell2.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if ((cell3.innerText === 'X' && cell6.innerText === 'X' && cell9.innerText === 'X') || (cell3.innerText === 'O' && cell6.innerText === 'O' && cell9.innerText === 'O')) {
                cell3.classList.add('bg-danger', 'text-white');
                cell6.classList.add('bg-danger', 'text-white');
                cell9.classList.add('bg-danger', 'text-white');

                if (cell3.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if ((cell1.innerText === 'X' && cell5.innerText === 'X' && cell9.innerText === 'X') || (cell1.innerText === 'O' && cell5.innerText === 'O' && cell9.innerText === 'O')) {
                cell1.classList.add('bg-danger', 'text-white');
                cell5.classList.add('bg-danger', 'text-white');
                cell9.classList.add('bg-danger', 'text-white');

                if (cell1.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if ((cell3.innerText === 'X' && cell5.innerText === 'X' && cell7.innerText === 'X') || (cell3.innerText === 'O' && cell5.innerText === 'O' && cell7.innerText === 'O')) {
                cell3.classList.add('bg-danger', 'text-white');
                cell5.classList.add('bg-danger', 'text-white');
                cell7.classList.add('bg-danger', 'text-white');

                if (cell3.innerText === 'X') {
                    showAlert('Player 1 Win', 'bg-success')
                } else {
                    showAlert('Player 2 Win', 'bg-success')
                }
                disabledAll();
                playAgain();
            } else if (cell1.innerHTML !== '' && cell2.innerHTML !== '' && cell3.innerHTML !== '' && cell4.innerHTML !== '' && cell5.innerHTML !== '' && cell6.innerHTML !== '' && cell7.innerHTML !== '' && cell8.innerHTML !== '' && cell9.innerHTML !== '') {
                customSquareList.forEach(item => {
                    item.classList.add('bg-warning', 'text-white');
                })
                showAlert('Match Drawn !', 'bg-warning');
                playAgain();
            }
        })

    });

    const disabledAll = () => {
        customSquareList.forEach(item => {
            item.disabled = true;
        })
    }
    const showAlert = (msg, background) => {
        const div = document.createElement('div');
        div.classList.add('alert', 'alert-danger', background, 'text-white', 'custom-alert', 'alert-dismissible', 'fade', 'show');
        div.innerHTML = msg + '<button type="button" class="btn-close" style="filter:invert(100%)" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.querySelector('body').appendChild(div);

    }

    const playAgain = () => {
        const h3 = document.createElement('h3');
        const a = document.createElement('a');
        a.href = 'index.html';
        h3.classList.add('text-primary', 'text-center', 'mt-3');
        a.innerText = 'Play Again';
        h3.appendChild(a);
        document.querySelector('body').appendChild(h3);
    }

});

