<template>
  <div id="team" class="section team-section">
    <div class="team-container">
      <div class="text-center">
        <h4 class="module-title">
          {{ currentLang === "zh" ? "研究团队" : "Our Team" }}
        </h4>
      </div>

      <!-- Faculty Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "教师" : "Faculty" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in facultyData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Assistant Staff Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "助理老师" : "Assistant Staff" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in assistantData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Students Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "学生" : "Students" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in studentData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Intern Section -->
      <div class="team-category">
        <div class="category-title">
          {{ currentLang === "zh" ? "实习生" : "Intern" }}
        </div>
        <div class="team-grid">
          <div
            v-for="member in internData"
            :key="member.name"
            class="team-member-row half-width"
          >
            <div class="member-avatar">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="member-info">
              <div class="member-name">
                <span>{{
                  currentLang === "zh" ? member.name : member.name_en
                }}</span>
                <div class="member-icons">
                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="member-icon"
                    title="Email"
                  >
                    <img
                      src="/assets/img/materials/team/email-icon.png"
                      alt="Email"
                    />
                  </a>
                  <a
                    v-if="member.website"
                    :href="member.website"
                    target="_blank"
                    class="member-icon"
                    title="Website"
                  >
                    <img
                      src="/assets/img/materials/team/home-web-icon.png"
                      alt="Website"
                    />
                  </a>
                </div>
              </div>
              <span class="member-position">
                {{
                  currentLang === "zh" ? member.position : member.position_en
                }}
              </span>
              <span v-if="member.description" class="member-description">
                {{
                  currentLang === "zh"
                    ? member.description
                    : member.description_en
                }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "../composables/useLanguage";
import {
  facultyData,
  assistantData,
  studentsData,
  internData,
} from "../data/teamData";

export default {
  name: "TeamSection",
  setup() {
    const { currentLang } = useLanguage();

    return {
      currentLang,
      facultyData,
      assistantData,
      studentData: studentsData,
      internData,
    };
  },
};
</script>

<style scoped>
.team-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 60px;
}

.module-title {
  font-weight: 500;
  font-size: 60px;
  color: #222222;
  line-height: 84px;
}

.team-section {
  background-color: #ffffff;
  padding: 150px 0;
}

/* 团队分类 */
.team-category {
  margin-top: 48px;
}

/* 分类标题 */
.category-title {
  width: auto;
  height: auto;
  display: inline-flex;
  align-items: center;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 22px;
  color: #222222;
  line-height: 30px;
  text-align: left;
  margin-bottom: 22px;
  padding-left: 14px;
  border-left: 3px solid #003F88;
}

/* 团队成员行 */
.team-member-row {
  display: flex;
  align-items: flex-start;
  gap: 28px;
  min-width: 0;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.team-member-row.half-width {
  width: calc(50% - 28px);
}

/* 团队网格布局 (教师和学生一行两个) */
.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 42px 56px;
}

/* 成员头像 */
.member-avatar {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 16px rgba(21, 34, 50, 0.08);
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* 成员信息 */
.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  min-width: 0;
}

.member-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #222222;
  line-height: 30px;
}

.member-name > span {
  flex-shrink: 0;
}

.member-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.member-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  transition: all 0.3s ease;
}

.member-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.member-icon:hover img {
  filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(456%)
    hue-rotate(129deg) brightness(91%) contrast(89%);
}

.member-position {
  font-weight: 400;
  font-size: 16px;
  color: #8c8c8c;
  line-height: 24px;
  margin-top: 2px;
  text-align: left;
}

.member-description {
  margin-top: 8px;
  font-weight: 400;
  font-size: 15px;
  color: #222222;
  line-height: 24px;
  text-align: left;
}

/* 响应式：1200px以下一行只展示一个人 */
@media (max-width: 1200px) {
  .team-member-row.half-width {
    width: 100%;
  }

  .team-grid {
    gap: 36px;
  }
}

/* 移动端样式 */
@media (max-width: 768px) {
  .team-container {
    padding: 0 calc(60 / 750 * 100vw);
  }

  .module-title {
    font-size: calc(40 / 750 * 100vw);
    line-height: calc(56 / 750 * 100vw);
    text-align: center;
  }

  .team-section {
    padding: calc(60 / 750 * 100vw) 0;
  }

  .team-category {
    margin-top: calc(42 / 750 * 100vw);
  }

  /* 分类标题居中 */
  .category-title {
    width: auto;
    height: auto;
    box-shadow: none;
    border-radius: 0;
    font-size: calc(28 / 750 * 100vw);
    line-height: calc(38 / 750 * 100vw);
    margin: 0 0 calc(22 / 750 * 100vw);
    padding-left: calc(14 / 750 * 100vw);
    border-left-width: calc(3 / 750 * 100vw);
  }

  /* 团队成员行 - 移动端布局 */
  .team-member-row {
    display: flex;
    flex-direction: row;
    gap: calc(20 / 750 * 100vw);
    margin-bottom: 0;
    padding: 0;
    border-radius: 0;
  }

  /* 上半部分：头像、名字职称、icons */
  .team-member-row .member-avatar {
    width: calc(120 / 750 * 100vw);
    height: calc(120 / 750 * 100vw);
    position: static;
    box-shadow: 0 calc(5 / 750 * 100vw) calc(16 / 750 * 100vw)
      rgba(21, 34, 50, 0.08);
  }

  .team-member-row {
    position: relative;
  }

  /* 信息区域容器 */
  .member-info {
    padding-top: 0;
  }

  .member-info::before {
    content: none;
  }

  .member-avatar {
    width: calc(120 / 750 * 100vw);
    height: calc(120 / 750 * 100vw);
  }

  /* 名字和icons的容器 */
  .member-name {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: calc(8 / 750 * 100vw);
    width: 100%;
    font-size: calc(26 / 750 * 100vw);
    line-height: calc(36 / 750 * 100vw);
  }

  .member-name > span {
    width: 100%;
    text-align: left;
  }

  /* Icons固定在右侧 */
  .member-icons {
    position: static;
    gap: calc(8 / 750 * 100vw);
  }

  .member-icon img {
    filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(456%)
      hue-rotate(129deg) brightness(91%) contrast(89%);
  }

  .member-icon {
    width: calc(28 / 750 * 100vw);
    height: calc(28 / 750 * 100vw);
  }

  /* 职称位置 */
  .member-position {
    position: static;
    margin-top: 0;
    padding-right: 0;
    font-size: calc(22 / 750 * 100vw);
    line-height: calc(32 / 750 * 100vw);
  }

  /* 个人详情在最下方 */
  .member-description {
    margin-top: calc(8 / 750 * 100vw);
    text-align: left;
    font-size: calc(22 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
  }

  .team-grid {
    gap: calc(20 / 750 * 100vw);
  }

  .team-member-row.half-width {
    width: 100%;
    margin-bottom: 0;
  }
}
</style>
