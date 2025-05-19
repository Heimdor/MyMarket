<template>
  <div class="fullscreen error-404-bg flex flex-center">
    <div class="error-404-content error-404-content-large text-center">
      <img src="~src/assets/404.jpg" alt="404" class="error-404-image error-404-image-large q-mb-xl" />
      <div class="error-404-title error-404-title-large">404</div>
      <div class="error-404-subtitle error-404-subtitle-large q-mb-lg">Кажется мы зашли в незнакомые земли. Давайте
        вернемся на знакомые тропы...</div>
      <q-btn class="q-mt-md" color="primary" text-color="white" unelevated to="/" label="На главную" no-caps
        icon="home" />
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.error-404-bg {
  background: linear-gradient(135deg, #1a103c 0%, #2c1d54 100%);
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.error-404-content {
  max-width: 420px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  padding: 48px 32px 32px 32px;
  position: relative;
  transition: max-width 0.3s, padding 0.3s;
}

.error-404-content-large {
  max-width: 900px;
  padding: 64px 64px 48px 64px;
}

.error-404-image {
  width: 220px;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
  transition: width 0.3s;
}

.error-404-image-large {
  width: 400px;
}

.error-404-title {
  font-size: 7rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 2px 16px #000, 0 0 32px #1976d2;
  margin-bottom: 8px;
  transition: font-size 0.3s;
}

.error-404-title-large {
  font-size: 10rem;
}

.error-404-subtitle,
.error-404-subtitle-large {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  color: #e9c46a;
  opacity: 0.95;
  font-weight: 500;
  margin-bottom: 32px;
  transition: font-size 0.3s;
  letter-spacing: 0.5px;
}

.error-404-subtitle-large {
  font-size: 2.2rem;
}

@media (max-width: 900px) {
  .error-404-content-large {
    max-width: 98vw;
    padding: 32px 8vw 24px 8vw;
  }

  .error-404-image-large {
    width: 60vw;
    min-width: 180px;
    max-width: 90vw;
  }

  .error-404-title-large {
    font-size: 4.5rem;
  }

  .error-404-subtitle-large {
    font-size: 1.2rem;
  }
}
</style>
