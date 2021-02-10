let iniziamo = {
  inizia: true,
  caricadati: undefined,
  connessione: undefined,
};
let bilancio = {
  iniziale: undefined,
  attuale: undefined,
  diff: 0,
}; let oraiso;let priso;
let parametri = {
  amount: undefined,
  basis: undefined,
  contract_type: undefined,
  currency: undefined,
  duration: undefined,
  duration_unit: undefined,
  symbol: undefined,
};
let statobinary = {
  tick: {
    epoch: undefined,
    quote: undefined,
    id: undefined,
  },
  active_symbols: {
    exchange_is_open: undefined,
  },
  ohlc: {
    epoch: undefined,
    open: undefined,
    close: undefined,
    high: undefined,
    low: undefined,
  },
  buy: {
    contract_id: undefined,
    longcode: undefined,
    balance_after: undefined,
    purchase_time: 0,
  },
  forget: {},
  proposal_open_contract: {
    contract_id: 0,
    // id:undefined,
    is_expired: undefined,
    transaction_ids: undefined,
    entry_spot_display_value: undefined,
    entry_spot: undefined,
    date_expiry: undefined,
    date_start: undefined,
    is_valid_to_sell: undefined,
    is_sold: undefined,
    profit: undefined,
    payout: undefined,
    buy_price: undefined,
    current_spot_time: undefined,
    purchase_time: 0,
  },
  history: {
    times: undefined,
    prices: undefined,
  },
  // portfolio: {
  //     contracts : [],
  // },
  website_status: {
    site_status: undefined,
  },
  ping: "",

  profit_table: {
    count: undefined,
    transactions: {
      shortcode: undefined,
    },
    transaction_id: undefined,
    sell_price: undefined,
  },
  balance: {},
  authorize: {
    authorize: undefined,
    currency: undefined,
    loginid: undefined,
  },
  msg_type: {},
  time: Number,
};
let connessione = {
  ws: undefined,
  settata: false,
  attiva: false,
  resetta: true,
};
let pipino = "";let minutetrade = 0;
let venditaanticipata, tid;
let risultato = {
  conto: undefined,
  transazione: undefined,
  idcontratto: undefined,
  prezzovendita: undefined,
  prezzoacquisto: undefined,
  cp1: undefined,
  guadagno: undefined,
  winlost: undefined,
  oldsymbol: undefined,
  result: undefined,
  orainizio: undefined,
};
let orrori = { attivo: undefined };
let notifica = document.getElementById("notifyme");
let suonahtml = document.getElementById("sound");
let tempounix = 0;
let problema, nort, msl, multiplier, mtp, limitorder;
let token = "";
// let con = 0;
let automk;
let missingtrades = 0;
let vid, relativizziamo, primoavvio, rid;
let countdown;
let cambiasegno;
let duration_unit;
// let ora;
let currentTime;
let stile;
let conta;
let switched = false;
let start2, sounds;
let botgo;
let todo;
let echecazzo;
let newSymbol; //=localStorage.getItem("symbol");
let stoptick;
let mercatof;
let mercatov;
let idbalance;
let callOrPut;
let copiti;
let chiamataordine;
let echecazzodcont;
let bottostop;
let cop;
let recuperoultima;
let tranb;
let oldtid;
let transe, richieditabella;
let candelac;
let candelao;
let candelah;
let candelal;
let indicatori;
let prezzo;
let currency,
  differenza = "";

let yuhgy;
let relativo;
let kun;
let timp;
let tnc;
// let connex;
let ida;
let temponewcandle = 57;
let trading = 0;
let nuovacandela;
let siamnellamerda;
let tempocandela,
  setmoltiplica,
  cmm,
  trailingstop,
  tkp,
  stoploss,
  totwins,
  mac,
  moneyneeded,
  notrades,
  worm,
  barriersu,
  barriergiu,
  tonoff,
  tempotrade,
  initstake,
  totlosses,
  tsm,
  ha,
  cttk,
  hl,
  // oikj,
  ha1,
  teon,
  tipodicontratto,
  datti,
  inizio,
  pierdude,
  newLine,
  bb,
  bbbefore,
  tradeon2;
ha = "no data";
oldtid = localStorage.getItem("oldtid");

localStorage.salvati = "1";

let countdownstart = false;

let scrivi = 0;

let prenditela = false;
let tizio = 1;

let guadagno;
// let correzzione = 0;
// let orainvio, oraricevuto, aewq;
//
// let epo2;
// let a, b;
let current_spot_time,
  partefinale,
  winorlost,
  winLossBarrier,
  result,
  csv,
  contractId;
let controllo = false;
let statobinary2 = {
    echo_req:undefined
};
// let temponewcandela;
// let pippo;
let attaya = false;
notifica.innerHTML = "";
relativo = 0;
csv = [];
///////////////////////////////////
const oppohtml = document.getElementById("oppo");
const virthtml = document.getElementById("setvirt");
const callhtml = document.getElementById("callTrade");
const livehtml = document.getElementById("setlive");
const puthtml = document.getElementById("putTrade");
let epochs, epo, tickk;
let lasttrade;
// let caricadati = false;
const sex = document.getElementById("seprofit");
sex.innerText = String(0);
document.getElementById("continuato").checked = false;
let dcontinuo = 0;
let aggiornadati = false,
  fermaa,
  totprofit,
  stk,
  wrate,
  ruota,
  fermaaquindi,
  balance,
  loginId,
  oldmarket,
  authorize,
  // definition,
  fields,
  loco;
let correttov, correttor; //, defi, now
loco = wert();
// let loco = process.env.HOMEPATH + "/TeonTrader/";
const fs = require("fs");
const { wma, macd, boll, hhv, llv } = require("finmath");
const os = require("os");
const { ipcRenderer } = require("electron");
async function piove() {
  await ipcRenderer.invoke("wss-message").then((reply) => {
    return webapppc = reply;
  });
   // webapppc;
}

let webapppc = piove();
newLine = os.EOL;
function abc() {
  if (Number(localStorage.getItem("storedstoploss")) > 0) {
    if (stk > Number(localStorage.getItem("storedstoploss"))) {
      if (localStorage.getItem("storedtrailstop") === "stop") {
        if (datti !== true) {
          pausebot();
          datti = true;
        }
      } else {
        notifica.insertAdjacentHTML(
          "afterbegin",
          '<p style="color:#8c01a0">Stake reseted.</p>'
        );
        stk = Number(localStorage.getItem("iniziale"));
      }
    }
  }
}

//function caricatoken() {
//   virthtml.disabled = true;
//   livehtml.disabled = true;
//   callhtml.disabled = true;
//   puthtml.disabled = true;
//   if (vid == null && rid == null) {
//     document.getElementById("account").innerText = "no api token";
//     notifica.insertAdjacentHTML(
//       "afterbegin",
//       '<p style="color:#8c01a0"> please insert your api token </p>'
//     );
//     window.open("../views/yourdata.html", "", "width=1000,height=600");
//     return (caricadati = true);
//   } else {
//     if (vid !== "Your Virtual Token Here") {
//       virthtml.disabled = false;
//       setvirtual();
//     }
//     if (rid !== "Your Real Token Here") {
//       livehtml.disabled = false;
//     }
//   }
// }

function cercaultimo() {
  oldtid = oldtid * 1;
  tranb = Number(localStorage.getItem("inatto"));
  if (tranb !== 0 && tranb !== oldtid) {
    // if (statobinary.profit_table.count !== 1) {
    if (todo !== 1) {
      inviows(
        JSON.stringify({
          profit_table: 1,
          description: 1,
          limit: 1,
          date_from: tempounix,
          sort: "DESC",
          req_id: 8,
        })
      );
      todo = 1;
    }
    // }
    console.log("caricaultimo");
  } else if (tranb !== 0 && tranb === oldtid) {
    notifica.insertAdjacentHTML(
      "afterbegin",
      "<p > last trade already wrote </p>"
    );
  } else {
    recuperoultima = true;
  }
}


function chkconnessione() {
  console.log("checkconnessione");
  if (window.navigator.onLine) {
    if (connessione.ws === undefined) {
      // connessione.ws = new WebSocket(
      //     "wss://frontend.binaryws.com/websockets/v3?app_id=18740"
      // );
      connessione.ws = new WebSocket(webapppc);
      test();
      todo = 0;
      console.log("attiva");
      // connessione.resetta = false;
      connessione.attiva = true;
    }
    if (!connessione.settata) {
      if (connessione.ws.readyState === 0) {
        console.log("in connessione");
        return;
      }

      if (connessione.ws.readyState === 1) {
        console.log("connected");

        orrori.attivo = true;

        if (token === (vid || rid)) {
          console.log("recover run");
          inviows(JSON.stringify({ authorize: token }));
          // data();colorebottonimarket();
          connessione.settata = true;
          errore();
          // return true;
        } else {
          // $("#loading").fadeOut(2000);
          console.log("1st run");
          connessione.settata = true;
          errore();
          //return true;
        }
      }
      return true;
    }
  } else {
    return function () {
      orrori.attivo = true;
      return false;
    };
  }
}

