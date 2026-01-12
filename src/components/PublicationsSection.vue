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
  background-color: #f7f8fc;
  padding: 150px 0;
}

/* 年份标签容器 */
.year-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 60px;
}

/* 年份标签 */
.year-tag {
  width: 190px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 26px;
  color: #222222;
  line-height: 37px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 20px;
}

.year-tag:hover {
  background-color: #1ebab2;
  font-size: 36px;
  color: #ffffff;
  line-height: 50px;
  border-color: #1ebab2;
}

.year-tag.active {
  background-color: #1ebab2;
  font-size: 36px;
  color: #ffffff;
  line-height: 50px;
  border-color: #1ebab2;
}

/* 论文box - 一个大的容器 */
.publications-box {
  width: 100%;
  max-width: 1580px;
  background: #ffffff;
  box-shadow: 0 5px 16px 0 rgba(21, 34, 50, 0.08);
  border-radius: 40px;
  padding: 50px 60px;
  transition: all 0.3s ease;
}

.publications-box:hover {
  box-shadow: 0 10px 24px 0 rgba(21, 34, 50, 0.12);
}

/* 论文项 */
.publication-item {
  position: relative;
  padding: 30px 0 0;
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
  margin-bottom: 12px;
}

/* 论文标题 */
.publication-title {
  font-weight: 600;
  font-size: 32px;
  color: #222222;
  line-height: 45px;
  margin: 0;
  flex: 1;
}

/* 论文作者 */
.publication-authors {
  font-weight: 400;
  font-size: 26px;
  color: #8c8c8c;
  line-height: 37px;
  margin: 0;
}

/* 图标容器 */
.publication-icons {
  display: flex;
  gap: 15px;
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
  width: 50px;
  height: 50px;
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
  margin-top: 30px;
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
    gap: calc(20 / 750 * 100vw);
    margin-top: calc(80 / 750 * 100vw);
    margin-bottom: calc(60 / 750 * 100vw);
  }

  .year-tag {
    width: calc(33% - 16 / 750 * 100vw);
    height: calc(70 / 750 * 100vw);
    box-shadow: 0 calc(5 / 750 * 100vw) calc(16 / 750 * 100vw) 0
      rgba(21, 34, 50, 0.08);
    border-radius: calc(35 / 750 * 100vw);
    font-size: calc(26 / 750 * 100vw);
    line-height: calc(37 / 750 * 100vw);
    padding: 0 calc(20 / 750 * 100vw);
  }

  .year-tag:hover,
  .year-tag.active {
    font-size: calc(36 / 750 * 100vw);
    line-height: calc(50 / 750 * 100vw);
  }

  .publications-box {
    max-width: calc(1580 / 750 * 100vw);
    box-shadow: 0 calc(5 / 750 * 100vw) calc(16 / 750 * 100vw) 0
      rgba(21, 34, 50, 0.08);
    border-radius: calc(40 / 750 * 100vw);
    padding: calc(50 / 750 * 100vw) calc(60 / 750 * 100vw);
  }

  .publications-box:hover {
    box-shadow: 0 calc(10 / 750 * 100vw) calc(24 / 750 * 100vw) 0
      rgba(21, 34, 50, 0.12);
  }

  .publication-item {
    padding: calc(30 / 750 * 100vw) 0 0;
  }

  .publication-title-container {
    gap: calc(20 / 750 * 100vw);
    margin-bottom: calc(12 / 750 * 100vw);
  }

  .publication-title {
    font-size: calc(32 / 750 * 100vw);
    line-height: calc(45 / 750 * 100vw);
  }

  .publication-authors {
    font-size: calc(26 / 750 * 100vw);
    line-height: calc(37 / 750 * 100vw);
  }

  /* 隐藏桌面端图标 */
  .publication-icons-desktop {
    display: none;
  }

  /* 显示移动端图标 */
  .publication-icons-mobile {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(15 / 750 * 100vw);
  }

  .publication-icons {
    gap: calc(15 / 750 * 100vw);
  }

  .icon-link {
    width: calc(50 / 750 * 100vw);
    height: calc(50 / 750 * 100vw);
  }

  .publication-divider {
    height: calc(1 / 750 * 100vw);
    margin-top: calc(30 / 750 * 100vw);
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
