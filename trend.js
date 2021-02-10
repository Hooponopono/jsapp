function prova() {

}
function stikazzi() {
    if (botgo === true) {
        // if (
        //     document.getElementById("continuato").checked === true &&
        //     pierdude === 0 &&
        //     trading === 0
        // ) {
        //     return (ha = due());
        // } else if (
        //     document.getElementById("continuato").checked === true &&
        //     trading === 0
        // ) {
        //     if (relativo === relativizziamo * -1) {
        //         ha = "down";
        //     } else if (relativo === relativizziamo) {
        //         ha = "up";
        //     } else {
        //         return (ha = localStorage.getItem("ha"));
        //     }
        // }
        if (
            document.getElementById("continuato").checked === true &&
            trading === 0
        ) {
            if (pierdude === 0) {
                return (ha = due());
            } else {
                // if (relativo === relativizziamo * -1) {
                //     localStorage.setItem("ha", "down");
                //     return (ha = "down");
                // } else if (relativo === relativizziamo) {
                //     localStorage.setItem("ha", "up");
                //     return (ha = "up");
                // } else {
                return (ha = localStorage.getItem("ha"));
                // }
            }
        } else if (!document.getElementById("continuato").checked) {
            return (ha = due());
        }
    } else {
        return (ha = due());
    }
}
function due() {
    let hallah;
    if (tradeon2 === "sbbt") {
        // hallah = "skip";
        // getTrend();
        if (relativo <= 500) {
            if (relativo > 0 && relativo === relativizziamo) {
                hallah = "up";
                localStorage.setItem("ha", "up");
            } else if (relativo < 0 && relativo === relativizziamo * -1) {
                hallah = "down";
                localStorage.setItem("ha", "down");
            } else {
                hallah = "not stronger";
            }
        }
        return hallah;
    } else if (tradeon2 === "bbt") {
        // hallah = "skip";
        if (relativo <= 500) {
            if (relativo > 0) {
                hallah = "up";
                localStorage.setItem("ha", "up");
            } else if (relativo < 0) {
                hallah = "down";
                localStorage.setItem("ha", "down");
            } else {
                hallah = "not good to trade";
            }
            // return ha;// if (trading == 0) { commercia(); }
        }

        return hallah;
    }
}
let culobb, aoa, bob;let altomax,metabb,
    bassomax,
    altomaxf,
    bassomaxf,
    ha_open,
    hacloseprima,
    ha_close,
    // macd4321,
    // macd43212,
    // signal4321,
    // signal43212,
    histogram4321,
    histogram43212;