function colorebottonimarket() {
  if (newSymbol !== undefined) {
    if (newSymbol !== localStorage.getItem("symbol")) {
      if (stoptick !== undefined) {
        inviows(
          JSON.stringify({
            forget: stoptick,
          })
        );
      }
      localStorage.setItem("symbol", newSymbol);
      console.log("here am i?");
      switched = true;
    } else if (document.getElementById("closeC").innerText === "loading") {
      switched = true;
    }
  }

  // }

  if (mercatov && !mercatof) {
    if (localStorage.getItem("symbol") === "R_10") {
      $("#10sym").removeClass("w3-light-grey").addClass("w3-green");

      $(
        "#autosym, #25sym, #50sym, #75sym, #100sym, #bullsym, #bearsym,#1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "R_25") {
      $("#25sym").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#autosym, #10sym, #50sym, #75sym, #100sym, #bullsym, #bearsym, #1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "R_50") {
      $("#50sym").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #autosym, #75sym, #100sym, #bullsym, #bearsym, #1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "R_75") {
      $("#75sym").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #50sym, #autosym, #100sym, #bullsym, #bearsym, #1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }

    if (localStorage.getItem("symbol") === "R_100") {
      $("#100sym").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #50sym, #75sym, #autosym, #bullsym, #bearsym, #1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "RDBULL") {
      $("#bullsym").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #50sym, #75sym, #100sym, #autosym, #bearsym, #1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "RDBEAR") {
      $("#bearsym").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #50sym, #75sym, #100sym, #bullsym, #autosym, #1HZ10V, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "1HZ10V") {
      $("#1HZ10V").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #50sym, #75sym, #100sym, #bullsym, #autosym, #bearsym, #1HZ100V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "1HZ100V") {
      $("#1HZ100V").removeClass("w3-light-grey").addClass("w3-green");
      $(
        "#10sym, #25sym, #50sym, #75sym, #100sym, #bullsym, #autosym, #bearsym, #1HZ10V"
      )
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
  } else {
    if (localStorage.getItem("symbol") === "frxUSDCHF") {
      $("#usdchf").removeClass("w3-light-grey").addClass("w3-green");
      $("#autosymFX, #eurusd, #usdjpy, #gbpusd, #audusd, #nzdusd, #usdcad")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "frxEURUSD") {
      $("#eurusd").removeClass("w3-light-grey").addClass("w3-green");
      $("#usdchf, #autosymFX, #usdjpy, #gbpusd, #audusd, #nzdusd, #usdcad")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }

    if (localStorage.getItem("symbol") === "frxUSDJPY") {
      $("#usdjpy").removeClass("w3-light-grey").addClass("w3-green");

      $("#usdchf, #eurusd, #autosymFX, #gbpusd, #audusd, #nzdusd, #usdcad")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "frxGBPUSD") {
      $("#gbpusd").removeClass("w3-light-grey").addClass("w3-green");
      $("#usdchf, #eurusd, #usdjpy, #autosymFX, #audusd, #nzdusd, #usdcad")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "frxAUDUSD") {
      $("#audusd").removeClass("w3-light-grey").addClass("w3-green");

      $("#usdchf, #eurusd, #usdjpy, #gbpusd, #autosymFX, #nzdusd, #usdcad")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "frxNZDUSD") {
      $("#nzdusd").removeClass("w3-light-grey").addClass("w3-green");

      $("#usdchf, #eurusd, #usdjpy, #gbpusd, #audusd, #autosymFX, #usdcad")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
    if (localStorage.getItem("symbol") === "frxUSDCAD") {
      $("#usdcad").removeClass("w3-light-grey").addClass("w3-green");
      $("#usdchf, #eurusd, #usdjpy, #gbpusd, #audusd, #nzdusd, #autosymFX")
        .removeClass("w3-green")
        .addClass("w3-light-grey");
    }
  }
}

function writelog(abcd) {
  try {
    fs.appendFileSync(loco + "log.log", currentTime[0] + "_" + abcd + newLine);
    console.log('The "LOG" was appended to file!');
  } catch (err) {
    console.log(err);
  }
}

function controllafile() {
  if (!fs.existsSync(loco)) {
    fs.mkdirSync(loco, function (err) {
      if (err) {
        console.log(err, "ERROR! Can't make the directory!");
      }
    });
  }
  if (!fs.existsSync(loco + "log.log")) {
    console.log("notexist");
    try {
      fs.appendFileSync(
        loco + "log.log",
        currentTime[0] + "_" + "filecreated" + newLine
      );
      console.log('The "LOG" was appended to file!');
    } catch (err) {
      console.log(err);
    }
  }
  if (!fs.existsSync(loco + "donotdelete.xxx")) {
    try {
      fs.appendFileSync(loco + "donotdelete.xxx", fields);
      console.log('The "data to append" was appended to file!');
    } catch (err) {}
  }
}

function data() {
  console.log("chiedi dati", switched);
  if (cttk === "tiks") {
    stile = "ticks";
    conta = 60;
    prendistoria();
  } else {
    stile = "candles";
    conta = 60;
    if (cttk === "candlesone") {
      tempocandela = 60;
    } else if (cttk === "candlestre") {
      tempocandela = 180;
    } else {
      tempocandela = 350;
    }
    prendistoriaohcl();
  }
}



function errore() {
  // console.log("errore");
  if (orrori.attivo) {
    statobinary.ping = undefined;
    statobinary.website_status = undefined;
    statobinary.balance = undefined;
    statobinary.time = undefined;
    statobinary.ohlc = undefined;
    statobinary.authorize = undefined;

  }
  if (window.navigator.onLine) {getping();
      getweb();
      console.log("invio ping web");
      if (trading === 1){siamnellamerda = true}
    // let baseURL = $.ajax({
    //   url: "http://www.google.com",
    //   type: "HEAD",
    //   timeout: 1000,
    //   statusCode: {
    //     200: function () {
    //       baseURL = true;
    //     },
    //     400: function () {
    //       baseURL = false;
    //     },
    //     0: function () {
    //       baseURL = false;
    //     },
    //   },
    // });

    // if (baseURL) {
    // if ( && ) {
    //   getping();
    // }
    // if (!) {
    //   getweb();
    // }

    // if (connessione.resetta) {

    // if (token !== "") {
    //   inviows(JSON.stringify({ authorize: token }));
    // }
    // }
    document.getElementById("internetstatus").innerText = "internet ok";
    document.getElementById("internetstatus").classList.remove("green");
    document.getElementById("internetstatus").classList.remove("red");
    document.getElementById("internetstatus").classList.add("yellow");
    // chkconnessione();
    // }
    // }
  } else {
    if (document.getElementById("internetstatus").innerText !== "no internet") {
      document.getElementById("internetstatus").innerText = "no internet";
      document.getElementById("internetstatus").classList.remove("green");
      document.getElementById("internetstatus").classList.remove("yellow");
      document.getElementById("internetstatus").classList.add("red");
      console.log("awas");
      notifica.insertAdjacentHTML(
        "afterbegin",
        '<p style="color:#8c01a0"> No Internet signal </p>'
      );
      document.getElementById("serverstatus").innerText =
        "website status: " + "?";
      document.getElementById("serverstatus").classList.remove("green");
      document.getElementById("serverstatus").classList.add("red");
    }
  }
}

function forex() {
  inviows(
    JSON.stringify({
      balance: 1,
      subscribe: 1,
    })
  );
  inviows(
    JSON.stringify({
      /////////forex
      active_symbols: "brief",
      product_type: "basic",
    })
  );
}

function getping() {
  statobinary.ping = undefined;
  return inviows(JSON.stringify({ ping: 1 }));
  // true;
}

function getweb() {
  return inviows(JSON.stringify({ website_status: 1 }));
  // true;
}


// let metabb;




function inviows(obj) {
  if (connessione.ws !== undefined) {
    if (connessione.ws.readyState === 1) {
      connessione.ws.send(obj);
    }
  }
}

function marting() {
  // if (venditaanticipata) {
  //     if (cmm === "Classic") {
  //         if (risultato.guadagno > 0 && totprofit >= 0) {
  //             if (stk > initstake) {
  //                 stk = initstake;
  //             }
  //         } else if (totprofit < 0) {
  //             stk = (Math.round(totprofit * setmoltiplica * 100) / 100) * -1;
  //         }
  //         return;
  //     }
  //
  //     if (cmm === "Classic_on_win") {
  //         if (risultato.guadagno > 0) {
  //             stk = Math.round(stk * setmoltiplica * 100) / 100;
  //             // }
  //         } else {
  //             stk = initstake;
  //         }
  //     }
  //     if (cmm === "OGrind") {
  //         if (totprofit > 0) {
  //             stk = initstake;
  //         } else {
  //             if (stk > initstake) {
  //                 stk = Math.round((stk + initstake) * 100) / 100;
  //             }
  //         }
  //     }
  //     abc();
  // } else {
  if (cmm === "Classic") {
    if (risultato.guadagno > 0) {
      if (stk > initstake) {
        stk = initstake;
      }
    } else {
      stk = Math.round(stk * setmoltiplica * 100) / 100;
    }
  }

  if (cmm === "Classic_on_win") {
    if (risultato.guadagno > 0) {
      stk = Math.round(stk * setmoltiplica * 100) / 100;
      // }
    } else {
      stk = initstake;
    }
  }
  if (cmm === "OGrind") {
    if (risultato.guadagno > 0) {
      stk = initstake;
    } else {
      if (stk > initstake) {
        stk = Math.round((stk + initstake) * 100) / 100;
      }
    }
  }
  abc();
  // }
}

function upanddown() {
  if (ha === "up") {
    if (tipodicontratto === "multipliers") {
      callOrPut = "MULTUP";
    } else {
      callOrPut = "CALL";
    }
    cop = callOrPut;
    copiti = callOrPut;
    trade();
  } else if (ha === "down") {
    if (tipodicontratto === "multipliers") {
      callOrPut = "MULTDOWN";
    } else {
      callOrPut = "PUT";
    }

    cop = callOrPut;
    copiti = callOrPut;
    trade();
  }
}



function pausebot() {
  botgo = false;
  yuhgy = false;
  kun = 2;
  // pierdude = 0;

  if (trading === 0) {
    let edrf = document.getElementById("continuato");
    edrf.checked = false;
    echecazzo = false;
    cop = "";
    dcontinuo = 0;
    callOrPut = cop;
    copiti = callOrPut;
    echecazzodcont = "";
    // if (ct.classList.contains("disabled")) {
    callhtml.classList.remove("disabled");
    puthtml.classList.remove("disabled");
    callhtml.disabled = false;
    puthtml.disabled = false;
    edrf.disabled = false;
    // }

    notifica.insertAdjacentHTML(
      "afterbegin",
      '<p style="color:#8c01a0">Paused.</p>'
    );
  } else {
    bottostop = true;
    notifica.insertAdjacentHTML(
      "afterbegin",
      '<p style="color:#8c01a0">Will be paused.</p>'
    );
  }

  if (chiamataordine) {
    // if (ct.classList.contains("disabled")) {
    callhtml.classList.remove("disabled");
    puthtml.classList.remove("disabled");
    callhtml.disabled = false;
    puthtml.disabled = false;
    document.getElementById("continuato").disabled = false;
    // }
    document.getElementById("continuato").checked = false;
    dcontinuo = 0;
    chiamataordine = false;

    notifica.insertAdjacentHTML(
      "afterbegin",
      '<p style="color:#8c01a0">Order deleted</p>'
    );
  }
}

function prendistoria() {
  inviows(
    JSON.stringify({
      ticks_history: newSymbol,
      adjust_start_time: 1,
      count: conta,
      end: "latest",
      subscribe: 1,
      style: stile,
      req_id: 77,
    })
  );
  switched = false;
}

function postTrade() {
  if (problema === 1 && richieditabella) {
    if (!prenditela || statobinary2.msg_type !== "profit_table") {
      // inviows(
      //   JSON.stringify({
      //     profit_table: 1,
      //     description: 1,
      //     limit: 1,
      //     date_from: tempounix,
      //     sort: "DESC",
      //   })
      // );
      console.log("Richiesta tabella normale");
      prenditela = true;
    }
    // richieditabella = false;
  }
  if (recuperoultima) {
    inviows(
      JSON.stringify({
        profit_table: 1,
        description: 1,
        limit: 1,
        date_from: tempounix,
        sort: "DESC",
      })
    );
    console.log("recupero ultima transazione");
  }
}

function round(floatNumber) {
  return parseFloat((Math.round(floatNumber * 100) / 100).toFixed(2));
}

function postTradeb() {
  if (problema === 1 || recuperoultima) {
    // risultato.conto = Number(risultato.generale.profit_table.count);
    // aewq = 0;
    if (!recuperoultima) {
      risultato.guadagno = risultato.generale.profit;
      risultato.transazione = risultato.generale.transaction_ids.buy;
      risultato.idcontratto = risultato.generale.contract_id;
      risultato.prezzovendita = risultato.generale.sell_price;
      risultato.prezzoacquisto = risultato.generale.buy_price * 1;
      risultato.cp1 = risultato.generale.shortcode;
    } else {
      risultato.guadagno = round(
        statobinary.profit_table.transactions[0].sell_price -
          statobinary.profit_table.transactions[0].buy_price
      );
      risultato.transazione =
        statobinary.profit_table.transactions[0].transaction_id;
      risultato.idcontratto =
        statobinary.profit_table.transactions[0].contract_id;
      risultato.prezzovendita =
        statobinary.profit_table.transactions[0].sell_price * 1;
      risultato.prezzoacquisto =
        statobinary.profit_table.transactions[0].buy_price * 1;
      risultato.cp1 = statobinary.profit_table.transactions[0].shortcode;
    }
    risultato.oldsimbol = localStorage.getItem("symbol");

    // let result = "";
    lasttrade = "";
    let cp2 = risultato.cp1[0];

    if (risultato.idcontratto !== 0) {
      if (csv[2] === undefined || risultato.transazione !== csv[2]) {
        if (risultato.guadagno >= 0.01) {
          if (venditaanticipata) {
            risultato.result = "soldwon";
          } else {
            risultato.result = "won";
          }
          lasttrade = "won";
          totwins++;
          pierdude = 0;
          if (!botgo) {
            document.getElementById("continuato").disabled = false;
            document.getElementById("continuato").checked = false;
            dcontinuo = 0;
            if (sounds) {
                // noinspection JSIgnoredPromiseFromCall
              new Audio("../assets/finish.mp3").play();
            }
          } else {
            if (sounds) {
              // noinspection JSIgnoredPromiseFromCall
                new Audio("../assets/win.mp3").play();
            }
          }
          echecazzo = false;
          echecazzodcont = "";
          ha = "wait";
          yuhgy = false;
        } else if (risultato.guadagno <= 0) {
          if (venditaanticipata) {
            risultato.result = "soldlost";
          } else {
            risultato.result = "lost";
          }
          lasttrade = "lost";
          totlosses++;
          pierdude++;

          yuhgy = false;
          if (stk !== risultato.guadagno * -1) {
            stk = risultato.guadagno * -1;
          }
        }
        if (cmm !== "None") {
          marting();
        }
        if (tid === undefined) {
          tid = risultato.transazione;
        }
        if (risultato.orainizio === undefined) {
          risultato.orainizio = "recovered";
        }
        if (copiti !== "CALL" || copiti !== "PUT") {
          if (cp2 === "C") {
            copiti = "CALL";
          } else {
            copiti = "PUT";
          }
        } //newSymbol

        notifica.insertAdjacentHTML(
          "afterbegin",
          '<p style="color:#000000 ">' +
            currentTime[2] +
            "  Contract " +
            risultato.result +
            "!" +
            risultato.guadagno +
            "</p>"
        );

        notifica.insertAdjacentHTML(
          "afterbegin",
          '<p style="color:#000000 ">' + "---------------------------" + "</p>"
        );

        // range = [];

        // console.log(cop);

        if (!recuperoultima) {
          csv = [
            currentTime[4],
            risultato.orainizio,
            risultato.transazione,
            tempotrade + duration_unit,
            copiti,
            newSymbol,
            risultato.prezzoacquisto,
            risultato.result,
            risultato.guadagno,
            bilancio.diff,
          ];
        } else {
          csv = [
            currentTime[4],
            risultato.orainizio,
            risultato.transazione,
            tempotrade + duration_unit,
            copiti,
            risultato.oldsimbol,
            risultato.prezzoacquisto,
            risultato.result,
            risultato.guadagno,
            bilancio.diff,
          ];
        }
        recuperoultima = false;
        localStorage.setItem("oldtid", tid);
        let stronzo = csv.toString();
        problema = 2;
        //calcolaalfa = true;
        try {
          fs.appendFileSync(loco + "donotdelete.xxx", stronzo + newLine);
          console.log('The "data to append" was appended to file!');
        } catch (err) {
          // console.log("orrore!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          problema = 1;
          orrori.attivo = true;
          orrori.messaggio = "error writing datas";

          /* Handle the error */
        }
        console.log("calcolo,csv e scrittura finiti");
        return postTradea();
      } else if (risultato.transazione === csv[2]) {
        console.log("not do it another time please");
      }
    }
  }
}

function postTradea() {
  if (problema === 2) {
    localStorage.setItem("trading", "0");
    trading = 0;
    totprofit = Math.round((totprofit + risultato.guadagno) * 100) / 100;
    notrades++;
    localStorage.setItem("profit", totprofit);
    document.getElementById("profit").innerText = totprofit;
    localStorage.setItem("noTrades", notrades);
    document.getElementById("noTrades").innerText = notrades;
    // localStorage.setItem("winRate", wrate);
    // document.getElementById("winRate").innerText = wrate;
    // if (wrate >= 45 && wrate < 52) {
    //   document.getElementById("winRate").style.color = "orange";
    // } else if (wrate >= 52) {
    //   document.getElementById("winRate").style.color = "green";
    // } else {
    //   document.getElementById("winRate").style.color = "red";
    // }
    if(wrate > 0.0){
      document.getElementById("winRate").style.color = "green";
    }else if (wrate === 0.0){
      document.getElementById("winRate").style.color = "orange";

    }else{
      document.getElementById("winRate").style.color = "red";

    }
    // wrate = Math.round(((totwins * 100) / notrades) * 100) / 100;
    if (tkp > 0 && totprofit >= tkp) {
      botgo = false;
      echecazzodcont = "";
      dcontinuo = 0;
      document.getElementById("continuato").disabled = false;
      document.getElementById("continuato").checked = false;
      echecazzo = false;
      notifica.insertAdjacentHTML(
        "afterbegin",
        '<p style="color:#8c01a0">Take your profit.</p>'
      );
    }

    if (stk > moneyneeded) {
      moneyneeded = Math.round((moneyneeded + stk) * 100) / 100;
    }
    // document.getElementById("winRate").innerText = wrate;
    // localStorage.setItem("winRate", wrate);
    if (bottostop) {
      if (callhtml.classList.contains("disabled")) {
        callhtml.classList.remove("disabled");
        puthtml.classList.remove("disabled");
      }
      document.getElementById("continuato").checked = false;
      echecazzo = false;
      cop = "";
      dcontinuo = 0;
      callOrPut = cop;
      copiti = callOrPut;
      echecazzodcont = "";
      callhtml.disabled = false;
      puthtml.disabled = false;
      document.getElementById("continuato").disabled = false;
      bottostop = false;
    }
    if (callhtml.classList.contains("disabled")) {
      callhtml.classList.remove("disabled");
      puthtml.classList.remove("disabled");
    }
    localStorage.setItem("totwins", totwins);
    localStorage.setItem("totlosses", totlosses);

    document.getElementById("winRate").style.color = "red";
    if (wrate >= 45 && wrate < 52) {
      document.getElementById("winRate").style.color = "orange";
    } else if (wrate >= 52) {
      document.getElementById("winRate").style.color = "green";
    }
    document.getElementById("stake").innerText = stk;
    localStorage.setItem("storedstk", stk); ////////////save last stake
    // date_expiry = "";
    document.getElementById("moneyneeded").innerText = moneyneeded;
    localStorage.setItem("moneyneeded", moneyneeded);
    // localStorage.setItem("date_expiry", date_expiry);
    localStorage.setItem("pierdudes", pierdude);

    if (venditaanticipata) {
      venditaanticipata = false;
    }
    if (problema !== 0) {
      problema = 0;
    }
    // conto = 0;
    // aewq = 0;
    guadagno = 0;
    // transazione = 0;
    // idcontratto = 0;
    // prezzovendita = 0;
    // prezzoacquisto = 0;
    // cp1 = 0;
    scrivi = 0;

    callOrPut = "";

    winLossBarrier = "no open trade";
    chiamataordine = false;
    // espirato = 0;
    // contractId = 0;
    // orainizio = "";
    // buy_price = "";
    current_spot_time = "";
    differenza = "";

    tid = "";
    tonoff = "0";
    localStorage.setItem("trading", "0");
    siamnellamerda = false;

    // prezzoentrata = "";
    winLossBarrier = "";

    localStorage.setItem("contratto", "0");
    // canSell = "";
    // isSold = "";
    result = "";

    localStorage.setItem("inatto", "0");

    winorlost = "";
    // transazione = "";
    // idcontratto = "";
    // prezzovendita = "";
    // prezzoacquisto = "";
    guadagno = "";
    // conto = "";
    prenditela = false;
    problema = 0;
    // statobinary.profit_table = {};
    tizio = 2;
    partefinale = {};

    // resetcount();
  }
  return console.log("postrade a finito");
}

function prendistoriaohcl() {
  inviows(
    JSON.stringify({
      ticks_history: newSymbol,
      adjust_start_time: 1,
      count: conta,
      end: "latest",
      subscribe: 1,
      style: stile,
      req_id: 200,
      granularity: tempocandela,
    })
  );
  switched = false;
}

function rotazionevix() {
  function cavoli() {
    cambiasegno = true;
    if (timp === 0) {
      newSymbol = "R_10";
      colorebottonimarket();
    }
    if (timp === 1) {
      newSymbol = "R_25";
      colorebottonimarket();
    }
    if (timp === 2) {
      newSymbol = "R_50";
      colorebottonimarket();
    }
    if (timp === 3) {
      newSymbol = "R_75";
      colorebottonimarket();
    }
    if (timp === 4) {
      newSymbol = "R_100";
      colorebottonimarket();
    }
    if (timp === 5) {
      newSymbol = "RDBULL";
      colorebottonimarket();
    }
    if (timp === 6) {
      newSymbol = "RDBEAR";
      colorebottonimarket();
    }
    if (timp >= 7) {
      newSymbol = "R_10";
      colorebottonimarket();
      timp = 0;
    }
    if (newSymbol !== localStorage.getItem("symbol")) {
      switched = true;

      localStorage.setItem("symbol", newSymbol);
    }
  }

  if (start2 !== 1) {
    timp = 0;

    start2 = 1;
  } else {
    if (automk === "rotation") {
      if (currentTime[1] === 30 && !cambiasegno) {
        timp = timp + 1;
        cavoli();
      } else if (currentTime[1] !== 30 && cambiasegno) {
        cambiasegno = false;
      }
    } else if (automk === "casuale") {
      if (currentTime[1] === 30 && !cambiasegno) {
        timp = Math.floor(Math.random() * 7);
        cavoli();
      } else if (currentTime[1] !== 30 && cambiasegno) {
        cambiasegno = false;
      }
    } else if (automk === "onpersa") {
      if (lasttrade === "lost") {
        timp = timp + 1;
        lasttrade = "";
        cavoli();
      }
    }
  }
  // }
}

function resetcount() {

  if (duration_unit === "s" || duration_unit === "t") {
      countdown = tempotrade * 1;
  } else if (duration_unit === "m") {
    countdown = tempotrade * 60 ;
  }
}

function rotazionefx() {
  //
  function cavoli2() {
    cambiasegno = true;

    if (timp === 4) {
      newSymbol = "frxUSDCHF";
      colorebottonimarket();
    }
    if (timp === 0) {
      newSymbol = "frxEURUSD";
      colorebottonimarket();
    }
    if (timp === 1) {
      newSymbol = "frxUSDJPY";
      colorebottonimarket();
    }
    if (timp === 2) {
      newSymbol = "frxGBPUSD";
      colorebottonimarket();
    }
    if (timp === 3) {
      newSymbol = "frxAUDUSD";
      colorebottonimarket();
    }
    if (timp === 5) {
      newSymbol = "frxNZDUSD";
      colorebottonimarket();
    }
    if (timp === 6) {
      newSymbol = "frxUSDCAD";
      colorebottonimarket();
    }
    if (timp === 7) {
      newSymbol = "frxEURUSD";
      colorebottonimarket();
      timp = 0;
    }
    if (newSymbol !== localStorage.getItem("symbol")) {
      switched = true;

      localStorage.setItem("symbol", newSymbol);
    }
  }

  if (start2 !== 1) {
    timp = 0;

    start2 = 1;
  } else {
    if (automk === "rotation") {
      if (currentTime[1] === 30 && !cambiasegno) {
        timp = timp + 1;
        cavoli2();
      } else if (currentTime[1] !== 30 && cambiasegno) {
        cambiasegno = false;
      }
    } else if (automk === "casuale") {
      if (currentTime[1] === 30 && !cambiasegno) {
        timp = Math.floor(Math.random() * 7);
        cavoli2();
      } else if (currentTime[1] !== 30 && cambiasegno) {
        cambiasegno = false;
      }
    } else if (automk === "onpersa") {
      if (lasttrade === "lost") {
        timp = timp + 1;
        lasttrade = "";
        cavoli2();
      }
    }
  }
}

function stampahtml(obj) {
  notifica.insertAdjacentHTML("afterbegin", obj);
}



function trade() {
  if ((trading === 0 && mercatov) || mercatof) {
    if (botgo === false) {
      if (document.getElementById("continuato").checked === false) {
        echecazzo = false;
      } else {
        cop = echecazzodcont;
      }
    }
    prezzo = stk * 1;
    if (tipodicontratto === "callorput") {
      parametri = {
        amount: JSON.stringify(prezzo),
        basis: "stake",
        contract_type: cop,
        currency: currency,

        duration: tempotrade,
        duration_unit: duration_unit,
        symbol: newSymbol,
      };
    } else if (tipodicontratto === "multipliers") {
      limitorder = {
        stop_loss: JSON.stringify(msl),
        take_profit: JSON.stringify(mtp),
      };
      parametri = {
        amount: JSON.stringify(prezzo),
        basis: "stake",
        contract_type: cop,
        currency: currency,
        multiplier: JSON.stringify(multiplier),

        symbol: newSymbol,
        limit_order: limitorder,
      };
    }
    if (!yuhgy) {
      yuhgy = true;
      notifica.insertAdjacentHTML(
        "afterbegin",
        '<p style="color:#000000 ">' +
          currentTime[2] +
          " I open a " +
          stk +
          " " +
          cop +
          " contract. </p>"
      );
    }
    inviows(
      JSON.stringify({
        buy: 1,
        parameters: parametri,
        price: 10000,
        subscribe: 1,
      })
    );
    trading = 1;
  } else {
    missingtrades++;
    console.error("duplicate trade attempted and blocked!");
    if (missingtrades >= 5) {
      missingtrades = 0;
      siamnellamerda = true;
      richieditabella = true;
      countdownstart = false;
      // azz = 0;
      problema = 1;
      callhtml.disabled = false;
      puthtml.disabled = false;
      // trading = 0;
      postTradeb();
    }
  }
}

function wert() {
  if (process.env.HOMEPATH !== undefined) {
    return process.env.HOMEPATH + "/TeonTrader/";
  } else {
    return process.env.HOME + "/TeonTrader/";
  }
}
focus();

function iniziamooo() {
  if (iniziamo.inizia === true) {
    if (localStorage.getItem("agree") !== "yes") {
      document.getElementById("termini").style.display = "block";
      document.getElementById("ruota").style.display = "none";
      document.getElementById("notermini").style.display = "none";
      document.getElementById("olistic").addEventListener("click", olistic);
      document.getElementById("refuse").addEventListener("click", refuse);
      return;
    } else {
      document.getElementById("home").style.display = "inline";
    }
    if (
      localStorage.impostadatiindica === "true" &&
      localStorage.impostadatitrader === "true"
    ) {
      iniziamo.caricadati = true;
      iniziamo.inizia = "fatto";
    } else {
      if (localStorage.primoavvio === undefined) {
        localStorage.primoavvio = "yes";
      }

      if ((localStorage.agree && localStorage.primoavvio) === "yes") {
        if (localStorage.impostadatitrader === "false") {
          window.open("../views/yourdata.html", "", "width=1000,height=600");
          localStorage.impostadatitrader = "true";
        } else if (localStorage.impostadatitrader !== "true") {
          localStorage.impostadatitrader = "false";
        }
      }
      if (
        localStorage.primoavvio === "no" &&
        localStorage.impostadatitrader === "true"
      ) {
        if (localStorage.impostadatiindica === "false") {
          window.open("../views/multi.html", "", "width=1000,height=600");
          localStorage.impostadatiindica = "true";
        } else if (localStorage.impostadatiindica !== "true") {
          localStorage.impostadatiindica = "false";
        }
      }
    }
  }
  if (iniziamo.inizia === "fatto" && iniziamo.caricadati === true) {
    // if (dcontinuo === undefined) {
    //     continuo();
    // }
    console.log("caricadati[]");
    setmoltiplica = Number(localStorage.getItem("storedmoltiplica"));
    tempotrade = localStorage.getItem("storedtempo");
    cmm = localStorage.getItem("storedcmm");
    trailingstop = localStorage.getItem("storedtrailstop");
    tkp = Number(localStorage.getItem("storedtkp"));
    stoploss = Number(localStorage.getItem("storedstoploss"));
    vid = localStorage.getItem("storedvid");
    rid = localStorage.getItem("storedrid");
    if (vid !== "Your Virtual Token Here") {
      if (token !== vid) {
        token = vid;
        checkapiv();
      }
    }
    automk = localStorage.getItem("storedam");
    totwins = Number(localStorage.getItem("totwins"));
    if (localStorage.getItem("bila") > 0) {
      bilancio.iniziale = Number(localStorage.getItem("bila"));
    }
    tradeon2 = localStorage.getItem("tradeon");
    moneyneeded = Number(localStorage.getItem("moneyneeded"));
    notrades = Number(localStorage.getItem("noTrades"));
    initstake = Number(localStorage.getItem("iniziale"));
    tipodicontratto = localStorage.getItem("storedsct");
    totlosses = Number(localStorage.getItem("totlosses"));
    barriersu = Number(localStorage.getItem("storedbarriersu"));
    barriergiu = Number(localStorage.getItem("storedbarriergiu"));
    automk = localStorage.getItem("storedam");
    totwins = Number(localStorage.getItem("totwins"));
    multiplier = Number(localStorage.getItem("multiplier"));
    mtp = Number(localStorage.getItem("mtp"));
    msl = Number(localStorage.getItem("msl"));
    cttk = localStorage.getItem("storedcandletick");
    if (stoploss === 0) {
      document.getElementById("stplss").style.display = "none";
      document.getElementById("trls").style.display = "none";
    } else {
      document.getElementById("stplss").style.display = "block";
      document.getElementById("trls").style.display = "block";
    }
    if (tkp === 0) {
      document.getElementById("tkpft").style.display = "none";
    } else {
      document.getElementById("tkpft").style.display = "block";
    }
    if (tipodicontratto === "multipliers") {
      document.getElementById("multiplier").style.display = "block";
      document.getElementById("stploss").style.display = "block";
      document.getElementById("tkprf").style.display = "block";
      document.getElementById("ttime").style.display = "none";
      document.getElementById("multiplier2").innerText = multiplier;
      document.getElementById("stploss2").innerText = msl;
      document.getElementById("tkprf2").innerText = mtp;
    } else {
      document.getElementById("multiplier").style.display = "none";
      document.getElementById("stploss").style.display = "none";
      document.getElementById("tkprf").style.display = "none";
      document.getElementById("ttime").style.display = "block";
    }
    botgo = false;
    if (tnc !== 1 || tnc !== 2) {
      tnc = 1;
    }
    datti = false;
    tranb = Number(localStorage.getItem("inatto"));
    timp = 0;

    setmoltiplica = Number(localStorage.getItem("storedmoltiplica"));

    chiamataordine = false;
    inizio = true;

    pierdude = Number(localStorage.getItem("pierdudes"));

    primoavvio = localStorage.getItem("primoavvio");
    oldtid = localStorage.getItem("oldtid");
    trading = 0;
    echecazzo = false;

    tsm = localStorage.getItem("storedtsm");

    fields =
      [
        "Date",
        "Time",
        "Contract",
        "Trade Duration (s)",
        "CALL / PUT",
        "Market",
        "Stake",
        "Win / Loss",
        "P / L",
      ] + newLine;
    relativizziamo = Number(localStorage.getItem("relativizziamo"));
    tradeon2 = localStorage.getItem("tradeon");

    worm = localStorage.getItem("worm");
    if (worm === "1") {
      document.getElementById("wormline").style.display = "table-row";
    } else {
      document.getElementById("wormline").style.display = "none";
    }
    mac = localStorage.getItem("mac");
    if (mac === "1") {
      document.getElementById("macdline").style.display = "table-row";
    } else {
      document.getElementById("macdline").style.display = "none";
    }
    hl = localStorage.getItem("hl");
    if (hl === "1") {
      document.getElementById("hullline").style.display = "table-row";
    } else {
      document.getElementById("haline").style.display = "none";
    }
    ha1 = localStorage.getItem("ha1");
    if (ha1 === "1") {
      document.getElementById("haline").style.display = "table-row";
    } else {
      document.getElementById("haline").style.display = "none";
    }
    teon = localStorage.getItem("teon");
    if (teon === "1") {
      document.getElementById("teonline").style.display = "table-row";
    } else {
      document.getElementById("teonline").style.display = "none";
    }
    tonoff = Number(localStorage.getItem("trading"));
    bb = localStorage.getItem("bb");
    if (bb === "1") {
      document.getElementById("bbline").style.display = "table-row";
    } else {
      document.getElementById("bbline").style.display = "none";
    }
    fermaa = Number(localStorage.getItem("storedstoploss"));
    fermaaquindi = localStorage.getItem("storedtrailstop");

    document.getElementById("moneyneeded").innerText = moneyneeded;
    barriergiu = Number(localStorage.getItem("storedbarriergiu"));
    barriersu = Number(localStorage.getItem("storedbarriersu"));
    stk = Number(localStorage.getItem("storedstk"));
    document.getElementById("stake").innerText = stk;
    initstake = Number(localStorage.getItem("iniziale"));
    document.getElementById("initStake").innerText = initstake;

    stoploss = Number(localStorage.getItem("storedstoploss"));
    document.getElementById("stoploss").innerText = stoploss; // show stoploss
    trailingstop = localStorage.getItem("storedtrailstop");
    document.getElementById("trailingstop").innerText = trailingstop; // show trailingstop
    tkp = Number(localStorage.getItem("storedtkp"));
    document.getElementById("takeprofit").innerText = tkp;
    setmoltiplica = Number(localStorage.getItem("storedmoltiplica"));
    document.getElementById("moltiplica").innerText = setmoltiplica;
    cmm = localStorage.getItem("storedcmm");
    document.getElementById("martin").innerText = cmm;

    tempotrade = localStorage.getItem("storedtempo");
    document.getElementById("tempotrade").innerText = tempotrade;
    tsm = localStorage.getItem("storedtsm");
    document.getElementById("tsm").innerText = tsm;
    cttk = localStorage.getItem("storedcandletick");

    automk = localStorage.getItem("storedam");
    document.getElementById("autom").innerText = automk;
    totprofit = Number(localStorage.getItem("profit"));
    document.getElementById("profit").innerText = totprofit;

    notrades = Number(localStorage.getItem("noTrades"));

    document.getElementById("noTrades").innerText = notrades;

    totwins = Number(localStorage.getItem("totwins"));
    totlosses = Number(localStorage.getItem("totlosses"));
    // wrate = 0;
//
//     if ((totwins || totlosses) > 0) {
//       // wrate = Math.round(((totwins * 100) / notrades) * 100) / 100;
// wrate= wrt();
//       // wrate     = ((Math.round(( ((bilancio.attuale - bilancio.iniziale)/bilancio.iniziale) * 100) * 100)/100).toFixed(2))*1;
//
//
//     }
//     localStorage.setItem("winRate", wrate);
//     document.getElementById("winRate").innerText = wrate;
    // if (wrate >= 45 && wrate < 52) {
    //   document.getElementById("winRate").style.color = "orange";
    // } else if (wrate >= 52) {
    //   document.getElementById("winRate").style.color = "green";
    // } else {
    //   document.getElementById("winRate").style.color = "red";
    // }
    // if(wrate > 0.0){
    //   document.getElementById("winRate").style.color = "green";
    // }else if (wrate === 0.0){
    //   document.getElementById("winRate").style.color = "orange";
    //
    // }else{
    //   document.getElementById("winRate").style.color = "red";
    //
    // }
    if (tsm === "min") {
      duration_unit = "m";
    }
    if (tsm === "tick(s)") {
      duration_unit = "t";
    }

    if (tsm === "sec") {
      duration_unit = "s";
    }
    if (automk == null) {
      automk = "None";
    }
    if (automk !== "None") {
      ruota = true;
      rimeventi();
      $("#symbolvx").removeClass("red").addClass("blue");
      $("#symbolfx").removeClass("red").addClass("blue");
    } else if (automk === "None") {
      ruota = false;
      eventi();

      $("#symbolvx").removeClass("blue").addClass("red");
      $("#symbolfx").removeClass("blue").addClass("red");
    }
    iniziamo.caricadati = "fatto";
    localStorage.salvati = "0";
    colorebottonimarket();
  }
  if (iniziamo.caricadati === "fatto" && iniziamo.connessione !== "fatto") {
    controllafile();
    if (document.getElementById("loading").style.display !== "none") {
      $("#loading").delay(2000).fadeOut(2000);
    } else {
      iniziamo.connessione = "fatto";
      $("#loading").remove();
    }
  }
}
let contaping;
setInterval(function boooo() {
    if (localStorage.getItem("websitestatus") === "0") {
        getweb();
        getping();
    }
    if (notifica.childElementCount > 20){
      notifica.removeChild(notifica.childNodes[20])
    }
    if (localStorage.salvati === "1") {
        iniziamo.caricadati = true;
        iniziamooo();
    }
    if(candelac !== undefined){
    if (candelac.length < 10) {
        // if (newSymbol != undefined) {
        //     data();
        // }
        contaping++;
        console.log("ping==" + contaping);
        if (contaping >= 30) {
            getping();
            contaping = 0;
        }
    }}
    if (!connessione.settata) {
        chkconnessione();
        return;
    }
    if (orrori.attivo) {
        errore();
    }

    if (trading === 1) {
    callhtml.disabled = true;
    puthtml.disabled = true;

    if (countdownstart && countdown !== 0) {
      countdown--;
    } else if ((countdown === 0)||(differenza >=0)) {
      //richieditabella = true;
      problema = 1;
      //siamnellamerda = true;
      countdownstart = false;
      postTrade();
    } //else if (!countdownstart && countdown !==0){cercaultimo()};
  }
}, 1000);

setInterval(function main() {
  currentTime = getDateTime();

  if (window.navigator.onLine) {
    // if (!connessione.settata) {
    //   chkconnessione();
    //   return;
    // }
    // if (orrori.attivo) {
    //   errore();
    // }

    if (
      (iniziamo.caricadati === "fatto") && (iniziamo.inizia === "fatto") && (iniziamo.connessione === "fatto")

    ) {

      // if (!connex) {
      //     connex = chkconnessione();
      // }
      dcontinuo = function (){if (document.getElementById("continuato").checked) {
       return  1;
      }else{return 0}};

      if (candelac !== undefined) {
        relativo = getTrend();
        stikazzi();
      }
      if (switched) {
        data();
      }

      if (tnc === 2) {

        if (mercatov || (mercatof && trading === 0)) {
          if (temponewcandle === currentTime[1] && trading === 0) {
            if(minutetrade !== currentTime[3]){minutetrade = currentTime[3];
            nuovacandela = true;
            console.log("newcandle", ha);
            if (botgo) {
              upanddown();
              nuovacandela = false;
            }
            }
          } else {
            nuovacandela = false;
          }
        }
        if (mercatof && trading > 0) {
          if (temponewcandle === currentTime[1]) {
            if(minutetrade !== currentTime[3]){minutetrade = currentTime[3];
            nuovacandela = true;
            console.log("newcandle forex", ha);
            if (botgo) {
              upanddown();
              nuovacandela = false;
            }
            }
          } else {
            nuovacandela = false;
          }
        }
      }
      if ((tnc === 1)&&(document.getElementById("tncandle").classList.contains("positive"))) {
        $("#tncandle").removeClass("positive").addClass("negative");


      } else if ((tnc === 2)&&(document.getElementById("tncandle").classList.contains("negative"))) {
        $("#tncandle").removeClass("negative").addClass("positive");


      }
      // if ((botgo || echecazzo) && trading === 0) {
      // callhtml.disabled = true;
      // puthtml.disabled = true;
      // yuhgy = false;
      // if (botgo) {
      //   if (newSymbol === "RDBULL" || newSymbol === "RDBEAR") {
      //     let d = new Date();
      //     let n = d.getUTCHours();
      //     if (n >= 23 || n <= 1) {
      //       console.log("trade blocked!", n);
      //       return;
      //     }
      //   }
      //   if (tnc === 1 || (tnc === 2 && nuovacandela)) {
      //     upanddown();
      //   }
      // } else if (echecazzo) {
      //   if (tnc === 1 || (tnc === 2 && nuovacandela)) {
      //     trade();
      //   }
      // }
      // } else
      if ((!botgo || !echecazzo) && trading === 0) {
        callhtml.disabled = false;
        puthtml.disabled = false;
      }
      // while (notifica.childNodes.length >= 22) {
      //     pippo = notifica.lastChild;
      //     notifica.removeChild(pippo);
      // }

      if (trading !== 1) {
          resetcount();
        if (stoploss > 0 && stk >= stoploss) {
          if (trailingstop === "stop") {
            if (kun !== 110) {
              kun = 110;
              pausebot();
            }
          } else if (trailingstop === "reset") {
            stk = initstake;
          }
        }
        if (botgo || echecazzo) {
          callhtml.disabled = true;
          puthtml.disabled = true;

          yuhgy = false;
          if (botgo) {
            if (newSymbol === "RDBULL" || newSymbol === "RDBEAR") {
              let d = new Date();
              let n = d.getUTCHours();
              if (n >= 23 || n <= 1) {
                console.log("trade blocked!", n);
                return;
              }
            }
            if (tnc === 1 || (tnc === 2 && nuovacandela)) {
              upanddown();
            }
          } else if (echecazzo) {
            if (tnc === 1 || (tnc === 2 && nuovacandela)) {
              trade();
              if (dcontinuo === 0) {
                echecazzo = false;
              }
            }
          }
        }

        document.getElementById("entryC").innerText = "no open trade";
        document.getElementById("expiryTime").innerText = "--";
        document.getElementById("contractProfit").innerText = "--";
        document.getElementById("contractProfit").classList.remove("green");
        document.getElementById("contractProfit").classList.remove("red");
        document.getElementById("sell_me").classList.remove("red");
        document.getElementById("sell_me").classList.remove("green");
      }
      if (Number(localStorage.getItem("salvati")) === 1) {
        aggiornadati = false;
      }
      if(candelac === undefined){
      if (currentTime[1] === 30) {
        inviows(
          JSON.stringify({
            ping: 1,
          })
        );
      }}

      if (siamnellamerda) {
        if (nort !== 1) {
          notifica.insertAdjacentHTML(
            "afterbegin",
            '<p style="color:#8c01a0"> Trading report error.</p>'
          );
          nort = 1;
        }
        if (currentTime[1] === 1) {
          cercaultimo();
        }
      }
      if (ruota) {
        if (mercatov && !mercatof) {
          if (automk !== "None") {
            rotazionevix();
            colorebottonimarket();
          }
        } else if (!mercatov && mercatof) {
          if (automk !== "None") {
            rotazionefx();
            colorebottonimarket();
          }
        }
      }
      document.getElementById("pierdudes").innerText = pierdude;
      document.getElementById("dcebande").innerText = ha;
      document.getElementById("going").innerText = ha;
    } else {
      iniziamooo();
    }
  } else {
    localStorage.setItem("websitestatus", "0");
    errore();
  }
}, 100);
document
  .getElementById("candelladati")
  .addEventListener("click", function cancelladati() {
    let txt;
    let ase = "0";
    if (window.confirm("Are you sure to delete all your datas?")) {
      localStorage.clear();

      document.getElementById("balance").innerText = ase;
      document.getElementById("currency").innerText = ase;
      // store.deleteAll();

      localStorage.setItem("primoavvio", "yes");
      primoavvio = localStorage.getItem("primoavvio");
      txt = "All your data are deleted";
      fs.unlinkSync(loco + "donotdelete.xxx");
      window.location.reload();
      // verify if storages got cleared.

      //caricadati()
    } else {
      txt = "I keep all your data!";
    }
    notifica.insertAdjacentHTML(
      "afterbegin",
      '<p style="color:#8c01a0">' + txt + "</p>"
    );
  });

function checkapiv() {
  // noinspection DuplicatedCode
  if (token === rid) {
    inviows(
      JSON.stringify({
        logout: 1,
      })
    );
  }
  token = vid;
  // console.log(token);

  inviows(JSON.stringify({ authorize: token }));
}

function checkapir() {
  if (token === vid) {
    inviows(
      JSON.stringify({
        logout: 1,
      })
    );
  }
  token = rid;

  inviows(JSON.stringify({ authorize: token }));
}

document
  .getElementById("chiudiapp")
  .addEventListener("click", function chiudi() {
    writelog("----------CHIUDI----------");
    inviows(
      JSON.stringify({
        forget_all: ["candles", "ticks", "balance"],
      })
    );
    inviows(
      JSON.stringify({
        logout: 1,
      })
    );
    window.close();
  });
document.getElementById("callTrade").addEventListener("click", opencall);

function opencall() {
  echecazzo = true;
  chiamataordine = true;

  if (tipodicontratto === "callorput") {
    cop = "CALL";
    callOrPut = cop;
    copiti = callOrPut;
    echecazzodcont = "CALL";
  }
  if (tipodicontratto === "barriera") {
    cop = "RANGE";
    callOrPut = cop;
    copiti = callOrPut;
    echecazzodcont = "RANGE";
  }
  if (tipodicontratto === "multipliers") {
    cop = "MULTUP";
    callOrPut = cop;
    copiti = callOrPut;
    echecazzodcont = "MULTUP";
  }
}

document.getElementById("putTrade").addEventListener("click", openput);

function openput() {
  echecazzo = true;
  chiamataordine = true;
  if (tipodicontratto === "multipliers") {
    cop = "MULTDOWN ";
    callOrPut = cop;
    copiti = callOrPut;
    echecazzodcont = "MULTDOWN";
  }
  if (tipodicontratto === "callorput") {
    cop = "PUT";
    callOrPut = cop;
    copiti = callOrPut;
    echecazzodcont = "PUT";
  }
  if (tipodicontratto === "barriera") {
    cop = "RANGE";
    copiti = callOrPut;
  }
}

// document.getElementById("continuato").addEventListener("click", continuo);
//
// function continuo() {
//     if (document.getElementById("continuato").checked) {
//         dcontinuo = 1;
//     } else {
//         dcontinuo = 0;
//     }
// }

function suona() {
  if (suonahtml.innerText === "Sound off") {
    suonahtml.innerText = "Sound on";
    suonahtml.classList.remove("red");
    suonahtml.classList.add("green");
    sounds = true;
  } else {
    suonahtml.innerText = "Sound off";
    suonahtml.classList.remove("green");
    suonahtml.classList.add("red");
    sounds = false;
  }
}

function opoini() {
  let myobj = document.getElementById("myframetw");
  if (document.getElementById("myframetw")) {
    myobj.remove();
    // document.getElementById("myframetw").style.display = "none";
    // document.getElementById("myframetw").data = "";
    // $("#myframetw").empty();
    // oppohtml;
    oppohtml.innerText = "Graphic off";
    oppohtml.classList.remove("green");
    oppohtml.classList.add("red");

    notifica.style.display = "block";
  } else {
    notifica.style.display = "none";
    let para = document.createElement("OBJECT");

    para.id = "myframetw";

    document.getElementById("cavoli").appendChild(para);
    document.getElementById("myframetw").data =
      "https://tradingview.binary.me/v1.3.12/main.html";
    oppohtml.innerText = "Graphic on";
    oppohtml.classList.remove("red");
    oppohtml.classList.add("green");
    // document.getElementById("myframetw").style = "width:100%; height:90%";
    document.getElementById("myframetw").style.setProperty("width", "100%");
    document.getElementById("myframetw").style.setProperty("height", "90%");
  }
}

function playbot() {
  botgo = true;
  callhtml.disabled = true;
  puthtml.disabled = true;
  document.getElementById("continuato").disabled = true;

  notifica.insertAdjacentHTML(
    "afterbegin",
    '<p style="color:#8c01a0">Bot starts...</p>'
  );
}

function resetdatatrading() {
  totprofit = 0;
  notifica.innerHTML = "";
  notifica.insertAdjacentHTML(
    "afterbegin",
    '<p style="color:#8c01a0"> Values reseted.</p>'
  );
  chiamataordine = false;
  pierdude = 0;
  notrades = 0;
  totwins = 0;
  totlosses = 0;
  moneyneeded = 0;
  wrate = 0;
  datti = false;
  attaya = false;
  document.getElementById("winRate").innerText = pierdude;
  stk = localStorage.getItem("iniziale");
  localStorage.setItem("pierdudes", pierdude);
  localStorage.setItem("storedstk", stk);
  localStorage.setItem("totlosses", totlosses);
  localStorage.setItem("totwins", totwins);
  localStorage.setItem("moneyneeded", stk);
  if (statobinary.balance !== undefined) {
    bilancio.iniziale = statobinary.balance.balance;
    bilancio.attuale = statobinary.balance.balance;
    bilancio.diff = 0;
  }
  localStorage.setItem("bila", bilancio.iniziale);
  localStorage.setItem("winRate", wrate);
  localStorage.setItem("noTrades", notrades);
  localStorage.setItem("profit", totprofit);
  sex.innerText = "0";
  fs.unlinkSync(loco + "donotdelete.xxx");
  fs.unlinkSync(loco + "log.log");
  document.getElementById("stake").innerText = stk;

  document.getElementById("noTrades").innerText = localStorage.getItem(
    "noTrades"
  );

  document.getElementById("profit").innerText = localStorage.getItem("profit");
  document.getElementById("moneyneeded").innerText = localStorage.getItem(
    "moneyneeded"
  );
  callhtml.disabled = false;
  puthtml.disabled = false;

  controllafile();
}

function nc() {
  if (tnc === 1) {
    $("#tncandle").removeClass("negative").addClass("positive");

    tnc = 2;
  } else {
    $("#tncandle").removeClass("positive").addClass("negative");

    tnc = 1;
  }
}

function setforex() {
  mercatof = true;
  mercatov = false;
  oldmarket = "frex";
  localStorage.setItem("oldmarket", oldmarket);
  document.getElementById("setvix").classList.remove("positive");
  document.getElementById("setvix").classList.add("negative");
  document.getElementById("setfx").classList.remove("negative");
  document.getElementById("setfx").classList.add("positive");
  document.getElementById("symbolfx").style.display = "block";
  document.getElementById("symbolvx").style.display = "none";
  controllo = true;
  if (tonoff === 1) {
    siamnellamerda = true;
  }
  callhtml.disabled = false;
  puthtml.disabled = false;
  newSymbol = "frxEURUSD";
  //switched = true;
  if (stk < 0.5) {
    notifica.insertAdjacentHTML(
      "afterbegin",
      '<p style="color:#8c01a0">Minimal stake 0.5. Minimal trade time 1 min.</p>'
    );
    window.open("../views/yourdata.html", "", "width=1000,height=600");
  }
  colorebottonimarket();
}
function bottone_reale(){
  livehtml.classList.remove("positive");
  livehtml.classList.add("negative");
  virthtml.classList.remove("positive");
  virthtml.classList.add("negative");
}
function setreal() {
  // document.getElementById("varii3").style.display = "block";
  // document.getElementById("varii2").style.display = "block";

  if (rid !== "Your Real Token Here") {


    checkapir();
  }
}
function bottone_virtuale(){
  virthtml.classList.remove("negative");
  virthtml.classList.add("positive");
  livehtml.classList.remove("positive");
  livehtml.classList.add("negative");
}
function setvirtual() {
  if (vid !== "Your Virtual Token Here") {
    bottone_virtuale();
    console.log("virt");
    checkapiv();
  }
}

function setvix() {
  // start2 = 2;
  mercatof = false;
  mercatov = true;
  oldmarket = "sink";
  localStorage.setItem("oldmarket", oldmarket);
  document.getElementById("setvix").classList.remove("negative");
  document.getElementById("setvix").classList.add("positive");
  document.getElementById("setfx").classList.remove("positive");
  document.getElementById("setfx").classList.add("negative");
  document.getElementById("symbolfx").style.display = "none";
  document.getElementById("symbolvx").style.display = "block";
  if (tonoff === 1) {
    siamnellamerda = true;
  }
  controllo = true;
  callhtml.disabled = false;
  puthtml.disabled = false;
 if(localStorage.getItem("symbol") !== null ){
     newSymbol = localStorage.getItem("symbol")
 }else {
     newSymbol = "R_10";
 }
  // switched = true;
  colorebottonimarket();
}

function sellContractEarly() {
  if (contractId !== undefined) {
    inviows(
      JSON.stringify({
        sell: contractId,
        price: 0,
      })
    );
  }
}

document.getElementById("sell_me").addEventListener("click", sellContractEarly);
document.getElementById("setvix").addEventListener("click", setvix);
document.getElementById("setvirt").addEventListener("click", setvirtual);
document.getElementById("setlive").addEventListener("click", setreal);
document.getElementById("startBot").addEventListener("click", playbot);
document.getElementById("resetBot").addEventListener("click", resetdatatrading);
document.getElementById("setfx").addEventListener("click", setforex);
document.getElementById("tncandle").addEventListener("click", nc);
document.getElementById("pauseBot").addEventListener("click", pausebot);
suonahtml.addEventListener("click", suona);
oppohtml.addEventListener("click", opoini);

function olistic() {
  localStorage.setItem("agree", "yes");
  resetdatatrading();
  window.location.reload();
}

function refuse() {
  window.location.reload();
}

function a1() {
  if (automk === "None") {
    newSymbol = "R_10";
    colorebottonimarket();
  }
}

function eventi() {
  document.getElementById("10sym").addEventListener("click", a1);
  document.getElementById("usdchf").addEventListener("click", n1);
  document.getElementById("audusd").addEventListener("click", m1);
  document.getElementById("gbpusd").addEventListener("click", l1);
  document.getElementById("usdcad").addEventListener("click", p1);
  document.getElementById("nzdusd").addEventListener("click", o1);
  document.getElementById("50sym").addEventListener("click", c1);
  document.getElementById("100sym").addEventListener("click", e1);
  document.getElementById("75sym").addEventListener("click", d1);
  document.getElementById("1HZ100V").addEventListener("click", e12);
  document.getElementById("bearsym").addEventListener("click", g1);
  document.getElementById("eurusd").addEventListener("click", h1);
  document.getElementById("bullsym").addEventListener("click", f1);
  document.getElementById("usdjpy").addEventListener("click", i1);
  document.getElementById("25sym").addEventListener("click", b1);
  document.getElementById("1HZ10V").addEventListener("click", a12);
}

function rimeventi() {
  document.getElementById("10sym").removeEventListener("click", a1);
  document.getElementById("1HZ10V").removeEventListener("click", a12);
  document.getElementById("usdchf").removeEventListener("click", n1);
  document.getElementById("audusd").removeEventListener("click", m1);
  document.getElementById("gbpusd").removeEventListener("click", l1);
  document.getElementById("usdcad").removeEventListener("click", p1);
  document.getElementById("nzdusd").removeEventListener("click", o1);
  document.getElementById("50sym").removeEventListener("click", c1);
  document.getElementById("100sym").removeEventListener("click", e1);
  document.getElementById("75sym").removeEventListener("click", d1);
  document.getElementById("1HZ100V").removeEventListener("click", e12);
  document.getElementById("bearsym").removeEventListener("click", g1);
  document.getElementById("eurusd").removeEventListener("click", h1);
  document.getElementById("bullsym").removeEventListener("click", f1);
  document.getElementById("usdjpy").removeEventListener("click", i1);
  document.getElementById("25sym").removeEventListener("click", b1);
}

function a12() {
  if (automk === "None") {
    newSymbol = "1HZ10V";
    colorebottonimarket();
  }
}

function b1() {
  if (automk === "None") {
    newSymbol = "R_25";
    colorebottonimarket();
  }
}

function c1() {
  if (automk === "None") {
    newSymbol = "R_50";
    colorebottonimarket();
  }
}

function d1() {
  if (automk === "None") {
    newSymbol = "R_75";
    colorebottonimarket();
  }
}

function e1() {
  if (automk === "None") {
    newSymbol = "R_100";
    colorebottonimarket();
  }
}

function e12() {
  if (automk === "None") {
    newSymbol = "1HZ100V";
    colorebottonimarket();
  }
}

function f1() {
  if (automk === "None") {
    newSymbol = "RDBULL";
    colorebottonimarket();
  }
}

function g1() {
  if (automk === "None") {
    newSymbol = "RDBEAR";
    colorebottonimarket();
  }
}

function h1() {
  if (automk === "None") {
    newSymbol = "frxEURUSD";
    colorebottonimarket();
  }
}

function i1() {
  if (automk === "None") {
    newSymbol = "frxUSDJPY";
    colorebottonimarket();
  }
}

function l1() {
  if (automk === "None") {
    newSymbol = "frxGBPUSD";
    colorebottonimarket();
  }
}

function m1() {
  if (automk === "None") {
    newSymbol = "frxAUDUSD";
    colorebottonimarket();
  }
}

function n1() {
  if (automk === "None") {
    newSymbol = "frxUSDCHF";
    colorebottonimarket();
  }
}

function o1() {
  if (automk === "None") {
    newSymbol = "frxNZDUSD";
    colorebottonimarket();
  }
}

function p1() {
  if (automk === "None") {
    newSymbol = "frxUSDCAD";
    colorebottonimarket();
  }
}
