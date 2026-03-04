// Cluster Visualization Script
let currentView = 'grid';
let filteredClusters = [...clusterData];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGridView();
    setupEventListeners();
    updateStats();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('cluster-search');
    searchInput.addEventListener('input', handleSearch);
    
    // View toggle
    document.getElementById('grid-view-btn').addEventListener('click', () => switchView('grid'));
    document.getElementById('network-view-btn').addEventListener('click', () => switchView('network'));
    
    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('cluster-modal').addEventListener('click', (e) => {
        if (e.target.id === 'cluster-modal') closeModal();
    });
}

// Render grid view
function renderGridView() {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';
    
    filteredClusters.forEach((cluster, index) => {
        const card = createClusterCard(cluster, index);
        container.appendChild(card);
    });
}

// Create a cluster card
function createClusterCard(cluster, index) {
    const card = document.createElement('div');
    card.className = 'cluster-card';
    card.dataset.index = index;
    
    const title = document.createElement('div');
    title.className = 'cluster-title';
    title.innerHTML = `
        <span>${cluster.name}</span>
        <span class="cluster-count">${cluster.words.length} word${cluster.words.length > 1 ? 's' : ''}</span>
    `;
    
    const wordsContainer = document.createElement('div');
    wordsContainer.className = 'cluster-words';
    
    // Show first 6 words
    const displayWords = cluster.words.slice(0, 6);
    displayWords.forEach(word => {
        const tag = document.createElement('span');
        tag.className = 'word-tag';
        tag.textContent = word;
        wordsContainer.appendChild(tag);
    });
    
    if (cluster.words.length > 6) {
        const more = document.createElement('span');
        more.className = 'word-tag';
        more.textContent = `+${cluster.words.length - 6} more`;
        more.style.fontWeight = 'bold';
        wordsContainer.appendChild(more);
    }
    
    card.appendChild(title);
    card.appendChild(wordsContainer);
    
    // Click to show modal with all words
    card.addEventListener('click', () => showClusterModal(cluster));
    
    return card;
}

// Show cluster modal
function showClusterModal(cluster) {
    const modal = document.getElementById('cluster-modal');
    const modalTitle = document.getElementById('modal-cluster-name');
    const modalCount = document.getElementById('modal-word-count');
    const modalWordsContainer = document.getElementById('modal-words-container');
    
    modalTitle.textContent = cluster.name;
    modalCount.textContent = `${cluster.words.length} word${cluster.words.length > 1 ? 's' : ''}`;
    
    modalWordsContainer.innerHTML = '';
    cluster.words.forEach(word => {
        const tag = document.createElement('span');
        tag.className = 'word-tag';
        tag.textContent = word;
        modalWordsContainer.appendChild(tag);
    });
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('cluster-modal').classList.remove('active');
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        filteredClusters = [...clusterData];
    } else {
        filteredClusters = clusterData.filter(cluster => {
            // Search in cluster name
            if (cluster.name.toLowerCase().includes(query)) return true;
            
            // Search in words
            return cluster.words.some(word => word.toLowerCase().includes(query));
        });
    }
    
    renderGridView();
    updateStats();
}

// Switch view
function switchView(view) {
    currentView = view;
    
    const gridBtn = document.getElementById('grid-view-btn');
    const networkBtn = document.getElementById('network-view-btn');
    const gridContainer = document.getElementById('grid-container');
    const networkContainer = document.getElementById('network-container');
    
    if (view === 'grid') {
        gridBtn.classList.add('active');
        networkBtn.classList.remove('active');
        gridContainer.style.display = 'grid';
        networkContainer.classList.remove('active');
    } else {
        gridBtn.classList.remove('active');
        networkBtn.classList.add('active');
        gridContainer.style.display = 'none';
        networkContainer.classList.add('active');
        renderNetworkView();
    }
}

// Update statistics
function updateStats() {
    const totalWords = filteredClusters.reduce((sum, cluster) => sum + cluster.words.length, 0);
    document.getElementById('total-clusters').textContent = filteredClusters.length;
    document.getElementById('total-words').textContent = totalWords;
}

