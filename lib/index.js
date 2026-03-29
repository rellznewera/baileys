"use strict";

const chalk = require("chalk");

/* =========================
   CLEAR CONSOLE
========================= */
const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32"
      ? "\x1B[2J\x1B[0f"
      : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

/* =========================
   RGB LOADING SAFE MODE
========================= */
const spinner = ["◐", "◓", "◑", "◒"];
const colors = [
  "#ff0000",
  "#ff7f00",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#8b00ff",
];

let i = 0;

const loading = setInterval(() => {
  clearConsole();

  const spin = spinner[i % spinner.length];
  const color = colors[i % colors.length];

  console.log(
    chalk.hex(color).bold("        " + spin + "  BAILEYS RELLZ  " + spin) +
    chalk.hex(color).italic("\n            loading system...\n")
  );

  i++;
}, 120);

/* =========================
   AFTER LOGIN DISPLAY
========================= */
setTimeout(() => {
  clearInterval(loading);
  clearConsole();

  /* ===== START APP (MERAH) ===== */
  const startLogs = [
    "[✔] Start App ...",
    "[✔] Start App ...",
    "[✔] Start App ...",
    "[✔] Start App ...",
  ];

  startLogs.forEach((text, index) => {
    setTimeout(() => {
      console.log(chalk.red.bold(text));
    }, index * 250);
  });

  /* ===== RGB BANNER ===== */
  setTimeout(() => {
    clearConsole();

    const rgbLine = chalk.rgb(255, 80, 80)(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    );

    console.log(rgbLine);

    console.log(
      chalk.rgb(215, 161, 255).italic("     T H A N K S   F O R   U S I N G\n") +
      chalk.rgb(167, 139, 250).italic("           M Y   B A I L E Y S ♡\n\n") +
      chalk.rgb(137, 207, 240).italic("     last updated • 29 Maret 2026\n") +
      chalk.rgb(192, 132, 252).italic("     Baileys by @rellz-newera\n") +
      chalk.rgb(167, 139, 250).italic("           telegram: @RellzKiw\n\n") +
      chalk.rgb(215, 161, 255).italic("          ⋆ ˚ ✧ ₊ ˚ ෆ\n")
    );

    console.log(rgbLine + "\n");

    console.log(
      chalk.rgb(255, 150, 150)(
`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝑩𝑨𝑰𝑳𝑬𝒀𝑺
                 【 𝑅𝐸𝐿𝐿𝒁 】

➤ 𝑴𝒂𝒔𝒖𝒌𝒌𝒂𝒏 𝑵𝒐𝒎𝒐𝒓 𝑲𝒂𝒎𝒖
➤ 08 / +62 𝒕𝒊𝒅𝒂𝒌 𝒅𝒊𝒑𝒆𝒓𝒃𝒐𝒍𝒆𝒉𝒌𝒂𝒏
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
      )
    );
  }, startLogs.length * 250 + 300);
}, 2500);

/* =========================
   FIXED EXPORTS
========================= */
var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || (!("get" in desc) && (desc.writable || desc.configurable))) {
          desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
