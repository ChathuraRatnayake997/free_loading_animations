document.addEventListener('DOMContentLoaded', function() {
    const animationsGrid = document.getElementById('animationsGrid');
    const codeModal = document.getElementById('codeModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const htmlCode = document.getElementById('htmlCode');
    const cssCode = document.getElementById('cssCode');
    const jsCode = document.getElementById('jsCode');
    const copyBtn = document.getElementById('copyBtn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Animation categories and their directories
    const animations = [
        { name: 'Angel', dir: 'Animations/1' },
        { name: 'Anomaly', dir: 'Animations/2' },
        { name: 'Atom', dir: 'Animations/3' },
        { name: 'Bars', dir: 'Animations/4' },
        { name: 'Binary Stream', dir: 'Animations/5' },
        { name: 'Bounce', dir: 'Animations/6' },
        { name: 'Bounceball', dir: 'Animations/7' },
        { name: 'Sonar', dir: 'Animations/8' },
        { name: 'Helix', dir: 'Animations/9' },
        { name: 'Data Grid', dir: 'Animations/10' },
        { name: 'Swarm', dir: 'Animations/11' },
        { name: 'Terrain', dir: 'Animations/12' },
        { name: 'Loom', dir: 'Animations/13' },
        { name: 'Organism', dir: 'Animations/14' },
        { name: 'Scanner', dir: 'Animations/15' },
        { name: 'Echo', dir: 'Animations/16' },
        { name: 'Tesseract', dir: 'Animations/17' },
        { name: 'Singularity', dir: 'Animations/18' },
        { name: 'Progress', dir: 'Animations/19' },
        { name: 'Oscilloscope', dir: 'Animations/20' },
        { name: 'Builder', dir: 'Animations/21' },
        { name: 'Mitosis', dir: 'Animations/22' },
        { name: 'Ferro', dir: 'Animations/23' },
        { name: 'Portal', dir: 'Animations/24' },
        { name: 'Strings', dir: 'Animations/25' },
        { name: 'Radar', dir: 'Animations/26' },
        { name: 'Pulse Grid', dir: 'Animations/27' },
        { name: 'Time Smear', dir: 'Animations/28' },
        { name: 'Orbit', dir: 'Animations/29' },
        { name: 'Tesseract2', dir: 'Animations/30' },
        { name: 'Blobs', dir: 'Animations/31' },
        { name: 'Radar2', dir: 'Animations/32' },
        { name: 'Spectrogram', dir: 'Animations/33' },
        { name: 'Triangle', dir: 'Animations/34' },
        { name: 'Slime', dir: 'Animations/35' },
        { name: 'Sorting', dir: 'Animations/36' },
        { name: 'Hilbert', dir: 'Animations/37' },
        { name: 'Defrag', dir: 'Animations/38' },
        { name: 'Neural', dir: 'Animations/39' },
        { name: 'Tree', dir: 'Animations/40' },
        { name: 'Gears', dir: 'Animations/41' },
        { name: 'ASCII', dir: 'Animations/42' },
        { name: 'Mesh', dir: 'Animations/43' },
        { name: 'Ribbon', dir: 'Animations/44' },
        { name: 'Particles', dir: 'Animations/45' },
        { name: 'Tunnel', dir: 'Animations/46' },
        { name: 'Tunnel 2', dir: 'Animations/47' },
        { name: 'Canvas', dir: 'Animations/48' },
        { name: 'Flask', dir: 'Animations/49' },
        { name: 'Tunnel 3', dir: 'Animations/50' },
        { name: 'Bio Core', dir: 'Animations/51' },
        { name: 'Origami', dir: 'Animations/52' },
        { name: 'Liquid Blobs', dir: 'Animations/53' },
        { name: 'Bento Grid', dir: 'Animations/54' },
        { name: 'Matrix Text', dir: 'Animations/55' },
        { name: 'Glass Ripple', dir: 'Animations/56' },
        { name: 'Sine Dots', dir: 'Animations/57' },
        { name: 'Scanner', dir: 'Animations/58' },
        { name: 'Cube', dir: 'Animations/59' },
        { name: 'Liquid Portal', dir: 'Animations/60' },
        { name: 'Signature', dir: 'Animations/61' },
        { name: 'Pulse', dir: 'Animations/62' },
        { name: 'Gooey Dots', dir: 'Animations/63' },
        { name: 'Ring System', dir: 'Animations/64' },
        { name: 'Tapestry', dir: 'Animations/65' },
        { name: 'Binary Bar', dir: 'Animations/66' },
        { name: 'Compass', dir: 'Animations/67' },
        { name: 'Weaver', dir: 'Animations/68' },
        { name: 'Grid Bloom', dir: 'Animations/69' },
        { name: 'Pendulum', dir: 'Animations/70' },
        { name: 'Ghost', dir: 'Animations/71' },
        { name: 'Merge', dir: 'Animations/72' },
        { name: 'Blueprint', dir: 'Animations/73' },
        { name: 'Box Grid', dir: 'Animations/74' },
        { name: 'Folding Cube', dir: 'Animations/75' },
        { name: 'SVG Loader', dir: 'Animations/76' },
        { name: 'Jelly', dir: 'Animations/77' },
        { name: 'Weaver 2', dir: 'Animations/78' },
        { name: 'Prism', dir: 'Animations/79' },
        { name: 'Spiral', dir: 'Animations/80' },
        { name: 'Grid Flip', dir: 'Animations/81' },
        { name: 'Eclipse', dir: 'Animations/82' },
        { name: 'Cradle', dir: 'Animations/83' },
        { name: 'Stairs', dir: 'Animations/84' },
        { name: 'Wire', dir: 'Animations/85' },
        { name: 'Console', dir: 'Animations/86' },
        { name: 'Vortex', dir: 'Animations/87' },
        { name: 'EKG', dir: 'Animations/88' },
        { name: 'Optical Box', dir: 'Animations/89' },
        { name: 'Ghost Dance', dir: 'Animations/90' },
        { name: 'Star Box', dir: 'Animations/91' },
        { name: 'Chamber', dir: 'Animations/92' },
        { name: 'Loom 2', dir: 'Animations/93' },
        { name: 'Eye Gate', dir: 'Animations/94' },
        { name: 'Stacker', dir: 'Animations/95' },
        { name: 'Scale', dir: 'Animations/96' },
        { name: 'Forest', dir: 'Animations/97' },
        { name: 'Portal', dir: 'Animations/98' },
        { name: 'Signal Path', dir: 'Animations/99' },
        { name: 'Bio Container', dir: 'Animations/100' },
        { name: 'Vertical Waves', dir: 'Animations/101' },
        { name: 'Neural Path', dir: 'Animations/102' },
        { name: 'Monolith', dir: 'Animations/103' },
        { name: 'Geometric Loom', dir: 'Animations/104' },
        { name: 'Kinetic Word', dir: 'Animations/105' },
        { name: 'Pendulum Wave', dir: 'Animations/106' },
        { name: 'Data Cascade', dir: 'Animations/107' },
        { name: 'Ghost Blade', dir: 'Animations/108' },
        { name: 'Dimension Slicer', dir: 'Animations/109' },
        { name: 'Entropic Bloom', dir: 'Animations/110' },
        { name: 'Temporal Anomaly', dir: 'Animations/111' },
        { name: 'Entropic Glyph', dir: 'Animations/112' },
        { name: 'Semantic Weave', dir: 'Animations/113' },
        { name: 'Structural Metamorphosis', dir: 'Animations/114' },
        { name: 'Chronomark Loader', dir: 'Animations/115' },
        { name: 'Echolocation Loader', dir: 'Animations/116' },
        { name: 'Pendulum Loader', dir: 'Animations/117' },
        { name: 'Isotope Loader', dir: 'Animations/118' },
        { name: 'Tesseract Loader', dir: 'Animations/119' },
        { name: 'Cymatics Loader', dir: 'Animations/120' },
        { name: 'Fractal Tree', dir: 'Animations/121' },
        { name: 'Lissajous', dir: 'Animations/122' },
        { name: 'Torus Knot', dir: 'Animations/123' },
        { name: 'Crypto HUD', dir: 'Animations/124' },
        { name: 'Accretion Disk', dir: 'Animations/125' },
        { name: 'Hypersphere', dir: 'Animations/126' },
        { name: 'Fractal', dir: 'Animations/127' },
        { name: 'Quantum', dir: 'Animations/128' },
        { name: 'Vortex', dir: 'Animations/129' },
        { name: 'Origami', dir: 'Animations/130' },
        { name: 'Ripple', dir: 'Animations/131' },
        { name: 'Resonance', dir: 'Animations/132' },
        { name: 'Neon Triangle', dir: 'Animations/133' },
        { name: 'Helix', dir: 'Animations/134' },
        { name: 'Interference', dir: 'Animations/135' },
        { name: 'Kaleidoscope', dir: 'Animations/136' },
        { name: 'Gooey Nodes', dir: 'Animations/137' },
        { name: 'Prism', dir: 'Animations/138' },
        { name: 'Probability Field', dir: 'Animations/139' },
        { name: 'LIDAR Scan', dir: 'Animations/140' },
        { name: 'Blueprint Geometry', dir: 'Animations/141' },
        { name: 'Cymatic', dir: 'Animations/142' },
        { name: 'Flux', dir: 'Animations/143' },
        { name: 'Triangle Flow', dir: 'Animations/144' },
        { name: 'Cellular Automata', dir: 'Animations/145' },
        { name: 'Cube Grid', dir: 'Animations/146' },
        { name: 'Lumen', dir: 'Animations/147' },
        { name: 'Momentum', dir: 'Animations/148' },
        { name: 'Nexus', dir: 'Animations/149' },
        { name: 'Spiral Pixel', dir: 'Animations/150' },
        { name: 'Torus', dir: 'Animations/151' },
        { name: 'Hourglass', dir: 'Animations/152' }
    ];
    
    // Get favorites from localStorage
    function getFavorites() {
        const favorites = localStorage.getItem('animationFavorites');
        return favorites ? JSON.parse(favorites) : [];
    }
    
    // Save favorites to localStorage
    function saveFavorites(favorites) {
        localStorage.setItem('animationFavorites', JSON.stringify(favorites));
    }
    
    // Toggle favorite status
    function toggleFavorite(event, animation) {
        event.stopPropagation(); // Prevent card click
        
        const favorites = getFavorites();
        const index = favorites.findIndex(fav => fav.dir === animation.dir);
        
        if (index === -1) {
            // Add to favorites
            favorites.push(animation);
        } else {
            // Remove from favorites
            favorites.splice(index, 1);
        }
        
        saveFavorites(favorites);
        populateAnimationsGrid(); // Refresh the grid
        loadFavorites(); // Refresh favorites section
    }
    
    // Load favorites section
    function loadFavorites() {
        const favoritesGrid = document.getElementById('favoritesGrid');
        const favorites = getFavorites();
        
        if (favorites.length === 0) {
            favoritesGrid.innerHTML = '<p>No favorites yet. Click the star icon on animations to add them to your favorites!</p>';
            return;
        }
        
        favoritesGrid.innerHTML = '';
        
        favorites.forEach(animation => {
            const card = document.createElement('div');
            card.className = 'animation-card';
            card.dataset.name = animation.name;
            card.dataset.dir = animation.dir;
            
            card.innerHTML = `
                <button class="favorite-btn favorited">❤️</button>
                <div class="animation-preview" id="favorite-preview-${animation.dir.replace(/\//g, '-')}"></div>
            `;
            
            // Add favorite button click event
            const favoriteBtn = card.querySelector('.favorite-btn');
            favoriteBtn.addEventListener('click', (e) => toggleFavorite(e, animation));
            
            favoritesGrid.appendChild(card);
            
            // Load animation preview
            const previewContainer = document.getElementById(`favorite-preview-${animation.dir.replace(/\//g, '-')}`);
            
            // Create iframe for preview
            const iframe = document.createElement('iframe');
            const fileName = animation.name.toLowerCase().replace(/\s+/g, '');
            iframe.src = `${animation.dir}/${fileName}.html`;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            
            previewContainer.appendChild(iframe);
            
            // Add transparent overlay to capture clicks
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.zIndex = '1';
            overlay.style.pointerEvents = 'auto';
            
            previewContainer.style.position = 'relative';
            previewContainer.appendChild(overlay);
            
            // Add click event
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('favorite-btn')) {
                    openCodeModal(animation);
                }
            });
        });
    }
    
    // Populate animations grid
    function populateAnimationsGrid() {
        animationsGrid.innerHTML = '';
        
        animations.forEach(animation => {
            const card = document.createElement('div');
            card.className = 'animation-card';
            card.dataset.name = animation.name;
            card.dataset.dir = animation.dir;
            
            // Check if this animation is favorited
            const favorites = getFavorites();
            const isFavorited = favorites.some(fav => fav.dir === animation.dir);
            
            card.innerHTML = `
                <button class="favorite-btn ${isFavorited ? 'favorited' : ''}">${isFavorited ? '❤️' : '🤍'}</button>
                <div class="animation-preview" id="preview-${animation.dir.replace(/\//g, '-')}"></div>
            `;
            
            // Add favorite button click event
            const favoriteBtn = card.querySelector('.favorite-btn');
            favoriteBtn.addEventListener('click', (e) => toggleFavorite(e, animation));
            
            animationsGrid.appendChild(card);
            
            // Load animation preview
            loadAnimationPreview(animation.dir, animation.name);
            
            // Add click event
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('favorite-btn')) {
                    openCodeModal(animation);
                }
            });
        });
    }
    
    // Initial load
    populateAnimationsGrid();
    
    // Favorites modal functionality
    const favoritesBtn = document.getElementById('favoritesBtn');
    const favoritesModal = document.getElementById('favoritesModal');
    const closeFavoritesModal = document.getElementById('closeFavoritesModal');
    
    // Open favorites modal
    favoritesBtn.addEventListener('click', () => {
        loadFavorites();
        favoritesModal.style.display = 'block';
    });
    
    // Close favorites modal
    closeFavoritesModal.addEventListener('click', () => {
        favoritesModal.style.display = 'none';
    });
    
    // Close favorites modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === favoritesModal) {
            favoritesModal.style.display = 'none';
        }
    });
    
    // Load animation preview
    function loadAnimationPreview(dir, name) {
        const previewContainer = document.getElementById(`preview-${dir.replace(/\//g, '-')}`);
        
        // Create iframe for preview
        const iframe = document.createElement('iframe');
        const fileName = name.toLowerCase().replace(/\s+/g, '');
        iframe.src = `${dir}/${fileName}.html`;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        
        previewContainer.appendChild(iframe);
        
        // Add transparent overlay to capture clicks
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '1';
        overlay.style.pointerEvents = 'auto';
        
        previewContainer.style.position = 'relative';
        previewContainer.appendChild(overlay);
    }
    
    // Open code modal
    function openCodeModal(animation) {
        modalTitle.textContent = `${animation.name} Animation`;
        
        // Load and display code
        const fileName = animation.name.toLowerCase().replace(/\s+/g, '');
        Promise.all([
            fetchCode(`${animation.dir}/${fileName}.html`),
            fetchCode(`${animation.dir}/${fileName}.css`),
            fetchCode(`${animation.dir}/${fileName}.js`)
        ]).then(([html, css, js]) => {
            htmlCode.textContent = html;
            cssCode.textContent = css;
            
            // Check if JS is essential
            const isJSEssential = !js.includes('animation is CSS-only') && !js.includes('// File not found or empty') && js.trim() !== '';
            jsCode.textContent = isJSEssential ? js : '// No JS needed - animation is CSS-only';
            
            // Show HTML tab by default
            showTab('html');
            
            // Open modal
            codeModal.style.display = 'block';
        });
    }
    
    // Fetch code from file
    function fetchCode(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('File not found');
                return response.text();
            })
            .catch(() => '// File not found or empty');
    }
    
    // Show selected tab
    function showTab(tabName) {
        // Hide all code sections
        document.querySelectorAll('.code-content pre').forEach(pre => {
            pre.classList.remove('active');
        });
        
        // Remove active class from all tabs
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab and code
        const activeCodeElement = document.getElementById(`${tabName}Code`);
        activeCodeElement.classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Check if code is empty
        const codeContent = activeCodeElement.textContent.trim();
        const isEmpty = codeContent === '' || codeContent === '// File not found or empty' || codeContent === '// No JS needed - animation is CSS-only';
        
        // Show or hide copy button
        if (isEmpty) {
            copyBtn.style.display = 'none';
        } else {
            copyBtn.style.display = 'block';
        }
    }
    
    // Close modal
    closeModal.addEventListener('click', () => {
        codeModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === codeModal) {
            codeModal.style.display = 'none';
        }
    });
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showTab(btn.dataset.tab);
        });
    });
    
    // Copy code functionality
    copyBtn.addEventListener('click', () => {
        // Find the active tab
        const activeTab = document.querySelector('.tab-btn.active');
        if (!activeTab) return;
        
        const tabName = activeTab.dataset.tab;
        let codeToCopy = '';
        let copyMessage = '';
        
        // Get code from active tab
        switch(tabName) {
            case 'html':
                codeToCopy = htmlCode.textContent;
                copyMessage = 'HTML Copied!';
                break;
            case 'css':
                codeToCopy = cssCode.textContent;
                copyMessage = 'CSS Copied!';
                break;
            case 'js':
                codeToCopy = jsCode.textContent;
                copyMessage = 'JS Copied!';
                break;
        }
        
        navigator.clipboard.writeText(codeToCopy).then(() => {
            copyBtn.textContent = copyMessage;
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy Code';
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});