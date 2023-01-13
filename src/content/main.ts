console.log("hello");

async function init() {
  let j = await fetch("http://localhost:5000/");
  let frames = await j.json();
  return frames;
}

function reset() {
  let filled = document.querySelectorAll(".TUH0Sd");

  filled.forEach((x) => {
    x.classList.remove("TUH0Sd");
  });
}

function setup() {
  let today = document.querySelectorAll(".TUH0Sd");

  today.forEach((x) => {
    x.classList.remove("TUH0Sd", "i8dSE");
  });
  let start = 0;
  let startrow = 0;
  let init = 0;

  for (let i = 0; i < 12; i++) {
    start = init + (i % 4) * 7;
    console.log(start);
    const element = document.querySelector(
      `.bWkmdb > [data-month='2023${String(i + 1).padStart(2, "0")}01']`
    );
    const row = element!.querySelectorAll("[role='rowgroup'] > [role='row']");
    for (let j = 0; j < row.length; j++) {
      startrow = start + j * 28;
      const cols = row[j].querySelectorAll("span");

      for (let o = 0; o < cols.length; o++) {
        const el = cols[o];
        el.id = (startrow + o).toString();
      }
    }
    if (i % 4 === 3) {
      init = init + 168;
    }
  }
}

function draw(frame: number[]) {
  reset();

  for (let k = 0; k < frame.length; k++) {
    let ind = frame[k];
    document.getElementById(ind.toString())?.classList.add("TUH0Sd");
  }
}

async function run() {
  setup();
  let frames = await init();
  let frame = 0;

  setInterval(() => {
    if (frame < 6572) {
      draw(frames[frame]);
      frame++;
    }
  }, 1000 / 30);
  //
}

chrome.runtime.onMessage.addListener((x) => {
  if (x.type === "start") {
    console.log(x);
    run();
  }
});
