(function ($, window, document) {
  $(function () {
    // Selektory pro prvky
    const accountAndLogin = $(
      ".top-navigation-bar .top-nav-button-account, .top-navigation-bar .top-nav-button-login"
    );
    const cartCount = $(
      "#header .header-top .navigation-buttons .btn.cart-count"
    );

    // Zkontroluj, zda prvky nejsou již před `cartCount`
    if (!accountAndLogin.is(":first-child")) {
      // Přesuň před `cartCount`
      accountAndLogin.insertBefore(cartCount);
    }
  });
})(window.jQuery, window, document);
