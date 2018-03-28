<template>
  <nav
    class="navbar is-fixed is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        >
      </a>
      <div class="navbar-burger">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <slot />
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <p class="control">
            <a class="bd-tw-button button is-primary">
              <span class="icon">
                <font-awesome-icon icon="undo" />
              </span>
              <span>Back to Home</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>
