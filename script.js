const tabelaPrecos = {
    "INDIVIDUAL": {
        "NOSSO MÉDICO": {
            "PARCIAL": { "0-18": { enf: 294.37, apt: 439.62 }, "19-23": { enf: 387.34, apt: 579.07 }, "24-28": { enf: 444.86, apt: 665.35 }, "29-33": { enf: 497.78, apt: 744.73 }, "34-38": { enf: 522.48, apt: 781.77 }, "39-43": { enf: 589.90, apt: 882.90 }, "44-48": { enf: 718.83, apt: 1076.29 }, "49-53": { enf: 990.52, apt: 1483.82 }, "54-58": { enf: 1335.85, apt: 2001.81 }, "59+": { enf: 1735.45, apt: 2601.20 } },
            "TOTAL": { "0-18": { enf: 210.46, apt: 313.76 }, "19-23": { enf: 276.58, apt: 412.93 }, "24-28": { enf: 317.49, apt: 474.29 }, "29-33": { enf: 355.13, apt: 530.74 }, "34-38": { enf: 372.69, apt: 557.08 }, "39-43": { enf: 420.64, apt: 629.00 }, "44-48": { enf: 512.33, apt: 766.53 }, "49-53": { enf: 705.55, apt: 1056.35 }, "54-58": { enf: 951.15, apt: 1424.73 }, "59+": { enf: 1235.34, apt: 1850.99 } }
        },
        "NOSSO PLANO": {
            "PARCIAL": { "0-18": { amb: 218.13, enf: 326.65, apt: 488.04 }, "19-23": { amb: 287.34, enf: 429.95, apt: 642.98 }, "24-28": { amb: 327.60, enf: 493.87, apt: 738.85 }, "29-33": { amb: 365.48, enf: 552.67, apt: 827.05 }, "34-38": { amb: 384.65, enf: 580.11, apt: 868.21 }, "39-43": { amb: 431.87, enf: 655.02, apt: 980.58 }, "44-48": { amb: 528.17, enf: 798.28, apt: 1195.46 }, "49-53": { amb: 732.65, enf: 1100.16, apt: 1648.27 }, "54-58": { amb: 987.73, enf: 1483.87, apt: 2223.82 }, "59+": { amb: 1282.89, enf: 1927.88, apt: 2889.81 } },
            "TOTAL": { "0-18": { amb: 139.89, enf: 233.42, apt: 348.19 }, "19-23": { amb: 183.83, enf: 306.88, apt: 458.38 }, "24-28": { amb: 209.39, enf: 352.33, apt: 526.56 }, "29-33": { amb: 233.44, enf: 394.15, apt: 589.29 }, "34-38": { amb: 245.61, enf: 413.67, apt: 618.56 }, "39-43": { amb: 275.59, enf: 466.95, apt: 698.47 }, "44-48": { amb: 336.73, enf: 568.83, apt: 851.29 }, "49-53": { amb: 466.55, enf: 783.52, apt: 1173.32 }, "54-58": { amb: 628.50, enf: 1056.40, apt: 1582.63 }, "59+": { amb: 815.90, enf: 1372.17, apt: 2056.26 } }
        }
    },
    "SUPER SIMPLES": {
        "NOSSO MÉDICO": {
            "PARCIAL": { "0-18": { enf: 220.45, apt: 329.98 }, "19-23": { enf: 246.90, apt: 369.58 }, "24-28": { enf: 276.53, apt: 413.93 }, "29-33": { enf: 318.01, apt: 476.02 }, "34-38": { enf: 365.71, apt: 547.42 }, "39-43": { enf: 435.19, apt: 651.43 }, "44-48": { enf: 543.99, apt: 814.29 }, "49-53": { enf: 679.99, apt: 1017.86 }, "54-58": { enf: 1155.98, apt: 1730.36 }, "59+": { enf: 1294.70, apt: 1938.00 } },
            "TOTAL": { "0-18": { enf: 165.43, apt: 247.13 }, "19-23": { enf: 185.28, apt: 277.12 }, "24-28": { enf: 207.51, apt: 310.37 }, "29-33": { enf: 238.64, apt: 356.93 }, "34-38": { enf: 274.44, apt: 410.47 }, "39-43": { enf: 326.58, apt: 488.46 }, "44-48": { enf: 408.23, apt: 610.58 }, "49-53": { enf: 510.29, apt: 763.23 }, "54-58": { enf: 867.49, apt: 1297.49 }, "59+": { enf: 971.59, apt: 1453.19 } }
        },
        "NOSSO PLANO": {
            "PARCIAL": { "0-18": { amb: 177.51, enf: 244.77, apt: 366.48 }, "19-23": { amb: 198.81, enf: 274.14, apt: 410.46 }, "24-28": { amb: 222.67, enf: 307.04, apt: 459.72 }, "29-33": { amb: 256.07, enf: 353.10, apt: 528.68 }, "34-38": { amb: 294.48, enf: 406.07, apt: 607.98 }, "39-43": { amb: 350.43, enf: 483.22, apt: 723.50 }, "44-48": { amb: 438.04, enf: 604.03, apt: 904.38 }, "49-53": { amb: 547.55, enf: 755.04, apt: 1130.48 }, "54-58": { amb: 930.84, enf: 1283.57, apt: 1921.82 }, "59+": { amb: 1042.54, enf: 1437.60, apt: 2152.44 } },
            "TOTAL": { "0-18": { amb: 113.87, enf: 183.63, apt: 274.75 }, "19-23": { amb: 127.53, enf: 205.67, apt: 307.72 }, "24-28": { amb: 142.83, enf: 230.35, apt: 344.65 }, "29-33": { amb: 164.25, enf: 264.90, apt: 396.35 }, "34-38": { amb: 188.89, enf: 304.64, apt: 455.80 }, "39-43": { amb: 224.78, enf: 362.52, apt: 542.40 }, "44-48": { amb: 280.98, enf: 453.15, apt: 678.00 }, "49-53": { amb: 351.23, enf: 566.44, apt: 847.50 }, "54-58": { amb: 597.09, enf: 962.95, apt: 1440.75 }, "59+": { amb: 668.74, enf: 1078.50, apt: 1613.64 } }
        }
    },
    "SISPEAM MANAUS": {
        "AFFIX MANAUS": {
            "PARCIAL": {
                "0-18": { amb: 170.78, amb15: 145.16, enf: 235.48, enf15: 200.16, apt: 352.48, apt15: 299.61 },
                "19-23": { amb: 191.28, amb15: 162.59, enf: 263.73, enf15: 224.17, apt: 394.78, apt15: 335.56 },
                "24-28": { amb: 214.24, amb15: 182.10, enf: 295.38, enf15: 251.07, apt: 442.15, apt15: 375.83 },
                "29-33": { amb: 246.38, amb15: 209.42, enf: 339.69, enf15: 288.74, apt: 508.47, apt15: 432.20 },
                "34-38": { amb: 283.33, amb15: 240.83, enf: 390.65, enf15: 332.05, apt: 584.74, apt15: 497.03 },
                "39-43": { amb: 337.17, amb15: 286.59, enf: 464.87, enf15: 395.14, apt: 695.84, apt15: 591.46 },
                "44-48": { amb: 421.47, amb15: 358.25, enf: 581.08, enf15: 493.92, apt: 869.79, apt15: 739.32 },
                "49-53": { amb: 526.83, amb15: 447.81, enf: 726.36, enf15: 617.41, apt: 1.08725, apt15: 924.16 },
                "54-58": { amb: 895.62, amb15: 761.28, enf: 1234.81, enf15: 1049.59, apt: 1848.32, apt15: 1571.07 },
                "59+": { amb: 1003.09, amb15: 852.63, enf: 1382.98, enf15: 1175.53, apt: 2070.12, apt15: 1759.60 }
            },
            "TOTAL": {
                "0-18": { amb: 109.59, amb15: 93.15, enf: 176.69, enf15: 150.19, apt: 264.29, apt15: 224.65 },
                "19-23": { amb: 122.75, amb15: 104.34, enf: 197.88, enf15: 168.20, apt: 296.00, apt15: 251.60 },
                "24-28": { amb: 137.47, amb15: 116.85, enf: 221.63, enf15: 188.39, apt: 331.53, apt15: 281.80 },
                "29-33": { amb: 158.09, amb15: 134.38, enf: 254.87, enf15: 216.64, apt: 381.25, apt15: 324.06 },
                "34-38": { amb: 181.81, amb15: 154.54, enf: 293.11, enf15: 249.14, apt: 438.44, apt15: 372.67 },
                "39-43": { amb: 216.35, amb15: 183.90, enf: 348.80, enf15: 296.48, apt: 521.75, apt15: 443.49 },
                "44-48": { amb: 270.44, amb15: 229.87, enf: 436.00, enf15: 370.60, apt: 652.19, apt15: 554.36 },
                "49-53": { amb: 338.05, amb15: 287.34, enf: 545.00, enf15: 463.25, apt: 815.23, apt15: 692.95 },
                "54-58": { amb: 574.68, amb15: 488.48, enf: 926.51, enf15: 787.53, apt: 1385.90, apt15: 1178.02 },
                "59+": { amb: 643.64, amb15: 547.09, enf: 1037.68, enf15: 882.03, apt: 1552.20, apt15: 1319.37 }
            }
        }
    }
};

