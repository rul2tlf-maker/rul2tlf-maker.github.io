const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && window.anime) {
  anime({
    targets: ".hero-copy > *",
    translateY: [24, 0],
    opacity: [0, 1],
    delay: anime.stagger(90),
    duration: 860,
    easing: "easeOutExpo"
  });

  anime({
    targets: [".orbit-a", ".orbit-b", ".orbit-c"],
    rotate: 360,
    duration: 18000,
    easing: "linear",
    loop: true
  });

  anime({
    targets: ".hub-dot",
    scale: [0.9, 1.2],
    opacity: [0.75, 1],
    duration: 1500,
    direction: "alternate",
    easing: "easeInOutSine",
    loop: true
  });

  anime({
    targets: ".satellite-a",
    translateX: [0, 24, 0],
    translateY: [0, -10, 0],
    duration: 2600,
    easing: "easeInOutSine",
    loop: true
  });

  anime({
    targets: ".satellite-b",
    translateX: [0, -18, 0],
    translateY: [0, 14, 0],
    duration: 3100,
    easing: "easeInOutSine",
    loop: true
  });

  anime({
    targets: ".satellite-c",
    translateX: [0, 14, 0],
    translateY: [0, 18, 0],
    duration: 2900,
    easing: "easeInOutSine",
    loop: true
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (!reduceMotion && window.anime) {
      anime({
        targets: entry.target,
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 760,
        easing: "easeOutExpo"
      });
    } else {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "none";
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

document.querySelectorAll(".count").forEach((node) => {
  const target = Number(node.dataset.count || "0");

  if (reduceMotion || !window.anime) {
    node.textContent = String(target);
    return;
  }

  const state = { value: 0 };
  anime({
    targets: state,
    value: target,
    round: 1,
    duration: 1300,
    delay: 500,
    easing: "easeOutCubic",
    update: () => {
      node.textContent = String(Math.round(state.value));
    }
  });
});
