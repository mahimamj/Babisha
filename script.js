// BABISHA - Lehenga Collection Website JavaScript
console.log('BABISHA script loaded successfully!');

// Global Variables
let currentUser = null;
let fabricData = [];
let filteredFabrics = [];

// Sample Fabric Data - Lehenga Collection Only
const sampleFabrics = [
    // Lehenga Fabrics
    {
        id: 1,
        name: "Embroidered Fuchsia Lehenga Fabric",
        category: "lehenga",
        price: 4500,
        originalPrice: 6000,
        image: "images/lehengas/lehenga2.jpg.webp",
        description: "Richly embroidered fuchsia lehenga fabric with intricate gold patterns, perfect for bridal and festive wear.",
        specifications: {
            gsm: "350-400",
            material: "Silk Blend with Gold Embroidery",
            width: "44 inches",
            colors: "Fuchsia, Gold, Teal",
            origin: "India"
        },
        supplier: "Bridal Couture Fabrics",
        rating: 4.9,
        reviews: 95,
        onSale: true,
        savings: 25
    },
    {
        id: 2,
        name: "Mint Green Lehenga Fabric",
        category: "lehenga",
        price: 3800,
        originalPrice: 4800,
        image: "images/lehengas/lehenga3.jpg.webp",
        description: "Elegant mint green lehenga fabric with silver embroidery and delicate embellishments.",
        specifications: {
            gsm: "300-350",
            material: "Silk Blend with Silver Work",
            width: "44 inches",
            colors: "Mint Green, Silver, Light Pink",
            origin: "India"
        },
        supplier: "Ethnic Elegance Co.",
        rating: 4.8,
        reviews: 78,
        onSale: true,
        savings: 21
    },
    {
        id: 3,
        name: "Cream Embroidered Lehenga Fabric",
        category: "lehenga",
        price: 4200,
        originalPrice: 5500,
        image: "images/lehengas/lehenga1.jpg.webp",
        description: "Luxurious cream lehenga fabric with intricate gold and silver embroidery, perfect for special occasions.",
        specifications: {
            gsm: "320-380",
            material: "Silk Blend with Gold & Silver Work",
            width: "44 inches",
            colors: "Cream, Gold, Silver",
            origin: "India"
        },
        supplier: "Royal Textiles",
        rating: 4.9,
        reviews: 112,
        onSale: true,
        savings: 24
    },
    
    // Saree Fabrics
    {
        id: 4,
        name: "Olive Green Embroidered Saree",
        category: "sarees",
        price: 2200,
        originalPrice: 2800,
        image: "images/sarees/saree1.jpg.jpg",
        description: "Beautiful olive green saree with colorful pom-pom border and intricate embroidery work.",
        specifications: {
            gsm: "140-160",
            material: "Cotton Blend with Embroidery",
            width: "44 inches",
            colors: "Olive Green with Multi-color Border",
            origin: "India"
        },
        supplier: "Ethnic Elegance Co.",
        rating: 4.7,
        reviews: 92,
        onSale: true,
        savings: 21
    },
    {
        id: 5,
        name: "Fuchsia Pink Golden Saree",
        category: "sarees",
        price: 3200,
        originalPrice: 4000,
        image: "images/sarees/saree2.jpg.jpg",
        description: "Stunning fuchsia pink saree with golden border and elegant polka dot pattern.",
        specifications: {
            gsm: "120-140",
            material: "Silk Blend with Golden Work",
            width: "45 inches",
            colors: "Fuchsia Pink with Golden Accents",
            origin: "India"
        },
        supplier: "Royal Textiles",
        rating: 4.8,
        reviews: 145,
        onSale: true,
        savings: 20
    },
    {
        id: 6,
        name: "Fuchsia Pink Embroidered Saree",
        category: "sarees",
        price: 2800,
        originalPrice: 3500,
        image: "images/sarees/saree3.jpg.jpg",
        description: "Elegant fuchsia pink saree with intricate golden embroidery and traditional patterns.",
        specifications: {
            gsm: "130-150",
            material: "Silk Blend with Golden Embroidery",
            width: "45 inches",
            colors: "Fuchsia Pink with Golden Work",
            origin: "India"
        },
        supplier: "Bridal Couture Fabrics",
        rating: 4.9,
        reviews: 178,
        onSale: true,
        savings: 20
    },
    {
        id: 7,
        name: "Vibrant Green Golden Saree",
        category: "sarees",
        price: 2500,
        originalPrice: 3200,
        image: "images/sarees/saree4.jpg.jpg",
        description: "Vibrant green saree with prominent golden border, perfect for festive occasions.",
        specifications: {
            gsm: "110-130",
            material: "Silk Blend with Golden Border",
            width: "44 inches",
            colors: "Vibrant Green with Golden Border",
            origin: "India"
        },
        supplier: "Silk Heritage Co.",
        rating: 4.6,
        reviews: 89,
        onSale: true,
        savings: 22
    },
    {
        id: 8,
        name: "Multi-Color Traditional Saree",
        category: "sarees",
        price: 3500,
        originalPrice: 4500,
        image: "images/sarees/saree5.jpg.jpg",
        description: "Traditional multi-colored saree featuring mustard yellow, purple, and cream sections with golden borders.",
        specifications: {
            gsm: "150-170",
            material: "Silk Blend with Traditional Weaving",
            width: "45 inches",
            colors: "Mustard Yellow, Purple, Cream with Golden Borders",
            origin: "India"
        },
        supplier: "Traditional Weavers Co.",
        rating: 4.8,
        reviews: 156,
        onSale: true,
        savings: 22
    },
    {
        id: 9,
        name: "Red Golden Striped Saree",
        category: "sarees",
        price: 2900,
        originalPrice: 3700,
        image: "images/sarees/saree6.jpg.jpg",
        description: "Classic red saree with horizontal golden stripes and decorative tassels.",
        specifications: {
            gsm: "125-145",
            material: "Silk Blend with Golden Stripes",
            width: "44 inches",
            colors: "Red with Golden Stripes",
            origin: "India"
        },
        supplier: "Elegant Fabrics",
        rating: 4.7,
        reviews: 134,
        onSale: true,
        savings: 22
    },
    {
        id: 10,
        name: "Premium Collection Saree Set",
        category: "sarees",
        price: 4200,
        originalPrice: 5500,
        image: "images/sarees/saree7.jpg.jpg",
        description: "Premium collection of intricately patterned sarees in pink, orange, and red with beautiful embellishments.",
        specifications: {
            gsm: "160-180",
            material: "Premium Silk with Intricate Patterns",
            width: "45 inches",
            colors: "Pink, Orange, Red with Golden Work",
            origin: "India"
        },
        supplier: "Premium Textiles",
        rating: 4.9,
        reviews: 203,
        onSale: true,
        savings: 24
    },

    // Men's Collection
    {
        id: 11,
        name: "Royal Blue Embroidered Sherwani",
        category: "men",
        price: 8500,
        originalPrice: 11000,
        image: "images/men/men1.jpg.jpg",
        description: "Magnificent royal blue velvet sherwani with intricate silver embroidery, perfect for weddings and special occasions.",
        specifications: {
            gsm: "400-450",
            material: "Velvet with Silver Embroidery",
            width: "Full Length Sherwani",
            colors: "Royal Blue with Silver Work",
            origin: "India"
        },
        supplier: "Royal Couture",
        rating: 4.9,
        reviews: 156,
        onSale: true,
        savings: 23
    },
    {
        id: 12,
        name: "Cream Gold Embroidered Sherwani",
        category: "men",
        price: 9200,
        originalPrice: 12000,
        image: "images/men/men2.jpg.jpg",
        description: "Luxurious cream sherwani with intricate gold embroidery and traditional patterns, ideal for festive celebrations.",
        specifications: {
            gsm: "380-420",
            material: "Silk Blend with Gold Embroidery",
            width: "Full Length Sherwani",
            colors: "Cream with Gold Work",
            origin: "India"
        },
        supplier: "Heritage Textiles",
        rating: 4.8,
        reviews: 189,
        onSale: true,
        savings: 23
    },
    {
        id: 13,
        name: "Maroon Velvet Bandhgala",
        category: "men",
        price: 6800,
        originalPrice: 8500,
        image: "images/men/men3.jpg.jpg",
        description: "Elegant maroon velvet bandhgala jacket with sophisticated styling, perfect for formal events.",
        specifications: {
            gsm: "350-380",
            material: "Velvet with Silk Lining",
            width: "Bandhgala Jacket",
            colors: "Maroon with Gold Accents",
            origin: "India"
        },
        supplier: "Elite Menswear",
        rating: 4.7,
        reviews: 134,
        onSale: true,
        savings: 20
    },
    {
        id: 14,
        name: "Dark Green Bandhgala Collection",
        category: "men",
        price: 7200,
        originalPrice: 9000,
        image: "images/men/men4.jpg.jpg",
        description: "Sophisticated dark green bandhgala with intricate patterns and elegant styling for special occasions.",
        specifications: {
            gsm: "360-400",
            material: "Silk Blend with Embroidery",
            width: "Bandhgala Jacket",
            colors: "Dark Green with Gold Work",
            origin: "India"
        },
        supplier: "Traditional Couture",
        rating: 4.8,
        reviews: 167,
        onSale: true,
        savings: 20
    },
    {
        id: 15,
        name: "Navy Blue Embroidered Bandhgala",
        category: "men",
        price: 7500,
        originalPrice: 9500,
        image: "images/men/men5.jpg.jpg",
        description: "Classic navy blue bandhgala with rich gold embroidery and traditional mandarin collar design.",
        specifications: {
            gsm: "370-410",
            material: "Silk Blend with Gold Embroidery",
            width: "Bandhgala Jacket",
            colors: "Navy Blue with Gold Work",
            origin: "India"
        },
        supplier: "Royal Heritage",
        rating: 4.9,
        reviews: 198,
        onSale: true,
        savings: 21
    },
    {
        id: 16,
        name: "Red Silk Kurta Set",
        category: "men",
        price: 4200,
        originalPrice: 5500,
        image: "images/men/men6.jpg.jpg",
        description: "Vibrant red silk kurta with gold embroidery and matching churidar, perfect for festive occasions.",
        specifications: {
            gsm: "200-250",
            material: "Pure Silk with Gold Work",
            width: "Kurta Set",
            colors: "Red with Gold Embroidery",
            origin: "India"
        },
        supplier: "Festive Wear Co.",
        rating: 4.6,
        reviews: 145,
        onSale: true,
        savings: 24
    },
    {
        id: 17,
        name: "Teal Blue Kurta Collection",
        category: "men",
        price: 3800,
        originalPrice: 4800,
        image: "images/men/men7.jpg.jpg",
        description: "Elegant teal blue kurta with intricate patterns and traditional styling, perfect for casual and semi-formal occasions.",
        specifications: {
            gsm: "180-220",
            material: "Cotton Silk Blend",
            width: "Kurta Set",
            colors: "Teal Blue with Pattern Work",
            origin: "India"
        },
        supplier: "Modern Ethnic",
        rating: 4.5,
        reviews: 98,
        onSale: true,
        savings: 21
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Add a simple test to verify JavaScript is working
    const testElement = document.getElementById('fabricGrid');
    if (testElement) {
        console.log('Found fabricGrid element, adding loading message');
        testElement.innerHTML = '<div class="col-12"><p class="text-center text-primary">🔄 Loading fabrics... JavaScript is working!</p></div>';
    } else {
        console.error('fabricGrid element not found!');
    }
    
    // Force display fabrics after a short delay
    setTimeout(function() {
        console.log('Timeout triggered, forcing fabric display');
        initializeApp();
        initializeInteractiveFeatures();
    }, 100);
});

