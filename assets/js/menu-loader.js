/**
 * Menu Loader - Dynamically loads menu from config/menu.json
 */

(function() {
  'use strict';

  // Map dietary tags to display badges
  const dietaryBadges = {
    'vegetarian': 'Vegetarian',
    'vegan': 'Vegan',
    'gluten-free': 'Gluten-Free'
  };

  // Format price to display format
  function formatPrice(price) {
    return '$' + price.toFixed(2);
  }

  // Get badge text for item
  function getBadge(item) {
    if (item.popular) {
      return 'Popular';
    }
    // Check for dietary badges
    if (item.dietary && item.dietary.length > 0) {
      if (item.dietary.includes('vegan')) return 'Vegan';
      if (item.dietary.includes('vegetarian')) return 'Vegetarian';
      if (item.dietary.includes('gluten-free')) return 'Gluten-Free';
    }
    return null;
  }

  // Create menu item HTML
  function createMenuItem(item) {
    const badge = getBadge(item);
    const badgeHtml = badge ? `<span class="badge label-1">${badge}</span>` : '';

    return `
      <li>
        <div class="menu-card hover:card">
          <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
            <img src="${item.image || './assets/images/menu/menu-1.png'}" width="100" height="100" loading="lazy" alt="${item.name}" class="img-cover">
          </figure>
          <div>
            <div class="title-wrapper">
              <h3 class="title-3">
                <a href="#" class="card-title">${item.name}</a>
              </h3>
              ${badgeHtml}
              <span class="span title-2">${formatPrice(item.price)}</span>
            </div>
            <p class="card-text label-1">
              ${item.description}
            </p>
          </div>
        </div>
      </li>
    `;
  }

  // Create menu section HTML
  function createMenuSection(category, index) {
    const bgClass = index % 2 === 1 ? ' bg-black-10' : '';
    const shapeHtml = index % 2 === 0
      ? `<img src="./assets/images/shapes/shape-5.png" width="921" height="1036" loading="lazy" alt="shape" class="shape shape-2 move-anim">`
      : `<img src="./assets/images/shapes/shape-6.png" width="343" height="345" loading="lazy" alt="shape" class="shape shape-3 move-anim">`;

    const itemsHtml = category.items.map(item => createMenuItem(item)).join('');

    return `
      <section class="section menu${bgClass}" aria-label="${category.id}-menu" id="${category.id}">
        <div class="container">
          <p class="section-subtitle text-center label-2">${category.description}</p>
          <h2 class="headline-1 section-title text-center">${category.name}</h2>
          <ul class="grid-list">
            ${itemsHtml}
          </ul>
          ${shapeHtml}
        </div>
      </section>
    `;
  }

  // Render the full menu
  function renderMenu(menuData, container) {
    const sectionsHtml = menuData.categories.map((category, index) =>
      createMenuSection(category, index)
    ).join('');

    container.innerHTML = sectionsHtml;
  }

  // Render popular items for homepage preview
  function renderMenuPreview(menuData, container, limit = 6) {
    // Get all popular items
    const popularItems = [];
    menuData.categories.forEach(category => {
      category.items.forEach(item => {
        if (item.popular) {
          popularItems.push(item);
        }
      });
    });

    // Take first 'limit' items
    const previewItems = popularItems.slice(0, limit);
    const itemsHtml = previewItems.map(item => createMenuItem(item)).join('');

    container.innerHTML = itemsHtml;
  }

  // Load menu data and render
  async function loadMenu() {
    try {
      const response = await fetch('./config/menu.json');
      if (!response.ok) {
        throw new Error('Failed to load menu data');
      }
      const menuData = await response.json();

      // Check if we're on the menu page (full menu)
      const menuContainer = document.getElementById('menu-container');
      if (menuContainer) {
        renderMenu(menuData, menuContainer);
      }

      // Check if we're on homepage (preview)
      const menuPreview = document.getElementById('menu-preview');
      if (menuPreview) {
        renderMenuPreview(menuData, menuPreview);
      }

    } catch (error) {
      console.error('Error loading menu:', error);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
  } else {
    loadMenu();
  }

})();
