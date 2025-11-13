// AutoVista Digital Showroom - Main JavaScript
// Handles all interactive functionality across the website

// Global state management
const AutoVista = {
    vehicles: [],
    filteredVehicles: [],
    comparisonList: [],
    bookingData: {},
    currentPage: '',
    
    // Initialize the application
    init() {
        this.loadVehicleData();
        this.initializeCurrentPage();
        this.setupGlobalEventListeners();
        this.initializeAnimations();
    },
    
    // Load vehicle database
    loadVehicleData() {
        this.vehicles = [
            // Motorcycles
            {
                id: 1,
                name: 'Yamaha YZF-R7',
                brand: 'Yamaha',
                type: 'motorcycle',
                category: 'sport',
                price: 9199,
                engine: '689cc',
                power: '73 hp',
                torque: '50 lb-ft',
                mileage: '58 mpg',
                transmission: '6-speed',
                weight: '414 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/18fa37641ac9fce9886e489fd5a03ad86ff0a1c1.jpg',
                availability: 'in-stock',
                stock: 8,
                rating: 4.8,
                features: ['Quick Shifter', 'ABS', 'LED Lighting', 'Digital Display']
            },
            {
                id: 2,
                name: 'Honda CBR600RR',
                brand: 'Honda',
                type: 'motorcycle',
                category: 'sport',
                price: 12999,
                engine: '599cc',
                power: '118 hp',
                torque: '48 lb-ft',
                mileage: '42 mpg',
                transmission: '6-speed',
                weight: '410 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/aeab684fe357f60ba14e041bfd308566dc2292d7.JPG',
                availability: 'in-stock',
                stock: 5,
                rating: 4.9,
                features: ['Traction Control', 'ABS', 'Quick Shifter', 'Racing ECU']
            },
            {
                id: 3,
                name: 'Kawasaki Ninja ZX-10R',
                brand: 'Kawasaki',
                type: 'motorcycle',
                category: 'sport',
                price: 15999,
                engine: '998cc',
                power: '197 hp',
                torque: '84 lb-ft',
                mileage: '38 mpg',
                transmission: '6-speed',
                weight: '456 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/b3f6b4ed1838d18796094d28f06195360d2aa1a3.JPG',
                availability: 'low-stock',
                stock: 2,
                rating: 4.9,
                features: ['Electronic Suspension', 'Launch Control', 'Cornering ABS', 'Quick Shifter']
            },
            {
                id: 4,
                name: 'Suzuki GSX-R750',
                brand: 'Suzuki',
                type: 'motorcycle',
                category: 'sport',
                price: 12999,
                engine: '750cc',
                power: '148 hp',
                torque: '64 lb-ft',
                mileage: '44 mpg',
                transmission: '6-speed',
                weight: '408 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/www.suzuki-china.com/19770d7e7e5b211b286ddb7d88e41aadebda0013.jpg',
                availability: 'in-stock',
                stock: 6,
                rating: 4.7,
                features: ['Suzuki Drive Mode', 'ABS', 'LED Lighting', 'Digital Display']
            },
            {
                id: 5,
                name: 'Ducati Panigale V4',
                brand: 'Ducati',
                type: 'motorcycle',
                category: 'sport',
                price: 21999,
                engine: '1103cc',
                power: '214 hp',
                torque: '91 lb-ft',
                mileage: '35 mpg',
                transmission: '6-speed',
                weight: '441 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/ducatilondon.co.uk/5329201a56037fa66191623f3cfdd8c15be9eb2c.jpeg',
                availability: 'pre-order',
                stock: 0,
                rating: 4.9,
                features: ['Electronics Package', 'Quick Shifter', 'Ohlins Suspension', 'Racing Modes']
            },
            {
                id: 6,
                name: 'BMW S1000RR',
                brand: 'BMW',
                type: 'motorcycle',
                category: 'sport',
                price: 18999,
                engine: '999cc',
                power: '205 hp',
                torque: '83 lb-ft',
                mileage: '40 mpg',
                transmission: '6-speed',
                weight: '434 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/www.cycleworld.com/2907ad5afeed9dd38c15089f1b0e5f36083e0bd9.jpg',
                availability: 'in-stock',
                stock: 4,
                rating: 4.8,
                features: ['Dynamic Traction Control', 'ABS Pro', 'Quick Shifter', 'Riding Modes']
            },
            {
                id: 7,
                name: 'Triumph Daytona 660',
                brand: 'Triumph',
                type: 'motorcycle',
                category: 'sport',
                price: 9195,
                engine: '660cc',
                power: '95 hp',
                torque: '51 lb-ft',
                mileage: '49 mpg',
                transmission: '6-speed',
                weight: '440 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/justinsomnia.org/a1f499f1b5bd38d75c0ab0fd563d834f4352d135.jpg',
                availability: 'in-stock',
                stock: 7,
                rating: 4.6,
                features: ['Three Riding Modes', 'ABS', 'Traction Control', 'Quick Shifter']
            },
            {
                id: 8,
                name: 'Aprilia RS 457',
                brand: 'Aprilia',
                type: 'motorcycle',
                category: 'sport',
                price: 6899,
                engine: '457cc',
                power: '47 hp',
                torque: '32 lb-ft',
                mileage: '55 mpg',
                transmission: '6-speed',
                weight: '385 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/motoclubla.com/b1cd23a729ac7fb4439cd78786bb428bc89c762e.jpg',
                availability: 'in-stock',
                stock: 9,
                rating: 4.5,
                features: ['LED Lighting', 'ABS', 'Digital Display', 'Sport Tuning']
            },
            {
                id: 9,
                name: 'Royal Enfield Guerrilla 450',
                brand: 'Royal Enfield',
                type: 'motorcycle',
                category: 'standard',
                price: 5299,
                engine: '452cc',
                power: '40 hp',
                torque: '30 lb-ft',
                mileage: '65 mpg',
                transmission: '6-speed',
                weight: '400 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/imgd.aeplcdn.com/4d69e1115115666c7aeef662ac260215b4d05398.jpg',
                availability: 'in-stock',
                stock: 12,
                rating: 4.3,
                features: ['Classic Design', 'Fuel Efficient', 'Comfortable Seat', 'Easy Handling']
            },
            {
                id: 10,
                name: 'Honda Rebel 500',
                brand: 'Honda',
                type: 'motorcycle',
                category: 'cruiser',
                price: 6499,
                engine: '471cc',
                power: '46 hp',
                torque: '32 lb-ft',
                mileage: '62 mpg',
                transmission: '6-speed',
                weight: '408 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/aeab684fe357f60ba14e041bfd308566dc2292d7.JPG',
                availability: 'in-stock',
                stock: 10,
                rating: 4.4,
                features: ['Low Seat Height', 'Classic Styling', 'Smooth Engine', 'Comfortable Ride']
            },
            {
                id: 11,
                name: 'Yamaha MT-07',
                brand: 'Yamaha',
                type: 'motorcycle',
                category: 'naked',
                price: 8599,
                engine: '689cc',
                power: '73 hp',
                torque: '50 lb-ft',
                mileage: '58 mpg',
                transmission: '6-speed',
                weight: '406 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/ultimatemotorcycling.com/d9caf04c2f4ba73fa0255af8e59e087c60389f44.jpg',
                availability: 'in-stock',
                stock: 6,
                rating: 4.7,
                features: ['Crossplane Engine', 'Lightweight', 'Agile Handling', 'Modern Design']
            },
            {
                id: 12,
                name: 'Kawasaki Z650',
                brand: 'Kawasaki',
                type: 'motorcycle',
                category: 'naked',
                price: 7899,
                engine: '649cc',
                power: '67 hp',
                torque: '49 lb-ft',
                mileage: '55 mpg',
                transmission: '6-speed',
                weight: '412 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/cdpcdn.dx1app.com/1d574bd8f24621cf41a660d06ead8106c1336f8d.jpg',
                availability: 'low-stock',
                stock: 3,
                rating: 4.5,
                features: ['Sugomi Design', 'Assist Clutch', 'ABS', 'Digital Display']
            },
            
            // Scooters
            {
                id: 13,
                name: 'Honda PCX125',
                brand: 'Honda',
                type: 'scooter',
                category: 'commuter',
                price: 3699,
                engine: '125cc',
                power: '13 hp',
                torque: '9 lb-ft',
                mileage: '100 mpg',
                transmission: 'CVT',
                weight: '289 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/aeab684fe357f60ba14e041bfd308566dc2292d7.JPG',
                availability: 'in-stock',
                stock: 15,
                rating: 4.2,
                features: ['Idling Stop', 'USB Charger', 'Large Storage', 'Comfortable Seat']
            },
            {
                id: 14,
                name: 'Yamaha Aerox',
                brand: 'Yamaha',
                type: 'scooter',
                category: 'sport',
                price: 2899,
                engine: '155cc',
                power: '15 hp',
                torque: '11 lb-ft',
                mileage: '85 mpg',
                transmission: 'CVT',
                weight: '248 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/18fa37641ac9fce9886e489fd5a03ad86ff0a1c1.jpg',
                availability: 'in-stock',
                stock: 18,
                rating: 4.1,
                features: ['Blue Core Engine', 'Smart Key', 'Digital Display', 'Sporty Design']
            },
            {
                id: 15,
                name: 'Vespa GTS 300',
                brand: 'Vespa',
                type: 'scooter',
                category: 'premium',
                price: 6999,
                engine: '278cc',
                power: '21 hp',
                torque: '22 lb-ft',
                mileage: '70 mpg',
                transmission: 'CVT',
                weight: '348 lbs',
                image: 'https://kimi-web-img.moonshot.cn/img/upload.wikimedia.org/18fa37641ac9fce9886e489fd5a03ad86ff0a1c1.jpg',
                availability: 'in-stock',
                stock: 8,
                rating: 4.6,
                features: ['Classic Design', 'Premium Materials', 'ABS', 'Comfortable Ride']
            }
        ];
        
        this.filteredVehicles = [...this.vehicles];
    },
    
    // Initialize page-specific functionality
    initializeCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('explore.html')) {
            this.initExplorePage();
        } else if (path.includes('booking.html')) {
            this.initBookingPage();
        } else if (path.includes('reviews.html')) {
            this.initReviewsPage();
        } else if (path.includes('contact.html')) {
            this.initContactPage();
        } else {
            this.initHomePage();
        }
    },
    
    // Home page initialization
    initHomePage() {
        this.setupHeroAnimations();
        this.displayFeaturedVehicles();
        this.setupQuickActions();
    },
    
    // Explore page initialization
    initExplorePage() {
        this.setupFilters();
        this.displayVehicles();
        this.setupComparison();
        this.setupSearch();
    },
    
    // Booking page initialization
    initBookingPage() {
        this.setupBookingForm();
        this.loadBookingOptions();
    },
    
    // Reviews page initialization
    initReviewsPage() {
        this.displayReviews();
        this.setupReviewForm();
    },
    
    // Contact page initialization
    initContactPage() {
        this.setupContactForm();
        this.initMap();
    },
    
    // Hero section animations
    setupHeroAnimations() {
        if (typeof Typed !== 'undefined') {
            new Typed('#hero-tagline', {
                strings: [
                    'Premium Two-Wheeler Showroom',
                    'Your Journey Starts Here',
                    'Excellence in Every Ride'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    },
    
    // Display featured vehicles on home page
    displayFeaturedVehicles() {
        const container = document.getElementById('featured-vehicles');
        if (!container) return;
        
        const featured = this.vehicles.filter(v => v.rating >= 4.7).slice(0, 6);
        
        container.innerHTML = featured.map(vehicle => `
            <div class="vehicle-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div class="relative">
                    <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-4 right-4">
                        <span class="availability-badge ${vehicle.availability} px-3 py-1 rounded-full text-xs font-semibold">
                            ${this.getAvailabilityText(vehicle.availability)}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${vehicle.name}</h3>
                    <p class="text-gray-600 mb-4">${vehicle.engine} • ${vehicle.power}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-red-600">$${vehicle.price.toLocaleString()}</span>
                        <button onclick="AutoVista.viewVehicle(${vehicle.id})" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    // Setup filtering functionality
    setupFilters() {
        const filterContainer = document.getElementById('filter-container');
        if (!filterContainer) return;
        
        // Brand filter
        const brands = [...new Set(this.vehicles.map(v => v.brand))];
        const brandFilter = this.createFilter('Brand', 'brand', brands);
        filterContainer.appendChild(brandFilter);
        
        // Type filter
        const types = [...new Set(this.vehicles.map(v => v.type))];
        const typeFilter = this.createFilter('Type', 'type', types);
        filterContainer.appendChild(typeFilter);
        
        // Category filter
        const categories = [...new Set(this.vehicles.map(v => v.category))];
        const categoryFilter = this.createFilter('Category', 'category', categories);
        filterContainer.appendChild(categoryFilter);
        
        // Price range filter
        const priceFilter = this.createPriceFilter();
        filterContainer.appendChild(priceFilter);
        
        // Reset button
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset Filters';
        resetBtn.className = 'w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors';
        resetBtn.onclick = () => this.resetFilters();
        filterContainer.appendChild(resetBtn);
    },
    
    // Create filter component
    createFilter(label, key, options) {
        const container = document.createElement('div');
        container.className = 'mb-6';
        
        container.innerHTML = `
            <h4 class="font-semibold mb-3 text-gray-900">${label}</h4>
            <div class="space-y-2">
                ${options.map(option => `
                    <label class="flex items-center">
                        <input type="checkbox" value="${option}" onchange="AutoVista.applyFilters()" 
                               class="mr-2 rounded text-red-600 focus:ring-red-500">
                        <span class="text-gray-700">${option.charAt(0).toUpperCase() + option.slice(1)}</span>
                    </label>
                `).join('')}
            </div>
        `;
        
        return container;
    },
    
    // Create price range filter
    createPriceFilter() {
        const container = document.createElement('div');
        container.className = 'mb-6';
        
        container.innerHTML = `
            <h4 class="font-semibold mb-3 text-gray-900">Price Range</h4>
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">Min: $<span id="min-price-display">0</span></span>
                    <span class="text-sm text-gray-600">Max: $<span id="max-price-display">25000</span></span>
                </div>
                <input type="range" id="min-price" min="0" max="25000" value="0" 
                       oninput="AutoVista.updatePriceRange()" class="w-full">
                <input type="range" id="max-price" min="0" max="25000" value="25000" 
                       oninput="AutoVista.updatePriceRange()" class="w-full">
            </div>
        `;
        
        return container;
    },
    
    // Apply all active filters
    applyFilters() {
        const brandFilters = Array.from(document.querySelectorAll('input[type="checkbox"][value]'))
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        const minPrice = parseInt(document.getElementById('min-price')?.value || 0);
        const maxPrice = parseInt(document.getElementById('max-price')?.value || 25000);
        
        this.filteredVehicles = this.vehicles.filter(vehicle => {
            const brandMatch = brandFilters.length === 0 || brandFilters.includes(vehicle.brand) || 
                              brandFilters.includes(vehicle.type) || brandFilters.includes(vehicle.category);
            const priceMatch = vehicle.price >= minPrice && vehicle.price <= maxPrice;
            
            return brandMatch && priceMatch;
        });
        
        this.displayVehicles();
    },
    
    // Update price range display
    updatePriceRange() {
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;
        
        document.getElementById('min-price-display').textContent = minPrice;
        document.getElementById('max-price-display').textContent = maxPrice;
        
        this.applyFilters();
    },
    
    // Reset all filters
    resetFilters() {
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.getElementById('min-price').value = 0;
        document.getElementById('max-price').value = 25000;
        this.updatePriceRange();
    },
    
    // Display vehicles in grid
    displayVehicles() {
        const container = document.getElementById('vehicles-grid');
        if (!container) return;
        
        const vehiclesToShow = this.filteredVehicles.length > 0 ? this.filteredVehicles : this.vehicles;
        
        container.innerHTML = vehiclesToShow.map(vehicle => `
            <div class="vehicle-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div class="relative">
                    <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-4 right-4">
                        <span class="availability-badge ${vehicle.availability} px-3 py-1 rounded-full text-xs font-semibold">
                            ${this.getAvailabilityText(vehicle.availability)}
                        </span>
                    </div>
                    <div class="absolute top-4 left-4">
                        <button onclick="AutoVista.toggleComparison(${vehicle.id})" 
                                class="comparison-btn bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100 transition-all">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${vehicle.name}</h3>
                    <p class="text-gray-600 mb-2">${vehicle.brand} • ${vehicle.engine}</p>
                    <p class="text-gray-600 mb-4">${vehicle.power} • ${vehicle.mileage}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-2xl font-bold text-red-600">$${vehicle.price.toLocaleString()}</span>
                        <div class="flex items-center">
                            <span class="text-yellow-500">★</span>
                            <span class="ml-1 text-sm text-gray-600">${vehicle.rating}</span>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <button onclick="AutoVista.viewVehicle(${vehicle.id})" 
                                class="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                            View Details
                        </button>
                        <button onclick="AutoVista.bookTestRide(${vehicle.id})" 
                                class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                            Book Ride
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Update results count
        const countElement = document.getElementById('results-count');
        if (countElement) {
            countElement.textContent = `Showing ${vehiclesToShow.length} vehicles`;
        }
    },
    
    // Setup comparison functionality
    setupComparison() {
        const comparisonContainer = document.getElementById('comparison-container');
        if (!comparisonContainer) return;
        
        this.updateComparisonDisplay();
    },
    
    // Toggle vehicle in comparison
    toggleComparison(vehicleId) {
        const index = this.comparisonList.indexOf(vehicleId);
        if (index > -1) {
            this.comparisonList.splice(index, 1);
        } else if (this.comparisonList.length < 3) {
            this.comparisonList.push(vehicleId);
        } else {
            this.showNotification('Maximum 3 vehicles can be compared', 'warning');
            return;
        }
        
        this.updateComparisonDisplay();
        this.updateComparisonButtons();
    },
    
    // Update comparison display
    updateComparisonDisplay() {
        const container = document.getElementById('comparison-container');
        if (!container || this.comparisonList.length === 0) {
            if (container) container.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        const vehicles = this.comparisonList.map(id => this.vehicles.find(v => v.id === id));
        
        container.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg p-6 mt-8">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900">Vehicle Comparison</h3>
                    <button onclick="AutoVista.clearComparison()" class="text-red-600 hover:text-red-700">
                        Clear All
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-semibold">Specification</th>
                                ${vehicles.map(v => `<th class="text-center py-3 px-4 font-semibold">${v.name}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="py-3 px-4 font-medium">Price</td>
                                ${vehicles.map(v => `<td class="py-3 px-4 text-center text-red-600 font-bold">$${v.price.toLocaleString()}</td>`).join('')}
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4 font-medium">Engine</td>
                                ${vehicles.map(v => `<td class="py-3 px-4 text-center">${v.engine}</td>`).join('')}
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4 font-medium">Power</td>
                                ${vehicles.map(v => `<td class="py-3 px-4 text-center">${v.power}</td>`).join('')}
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4 font-medium">Mileage</td>
                                ${vehicles.map(v => `<td class="py-3 px-4 text-center">${v.mileage}</td>`).join('')}
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4 font-medium">Weight</td>
                                ${vehicles.map(v => `<td class="py-3 px-4 text-center">${v.weight}</td>`).join('')}
                            </tr>
                            <tr>
                                <td class="py-3 px-4 font-medium">Rating</td>
                                ${vehicles.map(v => `<td class="py-3 px-4 text-center">${v.rating}/5.0</td>`).join('')}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },
    
    // Update comparison button states
    updateComparisonButtons() {
        document.querySelectorAll('.comparison-btn').forEach(btn => {
            const vehicleId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
            if (this.comparisonList.includes(vehicleId)) {
                btn.classList.add('bg-red-600', 'text-white');
                btn.classList.remove('bg-white');
            } else {
                btn.classList.remove('bg-red-600', 'text-white');
                btn.classList.add('bg-white');
            }
        });
    },
    
    // Clear comparison
    clearComparison() {
        this.comparisonList = [];
        this.updateComparisonDisplay();
        this.updateComparisonButtons();
    },
    
    // Setup search functionality
    setupSearch() {
        const searchInput = document.getElementById('vehicle-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                this.filteredVehicles = this.vehicles.filter(vehicle => 
                    vehicle.name.toLowerCase().includes(query) ||
                    vehicle.brand.toLowerCase().includes(query) ||
                    vehicle.category.toLowerCase().includes(query)
                );
                this.displayVehicles();
            });
        }
    },
    
    // Booking form setup
    setupBookingForm() {
        const form = document.getElementById('booking-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitBooking();
            });
        }
    },
    
    // Load booking options
    loadBookingOptions() {
        const vehicleSelect = document.getElementById('vehicle-select');
        if (vehicleSelect) {
            vehicleSelect.innerHTML = this.vehicles.map(vehicle => 
                `<option value="${vehicle.id}">${vehicle.name} - $${vehicle.price.toLocaleString()}</option>`
            ).join('');
        }
        
        this.generateTimeSlots();
    },
    
    // Generate time slots for booking
    generateTimeSlots() {
        const timeSelect = document.getElementById('time-select');
        if (!timeSelect) return;
        
        const timeSlots = [];
        for (let hour = 9; hour <= 18; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                timeSlots.push(`<option value="${time}">${time}</option>`);
            }
        }
        
        timeSelect.innerHTML = timeSlots.join('');
    },
    
    // Submit booking form
    submitBooking() {
        const formData = new FormData(document.getElementById('booking-form'));
        const booking = {
            vehicleId: formData.get('vehicle'),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            date: formData.get('date'),
            time: formData.get('time'),
            reference: 'BK' + Date.now().toString().slice(-6)
        };
        
        // Simulate booking submission
        this.showBookingConfirmation(booking);
    },
    
    // Show booking confirmation
    showBookingConfirmation(booking) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-xl p-8 max-w-md mx-4">
                <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                    <p class="text-gray-600 mb-4">Your test ride has been successfully booked.</p>
                    <div class="bg-gray-50 rounded-lg p-4 mb-6">
                        <p class="text-sm text-gray-600 mb-2">Reference Number:</p>
                        <p class="text-lg font-bold text-red-600">${booking.reference}</p>
                    </div>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                            class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Reset form
        document.getElementById('booking-form').reset();
    },
    
    // View vehicle details
    viewVehicle(vehicleId) {
        const vehicle = this.vehicles.find(v => v.id === vehicleId);
        if (!vehicle) return;
        
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
                <div class="relative">
                    <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-64 object-cover">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                            class="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">${vehicle.name}</h2>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">Specifications</h4>
                            <ul class="space-y-1 text-sm text-gray-600">
                                <li>Engine: ${vehicle.engine}</li>
                                <li>Power: ${vehicle.power}</li>
                                <li>Torque: ${vehicle.torque}</li>
                                <li>Mileage: ${vehicle.mileage}</li>
                                <li>Weight: ${vehicle.weight}</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-2">Features</h4>
                            <ul class="space-y-1 text-sm text-gray-600">
                                ${vehicle.features.map(feature => `<li>• ${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-3xl font-bold text-red-600">$${vehicle.price.toLocaleString()}</span>
                        <div class="flex items-center">
                            <span class="text-yellow-500 text-xl">★</span>
                            <span class="ml-1 text-lg text-gray-600">${vehicle.rating}</span>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <button onclick="AutoVista.bookTestRide(${vehicle.id})" 
                                class="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                            Book Test Ride
                        </button>
                        <button onclick="AutoVista.toggleComparison(${vehicle.id})" 
                                class="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                            Add to Compare
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    },
    
    // Book test ride
    bookTestRide(vehicleId) {
        // Store vehicle ID for booking form
        localStorage.setItem('selectedVehicleId', vehicleId);
        window.location.href = 'booking.html';
    },
    
    // Get availability text
    getAvailabilityText(status) {
        const texts = {
            'in-stock': 'In Stock',
            'low-stock': 'Low Stock',
            'out-of-stock': 'Out of Stock',
            'pre-order': 'Pre-Order'
        };
        return texts[status] || status;
    },
    
    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
            type === 'success' ? 'bg-green-600' : 
            type === 'warning' ? 'bg-yellow-600' : 
            type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },
    
    // Setup global event listeners
    setupGlobalEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    // Initialize animations
    initializeAnimations() {
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AutoVista.init();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .availability-badge.in-stock {
        background-color: #059669;
        color: white;
    }
    
    .availability-badge.low-stock {
        background-color: #d97706;
        color: white;
    }
    
    .availability-badge.out-of-stock {
        background-color: #dc2626;
        color: white;
    }
    
    .availability-badge.pre-order {
        background-color: #6b7280;
        color: white;
    }
`;
document.head.appendChild(style);