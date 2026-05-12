// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Create galaxy stars
    createStars();
    
    // Populate games
    populateGames();
    
    // Tab switching
    setupTabs();
    
    // Search functionality
    setupSearch();
    
    // Game search
    setupGameSearch();
    
    // Modal
    setupModal();
});

// Create animated stars
function createStars() {
    const galaxy = document.getElementById('galaxy-background');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 0.5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 2;
        
        star.style.left = left + '%';
        star.style.top = top + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animation = `twinkle ${duration}s infinite ${delay}s`;
        
        galaxy.appendChild(star);
    }
}

// Populate games grid
function populateGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    // Use games from games-data.js
    const gamesToShow = arcadeGames.slice(0, 100); // Show first 100 games
    
    gamesToShow.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-icon">${game.icon}</div>
            <div class="game-card-name">${game.name}</div>
        `;
        
        gameCard.addEventListener('click', () => {
            openGame(game);
        });
        
        gamesGrid.appendChild(gameCard);
    });
}

// Setup tab switching
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked tab
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const proxyBtn = document.getElementById('proxyBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    proxyBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            window.open(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, '_blank');
        }
    });
}

// Perform DuckDuckGo search
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (!query) {
        alert('Please enter a search query');
        return;
    }
    
    // Switch to search results tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-tab="search"]').classList.add('active');
    document.getElementById('search').classList.add('active');
    
    // Simulate search results (in a real app, you'd fetch from DuckDuckGo API)
    displaySearchResults(query);
}

// Display search results
function displaySearchResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    
    // Simulated search results
    const mockResults = [
        {
            title: `Results for "${query}" on DuckDuckGo`,
            url: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
            description: 'Click to open the full search results on DuckDuckGo'
        },
        {
            title: `"${query}" Wikipedia Results`,
            url: 'https://www.wikipedia.org',
            description: 'Search Wikipedia for more information about your query'
        },
        {
            title: `${query} - Reddit`,
            url: 'https://www.reddit.com',
            description: 'Find discussions and community posts about your search term'
        }
    ];
    
    let html = '';
    mockResults.forEach(result => {
        html += `
            <div class="search-result-item">
                <div class="result-title">${result.title}</div>
                <div class="result-url">${result.url}</div>
                <div class="result-desc">${result.description}</div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
}

// Setup game search/filter
function setupGameSearch() {
    const gameSearchInput = document.getElementById('gameSearchInput');
    const gameCards = document.querySelectorAll('.game-card');
    
    gameSearchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        gameCards.forEach(card => {
            const gameName = card.querySelector('.game-card-name').textContent.toLowerCase();
            if (gameName.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Open game in modal
function openGame(game) {
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    const gameFrame = document.getElementById('gameFrame');
    
    modalTitle.textContent = game.name;
    
    // Use a game emulator or online arcade game
    const gameUrl = `https://www.classicgamesarcade.com/game/${game.url || game.name.toLowerCase().replace(/\s+/g, '-')}/`;
    gameFrame.src = gameUrl;
    
    modal.classList.add('show');
}

// Setup modal controls
function setupModal() {
    const modal = document.getElementById('gameModal');
    const modalClose = document.querySelector('.modal-close');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
        document.getElementById('gameFrame').src = '';
    });
    
    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.getElementById('gameFrame').src = '';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.getElementById('gameFrame').src = '';
        }
    });
}

// Add more games dynamically (lazy loading)
function loadMoreGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    const currentCount = gamesGrid.children.length;
    const newGames = arcadeGames.slice(currentCount, currentCount + 50);
    
    newGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-icon">${game.icon}</div>
            <div class="game-card-name">${game.name}</div>
        `;
        
        gameCard.addEventListener('click', () => {
            openGame(game);
        });
        
        gamesGrid.appendChild(gameCard);
    });
}