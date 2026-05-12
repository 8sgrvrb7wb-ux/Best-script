# ✨ Farris Hub - Arcade Proxy & Search

Welcome to **Farris Hub**, your ultimate gateway to arcade gaming and web searching! This is a feature-rich proxy website with access to 1000+ classic arcade games and an integrated DuckDuckGo search engine, all wrapped in a beautiful galaxy-themed interface.

## 🌟 Features

### 🎮 Arcade Games
- Access to **1000+ classic arcade games**
- Games from multiple genres:
  - Classic Arcade (Pac-Man, Galaga, Space Invaders, etc.)
  - Shooting Games (1942, Gradius, Raiden, etc.)
  - Platform Games (Sonic, Mega Man, etc.)
  - RPG Games (Final Fantasy, Chrono Trigger, etc.)
  - Fighting Games (Street Fighter, Mortal Kombat, etc.)
  - And many more!
- **Search functionality** to quickly find games
- Click to play games in a fullscreen modal
- Beautiful card-based UI with hover effects

### 🔍 Search Engine
- **DuckDuckGo integration** for privacy-focused web searching
- Direct search results
- Open proxy for anonymous browsing
- Search results displayed directly in the app

### ✨ Galaxy Background
- **Animated galaxy with moving stars**
- Beautiful gradient background with nebula effects
- Twinkling star animations
- Responsive and performance-optimized

### 🎨 Design
- **Cyberpunk/Neon aesthetic** with purple and cyan colors
- **Fully responsive** - works on desktop, tablet, and mobile
- **Smooth animations** and transitions
- **Dark mode** optimized for eye comfort
- **Glassmorphism effects** with backdrop blur

## 📁 File Structure

```
farris-hub/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Core functionality and interactivity
├── games-data.js       # 1000+ arcade games database
└── README.md           # This file
```

## 🚀 Getting Started

1. **Clone or download the repository**
2. **Open `index.html` in your web browser**
3. **Start exploring arcade games and searching the web!**

No dependencies, no build process - just pure HTML, CSS, and JavaScript!

## 💻 Usage

### Playing Arcade Games
1. Click on the **🎮 Arcade Games** tab
2. Browse through the grid of games
3. Use the search box to filter games by name
4. Click on any game to open it in fullscreen mode
5. Use the "Close Game" button or click the X to exit

### Searching the Web
1. Enter your search query in the top search bar
2. Click **🔍 Search** or press Enter
3. View results in the **🔎 Search Results** tab
4. Click **🌐 Open Proxy** to open DuckDuckGo in a new tab

### Navigation
- **🎮 Arcade Games** - Browse and play games
- **🔎 Search Results** - View search results
- **ℹ️ About** - Learn about Farris Hub

## 🎯 Features Breakdown

### 1000+ Arcade Games
The `games-data.js` file contains a comprehensive database of games including:
- Classic arcade titles from the 1980s and 1990s
- Multiple genres (action, puzzle, RPG, sports, etc.)
- Dynamically generated games for variety
- Easy to add more games

### DuckDuckGo Integration
- Privacy-focused search engine
- No tracking or data collection
- Fast search results
- Direct links to DuckDuckGo

### Galaxy Background
- CSS gradients for nebula effects
- JavaScript-generated stars with random positions
- Twinkling animation for depth effect
- Performance-optimized (doesn't impact gameplay)

## 🛠️ Customization

### Adding More Games
Edit `games-data.js` and add objects to the `arcadeGames` array:
```javascript
{ name: 'Your Game Name', icon: '🎮', url: 'your-game-url' }
```

### Changing Colors
Edit the color variables in `styles.css`:
- Primary: `#ff00ff` (Magenta)
- Secondary: `#00ffff` (Cyan)
- Background: `#0a0e27` (Dark Blue)

### Adjusting Stars
In `script.js`, modify the `starCount` variable in the `createStars()` function:
```javascript
const starCount = 150; // Increase for more stars
```

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- No data collection
- No cookies (unless you enable them)
- Open-source
- No external tracking
- Uses DuckDuckGo for privacy-respecting searches

## 🎮 Game Note

The arcade games open in iframe embeds from external arcade game sources. These are classic games that have been made available through various online arcade platforms.

## 📄 License

Free to use and modify for personal and educational purposes.

## 🙏 Credits

Built with ❤️ as Farris Hub - A tribute to classic arcade gaming and the spirit of internet freedom.

---

**Enjoy gaming and searching with Farris Hub!** 🌟✨
