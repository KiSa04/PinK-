var request;
var yp = 0;
let savedCookies, lall, type, ImgUrls, login_data, AllUrls, newWindow, isOK, plsgod, infoH, highlightedIndex = 0,
    leftColumnHeight = 0,
    rightColumnHeight = 0,
    pos = 0,
    AllPins = [],
    cook1 = 0,
    helpme = 0,
    it = 0,
    o_ca = 0;
    is_verify = 0,
    possss = 0;

function saveImgFromUrl(e) {
    e = `https://api.codetabs.com/v1/proxy/?quest=${e.src}`;
    var t = new Image;
    t.crossOrigin = "Anonymous", t.src = e, t.onload = function() {
        var e = document.createElement("canvas"),
            o = e.getContext("2d");
        e.width = t.width, e.height = t.height, o.drawImage(t, 0, 0), e.toBlob((function(e) {
            console.log(e), saveImg(e)
        }), "image/png")
    }
}

function amanha(e) {
    console.log("ok");
    let t = document.querySelector("#resultsList .focused");
    if (t.focus(), "ArrowDown" === e.key);
    else if ("Enter" === e.key);
    else if ("ArrowUp" === e.key && t) {
        t.classList.remove("focused");
        let e = t.previousElementSibling;
        e ? (e.classList.add("focused"), possss--, scrollListToItem(e)) : (document.getElementById("searchInput").focus(), document.removeEventListener("keydown", amanha))
    }
}

function scrollListToItem(e) {
    let t = document.getElementById("resultsList"),
        o = e.offsetTop - t.offsetTop,
        n = e.offsetHeight,
        s = t.offsetHeight;
    o < t.scrollTop ? t.scrollTop = o : o + n > t.scrollTop + s && (t.scrollTop = o + n - s)
}

function lll(e) {
    if (console.log("AS"), "ArrowDown" === e.key) {
        document.getElementById("searchInput").blur();
        let e = document.querySelector("#resultsList .focused");
        if (e.focus(), e) {
            e.classList.remove("focused");
            let t = e.nextElementSibling;
            if (t) t.classList.add("focused"), possss++, scrollListToItem(t);
            else {
                let e = document.querySelector("#resultsList li");
                e && (possss = 0, e.classList.add("focused"), scrollListToItem(e))
            }
            document.addEventListener("keydown", amanha)
        }
    } else if ("Enter" === e.key) {
        let e = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                Pragma: "no-cache",
                Accept: "*/*",
                "X-CSRFToken": cook1[1],
                "X-Pinterest-AppState": "active",
                "X-Pinterest-Source-Url": `/pin/${AllPins[helpme]}/`,
                "X-Pinterest-PWS-Handler": "www/index.js",
                "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Referer: "https://www.pinterest.pt/",
                Cookie: cook1[0] + ";" + savedCookies.value.replace(/\s+/g, "")
            },
            t = new XMLHttpRequest({
                mozSystem: !0
            });
        t.open("POST", "https://www.pinterest.pt/resource/ConversationsResource/create/");
        let o = `source_url=%2Fpin%2F${AllPins[helpme]}%2F&data=%7B%22options%22%3A%7B%22user_ids%22%3A%5B%22${infoH[possss].id}%22%5D%2C%22emails%22%3A%5B%5D%2C%22text%22%3A%22%22%2C%22pin%22%3A%22${AllPins[helpme]}%22%7D%2C%22context%22%3A%7B%7D%7D`;
        Object.keys(e).forEach((o => {
            t.setRequestHeader(o, e[o])
        })), t.onreadystatechange = function() {
            t.readyState === XMLHttpRequest.DONE && (200 === t.status || console.error("Erro na solicitação:", t.status, t.statusText))
        }, t.send(o), document.removeEventListener("keydown", amanha), document.removeEventListener("keydown", lll), document.getElementById("searchInput").outerHTML = "", document.getElementById("resultsList").outerHTML = ""
    } else "SoftRight" === e.key && document.removeEventListener("keydown", lolipop)
}

