<template>
  <div id="publications" class="section publications-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "论文合集" : "Publications" }}
        </h4>
      </div>

      <!-- 年份标签 -->
      <div class="year-tags">
        <div
          v-for="year in availableYears"
          :key="year"
          class="year-tag"
          :class="{ active: selectedYear === year }"
          @click="selectedYear = year"
        >
          {{ year }}
        </div>
      </div>

      <!-- 论文列表 - 所有论文在一个box中 -->
      <div class="publications-box">
        <transition-group :name="transitionName" tag="div">
          <div
            v-for="(pub, index) in filteredPublications"
            :key="`${pub.year}-${index}`"
            class="publication-item"
          >
            <div class="publication-title-container">
              <h5 class="publication-title">{{ pub.title }}</h5>
              <div class="publication-icons publication-icons-desktop">
                <img
                  v-if="pub.pdf_link"
                  src="/assets/img/materials/publication/pdf-icon.png"
                  alt="PDF"
                  class="icon-link pdf-icon"
                  @click="handlePdfClick(pub.pdf_link)"
                  title="下载PDF"
                />
                <img
                  v-if="pub.web_link"
                  src="/assets/img/materials/publication/web-icon.png"
                  alt="Web"
                  class="icon-link web-icon"
                  @click="handleWebClick(pub.web_link)"
                  title="打开网页"
                />
              </div>
            </div>
            <p class="publication-authors">{{ pub.authors }}</p>
            <div class="publication-icons publication-icons-mobile">
              <img
                v-if="pub.pdf_link"
                src="/assets/img/materials/publication/pdf-icon.png"
                alt="PDF"
                class="icon-link pdf-icon"
                @click="handlePdfClick(pub.pdf_link)"
                title="下载PDF"
              />
              <img
                v-if="pub.web_link"
                src="/assets/img/materials/publication/web-icon.png"
                alt="Web"
                class="icon-link web-icon"
                @click="handleWebClick(pub.web_link)"
                title="打开网页"
              />
            </div>
            <!-- 分割线，最后一个不显示 -->
            <div
              v-if="index < filteredPublications.length - 1"
              class="publication-divider"
            ></div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { publicationsData } from "../data/publicationsData";

export default {
  name: "PublicationsSection",
  setup() {
    const { currentLang } = useLanguage();

    // 获取所有可用的年份并排序
    const availableYears = computed(() => {
      const years = [...new Set(publicationsData.map((pub) => pub.year))];
      return years.sort((a, b) => b - a); // 降序排列
    });

    // 默认选中最新的年份
    const selectedYear = ref(availableYears.value[0]);
    const previousYear = ref(availableYears.value[0]);
    const transitionName = ref("slide-left");

    // 监听年份变化，判断方向
    watch(selectedYear, (newYear, oldYear) => {
      previousYear.value = oldYear;
      // 年份变大（时间更晚）从右侧滑入，年份变小（时间更早）从左侧滑入
      transitionName.value = newYear > oldYear ? "slide-left" : "slide-right";
    });

    // 根据选中的年份过滤论文
    const filteredPublications = computed(() => {
      return publicationsData.filter((pub) => pub.year === selectedYear.value);
    });

    // 处理PDF点击 - 触发下载
    const handlePdfClick = (pdfLink) => {
      if (pdfLink) {
        const link = document.createElement("a");
        link.href = pdfLink;
        link.download = "";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    // 处理Web点击 - 打开新窗口
    const handleWebClick = (webLink) => {
      if (webLink) {
        window.open(webLink, "_blank");
      }
    };

    return {
      currentLang,
      availableYears,
      selectedYear,
      filteredPublications,
      transitionName,
      handlePdfClick,
      handleWebClick,
    };
  },
};
</script>

<style scoped>
.project-container {
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 60px;
}

/* 模块标题样式 */
.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #222222;
  line-height: 84px;
}

.publications-section {
  background-color: #f3f7fc;
  padding: 150px 0;
}

/* 年份标签容器 */
.year-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 34px;
  margin-bottom: 30px;
}

/* 年份标签 */
.year-tag {
  min-width: 76px;
  height: 36px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  color: #222222;
  line-height: 36px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 14px;
  border: 1px solid #e6e9ee;
}

.year-tag:hover {
  background-color: rgba(0, 63, 136, 0.08);
  color: #003F88;
  border-color: #003F88;
}

