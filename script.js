const { anime } = window;

anime({
  targets: ".shot-speed",
  translateY: [-10, 10],
  rotate: [-1.5, 1.5],
  duration: 4200,
  direction: "alternate",
  easing: "easeInOutSine",
  loop: true
});

anime({
  targets: ".shot-ip",
  translateY: [12, -12],
  rotate: [1.2, -1.2],
  duration: 4600,
  direction: "alternate",
  easing: "easeInOutSine",
  loop: true
});

anime({
  targets: ".proof-card-main",
  translateY: [0, -8],
  duration: 3600,
  direction: "alternate",
  easing: "easeInOutQuad",
  loop: true
});

document.querySelectorAll(".guide-row, .scene-grid article, .note-card").forEach((node, index) => {
  anime({
    targets: node,
    opacity: [0, 1],
    translateY: [28, 0],
    delay: 120 * index,
    duration: 900,
    easing: "easeOutQuad"
  });
});