function lolipop(e) {
    if ("Enter" === e.key) document.getElementById("resultsList") || saveImgFromUrl(document.getElementById("img-amp"));
    else if ("SoftLeft" === e.key) {
        possss = 0;
        let e = document.createElement("input");
        e.setAttribute("type", "text"), e.setAttribute("id", "searchInput"), e.style.top = document.getElementById("overlay").offsetTop, document.getElementById("overlay").appendChild(e);
        let t = document.createElement("ul");
        t.setAttribute("id", "resultsList"), document.getElementById("overlay").appendChild(t), document.getElementById("searchInput").focus(), document.getElementById("searchInput").addEventListener("input", (function() {
            possss = 0;
            let e = new XMLHttpRequest({
                mozSystem: !0
            });
            e.open("GET", `https://www.pinterest.pt/resource/ShareSuggestionsTypeaheadResource/get/?source_url=%2Fpin%2F${AllPins[helpme]}%2F&data=%7B%22options%22%3A%7B%22count%22%3A25%2C%22term%22%3A%22${document.getElementById("searchInput").value}%22%2C%22pin_scope%22%3A%22pins%22%7D%2C%22context%22%3A%7B%7D%7D&_=1702146979696`);
            let t = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                Pragma: "no-cache",
                Accept: "*/*",
                "X-CSRFToken": cook1[1],
                "X-Pinterest-AppState": "active",
                "X-Pinterest-Source-Url": `/pin/${AllPins[helpme]}/`,
                "X-Pinterest-PWS-Handler": "www/index.js",
                "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Referer: "https://www.pinterest.pt/",
                Cookie: cook1[0] + ";" + savedCookies.value.replace(/\s+/g, "").split(';')[0]
            };
            Object.keys(t).forEach((o => {
                e.setRequestHeader(o, t[o])
            })), e.onreadystatechange = function() {
                e.readyState === XMLHttpRequest.DONE && (200 === e.status ? infoH = extrairInformacoes(JSON.parse(e.responseText)) : console.error("Erro na solicitação:", e.status, e.statusText, e.responseText))
            }, e.send()
        })), document.addEventListener("keydown", lll)
    } else "SoftRight" === e.key && document.removeEventListener("keydown", lolipop)
}

function extrairInformacoes(e) {
    document.getElementById("resultsList").innerHTML = "";
    let t = e.resource_response.data.items,
        o = [];
    for (let e = 0; e < t.length; e++) {
        let n = t[e],
            s = {
                image_medium_url: n.image_medium_url,
                id: n.id,
                username: n.username,
                first_name: n.first_name,
                last_name: n.last_name
            },
            r = document.createElement("li");
        r.innerHTML = `${s.first_name} - ${s.username}`, document.getElementById("resultsList").appendChild(r), o.push(s)
    }
    let n = resultsList.querySelector("li");
    return n && n.classList.add("focused"), o
}

function showSavedMessage() {
    var e = document.createElement("div");
    e.innerText = "Saved", e.className = "saved-message", e.style.backgroundColor = "red", e.style.color = "white", e.style.position = "fixed", e.style.bottom = "20px", e.style.display = "inline-block", e.style.fontSize = "18px", e.style.width = "100px", e.style.textAlign = "center", e.style.left = "50%", e.style.transform = "translateX(-50%)", e.style.padding = "10px", e.style.borderRadius = "5px", e.style.zIndex = "9999", document.body.appendChild(e), setTimeout((function() {
        e.parentNode.removeChild(e)
    }), 2e3)
}

function saveImg(e) {
    let t = (new Date).getTime();
    var o = navigator.getDeviceStorage("pictures"),
        n = new Blob([e], {
            type: "image/png"
        }),
        s = o.addNamed(n, `${t}.png`);
    s.onsuccess = function() {
        this.result, showSavedMessage()
    }, s.onerror = function() {
        console.error("Unable to write the file:", this.error)
    }
}

