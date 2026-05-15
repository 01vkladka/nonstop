<template>

  <section class="repairs">

    <!-- BACKGROUND -->

    <div class="repairs__background">

      <img
        src="/images/repairs.webp"
        alt=""
      />

    </div>

    <!-- OVERLAY -->

    <div class="repairs__overlay"></div>

    <div class="container">

      <div class="repairs__wrapper">

        <!-- HERO -->

        <div class="repairs__hero">

          <!-- LEFT -->

          <div class="repairs__content">

            <span class="repairs__label">
              услуги
            </span>

            <h2 class="repairs__title">

              РЕМОНТ ЛЮБОЙ
              <span>ТЕХНИКИ</span>

            </h2>

            <p class="repairs__description">

              Профессиональный ремонт
              с гарантией. Работаем быстро,
              качественно и честно.

            </p>

          </div>

        </div>

        <!-- GRID -->

        <div class="repairs__grid">

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              💻
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Компьютеры
                <br />
                и ноутбуки

              </h3>

              <p class="repair-card__text">

                Диагностика и ремонт
                любой сложности

              </p>

              <div class="repair-card__price">
                от <strong>500 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              📱
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Телефоны
                <br />
                и смартфоны

              </h3>

              <p class="repair-card__text">

                Замена экранов, батарей,
                разъёмов и др.

              </p>

              <div class="repair-card__price">
                от <strong>300 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              🖥
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Телевизоры
                <br />
                и мониторы

              </h3>

              <p class="repair-card__text">

                Ремонт подсветки,
                матриц и плат

              </p>

              <div class="repair-card__price">
                от <strong>1000 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              📲
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Планшеты
                <br />
                и iPad

              </h3>

              <p class="repair-card__text">

                Замена стекла,
                дисплея и аккумулятора

              </p>

              <div class="repair-card__price">
                от <strong>400 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              🎮
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Игровые приставки
                <br />
                и консоли

              </h3>

              <p class="repair-card__text">

                PlayStation, Xbox,
                Nintendo и другие

              </p>

              <div class="repair-card__price">
                от <strong>500 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              🧺
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Бытовая
                техника

              </h3>

              <p class="repair-card__text">

                Ремонт и обслуживание
                бытовой техники

              </p>

              <div class="repair-card__price">
                от <strong>800 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              🖨
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">

                Принтеры
                <br />
                и МФУ

              </h3>

              <p class="repair-card__text">

                Диагностика,
                заправка и ремонт

              </p>

              <div class="repair-card__price">
                от <strong>300 ₽</strong>
              </div>

            </div>

          </article>

          <!-- CARD -->

          <article class="repair-card">

            <div class="repair-card__icon">
              •••
            </div>

            <div class="repair-card__body">

              <h3 class="repair-card__title">
                Другое
              </h3>

              <p class="repair-card__text">

                Ремонтируем то,
                что нужно вам

              </p>

              <div class="repair-card__price">
                по запросу
              </div>

            </div>

          </article>

        </div>

        <!-- FEATURES -->

        <div class="repairs__features">

          <div class="repairs-feature">

            <div class="repairs-feature__icon">
              ✓
            </div>

            <div>

              <strong>
                Гарантия
              </strong>

              <span>
                До 12 месяцев
              </span>

            </div>

          </div>

          <div class="repairs-feature">

            <div class="repairs-feature__icon">
              ⏱
            </div>

            <div>

              <strong>
                Быстро
              </strong>

              <span>
                Большинство ремонтов за 1 день
              </span>

            </div>

          </div>

          <div class="repairs-feature">

            <div class="repairs-feature__icon">
              ₽
            </div>

            <div>

              <strong>
                Честные цены
              </strong>

              <span>
                Без скрытых доплат
              </span>

            </div>

          </div>

          <div class="repairs-feature">

            <div class="repairs-feature__icon">
              👍
            </div>

            <div>

              <strong>
                Качество
              </strong>

              <span>
                Оригинальные запчасти
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup>
const openPopup = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-lead-popup'));
  }
};
</script>