function getFaixa(idade) {
    idade = parseInt(idade);
    if (idade <= 18) return { t: "00 a 18", k: "0-18" };
    if (idade <= 23) return { t: "19 a 23", k: "19-23" };
    if (idade <= 28) return { t: "24 a 28", k: "24-28" };
    if (idade <= 33) return { t: "29 a 33", k: "29-33" };
    if (idade <= 38) return { t: "34 a 38", k: "34-38" };
    if (idade <= 43) return { t: "39 a 43", k: "39-43" };
    if (idade <= 48) return { t: "44 a 48", k: "44-48" };
    if (idade <= 53) return { t: "49 a 53", k: "49-53" };
    if (idade <= 58) return { t: "54 a 58", k: "54-58" };
    return { t: "59 ou +", k: "59+" };
}

const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function gerarOrcamento() {
    const tipoContrato = document.querySelector('input[name="tipoContrato"]:checked').value;
    const idadesStr = document.getElementById('idadesInput').value;
    const plano = document.getElementById('nomePlano').value;
    const copart = document.getElementById('copart').value;
    
    const querAmb = document.getElementById('checkAmb').checked;
    const querEnf = document.getElementById('checkEnf').checked;
    const querApt = document.getElementById('checkApt').checked;

    if (!idadesStr) { alert("Informe as idades."); return; }
    
    const idades = idadesStr.split(/[\s,]+/).map(i => i.trim()).filter(i => i !== "");
    
    // Início do modelo solicitado
    let texto = `HAPVIDA - ${tipoContrato}\n`;
    texto += `PLANO: ${plano} | COPART: ${copart}\n`;
    texto += `------------------------------------\n\n`;

    let somaAmb = 0, somaEnf = 0, somaApt = 0;

    idades.forEach(idade => {
        const info = getFaixa(idade);
        const precos = tabelaPrecos[tipoContrato][plano][copart][info.k];
        
        texto += `Beneficiário: ${idade} anos (${info.t} anos)\n`;

        const processarItem = (label, valorBase, key) => {
            let vDesc;
            // Lógica para SISPEAM usar valor fixo da tabela ou 15% para os demais
            if (tipoContrato === "SISPEAM MANAUS" && precos[key + "15"]) {
                vDesc = precos[key + "15"];
            } else {
                vDesc = valorBase * 0.85;
            }
            
            // Modelo exato: Seta no fim da linha e "Após os 3 meses" em nova linha
            let str = `* ${label}: ${fmt(vDesc)} (durante 3 meses) -> \n`;
            str += `Após os 3 meses - ${fmt(valorBase)}\n`;
            return { str, vDesc };
        };

        if (querAmb && precos.amb) {
            const res = processarItem("Ambulatorial", precos.amb, "amb");
            texto += res.str;
            somaAmb += res.vDesc;
        }
        if (querEnf && precos.enf) {
            const res = processarItem("Enfermaria", precos.enf, "enf");
            texto += res.str;
            somaEnf += res.vDesc;
        }
        if (querApt && precos.apt) {
            const res = processarItem("Apartamento", precos.apt, "apt");
            texto += res.str;
            somaApt += res.vDesc;
        }
        texto += `\n`;
    });

    texto += `------------------------------------\n`;
    texto += `RESUMO DO GRUPO (${idades.length} vidas):\n`;
    
    if (querAmb && somaAmb > 0) texto += `TOTAL AMBULATORIAL: ${fmt(somaAmb)}\n`;
    if (querEnf && somaEnf > 0) texto += `TOTAL ENFERMARIA: ${fmt(somaEnf)}\n`;
    if (querApt && somaApt > 0) texto += `TOTAL APARTAMENTO: ${fmt(somaApt)}\n`;
    
    document.getElementById('resultadoArea').value = texto.trim();
}