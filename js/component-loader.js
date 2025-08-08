// Component Loader for HTML Components
class ComponentLoader {
    constructor() {
        this.components = {};
    }

    // Load a component from a file
    async loadComponent(componentName, targetSelector) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentName}`);
            }
            
            const html = await response.text();
            const targetElement = document.querySelector(targetSelector);
            
            if (targetElement) {
                targetElement.innerHTML = html;
                // console.log(`Component ${componentName} loaded successfully into ${targetSelector}`);
                return true;
            } else {
                console.error(`Target element ${targetSelector} not found`);
                return false;
            }
        } catch (error) {
            console.error('Error loading component:', error);
            return false;
        }
    }

    // Replace existing menu-wrapper with the component
    async replaceMenuWrapper() {
        const existingMenu = document.querySelector('.menu-wrapper');
        if (existingMenu) {
            try {
                const response = await fetch('components/menu-wrapper.html');
                if (!response.ok) {
                    throw new Error('Failed to load menu-wrapper component');
                }
                
                const html = await response.text();
                existingMenu.outerHTML = html;
                // console.log('Menu wrapper replaced successfully');
                return true;
            } catch (error) {
                console.error('Error replacing menu wrapper:', error);
                return false;
            }
        }
        return false;
    }

    // Load component and replace existing element
    async loadAndReplace(componentName, existingSelector) {
        const existingElement = document.querySelector(existingSelector);
        if (existingElement) {
            return await this.loadComponent(componentName, existingSelector);
        }
        return false;
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const componentLoader = new ComponentLoader();
    
    // Auto-replace menu-wrapper if it exists
    componentLoader.replaceMenuWrapper();
    
    // Make it globally available
    window.ComponentLoader = componentLoader;
});

// Simple one-liner function for easy use
function includeMenu() {
    if (window.ComponentLoader) {
        return window.ComponentLoader.replaceMenuWrapper();
    }
    return false;
} 