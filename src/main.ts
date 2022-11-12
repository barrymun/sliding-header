let left: HTMLElement | null = document.getElementById("left-side");

const onMouseMove = (e: MouseEvent | Touch) => {
  let position: number = e.clientX / window.innerWidth * 100;
  if (left != null) left.style.width = `${position}%`;
};

document.onmousemove = onMouseMove;

// mobile
document.ontouchmove = (e: TouchEvent) => onMouseMove(e.touches[0]);

export {};