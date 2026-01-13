<template>
  <div class="sigma_banner banner-3 home-banner">
    <div class="sigma_banner-slider">
      <div
        class="light-bg sigma_banner-slider-inner bg-cover bg-center bg-norepeat dark-overlay"
        style="
          background-image: url(https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/home-banner.png);
        "
      >
        <div class="sigma_banner-text">
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="text-center banner-text-content"
                :class="currentLang === 'zh' ? 'lang-zh' : 'lang-en'"
              >
                <template v-if="currentLang === 'zh'">
                  <h2 class="title text-white">浙江大学</h2>
                  <h2 class="title text-white data-lab-title">
                    Data X AI 数据库实验室
                  </h2>
                  <h5 class="text-white data-lab-description">
                    我们专注于人工智能与数据库系统的协同设计，构建面向科学与应用的智能数据平台，推动自优化、自学习的新一代数据系统发展
                  </h5>
                </template>
                <template v-else>
                  <h3 class="title text-white">ZJU Data System</h3>
                  <h3 class="title text-white data-lab-title">
                    Data X AI Research Group
                  </h3>
                  <h4 class="text-white data-lab-description">
                    We focus on the collaborative design of artificial
                    intelligence and database systems, build intelligent data
                    platforms for science and applications, and promote the
                    development of a new generation of self-optimizing and
                    self-learning data systems.
                  </h4>
                </template>
                <div
                  class="section-button d-flex align-items-center justify-content-center"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "../composables/useLanguage";

export default {
  name: "BannerSection",
  setup() {
    const { currentLang } = useLanguage();

    return {
      currentLang,
    };
  },
};
</script>

<style scoped>
.banner-text-content {
  display: inline-block;
  width: 100%;
  max-width: 740px;
  padding: 0 60px;
}

.banner-text-content .title {
  font-weight: 600;
  font-size: 80px;
  line-height: 112px;
}

.data-lab-description {
  margin-top: 30px;
  font-weight: 300;
  font-size: 36px;
  color: #ffffff;
  line-height: 46px;
}

/* Banner贴顶显示 */
.home-banner {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Banner内容区域添加顶部padding以适应固定header */
.home-banner :deep(.sigma_banner-text) {
  padding-top: 80px;
}

/* 数据库实验室标题不换行 */
.data-lab-title {
  white-space: nowrap;
  width: max-content;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .banner-3.sigma_banner .sigma_banner-slider-inner {
    background-position: top 0 center;
  }
  .banner-text-content {
    max-width: calc(740 / 750 * 100vw);
    padding: 0 calc(60 / 750 * 100vw);
  }

  .banner-text-content .title {
    font-size: calc(48 / 750 * 100vw);
    line-height: calc(64 / 750 * 100vw);
  }

  .data-lab-description {
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(32 / 750 * 100vw);
    margin-top: calc(20 / 750 * 100vw);
  }

  .home-banner :deep(.sigma_banner-text) {
    padding-top: calc(80 / 750 * 100vw);
  }

  .banner-3.sigma_banner .sigma_banner-slider-inner {
    padding: calc(120 / 750 * 100vw) 0 calc(120 / 750 * 100vw) !important;
  }
}

@media (max-width: 480px) {
  .banner-text-content .title {
    font-size: calc(56 / 750 * 100vw);
    line-height: calc(78 / 750 * 100vw);
  }

  .data-lab-description {
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(40 / 750 * 100vw);
    margin-top: calc(15 / 750 * 100vw);
  }
}
</style>
