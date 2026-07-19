<template>
  <div id="app">
    <!-- Header组件 -->
    <Header />

    <!-- 路由视图 -->
    <router-view />

    <!-- Footer组件 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* 全局样式已通过外部CSS加载 */

/* 覆盖外部CSS的header默认样式 - 只针对首�?*/
[data-home-page] .sigma_header.style-5 {
  background-color: transparent;
  box-shadow: none;
}

[data-home-page] .sigma_header .sigma_header-bottom {
  background-color: transparent;
}

/* 为固定header添加的全局样式 */
body {
  padding-top: 0;
}

/* 非首页需要顶部padding以适应固定header */
.sigma_subheader {
  margin-top: 80px;
}

/* 首页不需要margin */
[data-home-page] ~ * .sigma_subheader,
[data-home-page] .sigma_subheader {
  margin-top: 0;
}

/* 全站节奏收紧：增加左右留白，降低内容尺度 */
:where(
    .header-container,
    .news-container,
    .news-carousel-container,
    .project-container,
    .team-container,
    .memorial-container,
    .footer-divider,
    .footer-bottom
  ) {
  max-width: 1280px !important;
}

:where(.project-container, .team-container, .memorial-container) {
  padding-left: 48px !important;
  padding-right: 48px !important;
}

:where(
    .news-carousel-section,
    .healthcare-section,
    .core-section,
    .publications-section,
    .team-section,
    .memorial-section,
    .contact-section
  ) {
  padding-top: 110px !important;
  padding-bottom: 110px !important;
}

:where(.module-title) {
  font-size: 46px !important;
  line-height: 64px !important;
}

:where(.project-description, .project-detail-description) {
  font-size: 18px !important;
  line-height: 34px !important;
}

:where(.project-description) {
  margin-bottom: 48px !important;
}

:where(.research-card-title, .project-tag, .year-tag, .member-position) {
  font-size: 22px !important;
}

:where(.publication-title, .member-name, .project-year, .category-title) {
  font-size: 28px !important;
}

:where(.publication-authors, .member-description) {
  font-size: 20px !important;
  line-height: 36px !important;
}

:where(.publications-box) {
  max-width: 1280px !important;
  border-radius: 28px !important;
  padding: 40px 48px !important;
}

:where(.year-tags) {
  margin-top: 56px !important;
  margin-bottom: 44px !important;
}

:where(.year-tag, .project-tag, .category-title) {
  height: 58px !important;
  line-height: 58px !important;
  border-radius: 29px !important;
}

:where(.project-tag) {
  min-width: 240px !important;
}

:where(.research-card-image-wrap) {
  padding: 18px !important;
}

:where(.team-category) {
  margin-top: 64px !important;
}

:where(.member-avatar) {
  width: 160px !important;
  height: 160px !important;
}

:where(.memorial-card) {
  padding: 44px 48px !important;
}

:where(.memorial-title) {
  font-size: 58px !important;
}

:where(.memorial-text) {
  font-size: 18px !important;
  line-height: 30px !important;
}

@media (max-width: 768px) {
  :where(
      .news-carousel-section,
      .healthcare-section,
      .core-section,
      .publications-section,
      .team-section,
      .memorial-section,
      .contact-section
    ) {
    padding-top: calc(60 / 750 * 100vw) !important;
    padding-bottom: calc(60 / 750 * 100vw) !important;
  }
}
</style>