// Initialize App Function
function initializeApp() {
    console.log('Initializing app...');
    fabricData = [...sampleFabrics];
    filteredFabrics = [...fabricData];
    
    console.log('Fabric data loaded:', fabricData.length, 'fabrics');
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    console.log('Current page:', currentPage);
    
    switch(currentPage) {
        case 'products':
            console.log('Initializing products page...');
            initializeProductsPage();
            break;
        case 'index':
            console.log('Initializing home page...');
            initializeHomePage();
            break;
        default:
            console.log('Initializing general page...');
            initializeGeneralPage();
    }
}

// Get Current Page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('products.html')) return 'products';
    if (path.includes('index.html') || path === '/') return 'index';
    return 'general';
}

// Initialize Products Page
function initializeProductsPage() {
    console.log('Setting up products page...');
    initializeFilters();
    initializeSearch();
    initializeSorting();
    initializePagination();
    
    // Handle URL parameters first
    handleURLParameters();
    
    // Then display fabrics
    console.log('About to display fabrics...');
    displayFabrics();
}

// Initialize Home Page
function initializeHomePage() {
    // Home page specific initialization
    console.log('Home page initialized');
}

// Initialize General Page
function initializeGeneralPage() {
    // General page initialization
    console.log('General page initialized');
}

// Display Fabrics
function displayFabrics() {
    console.log('Display fabrics called');
    const fabricGrid = document.getElementById('fabricGrid');
    console.log('Fabric grid element:', fabricGrid);
    
    if (!fabricGrid) {
        console.error('Fabric grid element not found!');
        return;
    }
    
    console.log('Displaying fabrics:', filteredFabrics.length);
    console.log('Men products:', filteredFabrics.filter(f => f.category === 'men').length);
    
    fabricGrid.innerHTML = '';
    
    filteredFabrics.forEach(fabric => {
        console.log('Creating card for:', fabric.name);
        const fabricCard = createFabricCard(fabric);
        fabricGrid.appendChild(fabricCard);
    });
    
    console.log('Fabric cards created, updating results...');
    updateResultsCount();
    updatePagination();
}