// Render network view (force-directed graph)
function renderNetworkView() {
    const canvas = document.getElementById('cluster-network');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Prepare nodes (clusters)
    const nodes = filteredClusters.map((cluster, i) => ({
        id: i,
        name: cluster.name,
        wordCount: cluster.words.length,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        radius: Math.max(5, Math.min(20, cluster.words.length * 0.5))
    }));
    
    // Create links based on semantic similarity (simplified - using name overlap)
    const links = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const similarity = calculateSimilarity(filteredClusters[i], filteredClusters[j]);
            if (similarity > 0.3) {
                links.push({
                    source: i,
                    target: j,
                    strength: similarity
                });
            }
        }
    }
    
    // Animation variables
    let selectedNode = null;
    let hoveredNode = null;
    
    // Force simulation parameters
    const forceStrength = 0.02;
    const damping = 0.85;
    const centerForce = 0.001;
    
    // Animation loop
    function animate() {
        // Apply forces
        applyForces();
        
        // Clear canvas with background color
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        
        // Draw links
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.lineWidth = 1;
        links.forEach(link => {
            const source = nodes[link.source];
            const target = nodes[link.target];
            ctx.beginPath();
            ctx.moveTo(source.x, source.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
        });
        
        // Draw nodes
        nodes.forEach(node => {
            const isHovered = node === hoveredNode;
            const isSelected = node === selectedNode;
            
            // Node circle
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            
            if (isSelected) {
                ctx.fillStyle = '#000000';
            } else if (isHovered) {
                ctx.fillStyle = '#404040';
            } else {
                const opacity = Math.min(0.85, node.wordCount / 15);
                ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.7})`;
            }
            
            ctx.fill();
            
            // Border
            if (isSelected || isHovered) {
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 2;
                ctx.stroke();
            } else {
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            
            // Label (on hover)
            if (isHovered || isSelected) {
                // Background for label
                ctx.font = '600 12px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
                ctx.textAlign = 'center';
                const textWidth = ctx.measureText(node.name.substring(0, 30)).width;
                const padding = 8;
                
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(
                    node.x - textWidth / 2 - padding,
                    node.y - node.radius - 35,
                    textWidth + padding * 2,
                    28
                );
                
                // Label text
                ctx.fillStyle = '#000000';
                ctx.fillText(node.name.substring(0, 30), node.x, node.y - node.radius - 20);
                
                ctx.font = '400 10px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
                ctx.fillStyle = '#666666';
                ctx.fillText(`${node.wordCount} words`, node.x, node.y - node.radius - 8);
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    // Apply physics forces
    function applyForces() {
        // Link forces
        links.forEach(link => {
            const source = nodes[link.source];
            const target = nodes[link.target];
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 0) {
                const force = (distance - 100) * forceStrength * link.strength;
                const fx = (dx / distance) * force;
                const fy = (dy / distance) * force;
                
                source.vx += fx;
                source.vy += fy;
                target.vx -= fx;
                target.vy -= fy;
            }
        });
        
        // Repulsion between nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[j].x - nodes[i].x;
                const dy = nodes[j].y - nodes[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 0 && distance < 150) {
                    const force = (150 - distance) * 0.01;
                    const fx = (dx / distance) * force;
                    const fy = (dy / distance) * force;
                    
                    nodes[i].vx -= fx;
                    nodes[i].vy -= fy;
                    nodes[j].vx += fx;
                    nodes[j].vy += fy;
                }
            }
        }
        
        // Center force
        nodes.forEach(node => {
            node.vx += (width / 2 - node.x) * centerForce;
            node.vy += (height / 2 - node.y) * centerForce;
        });
        
        // Update positions
        nodes.forEach(node => {
            node.vx *= damping;
            node.vy *= damping;
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < node.radius) {
                node.x = node.radius;
                node.vx *= -0.5;
            }
            if (node.x > width - node.radius) {
                node.x = width - node.radius;
                node.vx *= -0.5;
            }
            if (node.y < node.radius) {
                node.y = node.radius;
                node.vy *= -0.5;
            }
            if (node.y > height - node.radius) {
                node.y = height - node.radius;
                node.vy *= -0.5;
            }
        });
    }
    
    // Mouse interaction
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        hoveredNode = null;
        for (const node of nodes) {
            const dx = x - node.x;
            const dy = y - node.y;
            if (Math.sqrt(dx * dx + dy * dy) < node.radius) {
                hoveredNode = node;
                canvas.style.cursor = 'pointer';
                break;
            }
        }
        
        if (!hoveredNode) {
            canvas.style.cursor = 'default';
        }
    });
    
    canvas.addEventListener('click', (e) => {
        if (hoveredNode) {
            const cluster = filteredClusters[hoveredNode.id];
            showClusterModal(cluster);
        }
    });
    
    // Start animation
    animate();
}

// Calculate semantic similarity between two clusters
function calculateSimilarity(cluster1, cluster2) {
    // Simple similarity based on shared words or name overlap
    const name1Parts = cluster1.name.toLowerCase().split(/[\/\s_]+/);
    const name2Parts = cluster2.name.toLowerCase().split(/[\/\s_]+/);
    
    let sharedParts = 0;
    name1Parts.forEach(part => {
        if (name2Parts.some(p => p.includes(part) || part.includes(p))) {
            sharedParts++;
        }
    });
    
    // Check for shared words
    const sharedWords = cluster1.words.filter(w => cluster2.words.includes(w)).length;
    
    const nameSimilarity = sharedParts / Math.max(name1Parts.length, name2Parts.length);
    const wordSimilarity = sharedWords > 0 ? 0.8 : 0;
    
    return Math.max(nameSimilarity, wordSimilarity);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (currentView === 'network') {
        renderNetworkView();
    }
});
