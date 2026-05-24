<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { VPButton } from "vitepress/theme";

type HomeAction = {
  theme?: "brand" | "alt" | "sponsor";
  text: string;
  link: string;
  target?: string;
  rel?: string;
};

type HomeLink = {
  label: string;
  text: string;
  link: string;
};

type Profile = {
  name?: string;
  subtitle?: string;
  description?: string;
  avatar?: string;
  avatarAlt?: string;
  links?: HomeLink[];
};

const { frontmatter } = useData();

const profile = computed<Profile>(() => frontmatter.value.profile ?? {});
const actions = computed<HomeAction[]>(() => frontmatter.value.hero?.actions ?? []);
</script>

<template>
  <main class="PersonalHome">
    <section class="profile" aria-labelledby="personal-home-title">
      <div class="content">
        <p v-if="profile.subtitle" class="subtitle">
          {{ profile.subtitle }}
        </p>
        <h1 id="personal-home-title" class="name">
          {{ profile.name }}
        </h1>
        <p v-if="profile.description" class="description">
          {{ profile.description }}
        </p>

        <div v-if="actions.length" class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <VPButton
              tag="a"
              size="medium"
              :theme="action.theme ?? 'brand'"
              :text="action.text"
              :href="action.link"
              :target="action.target"
              :rel="action.rel"
            />
          </div>
        </div>
      </div>

      <img
        v-if="profile.avatar"
        class="avatar"
        :src="profile.avatar"
        :alt="profile.avatarAlt ?? profile.name ?? 'Profile photo'"
      />
    </section>

    <section v-if="profile.links?.length" class="links" aria-label="Profile links">
      <div
        v-for="item in profile.links"
        :key="item.link"
        class="link"
      >
        <span class="link-label">{{ item.label }}</span>
        <a
          class="link-target"
          :href="item.link"
          :target="item.link.startsWith('http') ? '_blank' : undefined"
          :rel="item.link.startsWith('http') ? 'noopener noreferrer' : undefined"
        >
          {{ item.text }}
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.PersonalHome {
  width: 100%;
  min-height: calc(100vh - var(--vp-nav-height));
  padding: calc(var(--vp-nav-height) + 72px) 24px 72px;
  color: var(--vp-c-text-1);
}

.profile {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
}

.content {
  min-width: 0;
}

.subtitle {
  margin: 0 0 12px;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 600;
}

.name {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
}

.description {
  max-width: 640px;
  margin: 20px 0 0;
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1.75;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.action {
  flex: 0 0 auto;
}

.avatar {
  width: min(220px, 62vw);
  aspect-ratio: 1;
  justify-self: start;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
  background: var(--vp-c-bg-soft);
}

.links {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  max-width: 960px;
  margin: 64px auto 0;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.link {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  padding: 18px 0;
  color: var(--vp-c-text-1);
  border-top: 1px solid var(--vp-c-divider);
}

.link:first-child {
  border-top: 0;
}

.link-target {
  min-width: 0;
  overflow-wrap: anywhere;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
  text-underline-offset: 4px;
  transition: color 0.2s;
}

.link-target:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.link-label {
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 600;
}

@media (min-width: 768px) {
  .profile {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .avatar {
    justify-self: end;
  }
}

@media (min-width: 960px) {
  .PersonalHome {
    padding-top: calc(var(--vp-nav-height) + 104px);
  }

  .name {
    font-size: 56px;
  }
}

@media (max-width: 639px) {
  .PersonalHome {
    padding-top: calc(var(--vp-nav-height) + 48px);
  }

  .name {
    font-size: 34px;
  }

  .description {
    font-size: 16px;
  }

  .link {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .link-target {
    width: fit-content;
  }
}
</style>
