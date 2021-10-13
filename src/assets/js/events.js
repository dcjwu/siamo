const nextEvent = document.querySelector('.events__main')

const gameTypes = document.querySelectorAll('.event__type').forEach((gameType) => {
    gameType.addEventListener('click', e => {
        e.preventDefault()
        if (gameType.innerText === 'Basketball') {
            nextEvent.innerHTML = ''
            nextEvent.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./assets/images/basketball.png" class="img-fluid rounded-start" alt="Next Event">
                        </div>
                    <div class="col-md-8 card__main">
                        <div class="card-body">
                            <h5 class="card-title card__name">Basketball</h5>
                            <h5 class="card-title card__loc">Riga, Latvia (18:00) | 10 EUR</h5>
                            <p class="card-text card__desc">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>
                            <p class="card-text card__subt"><small class="text-muted">Number of Participants: 55 out of 100</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else if (gameType.innerHTML === 'Football') {
            nextEvent.innerHTML = ''
            nextEvent.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./assets/images/football.png" class="img-fluid rounded-start" alt="Next Event">
                        </div>
                    <div class="col-md-8 card__main">
                        <div class="card-body">
                            <h5 class="card-title card__name">Football</h5>
                            <h5 class="card-title card__loc">Riga, Latvia (20:00) | 5 EUR</h5>
                            <p class="card-text card__desc">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>
                            <p class="card-text card__subt"><small class="text-muted">Number of Participants: 70 out of 100</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else if (gameType.innerHTML === 'Table Tennis') {
            nextEvent.innerHTML = ''
            nextEvent.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./assets/images/tabletennis.png" class="img-fluid rounded-start" alt="Next Event">
                        </div>
                    <div class="col-md-8 card__main">
                        <div class="card-body">
                            <h5 class="card-title card__name">Table Tennis</h5>
                            <h5 class="card-title card__loc">Riga, Latvia (20:00) | FREE </h5>
                            <p class="card-text card__desc">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>
                            <p class="card-text card__subt"><small class="text-muted">Number of Participants: 70 out of 100</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else if (gameType.innerHTML === 'Snooker') {
            nextEvent.innerHTML = ''
            nextEvent.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./assets/images/snooker.png" class="img-fluid rounded-start" alt="Next Event">
                        </div>
                    <div class="col-md-8 card__main">
                        <div class="card-body">
                            <h5 class="card-title card__name">Snooker</h5>
                            <h5 class="card-title card__loc">Riga, Latvia (18:00) | 500 EUR</h5>
                            <p class="card-text card__desc">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>
                            <p class="card-text card__subt"><small class="text-muted">Number of Participants: 70 out of 100</small></p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
     })
})