function register(e) {}
helpme = Math.max(helpme, 0), window.addEventListener("DOMContentLoaded", (function() {
    let e = new Worker("worker.js");

    function t(e) {
        return new URLSearchParams(window.location.search).get(e)
    }
    e.addEventListener("message", (function(e) {
        "loadMorePins" === e.data && window.getKaiAd({
            publisher: "0b7a2f6a-4113-4b9d-bce7-e3b0ba119873",
            app: "PinK!",
            slot: "Pinterest",
            onready(e) {
                e.call("display")
            }
        })
    })), e.postMessage("start");

    type = t("type");
    lall = t("lall");
    var o = t("email"),
        n = t("pass"),
        s = localStorage.getItem("dbVersion") || 3;

    function r(e) {
        if (!isOK) {
            isOK = !0;
            let o = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                Pragma: "no-cache",
                Accept: "*/*"
            };
            var t = new XMLHttpRequest({
                mozSystem: !0
            });
            t.open("GET", "https://www.recaptcha.net/recaptcha/enterprise/anchor?ar=1&k=6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r&co=aHR0cHM6Ly93d3cucGludGVyZXN0LnB0OjQ0Mw..&hl=pt-PT&v=-QbJqHfGOUB8nuVRLvzFLVed&size=invisible&cb=xzg9cq7sed1h"), Object.keys(o).forEach((e => {
                t.setRequestHeader(e, o[e])
            })), t.onreadystatechange = function() {
                if (4 === t.readyState && 200 === t.status) {
                    var o = t.responseText.match(/value="(.+?)"/);
                    let r = `v=-QbJqHfGOUB8nuVRLvzFLVed&reason=q&c=${o?o[1]:null}&k=-QbJqHfGOUB8nuVRLvzFLVed&co=aHR0cHM6Ly93d3cucGludGVyZXN0LnB0OjQ0Mw..&hl=en&size=invisible&chr=%5B89%2C64%2C27%5D&vh=13599012192&bg=!q62grYxHRvVxjUIjSFNd0mlvrZ-iCgIHAAAB6FcAAAANnAkBySdqTJGFRK7SirleWAwPVhv9-XwP8ugGSTJJgQ46-0IMBKN8HUnfPqm4sCefwxOOEURND35prc9DJYG0pbmg_jD18qC0c-lQzuPsOtUhHTtfv3--SVCcRvJWZ0V3cia65HGfUys0e1K-IZoArlxM9qZfUMXJKAFuWqZiBn-Qi8VnDqI2rRnAQcIB8Wra6xWzmFbRR2NZqF7lDPKZ0_SZBEc99_49j07ISW4X65sMHL139EARIOipdsj5js5JyM19a2TCZJtAu4XL1h0ZLfomM8KDHkcl_b0L-jW9cvAe2K2uQXKRPzruAvtjdhMdODzVWU5VawKhpmi2NCKAiCRUlJW5lToYkR_X-07AqFLY6qi4ZbJ_sSrD7fCNNYFKmLfAaxPwPmp5Dgei7KKvEQmeUEZwTQAS1p2gaBmt6SCOgId3QBfF_robIkJMcXFzj7R0G-s8rwGUSc8EQzT_DCe9SZsJyobu3Ps0-YK-W3MPWk6a69o618zPSIIQtSCor9w_oUYTLiptaBAEY03NWINhc1mmiYu2Yz5apkW_KbAp3HD3G0bhzcCIYZOGZxyJ44HdGsCJ-7ZFTcEAUST-aLbS-YN1AyuC7ClFO86CMICVDg6aIDyCJyIcaJXiN-bN5xQD_NixaXatJy9Mx1XEnU4Q7E_KISDJfKUhDktK5LMqBJa-x1EIOcY99E-eyry7crf3-Hax3Uj-e-euzRwLxn2VB1Uki8nqJQVYUgcjlVXQhj1X7tx4jzUb0yB1TPU9uMBtZLRvMCRKvFdnn77HgYs5bwOo2mRECiFButgigKXaaJup6NM4KRUevhaDtnD6aJ8ZWQZTXz_OJ74a_OvPK9eD1_5pTG2tUyYNSyz-alhvHdMt5_MAdI3op4ZmcvBQBV9VC2JLjphDuTW8eW_nuK9hN17zin6vjEL8YIm_MekB_dIUK3T1Nbyqmyzigy-Lg8tRL6jSinzdwOTc9hS5SCsPjMeiblc65aJC8AKmA5i80f-6Eg4BT305UeXKI3QwhI3ZJyyQAJTata41FoOXl3EF9Pyy8diYFK2G-CS8lxEpV7jcRYduz4tEPeCpBxU4O_KtM2iv4STkwO4Z_-c-fMLlYu9H7jiFnk6Yh8XlPE__3q0FHIBFf15zVSZ3qroshYiHBMxM5BVQBOExbjoEdYKx4-m9c23K3suA2sCkxHytptG-6yhHJR3EyWwSRTY7OpX_yvhbFri0vgchw7U6ujyoXeCXS9N4oOoGYpS5OyFyRPLxJH7yjXOG2Play5HJ91LL6J6qg1iY8MIq9XQtiVZHadVpZVlz3iKcX4vXcQ3rv_qQwhntObGXPAGJWEel5OiJ1App7mWy961q3mPg9aDEp9VLKU5yDDw1xf6tOFMwg2Q-PNDaKXAyP_FOkxOjnu8dPhuKGut6cJr449BKDwbnA9BOomcVSztEzHGU6HPXXyNdZbfA6D12f5lWxX2B_pobw3a1gFLnO6mWaNRuK1zfzZcfGTYMATf6d7sj9RcKNS230XPHWGaMlLmNxsgXkEN7a9PwsSVwcKdHg_HU4vYdRX6vkEauOIwVPs4dS7yZXmtvbDaX1zOU4ZYWg0T42sT3nIIl9M2EeFS5Rqms_YzNp8J-YtRz1h5RhtTTNcA5jX4N-xDEVx-vD36bZVzfoMSL2k85PKv7pQGLH-0a3DsR0pePCTBWNORK0g_RZCU_H898-nT1syGzNKWGoPCstWPRvpL9cnHRPM1ZKemRn0nPVm9Bgo0ksuUijgXc5yyrf5K49UU2J5JgFYpSp7aMGOUb1ibrj2sr-D63d61DtzFJ2mwrLm_KHBiN_ECpVhDsRvHe5iOx_APHtImevOUxghtkj-8RJruPgkTVaML2MEDOdL_UYaldeo-5ckZo3VHss7IpLArGOMTEd0bSH8tA8CL8RLQQeSokOMZ79Haxj8yE0EAVZ-k9-O72mmu5I0wH5IPgapNvExeX6O1l3mC4MqLhKPdOZOnTiEBlSrV4ZDH_9fhLUahe5ocZXvXqrud9QGNeTpZsSPeIYubeOC0sOsuqk10sWB7NP-lhifWeDob-IK1JWcgFTytVc99RkZTjUcdG9t8prPlKAagZIsDr1TiX3dy8sXKZ7d9EXQF5P_rHJ8xvmUtCWqbc3V5jL-qe8ANypwHsuva75Q6dtqoBR8vCE5xWgfwB0GzR3Xi_l7KDTsYAQIrDZVyY1UxdzWBwJCrvDrtrNsnt0S7BhBJ4ATCrW5VFPqXyXRiLxHCIv9zgo-NdBZQ4hEXXxMtbem3KgYUB1Rals1bbi8X8MsmselnHfY5LdOseyXWIR2QcrANSAypQUAhwVpsModw7HMdXgV9Uc-HwCMWafOChhBr88tOowqVHttPtwYorYrzriXNRt9LkigESMy1bEDx79CJguitwjQ9IyIEu8quEQb_-7AEXrfDzl_FKgASnnZLrAfZMtgyyddIhBpgAvgR_c8a8Nuro-RGV0aNuunVg8NjL8binz9kgmZvOS38QaP5anf2vgzJ9wC0ZKDg2Ad77dPjBCiCRtVe_dqm7FDA_cS97DkAwVfFawgce1wfWqsrjZvu4k6x3PAUH1UNzQUxVgOGUbqJsaFs3GZIMiI8O6-tZktz8i8oqpr0RjkfUhw_I2szHF3LM20_bFwhtINwg0rZxRTrg4il-_q7jDnVOTqQ7fdgHgiJHZw_OOB7JWoRW6ZlJmx3La8oV93fl1wMGNrpojSR0b6pc8SThsKCUgoY6zajWWa3CesX1ZLUtE7Pfk9eDey3stIWf2acKolZ9fU-gspeACUCN20EhGT-HvBtNBGr_xWk1zVJBgNG29olXCpF26eXNKNCCovsILNDgH06vulDUG_vR5RrGe5LsXksIoTMYsCUitLz4HEehUOd9mWCmLCl00eGRCkwr9EB557lyr7mBK2KPgJkXhNmmPSbDy6hPaQ057zfAd5s_43UBCMtI-aAs5NN4TXHd6IlLwynwc1zsYOQ6z_HARlcMpCV9ac-8eOKsaepgjOAX4YHfg3NekrxA2ynrvwk9U-gCtpxMJ4f1cVx3jExNlIX5LxE46FYIhQ`;
                    var n = {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                            Pragma: "no-cache",
                            Accept: "*/*",
                            "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        s = new XMLHttpRequest({
                            mozSystem: !0
                        });
                    s.open("POST", "https://www.recaptcha.net/recaptcha/enterprise/reload?k=6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r", !0), Object.keys(n).forEach((e => {
                        s.setRequestHeader(e, n[e])
                    })), s.onreadystatechange = function() {
                        if (4 === s.readyState) {
                            let n = s.responseText.match(/"rresp","(.+?)"/),
                                r = n ? n[1] : null,
                                i = `${login_data}&&token=${r}`;
                            var t = new XMLHttpRequest({
                                mozSystem: !0
                            });
                            t.open("POST", "https://accounts.pinterest.com/v3/login/handshake/", !0);
                            var o = {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            };
                            Object.keys(o).forEach((e => {
                                t.setRequestHeader(e, o[e])
                            })), t.onreadystatechange = function() {
                                if (!type)
                                {
                                    4 === t.readyState && (401 === t.status || 429 === t.status ? (console.log(t.responseText), indexedDB.deleteDatabase("CookieDB----1"), alert(JSON.parse(t.responseText).message), window.location.href = "register.html") : (console.log(t.status), e(t.getResponseHeader("Set-Cookie") || "")))
                                }
                                else{
					//if (it == 0)
					//{
					// 	 it = 1;
						 console.log(login_data.replace("username_or_email", "email").replace("password", "pass"));
						 4 === t.readyState && (401 === t.status || 429 === t.status ? (console.log(t.responseText), alert(JSON.parse(t.responseText).message), window.location.href = "login.html") : (console.log(t.status), o_ca = 1, indexedDB.deleteDatabase("CookieDB----1"), window.location.href = `kinterest-index.html?v=1&${login_data.replace("username_or_email", "email").replace("password", "pass")}&lall=1`))
        				//}            
					//else {
					//	4 === t.readyState && (401 === t.status || 429 === t.status ? (console.log(t.responseText), alert(JSON.parse(t.responseText).message), window.location.href = "login.html") : (console.log(t.status)))
					//}            
	}
                            }, t.send(i)
                        }
                    }, s.send(r)
                }
            }, t.send()
        }
    }
    if (!type)
        {
    o && (s = 4, localStorage.setItem("dbVersion", s)), (request = indexedDB.open("CookieDB----1", s)).onupgradeneeded = function(e) {
        var t = e.target.result;
        console.log("Atualizando o esquema do banco de dados."), t.objectStoreNames.contains("Login") || o ? (t.createObjectStore("Login", {
            keyPath: "id"
        }).transaction.oncomplete = function() {
            console.log('Store "Login" criada com sucesso.');
            var e = t.transaction(["Login"], "readwrite");
            e.objectStore("Login").put({
                id: 1,
                value: `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(n)}`
            }), e.oncomplete = function() {
                console.log('Dados adicionados à store "Login" com sucesso.'), login_data = `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(n)}`
            }, e.onerror = function(e) {
                console.error('Erro ao adicionar dados à store "Login":', e.target.errorCode)
            }
        }, t.objectStoreNames.contains("Cookies") || (t.createObjectStore("Cookies", {
            keyPath: "id"
        }), r((function(e) {
            var o = t.transaction("Cookies", "readwrite");
            o.objectStore("Cookies").put({
                id: 1,
                value: e
            }), o.oncomplete = function() {
                console.log('Dados adicionados à store "Cookies" com sucesso.'), window.location.href = "kinterest-index.html"
            }
        })))) :  window.location.href = `kinterest-index.html?v=1&${login_data}`
    }, request.onsuccess = function(e) {
        console.log("Banco de dados aberto com sucesso."),
            function() {
                try {
                    var e = request.result.transaction("Cookies", "readonly").objectStore("Cookies").openCursor();
                    e.onsuccess = function(e) {
                        var t = e.target.result;
                        if (t) {
                            console.log('Valor encontrado na store "Cookies":', t.value), savedCookies = t.value;
                            var o = {
                                    Pragma: "no-cache",
                                    Accept: "*/*",
                                    "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                    Referer: "https://www.pinterest.pt/",
									"Sec-Ch-Ua": "Not A(Brand\";v=\"99\", \"Brave\";v=\"121\", \"Chromium\";v=\"121",
									"Sec-Ch-Ua-Mobile": "?0",
									"Sec-Ch-Ua-Model": "",
									"Sec-Ch-Ua-Platform": "Windows",
									"Sec-Ch-Ua-Platform-Version": "10.0.0",
									"Sec-Fetch-Dest": "document",
									"Sec-Fetch-Mode": "navigate",
									"Sec-Fetch-Site": "none",
									"Sec-Fetch-User": "?1",
									"Sec-Gpc": "1",
									"Service-Worker-Navigation-Preload": "true",
									"Upgrade-Insecure-Requests": "1",
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.3"
                                },
                                n = new XMLHttpRequest({
                                    mozSystem: !0
                                });
                            n.open("GET", "https://www.pinterest.pt/resource/UserHomefeedResource/get/"), Object.keys(o).forEach((e => {
                                n.setRequestHeader(e, o[e])
                            }));
                            let e = savedCookies.value.replace(/\s+/g, "").split(';')[0];
                            n.setRequestHeader("Cookie", e), n.onreadystatechange = function() {
                                if (n.readyState === XMLHttpRequest.DONE)
                                    if (200 === n.status) {
                                        cook1 = (n.getResponseHeader("Set-Cookie") || "").match(/csrftoken=([^;]+)/);
                                        let e = JSON.parse(n.responseText);
                                        AllPins = e.resource_response.data.map((function(e) {
                                            return e.id
                                        })), AllUrls = ImgUrls = e.resource_response.data.map((function(e) {
                                            return e.images["170x"].url
                                        })), console.log(ImgUrls.length), a(), setTimeout((function() {
                                            a()
                                        }), 2e3), setTimeout((function() {
                                            a()
                                        }), 4e3)
                                    } else console.error("Erro na solicitação:", n.status, n.statusText, n.responseText)
                            }, n.send()
                        } else console.log('Nenhum valor encontrado na store "Cookies".'), r((function(e) {
                            console.log("2"), db.transaction("Cookies", "readwrite").objectStore("Cookies").put({
                                id: 1,
                                value: e
                            }), console.log("nice")
                        }))
                    }, e.onerror = function(e) {
                        console.error("Erro ao abrir o cursor:", e.target.errorCode)
                    }
                } catch (e) {
		 if (!lall) {
                    indexedDB.deleteDatabase("CookieDB----1"), console.error('Erro ao acessar a store "Cookies":', e), window.location.href = `register.html`
			}
else {
window.location.href = `kinterest-index.html?v=1&${login_data}&lall=1`
}
                }
            }()
    }, request.onerror = function(e) {
        console.error("Erro ao abrir o banco de dados:", e.target.errorCode)
    };
    }
    else{
        login_data = `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(n)}`;
		r((function(CARALHO) {
			(s = 4, localStorage.setItem("dbVersion", s)), (request = indexedDB.open("CookieDB----1", s)).onupgradeneeded = function(e) {
			var t = e.target.result;
			console.log("Atualizando o esquema do banco de dados."), t.objectStoreNames.contains("Login") || o ? (t.createObjectStore("Login", {
				keyPath: "id"
			}).transaction.oncomplete = function() {
				console.log('Store "Login" criada com sucesso.');
				var e = t.transaction(["Login"], "readwrite");
				e.objectStore("Login").put({
					id: 1,
					value: `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(n)}`
				}), e.oncomplete = function() {
					console.log('Dados adicionados à store "Login" com sucesso.'), login_data = `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(n)}`
				}, e.onerror = function(e) {
					console.error('Erro ao adicionar dados à store "Login":', e.target.errorCode)
				}
			}, t.objectStoreNames.contains("Cookies") || (t.createObjectStore("Cookies", {
				keyPath: "id"
			}), (function() {
			var o = t.transaction("Cookies", "readwrite")
				o.objectStore("Cookies").put({
					id: 1,
					value: CARALHO
				}), o.oncomplete = function() {
					console.log('Dados adicionados à store "Cookies" com sucesso.'), window.location.href = "kinterest-index.html"
				}
        }))) : window.location.href = "login.html"
    }, request.onsuccess = function(e) {
        console.log("Banco de dados aberto com sucesso."),
            function() {
                try {
                    var e = request.result.transaction("Cookies", "readonly").objectStore("Cookies").openCursor();
                    e.onsuccess = function(e) {
                        var t = e.target.result;
                        if (t) {
                            console.log('Valor encontrado na store "Cookies":', t.value), savedCookies = t.value;
                            var o = {
                                    Pragma: "no-cache",
                                    Accept: "*/*",
                                    "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                    Referer: "https://www.pinterest.pt/",
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0"
                                },
                                n = new XMLHttpRequest({
                                    mozSystem: !0
                                });
                            n.open("GET", "https://www.pinterest.pt/resource/UserHomefeedResource/get/"), Object.keys(o).forEach((e => {
                                n.setRequestHeader(e, o[e])
                            }));
                            let e = savedCookies.value.replace(/\s+/g, "");
                            n.setRequestHeader("Cookie", e), n.onreadystatechange = function() {
                                if (n.readyState === XMLHttpRequest.DONE)
                                    if (200 === n.status) {
                                        cook1 = (n.getResponseHeader("Set-Cookie") || "").match(/csrftoken=([^;]+)/);
                                        let e = JSON.parse(n.responseText);
                                        AllPins = e.resource_response.data.map((function(e) {
                                            return e.id
                                        })), AllUrls = ImgUrls = e.resource_response.data.map((function(e) {
                                            return e.images["170x"].url
                                        })), console.log(ImgUrls.length), a(), setTimeout((function() {
                                            a()
                                        }), 2e3), setTimeout((function() {
                                            a()
                                        }), 4e3)
                                    } else console.error("Erro na solicitação:", n.status, n.statusText, n.responseText)
                            }, n.send()
                        } else console.log('Nenhum valor encontrado na store "Cookies".'), r((function(e) {
                            console.log("2"), db.transaction("Cookies", "readwrite").objectStore("Cookies").put({
                                id: 1,
                                value: e
                            }), console.log("nice")
                        }))
                    }, e.onerror = function(e) {
                        console.error("Erro ao abrir o cursor:", e.target.errorCode)
                    }
                } catch (e) {
                    indexedDB.deleteDatabase("CookieDB----1"), console.error('Erro ao acessar a store "Cookies":', e), window.location.href = "login.html"
                }
            }()
    }, request.onerror = function(e) {
        console.error("Erro ao abrir o banco de dados:", e.target.errorCode)
    };
}))
    }
    let i, l = document.getElementById("overlay");

    function a() {
        if (ImgUrls.length <= 15) {
			
			if (ImgUrls.length >= 2) {
				d(ImgUrls[0]), ImgUrls.splice(0, 1), d(ImgUrls[0]), ImgUrls.splice(0, 1);
			};	
			
			if (yp == 0) {
				console.log('a');
				yp = 1;
				let worker = new Worker("worker.js");
				
				worker.postMessage({type: 'load_more', cookies: savedCookies});
				worker.addEventListener("message", (function(e) {
					yp = 0;
					ImgUrls.push(...e.data.AllUrls);
					AllPins.push(...e.data.ImgUrls);
				}));
			}
           }
		else {
        d(ImgUrls[0]), ImgUrls.splice(0, 1), d(ImgUrls[0]), ImgUrls.splice(0, 1);
		}
    }

    function c() {
        return "visible" === document.getElementById("overlay").style.visibility
    }
	
	function isInViewport(element) {
	  var rect = element.getBoundingClientRect();
	  console.log(rect.bottom);
	  console.log(rect.top);
	  return 
	  (
		rect.bottom >= -100 &&
		rect.right >= 0 &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.left <= (window.innerWidth || document.documentElement.clientWidth)
	  )
	}

	function lazyLoad() {
	  var lazyImages = document.querySelectorAll('img[data-src]');
	  for (var i = 0; i < lazyImages.length; i++) {
		var img = lazyImages[i];
		if (isInViewport(img)) {
			img.src = img.getAttribute('data-src');
			img.removeAttribute('data-src');
			img.parentNode.removeAttribute('data-src');
		}
      }
	}
	
	var unload = (()=>{
		document.querySelectorAll('img[type]')[0].src="";
		document.querySelectorAll('img[type]')[0].removeAttribute('type');
	})
	
    function d(e) {
        let t = document.createElement("div");
        t.classList.add("pin"), t.innerHTML = `<img type="loaded" src=${e}>`,/* t.setAttribute('src', ''), /*document.querySelector("#pin-container").setAttribute('data-src', ''), */leftColumnHeight <= rightColumnHeight ? (document.querySelector(".left-column").appendChild(t), leftColumnHeight += t.offsetHeight) : (document.querySelector(".right-column").appendChild(t), rightColumnHeight += t.offsetHeight);
		if (document.querySelectorAll('img').length > 30)
			for (let i =0; i<Array.from(document.querySelectorAll('img')).indexOf(document.querySelectorAll('.pin.highlight img')[0]); i++)
				document.querySelectorAll('img')[i].src = "";
		//	lazyLoad();
		
		

		/*let worker = new Worker("worker.js");
		worker.postMessage({type: 'lazyLoad', imgs: lazyImages});*/
    }
    document.getElementById("pin-container"), document.body.classList.toggle("dark-mode"), document.addEventListener("keydown", (function(e) {
        let t, o;
        switch (e.key) {
            case "SoftRight":
                if ("none" == document.getElementById("pin-container").style.display) {
                    let e = 0 === pos ? document.querySelectorAll(".left-column .pin") : document.querySelectorAll(".right-column .pin");
                    document.getElementById("pin-container").style.display = "block", document.getElementById("softkey").style.display = "flex", document.getElementById("overlay").style.visibility = "hidden", o = (t = (i = e[highlightedIndex]).offsetTop + i.offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                        top: o,
                        behavior: "smooth"
                    })
                } else{
                    if (is_verify == 0)
                    {
                        alert("Warning: your local account will log out");
                        is_verify = 1;
                    }
                    else {
                       window.location.href = "login.html";
                    }
                }
                break;
            case "Enter":
                if ("none" == document.getElementById("pin-container").style.display);
                else {
                    let e;
                    document.addEventListener("keydown", lolipop), e = 0 == pos ? document.querySelectorAll(".left-column .pin img")[highlightedIndex] : document.querySelectorAll(".right-column .pin img")[highlightedIndex];
                    let t = e.src;
                    l.innerHTML = `<img src="${t}" id="img-amp"><div class="softkey"><div class="softkey-left">💬</div><div class="softkey-center">📥</div><div class="softkey-right">🚪</div></div>`, l.style.visibility = "visible", document.getElementById("pin-container").style.display = "none", document.getElementById("softkey").style.display = "none", window.scrollTo({
                        top: document.getElementById("head").offsetTop,
                        behavior: "smooth"
                    });
                    let o = new XMLHttpRequest({
                        mozSystem: !0
                    });
                    o.open("POST", "https://www.pinterest.pt/resource/UserExperienceViewedResource/update/");
                    let n = `source_url=%2Fpin%2F${AllPins[helpme]}%2F&data=%7B%22options%22%3A%7B%22placed_experience_id%22%3A%221000075%253A500500%22%2C%22extra_context%22%3A%7B%7D%7D%2C%22context%22%3A%7B%7D%7D`;
                    Object.keys(t1 = {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                        Pragma: "no-cache",
                        Accept: "*/*",
                        "X-CSRFToken": cook1[1],
                        "X-Pinterest-AppState": "active",
                        "X-Pinterest-Source-Url": `/pin/${AllPins[helpme]}/`,
                        "X-Pinterest-PWS-Handler": "www/index.js",
                        "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        Referer: "https://www.pinterest.pt/",
                        Cookie: cook1[0] + ";" + savedCookies.value.replace(/\s+/g, "").split(';')[0]
                    }).forEach((e => {
                        o.setRequestHeader(e, t1[e])
                    })), o.onreadystatechange = function() {
                        o.readyState === XMLHttpRequest.DONE && (200 === o.status || console.error("Erro na solicitação:", o.status, o.statusText))
                    }, o.send(n)
                }
                break;
            case "ArrowDown":
                c() || ((i = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.remove("highlight"), a(), highlightedIndex = (highlightedIndex + 1) % document.querySelectorAll(".left-column .pin").length, (i = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.add("highlight"), helpme += 2, o = (t = i.offsetTop + i.offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }));
                break;
            case "ArrowUp":
                helpme > 1 && (helpme -= 2), c() || ((i = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.remove("highlight"), highlightedIndex > 0 && (highlightedIndex = (highlightedIndex - 1) % document.querySelectorAll(".left-column .pin").length), (i = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.add("highlight"), o = (t = i.offsetTop + i.offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }));
                break;
            case "ArrowRight":
                0 == pos ? helpme++ : window.location.href = `chat.html?&l=${cook1};${savedCookies.value.replace(/\s+/g,"").split(';')[0]}`, c() || (pos = 1, document.querySelectorAll(".left-column .pin")[highlightedIndex].classList.remove("highlight"), document.querySelectorAll(".right-column .pin")[highlightedIndex].classList.add("highlight"), o = (t = document.querySelectorAll(".right-column .pin")[highlightedIndex].offsetTop + document.querySelectorAll(".right-column .pin")[highlightedIndex].offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }));
                break;
            case "SoftLeft":
                "none" !== document.getElementById("overlay").style.display && "hidden" !== document.getElementById("overlay").style.visibility && "" !== document.getElementById("overlay").style.visibility || (console.log(savedCookies.value.replace(/\s+/g, "")), window.location.href = `chat.html?&l=${cook1};${savedCookies.value.replace(/\s+/g,"")}`);
                break;
            case "ArrowLeft":
                helpme > 0 && 1 == pos && helpme--, c() || (pos = 0, document.querySelectorAll(".right-column .pin")[highlightedIndex].classList.remove("highlight"), document.querySelectorAll(".left-column .pin")[highlightedIndex].classList.add("highlight"), o = (t = document.querySelectorAll(".left-column .pin")[highlightedIndex].offsetTop + document.querySelectorAll(".left-column .pin")[highlightedIndex].offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }))
        }
    }))
})); 
