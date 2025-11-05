(function () {
  const CART_KEY = 'pizzaSkazkaCart';

  const menuData = {
    pizzas: [
      {
        id: 'pizza-margherita',
        name: 'Маргарита',
        description: 'Домашний томатный соус, моцарелла, свежий базилик и оливковое масло.',
        image: 'https://images.unsplash.com/photo-1548365328-8b15845d0d2?auto=format&fit=crop&w=600&q=80',
        variants: [
          { size: '35', price: 520, weight: '35 см · 540 г' },
          { size: '42', price: 690, weight: '42 см · 720 г' },
        ],
      },
      {
        id: 'pizza-pepperoni',
        name: 'Пепперони',
        description: 'Пикантная пепперони, моцарелла и фирменный соус из спелых томатов.',
        image: 'https://images.unsplash.com/photo-1601925260464-9929a86a78da?auto=format&fit=crop&w=600&q=80',
        variants: [
          { size: '35', price: 590, weight: '35 см · 560 г' },
          { size: '42', price: 760, weight: '42 см · 740 г' },
        ],
      },
      {
        id: 'pizza-four-cheese',
        name: 'Четыре сыра',
        description: 'Моцарелла, горгонзола, пармезан и эмменталь на сливочном соусе.',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
        variants: [
          { size: '35', price: 640, weight: '35 см · 530 г' },
          { size: '42', price: 810, weight: '42 см · 710 г' },
        ],
      },
      {
        id: 'pizza-bbq',
        name: 'BBQ курица',
        description: 'Куриное филе, соус BBQ, сладкий перец и красный лук под сырной корочкой.',
        image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600&q=80',
        variants: [
          { size: '35', price: 670, weight: '35 см · 600 г' },
          { size: '42', price: 840, weight: '42 см · 780 г' },
        ],
      },
    ],
    rolls: [
      {
        id: 'roll-philadelphia',
        name: 'Филадельфия',
        description: 'Лосось, сливочный сыр, авокадо и огурец в нежном рулете.',
        price: 450,
        weight: '250 г',
        image: 'https://images.unsplash.com/photo-1604908177391-2f63f1188cc9?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'roll-california',
        name: 'Калифорния',
        description: 'Крабовое мясо, икра масаго, огурец и авокадо.',
        price: 420,
        weight: '240 г',
        image: 'https://images.unsplash.com/photo-1612874479076-d750e8381cfd?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'roll-tempura',
        name: 'Темпура креветка',
        description: 'Хрустящая креветка, сливочный сыр и соус унаги.',
        price: 480,
        weight: '260 г',
        image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'roll-vegan',
        name: 'Веган микс',
        description: 'Авокадо, манго, морковь и огурец с кунжутом и соусом терияки.',
        price: 390,
        weight: '230 г',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      },
    ],
    drinks: [
      {
        id: 'drink-morse',
        name: 'Домашний морс',
        description: 'Ягодный морс из клюквы и брусники без добавленного сахара.',
        price: 190,
        weight: '0,5 л',
        image: 'https://images.unsplash.com/photo-1546171753-97d7676f85d6?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'drink-lemonade',
        name: 'Лимонад цитрусовый',
        description: 'Освежающий лимонад с апельсином, лаймом и мятой.',
        price: 210,
        weight: '0,45 л',
        image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'drink-cola',
        name: 'Кола классическая',
        description: 'Газированный напиток Coca-Cola в бутылке.',
        price: 160,
        weight: '0,5 л',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      },
    ],
    snacks: [
      {
        id: 'snack-breadsticks',
        name: 'Сырные палочки',
        description: 'Хрустящие палочки из теста с чесночным маслом и сырным соусом.',
        price: 320,
        weight: '260 г',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'snack-wedges',
        name: 'Картофельные дольки',
        description: 'Запечённый картофель с паприкой и чесночным соусом.',
        price: 280,
        weight: '240 г',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'snack-salad',
        name: 'Салат «Цезарь»',
        description: 'Классический салат с курицей, пармезаном и фирменным соусом.',
        price: 360,
        weight: '220 г',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80',
      },
    ],
  };

  function readCart() {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (!stored) return { items: [] };
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed.items)) return { items: [] };
      return { items: parsed.items };
    } catch (error) {
      console.warn('Не удалось прочитать корзину', error);
      return { items: [] };
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      console.warn('Не удалось сохранить корзину', error);
    }
  }

  const cart = readCart();

  function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value);
  }

  function getTotalCount() {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  function syncCartState() {
    saveCart(cart);
    updateCartBadge();
    renderCartDrawer();
    renderCheckoutSummary();
  }

  function addToCart(item) {
    const existing = cart.items.find((cartItem) => cartItem.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.items.push({ ...item, quantity: 1 });
    }
    syncCartState();
  }

  function removeFromCart(itemId) {
    const index = cart.items.findIndex((cartItem) => cartItem.id === itemId);
    if (index >= 0) {
      cart.items.splice(index, 1);
      syncCartState();
    }
  }

  function updateCartBadge() {
    const countNodes = document.querySelectorAll('[data-cart-count]');
    const totalNodes = document.querySelectorAll('[data-cart-total]');
    const totalCount = getTotalCount();
    const totalPrice = getTotalPrice();

    countNodes.forEach((node) => {
      node.textContent = totalCount.toString();
    });

    totalNodes.forEach((node) => {
      node.textContent = totalPrice ? formatPrice(totalPrice) : '0 ₽';
    });

    const floatingCart = document.querySelector('[data-cart-toggle]');
    if (floatingCart) {
      floatingCart.classList.toggle('is-empty', totalCount === 0);
    }
  }

  function renderCartDrawer() {
    const container = document.querySelector('[data-cart-items]');
    if (!container) return;

    if (cart.items.length === 0) {
      container.innerHTML = '<p class="empty-state">Добавьте блюда из меню, чтобы оформить заказ.</p>';
      return;
    }

    container.innerHTML = '';

    cart.items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          ${item.weight ? `<small>${item.weight}</small>` : ''}
          <small>${item.quantity} × ${formatPrice(item.price)}</small>
        </div>
        <div class="cart-item__actions">
          <span>${formatPrice(item.quantity * item.price)}</span>
          <button type="button" data-remove-item="${item.id}" aria-label="Удалить ${item.name}">×</button>
        </div>
      `;
      container.appendChild(row);
    });
  }

  function renderCheckoutSummary() {
    const container = document.querySelector('[data-checkout-items]');
    if (!container) return;

    if (cart.items.length === 0) {
      container.innerHTML = '<p class="empty-state">Корзина пуста. Добавьте блюда на главной странице.</p>';
    } else {
      container.innerHTML = '';
      cart.items.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'summary-item';
        const detail = item.weight ? `${item.weight}` : '';
        const quantityLine = detail ? `${detail} · ${item.quantity} шт.` : `${item.quantity} шт.`;
        row.innerHTML = `
          <div>
            <strong>${item.name}</strong>
            <small>${quantityLine}</small>
          </div>
          <span>${formatPrice(item.quantity * item.price)}</span>
        `;
        container.appendChild(row);
      });
    }

    const totalNode = document.querySelector('[data-checkout-total]');
    if (totalNode) {
      const totalPrice = getTotalPrice();
      totalNode.textContent = totalPrice ? formatPrice(totalPrice) : '0 ₽';
    }
  }

  function renderMenu(category) {
    const grid = document.querySelector('[data-menu-grid]');
    if (!grid) return;

    const items = menuData[category] || [];
    grid.innerHTML = '';

    if (!items.length) {
      grid.innerHTML = '<p class="empty-state">В этой категории пока нет предложений.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      if (category === 'pizzas' && Array.isArray(item.variants)) {
        const defaultVariant = item.variants[0];
        const sizeOptions = item.variants
          .map(
            (variant, index) => `
              <button
                class="size-option${index === 0 ? ' active' : ''}"
                type="button"
                data-size-option
                data-product="${item.id}"
                data-size="${variant.size}"
                data-price="${variant.price}"
                data-weight="${variant.weight}"
              >
                ${variant.size} см
              </button>
            `,
          )
          .join('');

        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <div class="size-selector" role="group" aria-label="Выберите размер">
            ${sizeOptions}
          </div>
          <div class="card-footer">
            <div>
              <div class="price" data-price>${formatPrice(defaultVariant.price)}</div>
              <small data-weight>${defaultVariant.weight}</small>
            </div>
            <button
              class="add-to-cart"
              data-add-to-cart="${item.id}"
              data-name="${item.name}"
              data-price="${defaultVariant.price}"
              data-weight="${defaultVariant.weight}"
              data-size="${defaultVariant.size}"
            >
              В корзину
            </button>
          </div>
        `;
      } else {
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <div class="card-footer">
            <div>
              <div class="price">${formatPrice(item.price)}</div>
              <small>${item.weight}</small>
            </div>
            <button
              class="add-to-cart"
              data-add-to-cart="${item.id}"
              data-name="${item.name}"
              data-price="${item.price}"
              data-weight="${item.weight}"
            >
              В корзину
            </button>
          </div>
        `;
      }
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);
  }

  function initTabs() {
    const buttons = document.querySelectorAll('[data-tab]');
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => {
          btn.classList.toggle('active', btn === button);
          btn.setAttribute('aria-selected', btn === button ? 'true' : 'false');
        });
        const category = button.dataset.tab;
        renderMenu(category);
      });
    });

    const active = document.querySelector('[data-tab].active');
    renderMenu(active ? active.dataset.tab : 'pizzas');
  }

  function initMenuActions() {
    document.addEventListener('click', (event) => {
      const addButton = event.target.closest('[data-add-to-cart]');
      if (!addButton) return;

      const baseId = addButton.dataset.addToCart;
      const priceValue = addButton.dataset.price;
      const price = priceValue ? Number(priceValue) : NaN;
      const name = addButton.dataset.name || '';
      const weight = addButton.dataset.weight || '';
      const size = addButton.dataset.size || '';

      if (!baseId || !name || !priceValue || Number.isNaN(price)) {
        return;
      }

      const item = {
        id: size ? `${baseId}-${size}` : baseId,
        name: size ? `${name} (${size} см)` : name,
        price,
        weight: weight,
        size: size || null,
      };

      addToCart(item);
      addButton.classList.add('added');
      setTimeout(() => addButton.classList.remove('added'), 600);
    });

    document.addEventListener('click', (event) => {
      const sizeButton = event.target.closest('[data-size-option]');
      if (!sizeButton) return;

      const card = sizeButton.closest('.product-card');
      if (!card) return;

      const priceValueRaw = sizeButton.dataset.price;
      const priceValue = priceValueRaw ? Number(priceValueRaw) : NaN;

      card.querySelectorAll('[data-size-option]').forEach((button) => {
        button.classList.toggle('active', button === sizeButton);
      });

      const priceNode = card.querySelector('[data-price]');
      const weightNode = card.querySelector('[data-weight]');
      const addButton = card.querySelector('[data-add-to-cart]');

      if (priceNode && !Number.isNaN(priceValue)) {
        priceNode.textContent = formatPrice(priceValue);
      }
      if (weightNode) {
        weightNode.textContent = sizeButton.dataset.weight || '';
      }
      if (addButton) {
        addButton.dataset.price = sizeButton.dataset.price || '';
        addButton.dataset.weight = sizeButton.dataset.weight || '';
        addButton.dataset.size = sizeButton.dataset.size || '';
      }
    });

    document.addEventListener('click', (event) => {
      const removeButton = event.target.closest('[data-remove-item]');
      if (removeButton) {
        removeFromCart(removeButton.dataset.removeItem);
      }
    });
  }

  function toggleDrawer(show) {
    const drawer = document.querySelector('[data-cart-drawer]');
    const backdrop = document.querySelector('[data-backdrop]');
    const toggleButton = document.querySelector('[data-cart-toggle]');

    if (!drawer || !backdrop) return;

    const isOpen = typeof show === 'boolean' ? show : drawer.getAttribute('aria-hidden') === 'true';
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    backdrop.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

    if (toggleButton) {
      toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  function initCartDrawer() {
    const toggleButton = document.querySelector('[data-cart-toggle]');
    const closeButton = document.querySelector('[data-cart-close]');
    const backdrop = document.querySelector('[data-backdrop]');

    if (toggleButton) {
      toggleButton.addEventListener('click', () => toggleDrawer());
    }
    if (closeButton) {
      closeButton.addEventListener('click', () => toggleDrawer(false));
    }
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        const drawer = document.querySelector('[data-cart-drawer]');
        const modal = document.querySelector('[data-order-modal]');
        if (drawer && drawer.getAttribute('aria-hidden') === 'false') {
          toggleDrawer(false);
        }
        if (modal && modal.getAttribute('aria-hidden') === 'false') {
          toggleOrderModal(false);
        }
      });
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        toggleDrawer(false);
        toggleOrderModal(false);
      }
    });
  }

  function toggleOrderModal(show) {
    const modal = document.querySelector('[data-order-modal]');
    const backdrop = document.querySelector('[data-backdrop]');
    if (!modal || !backdrop) return;

    const willShow = typeof show === 'boolean' ? show : modal.getAttribute('aria-hidden') === 'true';
    modal.setAttribute('aria-hidden', willShow ? 'false' : 'true');
    backdrop.setAttribute('aria-hidden', willShow ? 'false' : 'true');
  }

  function initOrderForm() {
    const form = document.querySelector('[data-order-form]');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (cart.items.length === 0) {
        alert('Корзина пуста. Пожалуйста, добавьте блюда в заказ.');
        return;
      }

      toggleOrderModal(true);
      cart.items.length = 0;
      syncCartState();
      form.reset();
    });

    const closeButton = document.querySelector('[data-order-modal-close]');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        toggleOrderModal(false);
        window.location.href = 'index.html';
      });
    }
  }

  function initFeedbackForm() {
    const form = document.querySelector('[data-feedback-form]');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.createElement('p');
      message.className = 'form-disclaimer';
      message.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
      form.replaceWith(message);
    });
  }

  function initNavigation() {
    const burger = document.querySelector('[data-burger]');
    const nav = document.querySelector('[data-nav]');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTabs();
    initMenuActions();
    initCartDrawer();
    initOrderForm();
    initFeedbackForm();
    renderCartDrawer();
    renderCheckoutSummary();
    updateCartBadge();
  });
})();
