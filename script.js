console.log("test");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".box", // ".box"がビューポートに入ったらアニメーション開始 (一度だけ)
      start: "top center", // アニメーション開始位置
      markers: true, // マーカー表示
    },
  })
  .fromTo(
    ".box_text",
    {
      opacity: 0,
      y: -50,
      scale: 2,
      transformOrigin:"left",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
    }
  )
  .fromTo(
    ".box_text2",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
  );

// gsap.to(".box", {
//   scrollTrigger: {
//     trigger: ".box", // ".box"がビューポートに入ったらアニメーション開始 (一度だけ)
//     start: "top top", // アニメーション開始位置
//     markers: true, // マーカー表示
//   },
//   x: 500,
//   duration: 1, // アニメーションは1秒間
// });
