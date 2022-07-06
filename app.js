// SUBMIT ANIMATION
const submit = document.querySelector("#submit");
const submitText = document.querySelector("#submit .text");
const checkMark = document.querySelector("#check img");

const animateSubmit = (e) => {
  console.log("click");
  e.preventDefault();
  anime
    .timeline({
      easing: "easeInOutCubic",
      duration: 900,
      padding: 0,
    })
    .add({
      targets: "#submit .text",
      opacity: 0,
      duration: 100,
    })
    .add({
      targets: submit,
      padding: 0,
      borderRadius: "1rem",
      width: "5rem",
      height: ".25rem",
      background: "#414a4c",
    })
    .add({
      targets: "#submit-box .color",
      width: { value: "5rem", duration: 1000 },
      height: { value: ".25rem", duration: 1 },
    })
    .add({
      targets: submit,
      width: 0,
      height: 0,
      duration: 1,
    })
    .add({
      targets: "#submit-box .color",
      width: { value: "2rem", duration: 1000 },
      height: { value: "2rem", duration: 1000 },
      background: "#414a4c",
      borderRadius: "50%",
      border: "1px solid #000000",
    })
    .add({
      targets: checkMark,
      width: "1.25rem",
      height: "1.25rem",
      duration: 500,
    });
};
submit.addEventListener("click", animateSubmit);
submitText.addEventListener("click", animateSubmit);

// LETTER ANIMATION
addEventListener("load", (e) => {
  anime({
    targets: ".letter",
    translateX: 200,
    delay: anime.stagger(200, { direction: "reverse" }),
    ease: "easeInOutBack",
  });
});

// TEXT ANIMATION

const cursor = {
  x: 0,
  y: 0,
};
const brow = document.querySelector(".brow");
const box = document.querySelector(".box");
const boxRect = box.getBoundingClientRect();
const eye = document.querySelector(".eye");
const eyeball = document.querySelector(".eye .ball");
const eyeballRect = eyeball.getBoundingClientRect();
const eyeRect = eye.getBoundingClientRect();
console.log(eyeRect.height);

addEventListener("mousemove", (e) => {
  cursor.x = (e.clientX / boxRect.width - 0.5) * 120;
  cursor.y = (e.clientY / boxRect.height - 0.5) * 120;
  if (cursor.y > 60) cursor.y = 60;
  if (cursor.y <= -60) cursor.y = -60;
  if (cursor.x > 60) cursor.x = 60;
  if (cursor.x <= -60) cursor.x = -60;

  // LEFT BOTTOM LIMIT
  if (cursor.y >= 0 && cursor.y <= 40 && cursor.x <= -50) cursor.x = -50;
  if (cursor.y >= 40 && cursor.y <= 50 && cursor.x <= -35) cursor.x = -35;
  if (cursor.y >= 50 && cursor.y <= 60 && cursor.x <= -20) cursor.x = -20;

  //LEFT TOP LIMIT
  if (cursor.y <= 0 && cursor.y >= -40 && cursor.x <= -50) cursor.x = -50;
  if (cursor.y <= -40 && cursor.y >= -50 && cursor.x <= -35) cursor.x = -35;
  if (cursor.y <= -50 && cursor.y >= -60 && cursor.x <= -20) cursor.x = -20;

  // RIGHT BOTTOM LIMIT
  if (cursor.y >= 0 && cursor.y <= 40 && cursor.x >= 50) cursor.x = 50;
  if (cursor.y >= 40 && cursor.y <= 50 && cursor.x >= 35) cursor.x = 35;
  if (cursor.y >= 50 && cursor.y <= 60 && cursor.x >= 20) cursor.x = 20;

  //RIGHT TOP LIMIT
  if (cursor.y <= 0 && cursor.y >= -40 && cursor.x >= 50) cursor.x = 50;
  if (cursor.y <= -40 && cursor.y >= -50 && cursor.x >= 35) cursor.x = 35;
  if (cursor.y <= -50 && cursor.y >= -60 && cursor.x >= 20) cursor.x = 20;

  console.log(cursor.y, "y");
  console.log(cursor.x, "x");

  anime({
    targets: ".eye .ball",
    translateX: cursor.x,
    translateY: cursor.y,
  });
});

brow.addEventListener("mouseover", (e) => {
  anime({
    targets: [".eye", "eye. ball"],
    scaleY: { value: 0.05},
    duration: 1000
  });
});
brow.addEventListener("mouseout", (e) => {
  anime({
    targets: [".eye", "eye. ball"],
    scaleY: { value: 1, duration: 500, delay: 1000 },
  });
});

// Image