// Create Fabric Card
function createFabricCard(fabric) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    const savingsText = fabric.onSale ? 
        `<span class="badge bg-danger me-2">Save ${fabric.savings}%</span>` : '';
    
    col.innerHTML = `
        <div class="fabric-card h-100">
            <div class="fabric-image position-relative">
                ${savingsText}
                <img src="${fabric.image}" alt="${fabric.name}" class="img-fluid">
                <div class="product-overlay">
                    <div class="quick-actions">
                        <button class="btn btn-light btn-sm" onclick="viewFabricDetails(${fabric.id})">
                            <i class="fas fa-eye me-1"></i>View Details
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="orderNow(${fabric.id})">
                            <i class="fab fa-whatsapp me-1"></i>Order Now
                        </button>
                    </div>
                </div>
            </div>
            <div class="fabric-info p-3">
                <h5 class="fabric-name mb-2">${fabric.name}</h5>
                <p class="fabric-description text-muted small mb-2">${fabric.description}</p>
                <div class="fabric-specs mb-2">
                    <small class="text-muted">
                        <strong>GSM:</strong> ${fabric.specifications.gsm} | 
                        <strong>Width:</strong> ${fabric.specifications.width} | 
                        <strong>Origin:</strong> ${fabric.specifications.origin}
                    </small>
                </div>
                <div class="fabric-rating mb-2">
                    <div class="stars">
                        ${generateStars(fabric.rating)}
                    </div>
                    <small class="text-muted ms-2">${fabric.reviews} reviews</small>
                </div>
                <div class="fabric-price">
                    <span class="current-price h5 text-primary">₹${fabric.price.toLocaleString()}/meter</span>
                    ${fabric.onSale ? `<span class="original-price text-muted text-decoration-line-through ms-2">₹${fabric.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="fabric-supplier mt-2">
                    <small class="text-muted">Supplier: ${fabric.supplier}</small>
                </div>
                <!-- Always visible buttons below product info -->
                <div class="fabric-actions mt-3">
                    <button class="btn btn-outline-secondary btn-sm me-2" onclick="viewFabricDetails(${fabric.id})">
                        <i class="fas fa-eye me-1"></i>View Details
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="window.open('https://wa.me/919624113555?text=Hi! I am interested in ordering this product:%0A%0A*${fabric.name}*%0APrice: ₹${fabric.price.toLocaleString()}/meter%0A${fabric.onSale ? `Original Price: ₹${fabric.originalPrice.toLocaleString()} (Save ${fabric.savings}%)%0A` : ''}Description: ${fabric.description}%0A%0ASpecifications:%0A- GSM: ${fabric.specifications.gsm}%0A- Material: ${fabric.specifications.material}%0A- Width: ${fabric.specifications.width}%0A- Colors: ${fabric.specifications.colors}%0A- Origin: ${fabric.specifications.origin}%0A%0ASupplier: ${fabric.supplier}%0A%0APlease let me know about availability and ordering process. Thank you!', '_blank')">
                        <i class="fab fa-whatsapp me-1"></i>Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Generate Stars
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    
    return stars;
}

