/**
 * Business Configuration Loader
 * Loads business information from config/business.json and injects it into the page
 */

(function() {
  'use strict';

  // Inject CSS to hide configurable elements until config is loaded (prevents flash of default content)
  const style = document.createElement('style');
  style.textContent = '[data-config] { visibility: hidden; } .config-loaded [data-config] { visibility: visible; }';
  document.head.appendChild(style);

  // Determine the base path based on the current page location
  const getBasePath = () => {
    const path = window.location.pathname;
    // If we're in a subdirectory, adjust the path accordingly
    return './';
  };

  // Load the configuration file
  const loadConfig = async () => {
    try {
      const basePath = getBasePath();
      const response = await fetch(`${basePath}config/business.json`);
      if (!response.ok) {
        throw new Error(`Failed to load config: ${response.status}`);
      }
      const config = await response.json();
      applyConfig(config);
    } catch (error) {
      console.error('Error loading business configuration:', error);
      // Still reveal content with fallback values if config fails to load
      document.documentElement.classList.add('config-loaded');
    }
  };

  // Get a nested value from an object using dot notation
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  };

  // Apply configuration to elements with data-config attributes
  const applyConfig = (config) => {
    // Handle text content: data-config="path.to.value"
    document.querySelectorAll('[data-config]').forEach(element => {
      const configPath = element.getAttribute('data-config');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        // Check if value should be inserted as HTML (contains <br> or other HTML)
        if (typeof value === 'string' && value.includes('<')) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      }
    });

    // Handle href attributes: data-config-href="path.to.value"
    document.querySelectorAll('[data-config-href]').forEach(element => {
      const configPath = element.getAttribute('data-config-href');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        element.setAttribute('href', value);
      }
    });

    // Handle tel: links: data-config-tel="path.to.value"
    document.querySelectorAll('[data-config-tel]').forEach(element => {
      const configPath = element.getAttribute('data-config-tel');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        element.setAttribute('href', `tel:${value}`);
      }
    });

    // Handle mailto: links: data-config-mailto="path.to.value"
    document.querySelectorAll('[data-config-mailto]').forEach(element => {
      const configPath = element.getAttribute('data-config-mailto');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        element.setAttribute('href', `mailto:${value}`);
      }
    });

    // Handle src attributes: data-config-src="path.to.value"
    document.querySelectorAll('[data-config-src]').forEach(element => {
      const configPath = element.getAttribute('data-config-src');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        element.setAttribute('src', value);
      }
    });

    // Handle alt attributes: data-config-alt="path.to.value"
    document.querySelectorAll('[data-config-alt]').forEach(element => {
      const configPath = element.getAttribute('data-config-alt');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        element.setAttribute('alt', value);
      }
    });

    // Handle page title
    const titleElement = document.querySelector('title[data-config-title]');
    if (titleElement) {
      const titleTemplate = titleElement.getAttribute('data-config-title');
      const name = getNestedValue(config, 'name');
      const tagline = getNestedValue(config, 'tagline');
      if (name && tagline) {
        document.title = `${name} - ${tagline}`;
      }
    }

    // Handle meta tags
    document.querySelectorAll('meta[data-config-content]').forEach(element => {
      const configPath = element.getAttribute('data-config-content');
      const value = getNestedValue(config, configPath);
      if (value !== null) {
        element.setAttribute('content', value);
      }
    });

    // Reveal all config elements by adding class to html element
    document.documentElement.classList.add('config-loaded');

    // Dispatch a custom event when config is loaded
    window.dispatchEvent(new CustomEvent('configLoaded', { detail: config }));
  };

  // Make config globally accessible for other scripts
  window.BusinessConfig = {
    load: loadConfig,
    getNestedValue: getNestedValue
  };

  // Auto-load config when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadConfig);
  } else {
    loadConfig();
  }
})();