.year-tag.active {
  background-color: rgba(0, 63, 136, 0.12);
  color: #003F88;
  border-color: #003F88;
}

/* 论文box - 一个大的容器 */
.publications-box {
  width: 100%;
  max-width: 1580px;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  transition: all 0.3s ease;
}

.publications-box:hover {
  box-shadow: none;
}

/* 论文项 */
.publication-item {
  position: relative;
  padding: 20px 0 0;
}

.publication-item:first-child {
  padding-top: 0;
}

.publication-item:last-child {
  padding-bottom: 0;
}

/* 论文标题容器 */
.publication-title-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 8px;
}

/* 论文标题 */
.publication-title {
  font-weight: 600;
  font-size: 21px;
  color: #222222;
  line-height: 30px;
  margin: 0;
  flex: 1;
}

/* 论文作者 */
.publication-authors {
  font-weight: 400;
  font-size: 16px;
  color: #8c8c8c;
  line-height: 26px;
  margin: 0;
}

/* 图标容器 */
.publication-icons {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
}

/* 桌面端显示标题右侧的图标 */
.publication-icons-desktop {
  display: flex;
}

/* 移动端显示在作者下方的图标 */
.publication-icons-mobile {
  display: none;
}

/* 图标样式 */
.icon-link {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  object-fit: contain;
}

.icon-link:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.icon-link:active {
  transform: scale(0.95);
}

/* 分割线 */
.publication-divider {
  width: 100%;
  height: 1px;
  background: #e6e6e6;
  margin-top: 20px;
}

/* 论文切换动画 - 向左滑动（年份变大） */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-left-move {
  transition: transform 0.4s ease;
}

/* 论文切换动画 - 向右滑动（年份变小） */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-move {
  transition: transform 0.4s ease;
}

@media (max-width: 768px) {
  .project-container {
    padding: 0 calc(60 / 750 * 100vw);
  }

  .module-title {
    font-size: calc(40 / 750 * 100vw);
    line-height: calc(56 / 750 * 100vw);
  }

  .publications-section {
    padding: calc(60 / 750 * 100vw) 0;
  }

  .year-tags {
    gap: calc(10 / 750 * 100vw);
    margin-top: calc(34 / 750 * 100vw);
    margin-bottom: calc(30 / 750 * 100vw);
  }

  .year-tag {
    width: auto;
    min-width: calc(76 / 750 * 100vw);
    height: calc(36 / 750 * 100vw);
    border-radius: calc(8 / 750 * 100vw);
    font-size: calc(20 / 750 * 100vw);
    line-height: calc(36 / 750 * 100vw);
    padding: 0 calc(14 / 750 * 100vw);
  }

  .year-tag:hover,
  .year-tag.active {
    font-size: calc(20 / 750 * 100vw);
    line-height: calc(36 / 750 * 100vw);
  }

  .publications-box {
    max-width: calc(1580 / 750 * 100vw);
    box-shadow: none;
    border-radius: 0;
    padding: 0;
  }

  .publications-box:hover {
    box-shadow: none;
  }

  .publication-item {
    padding: calc(20 / 750 * 100vw) 0 0;
  }

  .publication-title-container {
    gap: calc(20 / 750 * 100vw);
    margin-bottom: calc(8 / 750 * 100vw);
  }

  .publication-title {
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
  }

  .publication-authors {
    font-size: calc(22 / 750 * 100vw);
    line-height: calc(32 / 750 * 100vw);
  }

  /* 隐藏桌面端图标 */
  .publication-icons-desktop {
    display: none;
  }

  /* 显示移动端图标 */
  .publication-icons-mobile {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(10 / 750 * 100vw);
  }

  .publication-icons {
    gap: calc(10 / 750 * 100vw);
  }

  .icon-link {
    width: calc(28 / 750 * 100vw);
    height: calc(28 / 750 * 100vw);
  }

  .publication-divider {
    height: calc(1 / 750 * 100vw);
    margin-top: calc(20 / 750 * 100vw);
  }

  .slide-left-enter-from {
    transform: translateX(calc(30 / 750 * 100vw));
  }

  .slide-left-leave-to {
    transform: translateX(calc(-30 / 750 * 100vw));
  }

  .slide-right-enter-from {
    transform: translateX(calc(-30 / 750 * 100vw));
  }

  .slide-right-leave-to {
    transform: translateX(calc(30 / 750 * 100vw));
  }
}
</style>