// Initialize Filters
function initializeFilters() {
    const filterInputs = document.querySelectorAll('.filter-option input[type="checkbox"]');
    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', applyFilters);
    }
}

// Apply Filters
function applyFilters() {
    const selectedCategories = getSelectedCategories();
    const priceRange = getPriceRange();
    
    filteredFabrics = fabricData.filter(fabric => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(fabric.category);
        const priceMatch = fabric.price >= priceRange.min && fabric.price <= priceRange.max;
        
        return categoryMatch && priceMatch;
    });
    
    displayFabrics();
}

// Get Selected Categories
function getSelectedCategories() {
    const selected = [];
    const categoryInputs = document.querySelectorAll('.filter-option input[type="checkbox"]:checked');
    
    // Check if "All Fabrics" is selected
    const allCheckbox = document.getElementById('cat-all');
    if (allCheckbox && allCheckbox.checked) {
        return []; // Return empty array to show all categories
    }
    
    categoryInputs.forEach(input => {
        if (input.value !== 'all') {
            selected.push(input.value);
        }
    });
    
    // If no categories are selected via checkboxes, check URL parameter
    if (selected.length === 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category === 'lehengas') {
            selected.push('lehenga');
        } else if (category === 'sarees') {
            selected.push('sarees');
        } else if (category === 'men') {
            selected.push('men');
        } else if (category === 'sherwanis' || category === 'kurta-sets' || category === 'nehru-jackets' || category === 'indo-western') {
            selected.push('men');
        } else if (category) {
            selected.push(category);
        }
    }
    
    return selected;
}

