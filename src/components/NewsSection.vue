<template>
  <div id="news" class="section news-section">
    <div class="news-container">
      <div class="news-heading">
        <div class="module-title">
          {{ currentLang === "zh" ? "最新新闻" : "Latest News" }}
        </div>
      </div>

      <div
        class="zju-news-layout"
        @mouseenter="pauseNewsCarousel"
        @mouseleave="resumeNewsCarousel"
      >
        <article
          v-if="featuredNews"
          class="featured-news"
          @click="openNews(featuredNews)"
        >
          <Transition name="featured-news-fade" mode="out-in">
            <div :key="featuredNews.id" class="featured-news-panel">
              <div class="featured-news-image">
                <img :src="featuredNews.image" alt="news" />
              </div>
              <div class="featured-news-content">
                <div class="news-date">
                  {{
                    currentLang === "zh"
                      ? featuredNews.date_zh
                      : featuredNews.date_en
                  }}
                </div>
                <h3 class="featured-news-title">
                  {{
                    currentLang === "zh"
                      ? featuredNews.title_zh
                      : featuredNews.title_en
                  }}
                </h3>
                <p class="featured-news-summary">
                  {{ featuredSummary }}
                </p>
              </div>
            </div>
          </Transition>
        </article>

        <div class="news-list" aria-label="latest news list">
          <div class="news-list-viewport">
            <Transition name="news-page-fade" mode="out-in">
              <div :key="currentNewsPage" class="news-list-items">
                <article
                  v-for="news in secondaryNews"
                  :key="news.id"
                  class="news-list-item"
                  :class="{ active: news.id === featuredNews?.id }"
                  @mouseenter="setFeaturedNews(news)"
                  @focusin="setFeaturedNews(news)"
                  @click="openNews(news)"
                  tabindex="0"
                >
                  <div class="news-list-content">
                    <div class="news-date">
                      {{ currentLang === "zh" ? news.date_zh : news.date_en }}
                    </div>
                    <h4 class="news-list-title">
                      {{
                        currentLang === "zh" ? news.title_zh : news.title_en
                      }}
                    </h4>
                  </div>
                  <span class="news-list-arrow" aria-hidden="true">
                    <i class="fa fa-angle-right"></i>
                  </span>
                </article>
              </div>
            </Transition>
          </div>

          <div v-if="totalNewsPages > 1" class="news-page-dots">
            <button
              v-for="page in totalNewsPages"
              :key="page"
              class="news-page-dot"
              :class="{ active: currentNewsPage === page - 1 }"
              :aria-label="
                currentLang === 'zh'
                  ? `切换到第 ${page} 页新闻`
                  : `Show news page ${page}`
              "
              type="button"
              @click="goToNewsPage(page - 1)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useLanguage } from "../composables/useLanguage";
import { newsData } from "../data/newsData";

export default {
  name: "NewsSection",
  setup() {
    const { currentLang } = useLanguage();
    const router = useRouter();
    const newsPageSize = 5;
    const activeNewsId = ref(newsData[0]?.id || "");
    const currentNewsPage = ref(0);
    const isCarouselPaused = ref(false);
    let newsCarouselTimer = null;

    const featuredNews = computed(() => {
      return (
        newsData.find((news) => news.id === activeNewsId.value) || newsData[0]
      );
    });
    const totalNewsPages = computed(() => {
      return Math.ceil(newsData.length / newsPageSize);
    });
    const secondaryNews = computed(() => {
      const start = currentNewsPage.value * newsPageSize;
      return newsData.slice(start, start + newsPageSize);
    });
    const featuredSummary = computed(() => {
      const news = featuredNews.value;
      if (!news) return "";
      return currentLang.value === "zh" ? news.summary_zh : news.summary_en;
    });

    const openNews = (news) => {
      router.push(`/news/${news.id}`);
    };

    const setActiveNewsByIndex = (newsIndex) => {
      const news = newsData[newsIndex];
      if (!news) return;
      activeNewsId.value = news.id;
      currentNewsPage.value = Math.floor(newsIndex / newsPageSize);
    };

    const setFeaturedNews = (news) => {
      activeNewsId.value = news.id;
    };

    const goToNewsPage = (pageIndex) => {
      currentNewsPage.value = pageIndex;
      const firstNews = newsData[pageIndex * newsPageSize];
      if (firstNews) {
        setFeaturedNews(firstNews);
      }
    };

    const goToNextNews = () => {
      if (!newsData.length || isCarouselPaused.value) return;
      const activeIndex = newsData.findIndex(
        (news) => news.id === activeNewsId.value
      );
      const nextIndex = (activeIndex + 1 + newsData.length) % newsData.length;
      setActiveNewsByIndex(nextIndex);
    };

    const startNewsCarousel = () => {
      if (newsCarouselTimer || newsData.length <= 1) return;
      newsCarouselTimer = window.setInterval(goToNextNews, 5000);
    };

    const stopNewsCarousel = () => {
      if (!newsCarouselTimer) return;
      window.clearInterval(newsCarouselTimer);
      newsCarouselTimer = null;
    };

    const pauseNewsCarousel = () => {
      isCarouselPaused.value = true;
    };

    const resumeNewsCarousel = () => {
      isCarouselPaused.value = false;
    };

    onMounted(() => {
      startNewsCarousel();
    });

    onBeforeUnmount(() => {
      stopNewsCarousel();
    });

    return {
      currentLang,
      featuredNews,
      secondaryNews,
      totalNewsPages,
      currentNewsPage,
      featuredSummary,
      openNews,
      setFeaturedNews,
      goToNewsPage,
      pauseNewsCarousel,
      resumeNewsCarousel,
    };
  },
};
</script>

