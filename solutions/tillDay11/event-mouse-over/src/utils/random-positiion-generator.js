export const positionGenerator = () => {
  let top=Math.floor(Math.random() * 90) + '%';
  let left=Math.floor(Math.random() * 90) + '%';
  return {top, left};
}