// Get Price Range
function getPriceRange() {
    const priceRange = document.getElementById('priceRange');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    
    if (priceRange) {
        return {
            min: parseInt(minPrice?.value) || 0,
            max: parseInt(priceRange.value) || 10000
        };
    }
    
    return { min: 0, max: 10000 };
}

// Initialize Search
function initializeSearch() {
    const searchInput = document.getElementById('fabricSearch');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

// Handle Search
function handleSearch() {
    const searchTerm = document.getElementById('fabricSearch').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredFabrics = [...fabricData];
    } else {
        filteredFabrics = fabricData.filter(fabric => 
            fabric.name.toLowerCase().includes(searchTerm) ||
            fabric.description.toLowerCase().includes(searchTerm) ||
            fabric.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFabrics();
}

// Initialize Sorting
function initializeSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', applySorting);
    }
}

// Apply Sorting
function applySorting() {
    const sortValue = document.getElementById('sortSelect').value;
    
    switch(sortValue) {
        case 'price-low':
            filteredFabrics.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredFabrics.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredFabrics.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredFabrics.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredFabrics.sort((a, b) => b.id - a.id);
            break;
        default:
            // Keep original order
            break;
    }
    
    displayFabrics();
}

// Initialize Pagination
function initializePagination() {
    // Simple pagination implementation
    updatePagination();
}

// Update Pagination
function updatePagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredFabrics.length / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="btn btn-outline-primary btn-sm me-1" onclick="goToPage(${i})">
                ${i}
            </button>
        `;
    }
    
    pagination.innerHTML = paginationHTML;
}

// Go to Page
function goToPage(page) {
    // Simple pagination - for now just show all items
    displayFabrics();
}

// Update Results Count
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${filteredFabrics.length} fabrics found`;
    }
}

// Handle URL Parameters
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        // Check the appropriate checkbox
        if (category === 'lehengas') {
            const lehengaCheckbox = document.getElementById('cat-lehenga');
            if (lehengaCheckbox) {
                lehengaCheckbox.checked = true;
            }
            // Uncheck "All Fabrics"
            const allCheckbox = document.getElementById('cat-all');
            if (allCheckbox) {
                allCheckbox.checked = false;
            }
        } else if (category === 'sarees') {
            const sareesCheckbox = document.getElementById('cat-sarees');
            if (sareesCheckbox) {
                sareesCheckbox.checked = true;
            }
            // Uncheck "All Fabrics"
            const allCheckbox = document.getElementById('cat-all');
            if (allCheckbox) {
                allCheckbox.checked = false;
            }
        } else if (category === 'men') {
            const menCheckbox = document.getElementById('cat-men');
            if (menCheckbox) {
                menCheckbox.checked = true;
            }
            // Uncheck "All Fabrics"
            const allCheckbox = document.getElementById('cat-all');
            if (allCheckbox) {
                allCheckbox.checked = false;
            }
        } else if (category === 'sherwanis' || category === 'kurta-sets' || category === 'nehru-jackets' || category === 'indo-western') {
            // These are men's subcategories, so check the men checkbox
            const menCheckbox = document.getElementById('cat-men');
            if (menCheckbox) {
                menCheckbox.checked = true;
            }
            // Uncheck "All Fabrics"
            const allCheckbox = document.getElementById('cat-all');
            if (allCheckbox) {
                allCheckbox.checked = false;
            }
        }
        
        // Filter by category - handle both 'lehenga' and 'lehengas'
        filteredFabrics = fabricData.filter(fabric => {
            // Handle both singular and plural forms
            if (category === 'lehengas' && fabric.category === 'lehenga') {
                return true;
            }
            // Handle men's subcategories
            if ((category === 'sherwanis' || category === 'kurta-sets' || category === 'nehru-jackets' || category === 'indo-western') && fabric.category === 'men') {
                return true;
            }
            return fabric.category === category;
        });
        displayFabrics();
    }
}