let media123, media12;
let spikkio, hull, hull1, hull2;
function getTrend() {
     let relativo = 0;
    indicatori = 0;




    function verme() {
        altomax = hhv(candelac, 20);
        bassomax = llv(candelac, 20);
        altomaxf = altomax[altomax.length - 1];
        bassomaxf = bassomax[bassomax.length - 1];
        console.log(altomaxf, bassomaxf);
        let posizionebasso;
        let n;
        let posizionealto;
        let m;

        for (m = 2; m < 20; m++) {
            if (bassomaxf === candelac[candelac.length - m]) {
                posizionebasso = m;
                console.log(posizionebasso, bassomax.length - 1);
                break;
            }
        }

        for (n = 2; n < 20; n++) {
            if (altomaxf === candelac[candelac.length - n]) {
                posizionealto = n;
                console.log(posizionealto, altomax.length - 1);
                break;
            }
        }
        if (posizionebasso && posizionealto) {
            if (posizionebasso < posizionealto) {
                console.log("SALE");
                document.getElementById("wormworm").innerText = "up";
                relativo = relativo + 1;
            } else {
                console.log("PEPE");
                document.getElementById("wormworm").innerText = "down";
                relativo = relativo - 1;
            }
        } else if (posizionebasso && !posizionealto) {
            console.log("SALE");
            document.getElementById("wormworm").innerText = "up";
            relativo = relativo + 1;
        } else {
            console.log("PEPE");
            document.getElementById("wormworm").innerText = "down";
            relativo = relativo - 1;
        }
    }

    function creahull() {
        let periodo, pp3, uno, dui, tre, quattro, cinq, sei;
        if (Number(localStorage.getItem("hullPeriod")) > 0) {
            periodo = Number(localStorage.getItem("hullPeriod"));
        } else {
            periodo = 6;
        }

        pp3 = Math.round(Math.sqrt(periodo));

        uno = wma(candelac, periodo / 2);
        dui = wma(candelac, periodo);
        tre = uno.map((itema) => {
            return itema * 2;
        });
        quattro = tre.map(function (itema, index) {
            return itema - dui[index];
        });
        cinq = [];

        for (let i = 0; i < quattro.length; i++) {
            if (quattro[i]) {
                cinq.push(quattro[i]);
            }
        }
        sei = wma(cinq, pp3);
        // console.log(hull, hull1,hull2);

        return sei;
    }

    // let movingacd = {
    //   macd: 0,
    //   signal: 0,
    //   ist: 0,
    // };

    // let hullalfa = { hull: 0 };
    if (worm === "1") {
        verme();
    }
    if (mac === "1") {
        let picato;
        let culo;
        // document.getElementById("macdline").style.display = "table-row";
        // let macd123;
        // let signal123;
        let histogram123;

        let fastPeriod = Number(localStorage.getItem("fastPeriod"));
        let slowPeriod = Number(localStorage.getItem("slowPeriod"));
        let signalPeriod = Number(localStorage.getItem("signalPeriod"));
        culo = macd(candelac, slowPeriod, fastPeriod, signalPeriod); //candelac = response.candles.map(candles => candles.close * 1); MACD.calculate(macdInput);

        // macd123 = culo.MACD; //culo.map(culo => culo.MACD * 1);
        // signal123 = culo.signal; //culo.map(culo => culo.signal * 1);
        histogram123 = culo.histogram; //culo.map(culo => culo.histogram * 1);
        // macd4321 = macd123[macd123.length - 1];
        // macd43212 = macd123[macd123.length - 2];
        // signal4321 = signal123[signal123.length - 1];
        // signal43212 = signal123[signal123.length - 2];
        histogram4321 = histogram123[histogram123.length - 1];
        histogram43212 = histogram123[histogram123.length - 2];

        // movingacd.macd = macd4321 - macd43212;
        // movingacd.signal = signal4321 - signal43212;
        // movingacd.ist = histogram4321 - histogram43212;
        // if (movingacd.macd !== 0) {
        //   indicatori++;
        // }
        if (histogram4321 !== 0) {
            indicatori++;
        }

        if (histogram4321 > histogram43212) {
            relativo = relativo + 1;
            picato = "up";
        } else if (histogram4321 < histogram43212) {
            relativo = relativo - 1;
            picato = "down";
        } else {
            picato = "reversing";
            relativo = 0;
        }
        // console.log(relativo,"macd");
        document.getElementById("macdmacd").innerText = picato;
        // } else {
        //   document.getElementById("macdline").style.display = "none";
    }

    if (hl === "1") {
        spikkio = "";

        hull = creahull();

        hull1 = hull[hull.length - 1];
        hull2 = hull[hull.length - 2];
        // hullalfa.hull = hull1 - hull2;
        // if (hullalfa.hull !== 0) {
        //
        // }

        if (hull1 > hull2) {
            spikkio = "up";
            relativo = relativo + 1;
        } else if (hull2 > hull1) {
            relativo = relativo - 1;
            spikkio = "down";
        }else {
            spikkio = "reversing";
            relativo = 0;
        }
        // console.log(relativo,"hull");
        indicatori++;
        document.getElementById("hullhull").innerText = spikkio;
    } else {
        document.getElementById("hullline").style.display = "none";
    }
    if (ha1 === "1") {
        let patak;

        ha_open =
            (candelac[candelac.length - 2] + candelao[candelao.length - 2]) / 2;
        hacloseprima =
            (candelac[candelac.length - 2] +
                candelao[candelao.length - 2] +
                candelah[candelah.length - 2] +
                candelal[candelal.length - 2]) /
            4;
        ha_close =
            (candelac[candelac.length - 1] +
                candelao[candelao.length - 1] +
                candelah[candelah.length - 1] +
                candelal[candelal.length - 1]) /
            4;

        // if (isNaN(ha_close )) {
        //
        // }

        if (ha_open < ha_close && hacloseprima < ha_close) {
            relativo = relativo + 1;
            patak = "up";
        } else if (ha_open > ha_close && hacloseprima > ha_close) {
            relativo = relativo - 1;
            patak = "down";
        } else {
            patak = "changing";
            relativo = 0;
        }
         indicatori++;//console.log(relativo,"macd");
        document.getElementById("haha").innerText = patak;
    }
    if (teon === "1") {
        let truf = "";
        hull = creahull();

        hull1 = hull[hull.length - 1];
        hull2 = hull[hull.length - 2];
        media123 = [];
        media12 = [];
        for (let index = 0; index < candelac.length; ++index) {
            media123.push((candelac[index] + candelao[index]) / 2);
            // }
            // for (let index = 0; index < candelac.length; ++index) {
            media12.push(
                (candelac[index] +
                    candelao[index] +
                    candelah[index] +
                    candelal[index]) /
                4
            );
        }
        if (media12.length >= 1) {
            indicatori++;
        }
        // console.log(media123,media12);
        if (media12[media12.length - 2] < media12[media12.length - 1]) {
            //
            if (media123[media123.length - 2] < media123[media123.length - 1]) {
                if (hull2 < hull1) {
                    relativo = relativo + 1;
                    truf = "up";
                }
            }
        } else if (media12[media12.length - 2] > media12[media12.length - 1]) {
            if (media123[media123.length - 2] > media123[media123.length - 1]) {
                if (hull2 > hull1) {
                    relativo = relativo - 1;
                    truf = "down";
                }
            }
        } else {
            relativo = 0;
            truf = "not good";
        }
        document.getElementById("teonteon").innerText = truf;
    }
    if (bb === "1") {
        aoa = Number(localStorage.getItem("BBandsPeriod"));
        bob = Number(localStorage.getItem("BBandsstdDev"));
        let oraiso;let priso;
        if (candelac.length > 1) {
            culobb = boll(candelac, aoa, bob);

            metabb = culobb.mid.filter(Boolean);
            if (mercatov){
                priso = Math.trunc(metabb[metabb.length - 2] * 10) / 10;
                oraiso= Math.trunc( metabb[metabb.length - 1]* 10) / 10;}else
            {priso= metabb[metabb.length - 2];oraiso=metabb[metabb.length - 1]}
            // console.log(metabb,oraiso,priso);
            if (priso > 0) {
                indicatori++;
            }

            if (tickk > metabb[metabb.length - 1]) {
                if (oraiso > priso) {
                    // relativo = relativo + 1;
                    bbbefore = "up";
                    pipino = "up";
                } else {
                    pipino = "change";
                }
            } else if (tickk < metabb[metabb.length - 1]) {
                if (oraiso < priso) {
                    // relativo = relativo - 1;
                    pipino = "down";
                    bbbefore = "down";
                } else {
                    pipino = "change";
                }
            } else {
                pipino = "dead zone";console.log(metabb);
            }

            if (
                (bbbefore === "up" && pipino === "up") ||
                (bbbefore === "down" && pipino === "change")
            ) {
                relativo = relativo + 1;
                cazzoinculo = "up";
            } else if (
                (bbbefore === "down" && pipino === "down") ||
                (bbbefore === "up" && pipino === "change")
            ) {
                relativo = relativo - 1;
                cazzoinculo = "down";
            }
                // else
                // if {relativo = relativo - 1;
                //     return "down";
                // }else
                // if  {relativo = relativo + 1;
                //     return "up";
            // }
            else {
                relativo = 0;
                //console.log(bbbefore,pipino);
                cazzoinculo =  "wait";
            }
            // console.log(relativo,"bb");
            document.getElementById("bbbb").innerText = cazzoinculo;//prova(); // pipino;
        }
    }
    if (indicatori === relativizziamo) {
        return relativo;
    } else {
        console.log("error get trend");
        iniziamo.caricadati = true;
        iniziamooo();

        return 0;
    }
}