<style scoped>
.news-section {
  background: #ffffff;
  overflow: hidden;
  padding: 150px 0;
}

.news-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.news-heading {
  text-align: left;
  margin-bottom: 42px;
}

.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #252525;
  line-height: 84px;
}

.zju-news-layout {
  display: flex;
  align-items: stretch;
  gap: 42px;
}

.featured-news,
.news-list-item {
  cursor: pointer;
}

.featured-news {
  width: 58%;
  height: 530px;
  box-sizing: border-box;
  min-width: 0;
  background: #ffffff;
  border: 1px solid rgba(0, 63, 136, 0.12);
  border-radius: 8px;
  box-shadow: 0 12px 28px rgba(21, 34, 50, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.featured-news:hover {
  border-color: rgba(0, 63, 136, 0.32);
  box-shadow: 0 18px 34px rgba(21, 34, 50, 0.12);
  transform: translateY(-4px);
}

.featured-news-panel {
  height: 100%;
}

.featured-news-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: #ffffff;
}

.featured-news-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.45s ease;
}

.featured-news:hover .featured-news-image img {
  transform: none;
}

.featured-news-content {
  height: 230px;
  box-sizing: border-box;
  padding: 22px 30px 24px;
}

.news-date {
  color: #003f88;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 10px;
}

.featured-news-title {
  color: #20242b;
  display: -webkit-box;
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.featured-news-summary {
  color: #5e6877;
  display: -webkit-box;
  font-size: 16px;
  line-height: 28px;
  margin: 14px 0 0;
  min-height: 56px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: auto;
  min-width: 0;
  border-top: 2px solid #003f88;
  background: #ffffff;
}

.news-list-viewport {
  position: relative;
  height: 528px;
  flex: 0 0 528px;
  width: 100%;
  overflow: hidden;
}

.news-list-items {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.news-list-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 28px;
  align-items: center;
  gap: 22px;
  height: 105.6px;
  box-sizing: border-box;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(0, 63, 136, 0.14);
  transition: background-color 0.3s ease;
}

.news-list-item:hover,
.news-list-item.active {
  background: rgba(0, 63, 136, 0.04);
}

.news-list-item.active {
  border-bottom-color: rgba(0, 63, 136, 0.3);
}

.news-list-item.active .news-list-title {
  color: #003f88;
}

.news-list-content {
  min-width: 0;
}

.news-list .news-date {
  line-height: 20px;
  margin-bottom: 4px;
}

.news-list-title {
  color: #20242b;
  display: -webkit-box;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-list-arrow {
  color: #003f88;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  opacity: 0.7;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.news-list-item:hover .news-list-arrow,
.news-list-item.active .news-list-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.news-page-dots {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 66px;
  flex: 0 0 66px;
  padding-top: 28px;
  margin-top: 10px;
}

.news-page-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 1px solid #003f88;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.news-page-dot:hover,
.news-page-dot.active {
  background: #003f88;
}

.news-page-dot:hover {
  transform: scale(1.12);
}

.featured-news-fade-enter-active,
.featured-news-fade-leave-active,
.news-page-fade-enter-active,
.news-page-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.news-page-fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.featured-news-fade-enter-from,
.featured-news-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.news-page-fade-enter-from,
.news-page-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 991px) {
  .zju-news-layout {
    flex-direction: column;
    gap: 28px;
  }

  .featured-news {
    width: 100%;
    height: auto;
  }

  .featured-news-image {
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .featured-news-content {
    height: auto;
  }

  .news-list-viewport {
    height: auto;
    min-height: 0;
    flex-basis: auto;
    overflow: visible;
  }

  .news-list-items {
    height: auto;
  }

  .news-list {
    height: auto;
  }

  .news-page-dots {
    height: auto;
    flex-basis: auto;
    padding-top: 22px;
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: calc(60 / 750 * 100vw) 0;
  }

  .news-container {
    padding: 0 calc(60 / 750 * 100vw);
  }

  .news-heading {
    margin-bottom: calc(36 / 750 * 100vw);
  }

  .module-title {
    font-size: calc(40 / 750 * 100vw);
    line-height: calc(56 / 750 * 100vw);
  }

  .featured-news-content {
    padding: calc(26 / 750 * 100vw) calc(28 / 750 * 100vw)
      calc(30 / 750 * 100vw);
  }

  .featured-news-title {
    font-size: calc(32 / 750 * 100vw);
    line-height: calc(44 / 750 * 100vw);
  }

  .featured-news-summary {
    font-size: calc(22 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
  }

  .news-date {
    font-size: calc(20 / 750 * 100vw);
    line-height: calc(30 / 750 * 100vw);
  }

  .news-list-item {
    grid-template-columns: minmax(0, 1fr) calc(28 / 750 * 100vw);
    gap: calc(18 / 750 * 100vw);
    height: auto;
    min-height: calc(118 / 750 * 100vw);
    padding: calc(18 / 750 * 100vw) calc(14 / 750 * 100vw);
  }

  .news-list-title {
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
  }

  .news-list-arrow {
    font-size: calc(28 / 750 * 100vw);
  }

  .news-page-dots {
    gap: calc(12 / 750 * 100vw);
    padding-top: calc(24 / 750 * 100vw);
  }

  .news-page-dot {
    width: calc(16 / 750 * 100vw);
    height: calc(16 / 750 * 100vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-news-fade-enter-active,
  .featured-news-fade-leave-active,
  .news-page-fade-enter-active,
  .news-page-fade-leave-active {
    transition: none;
  }

  .featured-news-fade-enter-from,
  .featured-news-fade-leave-to,
  .news-page-fade-enter-from,
  .news-page-fade-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
