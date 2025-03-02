document.addEventListener('DOMContentLoaded', function () {
    let dead = 0;
    let lost = 0;
    const deadDisplay = document.getElementById('dead');
    const lostDisplay = document.getElementById('lost');
    const holes = document.querySelectorAll('.hole');

    function getHole(i) {
        return document.getElementById(`hole${i}`);
    }

    function whackMole(e) {
        if (e.target.classList.contains('hole_has-mole')) {
            deadDisplay.textContent = ++dead;
        } else {
            lostDisplay.textContent = ++lost;
        }

        if ( dead === 10) {
            endGame('Победа! Вы победили кротов!');
        } else if (lost === 5) {
            endGame('Игра окончена! Вы проиграли.');
        }
    }

    function endGame(message) {
        alert(message);
        dead = 0;
        lost = 0;
        deadDisplay.textContent = dead;
        lostDisplay.textContent = lost;
    }

    holes.forEach((hole, index) => {
        hole.addEventListener('click', whackMole);
    });
});