// Interactive Features
function initializeInteractiveFeatures() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize modals
    initializeModals();
    
    // Add event listeners for Order Now buttons
    setTimeout(function() {
        console.log('🔧 Setting up Order Now button listeners...');
        const orderButtons = document.querySelectorAll('.order-now-btn');
        console.log('🔍 Found', orderButtons.length, 'Order Now buttons');
        
        orderButtons.forEach(function(button, index) {
            console.log(`🔘 Button ${index + 1}:`, button);
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🖱️ Order Now button clicked via event listener!');
                const fabricId = this.getAttribute('data-fabric-id');
                console.log('🆔 Fabric ID from data attribute:', fabricId);
                orderNow(fabricId);
            });
        });
    }, 1000);
}

// Initialize Modals
function initializeModals() {
    // Login modal
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Register modal
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Inquiry modal
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', handleInquiry);
    }
}

// Modal Functions
function openLoginModal() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

function openRegisterModal() {
    const modal = new bootstrap.Modal(document.getElementById('registerModal'));
    modal.show();
}

function openInquiryModal() {
    const modal = new bootstrap.Modal(document.getElementById('inquiryModal'));
    modal.show();
}

// Form Handlers
function handleLogin(e) {
    e.preventDefault();
    // Handle login logic
    console.log('Login form submitted');
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
}

function handleRegister(e) {
    e.preventDefault();
    // Handle registration logic
    console.log('Register form submitted');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
}

function handleInquiry(e) {
    e.preventDefault();
    // Handle inquiry logic
    console.log('Inquiry form submitted');
    bootstrap.Modal.getInstance(document.getElementById('inquiryModal')).hide();
}

// WhatsApp Order Function
// Order Now Function - WhatsApp Integration
function orderNow(fabricId) {
    console.log('🎯 Order Now clicked for fabric ID:', fabricId);
    console.log('🔍 Current fabricData:', fabricData);
    
    const fabric = fabricData.find(f => f.id === fabricId);
    if (fabric) {
        console.log('✅ Found fabric:', fabric.name);
        console.log('📱 Creating WhatsApp message...');
        const message = `Hi! I'm interested in ordering this fabric:

*${fabric.name}*
Price: ₹${fabric.price.toLocaleString()}/meter
${fabric.onSale ? `Original Price: ₹${fabric.originalPrice.toLocaleString()} (Save ${fabric.savings}%)` : ''}

Description: ${fabric.description}

Specifications:
- GSM: ${fabric.specifications.gsm}
- Material: ${fabric.specifications.material}
- Width: ${fabric.specifications.width}
- Colors: ${fabric.specifications.colors}
- Origin: ${fabric.specifications.origin}

Supplier: ${fabric.supplier}

Please let me know about availability and ordering process. Thank you!`;

        const whatsappUrl = `https://wa.me/919624113555?text=${encodeURIComponent(message)}`;
        console.log('🔗 WhatsApp URL created:', whatsappUrl);
        window.open(whatsappUrl, '_blank');
        console.log('✅ WhatsApp opened successfully!');
    } else {
        console.error('❌ Fabric not found for ID:', fabricId);
        console.log('🔍 Available fabric IDs:', fabricData.map(f => f.id));
        alert('Sorry, there was an error finding this product. Please try again.');
    }
}

