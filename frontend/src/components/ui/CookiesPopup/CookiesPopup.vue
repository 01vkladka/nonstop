<template>
  <Teleport to="body">
    <div v-if="showCookies" class="cookies-popup">
      <div class="cookies-popup__content">
        <h3>Использование cookies</h3>
        
        <p>
          Мы используем cookies для улучшения работы сайта и получения информации о том, как вы его используете.
          Продолжая использовать сайт, вы даёте согласие на использование cookies.
        </p>

        <div class="cookies-popup__actions">
          <button 
            class="cookies-popup__button cookies-popup__button--secondary"
            @click="openPrivacy"
          >
            Политика конфиденциальности
          </button>

          <button 
            class="cookies-popup__button cookies-popup__button--primary"
            @click="acceptCookies"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showCookies = ref(false);

const acceptCookies = () => {
  localStorage.setItem('cookies-accepted', 'true');
  showCookies.value = false;
};

const openPrivacy = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-privacy-popup'));
  }
};

onMounted(() => {
  // Проверяем, принял ли пользователь cookies
  const accepted = localStorage.getItem('cookies-accepted');
  if (!accepted) {
    showCookies.value = true;
  }
});
</script>

<style scoped>
.cookies-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  padding: 24px;
  z-index: 1000;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.cookies-popup__content {
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
}

.cookies-popup__content h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
}

.cookies-popup__content p {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}

.cookies-popup__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.cookies-popup__button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cookies-popup__button--secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
}

.cookies-popup__button--primary {
  background: #ef8a22;
  color: #fff;

  &:hover {
    background: #ff9b33;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(239, 138, 34, 0.4);
  }
}

@media (max-width: 768px) {
  .cookies-popup {
    padding: 16px;
  }

  .cookies-popup__content h3 {
    font-size: 16px;
  }

  .cookies-popup__content p {
    font-size: 13px;
  }

  .cookies-popup__actions {
    flex-direction: column;
  }

  .cookies-popup__button {
    width: 100%;
  }
}
</style>
