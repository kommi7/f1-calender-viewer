// Static 2026 F1 data (replace with API fetch later)
const races = [
    { round: 1, name: 'Australian Grand Prix', circuit: 'Albert Park', location: 'Melbourne, Australia', date: '2026-03-06T00:00:00Z' }, // Dates are start of weekend, ISO format for easy parsing
    { round: 2, name: 'Chinese Grand Prix', circuit: 'Shanghai International Circuit', location: 'Shanghai, China', date: '2026-03-13T00:00:00Z' },
    { round: 3, name: 'Japanese Grand Prix', circuit: 'Suzuka', location: 'Suzuka, Japan', date: '2026-03-27T00:00:00Z' },
    { round: 4, name: 'Bahrain Grand Prix', circuit: 'Bahrain International Circuit', location: 'Sakhir, Bahrain', date: '2026-04-10T00:00:00Z' },
    { round: 5, name: 'Saudi Arabian Grand Prix', circuit: 'Jeddah Corniche Circuit', location: 'Jeddah, Saudi Arabia', date: '2026-04-17T00:00:00Z' },
    { round: 6, name: 'Miami Grand Prix', circuit: 'Miami International Autodrome', location: 'Miami, USA', date: '2026-05-01T00:00:00Z' },
    { round: 7, name: 'Grand Prix du Canada', circuit: 'Circuit Gilles Villeneuve', location: 'Montreal, Canada', date: '2026-05-22T00:00:00Z' },
    { round: 8, name: 'Grand Prix de Monaco', circuit: 'Circuit de Monaco', location: 'Monaco', date: '2026-06-05T00:00:00Z' },
    { round: 9, name: 'Gran Premio de Barcelona-Catalunya', circuit: 'Circuit de Barcelona-Catalunya', location: 'Barcelona, Spain', date: '2026-06-12T00:00:00Z' },
    { round: 10, name: 'Austrian Grand Prix', circuit: 'Red Bull Ring', location: 'Spielberg, Austria', date: '2026-06-26T00:00:00Z' },
    { round: 11, name: 'British Grand Prix', circuit: 'Silverstone', location: 'Silverstone, Great Britain', date: '2026-07-03T00:00:00Z' },
    { round: 12, name: 'Belgian Grand Prix', circuit: 'Spa-Francorchamps', location: 'Spa, Belgium', date: '2026-07-17T00:00:00Z' },
    { round: 13, name: 'Hungarian Grand Prix', circuit: 'Hungaroring', location: 'Budapest, Hungary', date: '2026-07-24T00:00:00Z' },
    { round: 14, name: 'Dutch Grand Prix', circuit: 'Circuit Zandvoort', location: 'Zandvoort, Netherlands', date: '2026-08-21T00:00:00Z' },
    { round: 15, name: 'Gran Premio d’Italia', circuit: 'Autodromo Nazionale Monza', location: 'Monza, Italy', date: '2026-09-04T00:00:00Z' },
    { round: 16, name: 'Gran Premio de España', circuit: 'Madrid Street Circuit', location: 'Madrid, Spain', date: '2026-09-11T00:00:00Z' }, // Assuming new Madrid track
    { round: 17, name: 'Azerbaijan Grand Prix', circuit: 'Baku City Circuit', location: 'Baku, Azerbaijan', date: '2026-09-24T00:00:00Z' },
    { round: 18, name: 'Singapore Grand Prix', circuit: 'Marina Bay Street Circuit', location: 'Singapore', date: '2026-10-09T00:00:00Z' },
    { round: 19, name: 'United States Grand Prix', circuit: 'Circuit of the Americas', location: 'Austin, USA', date: '2026-10-23T00:00:00Z' },
    { round: 20, name: 'Gran Premio de la Ciudad de México', circuit: 'Autódromo Hermanos Rodríguez', location: 'Mexico City, Mexico', date: '2026-10-30T00:00:00Z' },
    { round: 21, name: 'Grande Prêmio de São Paulo', circuit: 'Autódromo José Carlos Pace', location: 'São Paulo, Brazil', date: '2026-11-06T00:00:00Z' },
    { round: 22, name: 'Las Vegas Grand Prix', circuit: 'Las Vegas Street Circuit', location: 'Las Vegas, USA', date: '2026-11-19T00:00:00Z' },
    { round: 23, name: 'Qatar Grand Prix', circuit: 'Lusail International Circuit', location: 'Lusail, Qatar', date: '2026-11-27T00:00:00Z' },
    { round: 24, name: 'Abu Dhabi Grand Prix', circuit: 'Yas Marina Circuit', location: 'Abu Dhabi, UAE', date: '2026-12-04T00:00:00Z' }
];

// Function to render races
function renderRaces(filteredRaces) {
    const container = document.getElementById('races-container');
    container.innerHTML = '';
    filteredRaces.forEach(race => {
        const now = new Date();
        const raceDate = new Date(race.date);
        const status = raceDate > now ? 'upcoming' : 'past';
        const countdown = status === 'upcoming' ? `Starts in: ${Math.ceil((raceDate - now) / (1000 * 60 * 60 * 24))} days` : 'Completed';

        const card = document.createElement('div');
        card.classList.add('race-card', status);
        card.innerHTML = `
            <h2>Round ${race.round}: ${race.name}</h2>
            <p>Circuit: ${race.circuit}</p>
            <p>Location: ${race.location}</p>
            <p>Date: ${new Date(race.date).toLocaleDateString()}</p>
            <p class="details">${countdown}. Click for more (e.g., map or winners if past).</p>
        `;
        card.addEventListener('click', () => {
            const details = card.querySelector('.details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
        container.appendChild(card);
    });
}

// Initial render
renderRaces(races);

// Search and filter logic
document.getElementById('search').addEventListener('input', filterRaces);
document.getElementById('filter').addEventListener('change', filterRaces);

function filterRaces() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filterValue = document.getElementById('filter').value;
    const now = new Date();

    let filtered = races.filter(race => 
        (race.location.toLowerCase().includes(searchTerm) || race.circuit.toLowerCase().includes(searchTerm))
    );

    if (filterValue === 'upcoming') {
        filtered = filtered.filter(race => new Date(race.date) > now);
    } else if (filterValue === 'past') {
        filtered = filtered.filter(race => new Date(race.date) <= now);
    }

    renderRaces(filtered);
}

// Bonus: Fetch from API (uncomment when ready)
fetch('https://ergast.com/api/f1/2026.json')
     .then(response => response.json())
     .then(data => {
         // Parse MRData.RaceTable.Races into races array format
         // e.g., races = data.MRData.RaceTable.Races.map(...)
         renderRaces(races);
     }
);