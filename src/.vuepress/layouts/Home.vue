<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import { ref, onMounted, onUnmounted } from "vue";

const currentTime = ref("");
const countdown = ref("");
const targetMonth = 11;
const targetDay = 22;
let timer: number;

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let target = new Date(now.getFullYear(), targetMonth - 1, targetDay);
  if (today > target)
    target = new Date(now.getFullYear() + 1, targetMonth - 1, targetDay);

  let years = target.getFullYear() - today.getFullYear();
  let months = target.getMonth() - today.getMonth();
  let days = target.getDate() - today.getDate();
  if (days < 0) {
    months--;
    days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  if (years > 0) {
    countdown.value = `距离 ${targetMonth}月${targetDay}日 还有 ${years}年${months}月${days}日`;
  } else if (months > 0) {
    countdown.value = `距离 ${targetMonth}月${targetDay}日 还有 ${months}月${days}日`;
  } else {
    countdown.value = `距离 ${targetMonth}月${targetDay}日 还有 ${days}日`;
  }
};

onMounted(() => {
  updateTime();
  timer = window.setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <Layout>
    <template #heroInfo>
      <div class="hero-info-content">
        <h1 class="hero-time">{{ currentTime }}</h1>
        <p class="hero-countdown">{{ countdown }}</p>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.hero-info-content {
  display: flex;
  flex-direction: column;
}

.hero-time {
  font-size: 2.5rem;
  font-weight: bold;
  /* 可根据需要调整颜色、字体等 */
}

.hero-countdown {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
</style>