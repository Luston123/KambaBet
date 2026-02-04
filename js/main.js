
const playBtn = document.getElementById('playBtn');
const result = document.getElementById('result');
const rankingList = document.getElementById('rankingList');

// Simulação de ranking inicial
let ranking = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 30 },
    { name: 'Carlos', score: 20 }
];

function updateRanking() {
    rankingList.innerHTML = '';
    ranking.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name} - ${player.score} pontos`;
        rankingList.appendChild(li);
    });
}

playBtn.addEventListener('click', () => {
    const points = Math.floor(Math.random() * 100) + 1;
    result.textContent = `Você ganhou ${points} pontos!`;
    
    // Adiciona jogador fictício ao ranking
    ranking.push({ name: 'Você', score: points });
    ranking.sort((a,b) => b.score - a.score); // Ordena por score
    if (ranking.length > 5) ranking.pop(); // Mantém top 5
    updateRanking();
});

updateRanking();
