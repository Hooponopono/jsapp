function test() {
    connessione.ws.onopen = function wsaperto(ert) {
        stampahtml("<b><P>CONNECTED</P></b>");
        console.log(ert);
        if (document.getElementById("setvirt").classList.contains("disabled")){
        document.getElementById("setvirt").classList.remove("disabled");
        document.getElementById("setlive").classList.remove("disabled");}
        writelog(ert.type);
        getping();
        getweb();
        //stampahtml("<div> please select your account </div>");
    };
    connessione.ws.onclose = function wschiuso(event) {

        writelog(event.code);
        connessione.ws = undefined;
        connessione.settata = false;
        connessione.attiva = false;
        connessione.resetta = true;
        switched = true;
        orrori.attivo = true;
        errore();
    };
    connessione.ws.onmessage = function wsmessaggio(msg_stato) {
        statobinary2 = JSON.parse(msg_stato.data);
        if (statobinary2.error === undefined) {
            switch (statobinary2 !== {}) {
                // if (ws._events.message && ws._events.message.length > 1) {
                //     ws._events.message.splice(0, ws._events.message.length - 1);
                // }
                case statobinary2.msg_type === "time":
                {
                    statobinary.time = statobinary2.time + 1;
                    // now = new Date();
                }
                    break;

                case statobinary2.msg_type === "forget":
                {
                    statobinary.forget = statobinary2.forget;
                    console.log("FORGET");
                    // if (statobinary.forget === 1) {
                    //   if (stile === "candles") {
                    //     prendistoriaohcl();
                    //   } else {
                    //     prendistoria();
                    //   }
                    // }
                }
                    break;
                case statobinary2.msg_type === "proposal_open_contract":
                {
                    statobinary.proposal_open_contract =
                        statobinary2.proposal_open_contract;

                    // espirato = statobinary.proposal_open_contract.is_expired;
                    //
                    tid = statobinary.proposal_open_contract.transaction_ids.buy;
                    if (trading !== 1){trading =1}
                    //
                    // prezzoentrata =
                    //   statobinary.proposal_open_contract.entry_spot_display_value * 1; // "8237.913"
                    //
                    // entrata = statobinary.proposal_open_contract.entry_spot * 1; // same like over here
                    //
                    // date_expiry = statobinary.proposal_open_contract.date_expiry * 1; //1565254573
                    //
                    // date_start = statobinary.proposal_open_contract.date_start * 1; //1565254573
                    //
                    // canSell = statobinary.proposal_open_contract.is_valid_to_sell; //0 yes 1 no can sell or not
                    //
                    // isSold = statobinary.proposal_open_contract.is_sold; //0 yes 1 no
                    //
                    // contractProfit = statobinary.proposal_open_contract.profit * 1; //0.31
                    //
                    // payout = statobinary.proposal_open_contract.payout * 1;
                    //
                    // buy_price = statobinary.proposal_open_contract.buy_price * 1;
                    countdownstart = true;
                    //
                    differenza =
                        (statobinary.proposal_open_contract.date_expiry -
                            statobinary.proposal_open_contract.current_spot_time) *
                        -1;
                    localStorage.setItem("inatto", tid);
                    // if (
                    //   statobinary.proposal_open_contract.is_expired === 1 &&
                    //   countdownstart
                    // ) {
                    if (
                        statobinary.proposal_open_contract.is_sold === 1 ||
                        (statobinary.proposal_open_contract.id === undefined &&
                            ida !== undefined)
                    ) {
                        risultato.generale = statobinary.proposal_open_contract;
                        ida = statobinary.proposal_open_contract.id;
                        console.log(
                            "fine trading",
                            statobinary.proposal_open_contract.is_sold,
                            ida
                        );
                        richieditabella = true;
                        countdownstart = false;
                        // azz = 0;
                        problema = 1;
                        callhtml.disabled = false;
                        puthtml.disabled = false;
                        // trading = 0;
                        postTradeb();
                    } else if (
                        statobinary.proposal_open_contract.id !== undefined &&
                        ida === undefined
                    ) {
                        ida = statobinary.proposal_open_contract.id;
                        console.log("inizio trading");
                    } else {
                        // console.log("bev un thai");
                        //trading = 1;
                        document.getElementById("entryC").innerText =
                            statobinary.proposal_open_contract.entry_spot;
                        document.getElementById("expiryTime").innerText = String(
                            differenza
                        );
                        document.getElementById("contractProfit").innerText =
                            statobinary.proposal_open_contract.profit;
                        if (statobinary.proposal_open_contract.profit > 0) {
                            document
                                .getElementById("contractProfit")
                                .classList.remove("red");
                            document
                                .getElementById("contractProfit")
                                .classList.add("green");
                        } else {
                            document
                                .getElementById("contractProfit")
                                .classList.remove("green");
                            document.getElementById("contractProfit").classList.add("red");
                        }

                        if (statobinary.proposal_open_contract.is_valid_to_sell !== 0) {
                            document.getElementById("sell_me").classList.remove("red");
                            document.getElementById("sell_me").classList.add("green");
                        } else {
                            document.getElementById("sell_me").classList.remove("green");
                            document.getElementById("sell_me").classList.add("red");
                        }
                    }
                }
                    break;
                case statobinary2.msg_type === "buy":
                {
                    statobinary.buy = statobinary2.buy;

                    contractId = statobinary.buy.contract_id;

                    //longCode = statobinary.buy.longcode;
                    let newBalance = statobinary.buy.balance_after;
                    tempounix = statobinary.buy.purchase_time;

                    risultato.orainizio = currentTime[2];
                    document.getElementById("balance").innerText = newBalance;
                    trading = 1;
                    localStorage.setItem("trading", "1");
                    localStorage.setItem("contratto", contractId);
                }
                    break;
                case statobinary2.msg_type === "sell":
                {
                    statobinary.sell = statobinary2.sell;
                    venditaanticipata = true;
                    richieditabella = true;
                    problema = 1;
                    //isSold = 0;
                    dcontinuo = 0;
                    document.getElementById("continuato").checked = false;
                    postTrade();
                }
                    break;

                case statobinary2.msg_type === "ping":
                {
                    statobinary.ping = statobinary2.ping;
                    // console.log("ricevuto ping");
                    if (
                        document.getElementById("internetstatus").innerText !==
                        "Connected"
                    ) {
                        document.getElementById("internetstatus").innerText = "Connected";
                        document.getElementById("internetstatus").classList.remove("red");
                        document
                            .getElementById("internetstatus")
                            .classList.remove("yellow");
                        document.getElementById("internetstatus").classList.add("green");
                        // orrori.attivo = false;
                    }
                }
                    break;

                case statobinary2.msg_type === "candles" && statobinary2.req_id === 200:
                {
                    candelac = [];
                    candelah = [];
                    candelao = [];
                    candelal = [];
                    epochs = [];
                    statobinary.candles = statobinary2.candles;
                    candelac = statobinary.candles.map((candles) => candles.close * 1);
                    candelao = statobinary.candles.map((candles) => candles.open * 1);
                    candelah = statobinary.candles.map((candles) => candles.high * 1);
                    candelal = statobinary.candles.map((candles) => candles.low * 1);
                    epochs = statobinary.candles.map((candles) => candles.epoch * 1);
                }
                    break;
                case statobinary2.msg_type === "ohlc" && statobinary2.req_id === 200:
                {
                    statobinary.ohlc = statobinary2.ohlc;
                    epo = statobinary.ohlc.epoch * 1;
                    stoptick = statobinary.ohlc.id;
                    tickk = Number(statobinary.ohlc.close);

                    if (
                        candelao[candelao.length - 1] !== Number(statobinary.ohlc.open)
                    ) {
                        temponewcandle = Number(currentTime[1]) - 2;
                        // console.log((Math.round(now/1000)+1),new Date().getTime(),statobinary.ohlc.open_time,statobinary.ohlc.epoch)
                        // correzzione = statobinary.ohlc.open_time - Math.round(now / 1000);
                        // b = Math.round(noww) + 58;
                        // console.log(correzzione,b,statobinary.ohlc.open_time);
//console.log("nuova candela",currentTime[1])
                        if (temponewcandle === -1) {
                            temponewcandle = 59;
                        } else if (temponewcandle === -2) {
                            temponewcandle = 58;
                        }

                        candelao.splice(0, 1);
                        candelao.push(Number(statobinary.ohlc.open));
                        candelal.splice(0, 1);
                        candelal.push(Number(statobinary.ohlc.low));
                        candelah.splice(0, 1);
                        candelah.push(Number(statobinary.ohlc.high));
                        candelac.splice(0, 1);
                        candelac.push(Number(statobinary.ohlc.close)); //console.log("o qui ?");
                    } else {
                        candelac.pop();
                        candelac.push(tickk);
                        // console.log("sei qui");
                    }
                    document.getElementById("closeC").innerText = tickk;
                    // }
                }
                    break;
                case statobinary2.msg_type === "history":
                {
                    candelac = [];
                    epochs = [];
                    statobinary.history = statobinary2.history;
                    candelac = statobinary.history.prices;
                    epochs = statobinary.history.times;
                    switched = false;
                }
                    break;
                case statobinary2.msg_type === "tick":
                {
                    statobinary.tick = statobinary2.tick;
                    epo = statobinary.tick.epoch;
                    tickk = Number(statobinary.tick.quote);
                    stoptick = statobinary.tick.id;
                    if (epo !== epochs[epochs.length - 1]) {
                        candelac.splice(0, 1);
                        candelac.push(tickk);
                        epochs.splice(0, 1);
                        epochs.push(epo);
                    }
                    document.getElementById("closeC").innerText = tickk;
                    // cancella = true;
                }
                    break;
                case statobinary2.msg_type === "website_status":
                {
                    statobinary.website_status = statobinary2.website_status;
                    let dato = statobinary.website_status.site_status;
                    console.log("ricevuto web");
                    if (dato === "up") {
                        document.getElementById("serverstatus").innerText =
                            "website status: " + "" + dato;
                        document.getElementById("serverstatus").classList.remove("red");
                        document.getElementById("serverstatus").classList.add("green");
                        localStorage.setItem("websitestatus", "1");
                        orrori.attivo = false;
                    } else {
                        document.getElementById("serverstatus").classList.remove("green");
                        document.getElementById("serverstatus").classList.add("red");
                        localStorage.setItem("websitestatus", "0");
                    }
                }
                    break;
                case statobinary2.msg_type === "active_symbols":
                {
                    statobinary.active_symbols = statobinary2.active_symbols;
                    if (statobinary.active_symbols[15]) {
                        if (statobinary.active_symbols[15].exchange_is_open === 1) {
                            $("#setfx").removeClass("disabled");
                        } else {
                            $("#setfx").addClass("disabled");
                            notifica.insertAdjacentHTML(
                                "afterbegin",
                                '<b style="color:red"><P>FOREX MARKET CLOSED</P></b>'
                            );
                        }
                    }

                    document.getElementById("continuato").disabled = false;
                }
                    break;
                case statobinary2.msg_type === "profit_table":
                {
                    statobinary.profit_table = statobinary2.profit_table;
                    statobinary.profit_table.count = statobinary2.profit_table.count;
                    console.log(tranb, statobinary2);
                    statobinary.req_id = statobinary2.req_id;
                    richieditabella = false;

                    if ((siamnellamerda)&&(statobinary.profit_table.count > 0)) {
                        transe = statobinary.profit_table.transactions[0].transaction_id;
                        tranb = Number(localStorage.getItem("inatto"));

                        if (tranb === transe) {
                            console.log("post");
                            recuperoultima = true;

                            postTradeb();
                        } else {
                            notifica.insertAdjacentHTML(
                                "afterbegin",
                                '<p style="color:#8c01a0"> !!! impossible retrive last trade. check on binary.com !!! </p>'
                            );
                            recuperoultima = true;
                            siamnellamerda = false;

                            tranb = oldtid;
                            postTradeb();
                        }
                    }
                }
                    break;
                case statobinary2.msg_type === "balance":
                {
                    statobinary.balance = statobinary2.balance;
                    idbalance = statobinary.balance.id;
                    document.getElementById("balance").innerText =
                        statobinary.balance.balance;
                    if (localStorage.getItem("bila") === null) {
                        localStorage.setItem("bila", balance);
                        bilancio.iniziale = balance;
                    }
                    bilancio.attuale = statobinary.balance.balance;

                    bilancio.diff =
                        Math.round((bilancio.attuale - bilancio.iniziale) * 100) / 100;
                    sex.innerText = bilancio.diff;


                    wrate     = ((Math.round(( ((bilancio.attuale - bilancio.iniziale)/bilancio.iniziale) * 100) * 100)/100).toFixed(2))*1;

                    if(wrate > 0.0){
                        document.getElementById("winRate").style.color = "green";
                    }else if (wrate === 0.0){
                        document.getElementById("winRate").style.color = "orange";

                    }else{
                        document.getElementById("winRate").style.color = "red";

                    }


                    localStorage.setItem("winRate", wrate);
                    document.getElementById("winRate").innerText = wrate;
                }
                    break;
                case statobinary2.msg_type === "authorize":
                {
                    statobinary.authorize = statobinary2.authorize;
                    let authorizev = statobinary.authorize;
                    let balancev = Number(statobinary.authorize.balance);
                    let currencyv = statobinary.authorize.currency;
                    let loginIdv = statobinary.authorize.loginid;
                    authorize = authorizev;
                    balance = balancev;
                    currency = currencyv;
                    loginId = loginIdv;
                    // controllovx = "si";
                    // if (!pronto) {
                    //   pronto = true;
                    // }
                    // if (bilancio.iniziale === undefined) {
                    //     bilancio.iniziale = balance;
                    //     localStorage.setItem("bila", balance);
                    // }
                    let abcdf = Number(localStorage.getItem("bila"));
                    if (!isNaN(abcdf)) {
                        bilancio.iniziale = Number(localStorage.getItem("bila"));
                        bilancio.attuale = balance;
                        console.log("1");
                    } else {
                        localStorage.setItem("bila", balance);
                        bilancio.iniziale = balance;
                        console.log("2");
                    }

                    connessione.resetta = false;
                    if (token === vid) { bottone_virtuale();
                        correttov = true;
                        correttor = false;
                        inizio = false;

                    } else if (token === rid) {
                        correttor = true;
                        correttov = false;
                        inizio = false; bottone_reale();
                    }
                    if (newSymbol !== undefined) {
                        data();
                    }
                    if (correttor || correttov) {
                        $("#tncandle").removeClass("disabled");

                        $("#setvix").removeClass("disabled");
                        $("#startBot").removeClass("disabled");
                        document.getElementById("account").disabled = false;
                        $("#setfx").removeClass("disabled");
                        document.getElementById("account").innerText = loginId;
                        document.getElementById("balance").innerText = balance;
                        document.getElementById("currency").innerText = currency;
                        document.getElementById("varii4").style.display = "block";
                        // if (idbalance !== undefined && connessione.resetta === false) {
                        //   inviows(
                        //     JSON.stringify({
                        //       forget: idbalance,
                        //     })
                        //   );
                        // } else {
                        //   inviows(
                        //     JSON.stringify({
                        //       balance: 1,
                        //       subscribe: 1,
                        //     })
                        //   );
                        //
                        // }
                    }
                    connessione.resetta = false;
                    forex();
                    if (tonoff === 1) {
                        siamnellamerda = true;
                    }else{console.log("no missing trades")};
                }
                    break;
            }
        } else {
            statobinary.error = statobinary2.error;
            writelog(
                statobinary.error.code +
                "_" +
                statobinary.error.message +
                "_" +
                statobinary.error.details
            );
            if (statobinary.error.code === "UnrecognisedRequest") {
                console.log(statobinary.error, statobinary2.echo_req);
                connessione.settata = false;
            } else if (statobinary.error.code === "AuthorizationRequired") {
                inviows(JSON.stringify({ authorize: token }));
            } else if (statobinary.error.code !== "AlreadySubscribed") {
                notifica.insertAdjacentHTML(
                    "afterbegin",
                    '<p style="color:red">' + statobinary.error.message + "</p>"
                );
                trading = 0;

                if (
                    statobinary.error.message ===
                    "Contract may not expire between 23:59:00 and 23:59:59."
                ) {
                    trading = 0;
                    echecazzo = false;
                }
            } else if (statobinary.error.code === "InputValidationFailed") {
                trading = 0;
                echecazzo = false;
            } else {
                console.log(statobinary.error);
            }
            statobinary2.error = undefined;
        }
    };
    connessione.ws.onerror = function wserrore(eventtto) {
        console.log("There was an error with your websocket.", eventtto);
        notifica.insertAdjacentHTML(
            "afterbegin",
            '<p style="color:#000000 ">' +
            currentTime[2] +
            " Your internet connection is not stable. I try to reconnect... </p>"
        );
        orrori.attivo = true;
    };
}