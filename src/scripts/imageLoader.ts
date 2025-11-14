const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/menu/*.{jpg,jpeg,png,gif}', {
  eager: true
});

export const images = Object.keys(modules)
  .sort()
  .map(path => modules[path].default);

