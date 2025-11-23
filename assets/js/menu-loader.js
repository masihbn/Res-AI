/**
 * Menu Loader - Dynamically loads menu from config/menu.json
 * Compatible with the new menu.json format: data.menu_categories
 */

(function() {
  'use strict';

  // Format price to display format
  function formatPrice(price) {
    return '$' + price.toFixed(2);
  }

  // Generate slug ID from category name
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Get badge HTML for item (from badges array)
  function getBadgesHtml(item) {
    if (!item.badges || item.badges.length === 0) {
      return '';
    }
    // Show first badge only for cleaner UI
    return `<span class="badge label-1">${item.badges[0]}</span>`;
  }

  // SVG placeholder for menu items without images
  function getPlaceholderSvg() {
    return `
      <svg class="img-cover menu-placeholder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#1a1a1a"/>
        <g fill="none" stroke="#d4a373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <!-- Plate -->
          <ellipse cx="50" cy="62" rx="22" ry="6"/>
          <ellipse cx="50" cy="62" rx="17" ry="4"/>
          <!-- Cloche/Dome -->
          <path d="M28 62 Q28 45 50 42 Q72 45 72 62"/>
          <ellipse cx="50" cy="42" rx="3" ry="2"/>
          <!-- Steam -->
          <path d="M42 38 Q40 33 42 28" opacity="0.6"/>
          <path d="M50 36 Q48 31 50 26" opacity="0.6"/>
          <path d="M58 38 Q56 33 58 28" opacity="0.6"/>
        </g>
      </svg>
    `;
  }

  // Create menu item HTML
  function createMenuItem(item) {
    const badgeHtml = getBadgesHtml(item);
    const description = item.description || '';
    const hasImage = item.image && item.image.trim() !== '';

    const imageHtml = hasImage
      ? `<img src="${item.image}" loading="lazy" alt="${item.name}" class="img-cover">`
      : getPlaceholderSvg();

    return `
      <li>
        <div class="menu-card hover:card">
          <figure class="card-banner">
            ${imageHtml}
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
              ${description}
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

    const categoryId = slugify(category.category_name);
    const itemsHtml = category.items.map(item => createMenuItem(item)).join('');

    return `
      <section class="section menu${bgClass}" aria-label="${categoryId}-menu" id="${categoryId}">
        <div class="container">
          <h2 class="headline-1 section-title text-center">${category.category_name}</h2>
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
    // Support new format: data.menu_categories
    const categories = menuData.data?.menu_categories || menuData.categories || [];

    const sectionsHtml = categories.map((category, index) =>
      createMenuSection(category, index)
    ).join('');

    container.innerHTML = sectionsHtml;
  }

  // Render popular items for homepage preview
  function renderMenuPreview(menuData, container, limit = 6) {
    // Support new format: data.menu_categories
    const categories = menuData.data?.menu_categories || menuData.categories || [];

    // Get items with "Popular" badge or high ratings
    const popularItems = [];
    categories.forEach(category => {
      category.items.forEach(item => {
        // Check if item has "Popular" badge or high like percentage
        const isPopular = (item.badges && item.badges.includes('Popular')) ||
                         (item.like_percentage && item.like_percentage >= 90);
        if (isPopular) {
          popularItems.push(item);
        }
      });
    });

    // If no popular items found, take first items from each category
    if (popularItems.length === 0) {
      categories.forEach(category => {
        if (category.items.length > 0) {
          popularItems.push(category.items[0]);
        }
      });
    }

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
