// JavaScript to hide preloader after page load
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});
// JavaScript to set the active class dynamically
document.querySelectorAll('#navbar li a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});


const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', (event) => {
            event.preventDefault();
            // Close all other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                }
            });
            // Toggle the clicked dropdown
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const products = {
        sale: [
            { img: 'images/sa2.webp', name: 'Shade Shimmer', label: 'Sale', originalPrice: '$90', salePrice: '$45' },
            { img: 'images/sa4.webp', name: 'Glimmer Gaze', label: 'Sale' ,  originalPrice: '$60', salePrice: '$30' },
            { img: 'images/sa11.webp', name: 'Radiant Rays', label: 'Sale' , originalPrice: '$46', salePrice: '$23'},
            { img: 'images/sa8.webp', name: 'Sunlit Spectra', label: 'Sale' , originalPrice: '$80', salePrice: '$40' }
        ],
        'new-arrivals': [
            { img: 'images/winter1.webp', name: 'Noeme Paris Soma', label: 'Hot' , price: '$359' },
            { img: 'images/perfume13.webp', name: 'Jean Paul Gauliter So Scandal!', label: 'New' , price: '$399'},
            { img: 'images/perfume9.webp', name: 'Kohasaa Forever', label: 'New', price: '$30' },
            { img: 'images/perfume15.webp', name: 'Roberto Cavalli Florence', label: 'Sold' , price: '$277' }
        ],
        featured: [
            { img: 'images/sale1.jpg', name: 'Chic Steps', label: 'Hot' , price: '$25' },
            { img: 'images/sale2.jpg', name: 'Elegance Edge', label: 'Hot' , price: '$47' },
            { img: 'images/sale3.jpg', name: 'Trendy Treads', label: 'Hot' , price: '$30' },
            { img: 'images/sale4.jpg', name: 'Urban Stride', label: 'Sold'  , price: '$20'}
        ],
        'best-selling': [
            { img: 'images/clo1.jpg', name: 'Crimson Charm', label: 'Hot' , price: '$280' },
            { img: 'images/clo2.jpg', name: 'Blush Blossoms', label: 'Sold' , price: '$210' },
            { img: 'images/clo3.jpg', name: 'Azure Elegance', label: 'New' , price: '$350'},
            { img: 'images/clo4.jpg', name: 'Snowy Serenity', label: 'Sale' ,  originalPrice: '$444', salePrice: '$222'}
        ]
    };

    const productCategories = document.querySelectorAll('.product-category');
    const productList = document.querySelector('.product-list');

    productCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.getAttribute('data-category');
            displayProducts(products[categoryType]);

            // Remove the active class from all categories
            productCategories.forEach(cat => cat.classList.remove('active'));

            // Add the active class to the clicked category
            category.classList.add('active');
        });
    });

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            // Determine the label class based on the label text
            let labelClass = '';
            if (product.label.toLowerCase() === 'hot') {
                labelClass = 'label-hot';
            } else if (product.label.toLowerCase() === 'sale') {
                labelClass = 'label-sale';
            } else if (product.label.toLowerCase() === 'sold') {
                labelClass = 'label-soldout';
            } else if (product.label.toLowerCase() === 'new') {
                labelClass = 'label-new';
            } else {
                labelClass = 'label-default';
            }

            // HTML for product prices
            let priceHTML = '';
            if (product.label.toLowerCase() === 'sale') {
                priceHTML = `
                    <p class="product-price original-price">${product.originalPrice}</p>
                    <p class="product-price sale-price">${product.salePrice}</p>
                `;
            } else {
                priceHTML = `<p class="product-price">${product.price}</p>`;
            }

            productItem.innerHTML = `
                <span class="circle-label ${labelClass}">${product.label}</span>
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                ${priceHTML}
            `;
            productList.appendChild(productItem);
        });
    }

    // Display featured products by default and add active class to the corresponding category
    displayProducts(products.featured);
    document.querySelector('.product-category[data-category="featured"]').classList.add('active');
});