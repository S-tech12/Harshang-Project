// Menu Component Loader
class MenuComponent {
    constructor() {
        this.menuHTML = `
      <div class="menu-wrapper">
        <div class="menu-content">

          <div class="menu-content__btm">
            <div class="menu-link__w">
              <div class="menu-link__overflow">
                <a id="about" href="#" class="menu-link__item w-inline-block">
                  <div data-w-id="abc70f94-5399-78d0-0d7a-f4324c80ca6f" class="menu-link no-trans">Sun</div>
                </a>
              </div>
              <div class="menu-link__overflow">
                <a href="ongoing-projects.html" class="menu-link__item w-inline-block">
                  <div data-w-id="abc70f94-5399-78d0-0d7a-f4324c80ca5b" class="menu-link">Our Projects</div>
                </a>
              </div>
              <div class="menu-link__overflow">
                <a href="locations.html" class="menu-link__item w-inline-block">
                  <div data-w-id="abc70f94-5399-78d0-0d7a-f4324c80ca67" class="menu-link">Locations</div>
                </a>
              </div>
              <div class="menu-link__overflow">
                <a href="whats-new.html" class="menu-link__item w-inline-block">
                  <div data-w-id="abc70f94-5399-78d0-0d7a-f4324c80ca61" class="menu-link">What's New</div>
                </a>
              </div>

              <div class="menu-link__overflow"><a data-w-id="abc70f94-5399-78d0-0d7a-f4324c80ca72"
                  href="emi-calculator.html" class="menu-link">Buyer's Guide</a>
              </div>

              <div class="menu-content__bottom">
                <div data-w-id="abc70f94-5399-78d0-0d7a-f4324c80ca78" class="horizontal-line"></div>
                <div class="menu-content__meta">

                  <div class="menu-meta__links">
                    <a href="https://www.facebook.com/SunBuildersGroup" target="_blank"
                      class="text--link is--tiny">facebook</a>
                    <a href="https://www.instagram.com/sunbuildersgroup/" target="_blank"
                      class="text--link is--tiny">instagram</a>
                    <a href="https://twitter.com/SunBuildersGrp" target="_blank" class="text--link is--tiny">twitter</a>
                    <a href="https://www.youtube.com/@sunbuildersgroup" target="_blank"
                      class="text--link is--tiny">youtube</a>
                    <a href="https://social.sunbuilders.in/" target="_blank" class="text--link is--tiny">we're
                      social</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    }

    // Method to load menu into a specific element
    loadMenu(targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            targetElement.innerHTML = this.menuHTML;
            this.initializeMenuEvents();
        }
    }

    // Method to replace existing menu-wrapper
    replaceExistingMenu() {
        const existingMenu = document.querySelector('.menu-wrapper');
        if (existingMenu) {
            existingMenu.outerHTML = this.menuHTML;
            this.initializeMenuEvents();
        }
    }

    // Initialize menu events and functionality
    initializeMenuEvents() {
        // Add any menu-specific JavaScript functionality here
        // console.log('Menu component loaded successfully');
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const menuComponent = new MenuComponent();
    
    // Check if there's an existing menu-wrapper to replace
    if (document.querySelector('.menu-wrapper')) {
        menuComponent.replaceExistingMenu();
    }
    
    // Also provide global access
    window.MenuComponent = menuComponent;
}); 