// Cart Functions (kept for compatibility)
function addToCart(fabricId) {
    // Redirect to WhatsApp instead
    orderNow(fabricId);
}

function openCart() {
    console.log('Opening cart');
    // Cart logic here
}

function openWishlist() {
    console.log('Opening wishlist');
    // Wishlist logic here
}

// Fabric Details
function viewFabricDetails(fabricId) {
    const fabric = fabricData.find(f => f.id === fabricId);
    if (fabric) {
        // Open fabric details modal or navigate to details page
        console.log('Viewing details for:', fabric.name);
    }
}

// Filter Functions
function toggleFilterSection(element) {
    const options = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        options.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

function clearAllFilters() {
    // Reset all filter inputs
    const filterInputs = document.querySelectorAll('.filter-option input[type="checkbox"]');
    filterInputs.forEach(input => {
        input.checked = false;
    });
    
    // Reset price range
    const priceRange = document.getElementById('priceRange');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    
    if (priceRange) {
        priceRange.value = 5000;
    }
    if (minPrice) {
        minPrice.value = 500;
    }
    if (maxPrice) {
        maxPrice.value = 5000;
    }
    
    // Reset search
    const searchInput = document.getElementById('fabricSearch');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset sorting
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'featured';
    }
    
    // Reset filters
    filteredFabrics = [...fabricData];
    displayFabrics();
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fallback initialization with timeout
setTimeout(function() {
    const fabricGrid = document.getElementById('fabricGrid');
    if (fabricGrid && fabricGrid.innerHTML.includes('Loading fabrics')) {
        console.log('Fallback initialization triggered');
        displayFabrics();
    }
}, 2000);

// Test function to verify buttons are working
function testOrderNow() {
    console.log('🧪 Testing Order Now function...');
    if (fabricData.length > 0) {
        console.log('🔍 Testing with first fabric:', fabricData[0]);
        orderNow(fabricData[0].id);
    } else {
        console.log('❌ No fabric data available for testing');
    }
}

// Simple test function
function testClick() {
    console.log('🖱️ Test click function called!');
    alert('Test click is working!');
}

// Direct WhatsApp order function
function orderNowDirect(fabricId) {
    console.log('🎯 Order Now Direct clicked for fabric ID:', fabricId);
    console.log('🔍 Current fabricData:', fabricData);
    console.log('🔍 fabricData length:', fabricData ? fabricData.length : 'undefined');
    
    const fabric = fabricData.find(f => f.id === fabricId);
    console.log('🔍 Found fabric:', fabric);
    
    if (fabric) {
        console.log('✅ Found fabric:', fabric.name);
        const message = `Hi! I am interested in ordering ${fabric.name} - Price: ₹${fabric.price.toLocaleString()}/meter. Please tell me more about availability and ordering process.`;
        console.log('📝 Message:', message);
        
        const whatsappUrl = `https://wa.me/919624113555?text=${encodeURIComponent(message)}`;
        console.log('🔗 Opening WhatsApp:', whatsappUrl);
        
        try {
            window.open(whatsappUrl, '_blank');
            console.log('✅ WhatsApp window opened successfully!');
        } catch (error) {
            console.error('❌ Error opening WhatsApp:', error);
            alert('Error opening WhatsApp. Please try again.');
        }
    } else {
        console.error('❌ Fabric not found for ID:', fabricId);
        console.log('🔍 Available fabric IDs:', fabricData ? fabricData.map(f => f.id) : 'No fabric data');
        alert('Sorry, there was an error finding this product. Please try again.');
    }
}

// Test WhatsApp function
function testWhatsApp() {
    console.log('📱 Testing WhatsApp directly...');
    window.open('https://wa.me/919624113555?text=Hi! This is a test message from BABISHA website.', '_blank');
}

// Export functions for global access
window.addToCart = addToCart;
window.orderNow = orderNow;
window.orderNowDirect = orderNowDirect;
window.testOrderNow = testOrderNow;
window.testClick = testClick;
window.testWhatsApp = testWhatsApp;
window.openCart = openCart;
window.openWishlist = openWishlist;
window.viewFabricDetails = viewFabricDetails;
window.toggleFilterSection = toggleFilterSection;
window.clearAllFilters = clearAllFilters;
window.openLoginModal = openLoginModal;

window.openRegisterModal = openRegisterModal;
window.openInquiryModal = openInquiryModal;
