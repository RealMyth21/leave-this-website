const DEF_DELAY = 1000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

const whiteAndBlack = () => {
  if (document.querySelector("h1").style.color == "white") {
    document.querySelector("h1").style.color = "black";
    document.body.style.backgroundColor = "white";
    document.querySelector("link[rel*='icon']").href = "white.ico";
  } else {
    document.querySelector("h1").style.color = "white";
    document.body.style.backgroundColor = "black";
    document.querySelector("link[rel*='icon']").href = "black.ico";
  }
};

(async () => {
  for (i = 0; i < 10; i++) {
    await sleep(1000);
    whiteAndBlack();
  }
  await sleep(2000);
  document.querySelector("h1").innerHTML =
    "I can't believe you are still here!";
  await sleep(4000);
  document.body.style.paddingTop = "0em";
  document.querySelector("h1").style.fontSize = "3em";
  document.querySelector("h1").innerHTML = "Why are you still here?";
  await sleep(4000);
  whiteAndBlack();
  document.querySelector("h1").innerHTML =
    "No seriously why are you still here? Do you not have a life?";
  await sleep(4000);
  whiteAndBlack();
  document.querySelector("h1").innerHTML =
    "Ok this is the end. You can go now.";
  await sleep(8000);
  document.querySelector("h1").innerHTML = "Stop! Go away!";
  await sleep(2000);
  document.querySelector("h1").innerHTML =
    "Ok then just stare at a white screen forever!";
  await sleep(2000);
  document.querySelector("h1").innerHTML = "";
  await sleep(8000);
  whiteAndBlack();
  document.querySelector("h1").innerHTML =
    "Actually can we make that black! That will make you go away *hmph*";
  await sleep(4000);
  document.querySelector("h1").innerHTML = "";
  await sleep(15000);
  whiteAndBlack();
  document.body.style.paddingTop = "5em";
  document.querySelector("h1").style.fontSize = "1.5em";
  document.querySelector("h1").innerHTML =
    'Why are you still here? Something is seriously wrong with you if you have this much time on your hands, but CONGRATULATIONS FOR MAKING IT TO THE END! My creator wasn\'t really sure what to put here so he just decided upon a shameless plug: <a href="https://mithil-s.medium.com">Read my articles :)</a>';
})();
