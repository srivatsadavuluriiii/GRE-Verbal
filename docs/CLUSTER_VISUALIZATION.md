# Cluster Visualization Feature

## Overview
A new interactive visualization page has been added to explore the 480 semantic clusters containing 1,019 GRE vocabulary words.

## Access
- **From Homepage**: Click the "📊 View Clusters" button on the quiz selection page
- **Direct URL**: `/clusters.html`

## Features

### 1. Grid View (Default)
- **Search**: Real-time search across cluster names and words
- **Cards**: Each cluster displayed as an interactive card showing:
  - Cluster name (e.g., "Smart/Intelligent/Clever")
  - Word count badge
  - First 6 words as tags
  - Click to view all words in modal

### 2. Network View
- **Force-directed graph**: Visual representation of semantic relationships
- **Interactive nodes**: 
  - Node size = number of words in cluster
  - Hover to see cluster name and word count
  - Click to open detailed modal
- **Links**: Connected clusters show semantic similarity
- **Physics simulation**: Nodes naturally organize by relationship strength

### 3. Statistics Dashboard
- Total Clusters: 480
- Total Words: 1,019
- Coverage: 100%
- Updates dynamically with search filters

### 4. Modal Details
- Full word list for selected cluster
- Alphabetically sorted
- Easy-to-read tag layout

## Technical Implementation

### Files Created
1. **clusters.html** - Main visualization page with dual view options
2. **cluster-data.js** - Parsed cluster data from cluster.txt
3. **cluster-viz.js** - Interactive visualization logic with:
   - Grid rendering
   - Canvas-based network graph
   - Force simulation physics
   - Search/filter functionality

### Updated Files
1. **index.html** - Added "View Clusters" link
2. **style.css** - New styling for cluster link button
3. **README.md** - Documentation updates

## Usage

### For Students
1. Navigate to clusters.html
2. Use search to find specific words or topics
3. Switch between Grid/Network view
4. Click clusters to see all related words
5. Use for:
   - Understanding word relationships
   - Finding synonyms quickly
   - Studying semantic groups
   - Visual memory techniques

### For Developers
```javascript
// Cluster data structure
{
  name: "Smart/Intelligent/Clever",
  words: ["acumen", "adroit", "astute", ...]
}

// Access cluster data
window.clusterData // Array of 480 clusters
```

## Network View Algorithm

### Force Simulation
- **Link Force**: Attracts semantically similar clusters
- **Repulsion Force**: Prevents node overlap
- **Center Force**: Keeps graph centered
- **Boundary Force**: Prevents nodes from leaving canvas

### Similarity Calculation
Clusters are connected if they:
1. Share common words (0.8 similarity)
2. Have overlapping name components (variable similarity)
3. Threshold: 0.3 minimum for link creation

## Performance
- **Grid View**: Instant rendering, handles 480 clusters easily
- **Network View**: Canvas-based, 60 FPS animation
- **Search**: Real-time filtering with no lag
- **Mobile**: Fully responsive, works on all devices

## Design Philosophy
- **Minimalist UI**: Focus on content, not chrome
- **Gradient Theme**: Matches main quiz application
- **Interactive**: Every element clickable/hoverable
- **Informative**: Clear labels, counts, and feedback

## Future Enhancements (Optional)
1. Export cluster data as JSON/CSV
2. Custom cluster creation/editing
3. Quiz generation from selected clusters
4. Word difficulty ratings
5. Study progress tracking per cluster
6. 3D network visualization
7. Cluster comparison tool

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- Requires: ES6+ JavaScript, Canvas 2D API

## Deployment
Include these files when deploying:
- clusters.html
- cluster-data.js
- cluster-viz.js
- cluster.txt (optional, for reference)

## Testing Checklist
- [x] Grid view renders all 480 clusters
- [x] Search filters correctly
- [x] Network view animates smoothly
- [x] Modal opens with correct cluster data
- [x] Mobile responsive layout works
- [x] Links between pages function
- [x] Statistics update dynamically
- [x] Canvas resizes on window resize

---

**Created**: March 4, 2026
**Version**: 1.0
**Clusters**: 480
**Words**: 1,019
**Coverage**: 100%
