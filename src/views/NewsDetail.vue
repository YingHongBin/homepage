<template>
  <div>
    <div class="section sigma_post-single" style="padding: 120px 0 40px">
      <div class="news-detail-container">
        <div class="post-detail-wrapper" v-if="news">
          <div class="">
            <h2 class="entry-title">
              {{ currentLang === "zh" ? news.title_zh : news.title_en }}
            </h2>
            <div class="sigma_post-meta">
              <img
                src="/assets/img/materials/news/time-icon.png"
                alt="time"
                class="time-icon"
              />
              <span>{{
                currentLang === "zh" ? news.date_zh : news.date_en
              }}</span>
            </div>
            <div class="meta-divider"></div>
            <div
              class="news-content"
              v-html="currentLang === 'zh' ? news.content_zh : news.content_en"
            ></div>
            <div v-if="news.source_link" class="news-source">
              {{ currentLang === "zh" ? "来源：" : "Source: "
              }}<a
                :href="news.source_link"
                target="_blank"
                rel="noopener noreferrer"
                >{{ news.source_link }}</a
              >
            </div>
            <div
              v-if="
                (currentLang === 'zh' && news.zh_translation) ||
                (currentLang === 'en' && news.en_translation)
              "
              class="news-translation"
            >
              <template v-if="currentLang === 'zh'">
                中文版本由{{ news.zh_translation }}翻译。
              </template>
              <template v-else>
                This English version was translated using
                {{ news.en_translation }}.
              </template>
            </div>
          </div>
        </div>
        <div v-else class="text-center" style="padding: 60px 0">
          <h3>
            {{ currentLang === "zh" ? "新闻未找到" : "News not found" }}
          </h3>
          <router-link to="/news" class="sigma_btn-custom">
            {{ currentLang === "zh" ? "返回新闻列表" : "Back to News" }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "../composables/useLanguage";
import { newsData } from "../data/newsData";

export default {
  name: "NewsDetail",
  setup() {
    const route = useRoute();
    const { currentLang, initLanguage } = useLanguage();

    const news = computed(() => {
      const id = route.params.id;
      return newsData.find((item) => item.id === id);
    });

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLang,
      news,
    };
  },
};
</script>

<style scoped>
.news-detail-container {
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 0 60px;
}

.entry-title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 40px;
  color: #252525;
  line-height: 60px;
  text-align: center;
}

.sigma_post-meta {
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 20px;
  color: #b2b2b2;
  line-height: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.meta-divider {
  width: 100%;
  border: 1px solid #e6e6e6;
  margin-bottom: 30px;
}

.news-content {
  font-weight: 400;
  font-size: 22px;
  color: #222222;
  line-height: 50px;
}

.news-content :deep(img) {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
}

.news-content :deep(br) {
  line-height: 2;
}

.news-content :deep(p) {
  margin-bottom: 15px;
}

.news-source {
  margin-top: 40px;
  font-weight: 400;
  font-size: 20px;
  color: #b2b2b2;
  line-height: 28px;
}

.news-source a {
  color: #b2b2b2;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;
}

.news-source a:hover {
  color: #20b9b2;
  text-decoration: underline;
}

.news-translation {
  margin-top: 10px;
  font-weight: 400;
  font-size: 20px;
  color: #b2b2b2;
  line-height: 28px;
  font-style: italic;
}

.sigma_btn-custom {
  display: inline-block;
  padding: 12px 30px;
  background-color: #20b9b2;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.sigma_btn-custom:hover {
  background-color: #1a9690;
  color: #fff;
}

@media (max-width: 991px) {
  body,
  p,
  .sigma_btn-custom {
    font-size: calc(23 / 750 * 100vw) !important;
  }

  .news-detail-container {
    max-width: calc(1028 / 750 * 100vw);
    padding: 0 calc(60 / 750 * 100vw);
  }

  .entry-title {
    font-size: calc(40 / 750 * 100vw);
    line-height: calc(60 / 750 * 100vw);
    margin-bottom: calc(20 / 750 * 100vw);
  }

  .sigma_post-meta {
    font-size: calc(20 / 750 * 100vw);
    line-height: calc(28 / 750 * 100vw);
    margin-bottom: calc(30 / 750 * 100vw);
    gap: calc(8 / 750 * 100vw);
  }

  .time-icon {
    width: calc(20 / 750 * 100vw);
    height: calc(20 / 750 * 100vw);
  }

  .meta-divider {
    border: calc(1 / 750 * 100vw) solid #e6e6e6;
    margin-bottom: calc(30 / 750 * 100vw);
  }

  .news-content {
    font-size: calc(26 / 750 * 100vw);
    line-height: calc(50 / 750 * 100vw);
  }

  .news-content :deep(img) {
    margin: calc(20 / 750 * 100vw) auto;
  }

  .news-content :deep(p) {
    margin-bottom: calc(15 / 750 * 100vw);
  }

  .news-source {
    margin-top: calc(40 / 750 * 100vw);
    font-size: calc(20 / 750 * 100vw);
    line-height: calc(28 / 750 * 100vw);
  }

  .news-translation {
    margin-top: calc(10 / 750 * 100vw);
    font-size: calc(20 / 750 * 100vw);
    line-height: calc(28 / 750 * 100vw);
  }

  .sigma_btn-custom {
    padding: calc(12 / 750 * 100vw) calc(30 / 750 * 100vw);
    border-radius: calc(4 / 750 * 100vw);
    margin-top: calc(20 / 750 * 100vw);
  }

  .post-detail-wrapper {
    padding: 0 calc(20 / 750 * 100vw);
  }
}
</style>
