export const getImageUrl = (path) => {
  console.log(path);
  const constructedURL = new URL(`/assets/${path}`, import.meta.url);
  console.log(constructedURL.href);
  return constructedURL.href;
};
