// Pricing Card Component
class PricingCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        const { title, price, period, description, features, buttonText, featured, badge } = this.data;
        
        const card = document.createElement('div');
        card.className = `pricing-card ${featured ? 'featured' : ''}`;
        
        let badgeHTML = '';
        if (badge) {
            badgeHTML = `<span class="badge">${badge}</span>`;
        }

        let descriptionHTML = '';
        if (description) {
            descriptionHTML = `<p class="description">${description}</p>`;
        }

        card.innerHTML = `
            ${badgeHTML}
            <h2 class="title">${title}</h2>
            ${descriptionHTML}
            <div class="price">${price}<span class="price-period">/${period}</span></div>
            <ul class="features">
                ${features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn" onclick="handleButtonClick('${title}')">${buttonText}</button>
        `;

        return card;
    }
}

// Pricing data configuration
const pricingData = [
    {
        title: 'Basic Plan',
        price: '$9.99',
        period: 'month',
        description: 'Perfect for getting started',
        features: [
            '1 GB Storage',
            'Basic Support',
            'All Core Features',
            'Email Support'
        ],
        buttonText: 'Start Trial',
        featured: false
    },
    {
        title: 'Pro Plan',
        price: '$29.99',
        period: 'month',
        description: 'Best for growing businesses',
        features: [
            '10 GB Storage',
            'Priority Support',
            'All Core Features',
            'Advanced Analytics',
            'API Access',
            '24/7 Support'
        ],
        buttonText: 'Get Started',
        featured: true,
        badge: 'Popular'
    },
    {
        title: 'Enterprise Plan',
        price: '$99.99',
        period: 'month',
        description: 'For large organizations',
        features: [
            'Unlimited Storage',
            'Dedicated Support',
            'All Core Features',
            'Custom Integrations',
            'Advanced Security',
            'SLA Guarantee',
            'Custom Training',
            'Dedicated Account Manager'
        ],
        buttonText: 'Contact Sales',
        featured: false
    }
];

// Initialize pricing cards
function initPricingCards() {
    const container = document.getElementById('pricing-cards');
    
    if (!container) {
        console.error('Pricing cards container not found');
        return;
    }

    pricingData.forEach(data => {
        const cardComponent = new PricingCard(data);
        const cardElement = cardComponent.render();
        container.appendChild(cardElement);
    });
}

// Handle button click events
function handleButtonClick(planName) {
    console.log(`Selected plan: ${planName}`);
    // You can add your own logic here, e.g., redirect to signup, open modal, etc.
    alert(`You selected the ${planName}!`);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricingCards);
} else {
    initPricingCards();
}

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PricingCard, pricingData };
}
