<template>
  <Teleport to="body">
    <Transition name="privacy">
      <div v-if="showPrivacy" class="privacy-popup__overlay" @click.self="close">
        <div class="privacy-popup">
          <button class="privacy-popup__close" @click="close">×</button>

          <div class="privacy-popup__content">
            <h2>Политика конфиденциальности</h2>

            <section>
              <h3>1. Общие положения</h3>
              <p>
                Настоящая политика конфиденциальности (далее – «Политика») регулирует способы сбора, использования и 
                защиты информации о пользователях, собранной компанией РЕМКОНСОЛЬ.РФ на веб-сайте.
              </p>
            </section>

            <section>
              <h3>2. Собираемая информация</h3>
              <p>
                Мы собираем информацию, которую вы предоставляете добровольно при заполнении форм на сайте, 
                такую как имя, номер телефона, электронную почту.
              </p>
              <p>
                Мы также собираем информацию об использовании сайта, включая IP-адрес, тип браузера, 
                операционную систему и страницы, которые вы посещаете.
              </p>
            </section>

            <section>
              <h3>3. Использование информации</h3>
              <p>Собранная информация используется для:</p>
              <ul>
                <li>Обработки ваших заявок и предоставления услуг</li>
                <li>Улучшения качества сайта и услуг</li>
                <li>Связи с вами по поводу ваших заявок</li>
                <li>Отправки маркетинговой информации (с вашего согласия)</li>
              </ul>
            </section>

            <section>
              <h3>4. Cookies</h3>
              <p>
                Мы используем cookies для улучшения работы сайта и получения информации о том, как вы его используете. 
                Вы можете управлять cookies в настройках вашего браузера.
              </p>
            </section>

            <section>
              <h3>5. Защита информации</h3>
              <p>
                Мы принимаем разумные меры для защиты вашей информации от несанкционированного доступа, 
                изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h3>6. Третьи лица</h3>
              <p>
                Мы не продаём, не передаём и не раскрываем вашу информацию третьим лицам, кроме как 
                требуется законодательством или необходимо для предоставления услуг.
              </p>
            </section>

            <section>
              <h3>7. Внесение изменений</h3>
              <p>
                Мы можем изменить настоящую Политику в любое время. Продолжение использования сайта означает 
                ваше согласие с внесёнными изменениями.
              </p>
            </section>

            <section>
              <h3>8. Контакты</h3>
              <p>
                Если у вас есть вопросы по этой Политике, пожалуйста, свяжитесь с нами по номеру телефона, 
                указанному на сайте.
              </p>
            </section>

            <button class="privacy-popup__button" @click="close">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showPrivacy = ref(false);

const close = () => {
  showPrivacy.value = false;
};

const handleOpenPrivacy = () => {
  showPrivacy.value = true;
};

onMounted(() => {
  window.addEventListener('open-privacy-popup', handleOpenPrivacy);
});

onUnmounted(() => {
  window.removeEventListener('open-privacy-popup', handleOpenPrivacy);
});
</script>

<style scoped>
.privacy-popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.privacy-popup {
  position: relative;
  background: #fff;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.privacy-popup__close {
  position: sticky;
  top: 0;
  right: 0;
  background: #fff;
  border: none;
  font-size: 32px;
  cursor: pointer;
  padding: 12px 20px;
  color: #666;
  transition: color 0.2s ease;
  float: right;
  z-index: 10;

  &:hover {
    color: #000;
  }
}

.privacy-popup__content {
  padding: 40px;
  color: #333;
  line-height: 1.8;
}

.privacy-popup__content h2 {
  margin: 0 0 30px 0;
  font-size: 28px;
  font-weight: 700;
  color: #000;
}

.privacy-popup__content section {
  margin-bottom: 24px;
}

.privacy-popup__content h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.privacy-popup__content p {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
}

.privacy-popup__content ul {
  margin: 12px 0;
  padding-left: 24px;
  color: #666;
  font-size: 14px;
}

.privacy-popup__content li {
  margin-bottom: 8px;
}

.privacy-popup__button {
  display: block;
  margin: 30px auto 0;
  padding: 14px 32px;
  background: #ef8a22;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff9b33;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(239, 138, 34, 0.3);
  }
}

.privacy-transition-enter-active,
.privacy-transition-leave-active {
  transition: opacity 0.2s ease;
}

.privacy-transition-enter-from,
.privacy-transition-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .privacy-popup__overlay {
    padding: 0;
  }

  .privacy-popup {
    border-radius: 0;
    max-height: 100vh;
  }

  .privacy-popup__content {
    padding: 20px;
  }

  .privacy-popup__content h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .privacy-popup__content h3 {
    font-size: 15px;
  }

  .privacy-popup__content p {
    font-size: 13px;
  }
}
</style>
