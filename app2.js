var request;
let highlightedIndex = 0,
    leftColumnHeight = 0,
    rightColumnHeight = 0,
    pos = 0,
    savedCookies, ImgUrls, login_data, AllUrls, newWindow, isOK, plsgod, infoH, AllPins = [],
    cook1 = 0,
    helpme = 0,
    possss = 0;

function saveImgFromUrl(e) {
    e = `https://api.codetabs.com/v1/proxy/?quest=${e.src}`;
    var t = new Image;
    t.crossOrigin = "Anonymous", t.src = e, t.onload = function() {
        var e = document.createElement("canvas"),
            o = e.getContext("2d");
        e.width = t.width, e.height = t.height, o.drawImage(t, 0, 0), e.toBlob(function(e) {
            console.log(e), saveImg(e)
        }, "image/png")
    }
}

function amanha(e) {
    console.log("ok");
    let t = document.querySelector("#resultsList .focused");
    if (t.focus(), "ArrowDown" === e.key);
    else if ("Enter" === e.key);
    else if ("ArrowUp" === e.key && t) {
        t.classList.remove("focused");
        let o = t.previousElementSibling;
        o ? (o.classList.add("focused"), possss--, scrollListToItem(o)) : (document.getElementById("searchInput").focus(), document.removeEventListener("keydown", amanha))
    }
}

function scrollListToItem(e) {
    let t = document.getElementById("resultsList"),
        o = e.offsetTop - t.offsetTop,
        s = e.offsetHeight,
        r = t.offsetHeight;
    o < t.scrollTop ? t.scrollTop = o : o + s > t.scrollTop + r && (t.scrollTop = o + s - r)
}

function lll(e) {
    if (console.log("AS"), "ArrowDown" === e.key) {
        document.getElementById("searchInput").blur();
        let t = document.querySelector("#resultsList .focused");
        if (t.focus(), t) {
            t.classList.remove("focused");
            let o = t.nextElementSibling;
            if (o) o.classList.add("focused"), possss++, scrollListToItem(o);
            else {
                let s = document.querySelector("#resultsList li");
                s && (possss = 0, s.classList.add("focused"), scrollListToItem(s))
            }
            document.addEventListener("keydown", amanha)
        }
    } else if ("Enter" === e.key) {
        let r = {
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
            n = new XMLHttpRequest({
                mozSystem: !0
            });
        n.open("POST", "https://www.pinterest.pt/resource/ConversationsResource/create/");
        let i = `source_url=%2Fpin%2F${AllPins[helpme]}%2F&data=%7B%22options%22%3A%7B%22user_ids%22%3A%5B%22${infoH[possss].id}%22%5D%2C%22emails%22%3A%5B%5D%2C%22text%22%3A%22%22%2C%22pin%22%3A%22${AllPins[helpme]}%22%7D%2C%22context%22%3A%7B%7D%7D`;
        Object.keys(r).forEach(e => {
            n.setRequestHeader(e, r[e])
        }), n.onreadystatechange = function() {
            n.readyState === XMLHttpRequest.DONE && (200 === n.status || console.error("Erro na solicita\xe7\xe3o:", n.status, n.statusText))
        }, n.send(i), document.removeEventListener("keydown", amanha), document.removeEventListener("keydown", lll), document.getElementById("searchInput").outerHTML = "", document.getElementById("resultsList").outerHTML = ""
    } else "SoftRight" === e.key && document.removeEventListener("keydown", lolipop)
}

function lolipop(e) {
    if ("Enter" === e.key) {
        if (!document.getElementById('resultsList')) {
            //"none"=document.getElementById("pin-container").style.display;
            //document.getElementById("img-amp").getAttribute("src");
            saveImgFromUrl(document.getElementById("img-amp"));
        }
    } else if ("SoftLeft" === e.key) {
        possss = 0;
        let t = document.createElement("input");
        t.setAttribute("type", "text"), t.setAttribute("id", "searchInput"), t.style.top = document.getElementById("overlay").offsetTop, document.getElementById("overlay").appendChild(t);
        let o = document.createElement("ul");
        o.setAttribute("id", "resultsList"), document.getElementById("overlay").appendChild(o), document.getElementById("searchInput").focus(), document.getElementById("searchInput").addEventListener("input", function() {
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
                Cookie: cook1[0] + ";" + savedCookies.value.replace(/\s+/g, "")
            };
            Object.keys(t).forEach(o => {
                e.setRequestHeader(o, t[o])
            }), e.onreadystatechange = function() {
                e.readyState === XMLHttpRequest.DONE && (200 === e.status ? infoH = extrairInformacoes(JSON.parse(e.responseText)) : console.error("Erro na solicita\xe7\xe3o:", e.status, e.statusText))
            }, e.send()
        }), document.addEventListener("keydown", lll)
    } else "SoftRight" === e.key && document.removeEventListener("keydown", lolipop)
}

function extrairInformacoes(e) {
    document.getElementById("resultsList").innerHTML = "";
    let t = e.resource_response.data.items,
        o = [];
    for (let s = 0; s < t.length; s++) {
        let r = t[s],
            n = {
                image_medium_url: r.image_medium_url,
                id: r.id,
                username: r.username,
                first_name: r.first_name,
                last_name: r.last_name
            },
            i = document.createElement("li");
        i.innerHTML = `${n.first_name} - ${n.username}`, document.getElementById("resultsList").appendChild(i), o.push(n)
    }
    let l = resultsList.querySelector("li");
    return l && l.classList.add("focused"), o
}

function showSavedMessage() {
    var e = document.createElement("div");
    e.innerText = "Saved", e.className = "saved-message", e.style.backgroundColor = "red", e.style.color = "white", e.style.position = "fixed", e.style.bottom = "20px", e.style.display = "inline-block", e.style.fontSize = "18px", e.style.width = "100px", e.style.textAlign = "center", e.style.left = "50%", e.style.transform = "translateX(-50%)", e.style.padding = "10px", e.style.borderRadius = "5px", e.style.zIndex = "9999", document.body.appendChild(e), setTimeout(function() {
        e.parentNode.removeChild(e)
    }, 2e3)
}

function saveImg(e) {
    let t = (new Date).getTime();
    var o = navigator.getDeviceStorage("pictures"),
        s = new Blob([e], {
            type: "image/png"
        }),
        r = o.addNamed(s, `${t}.png`);
    r.onsuccess = function() {
        this.result, showSavedMessage()
    }, r.onerror = function() {
        console.error("Unable to write the file:", this.error)
    }
}
helpme = Math.max(helpme, 0), window.addEventListener("DOMContentLoaded", function() {
    let e = new Worker("worker.js");

    function t(e) {
        return new URLSearchParams(window.location.search).get(e)
    }
    e.addEventListener("message", function(e) {
        "loadMorePins" === e.data && window.getKaiAd({
            publisher: "0b7a2f6a-4113-4b9d-bce7-e3b0ba119873",
            app: "PinK!",
            slot: "Pinterest",
            onready(e) {
                e.call("display")
            }
        })
    }), e.postMessage("start");
    var o = t("email"),
        s = t("pass"),
        r = localStorage.getItem("dbVersion") || 3;

    function n(e) {
        if (!isOK) {
            isOK = !0;
            let t = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                Pragma: "no-cache",
                Accept: "*/*"
            };
            var o = new XMLHttpRequest({
                mozSystem: !0
            });
            o.open("GET", "https://www.recaptcha.net/recaptcha/enterprise/anchor?ar=1&k=6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r&co=aHR0cHM6Ly93d3cucGludGVyZXN0LnB0OjQ0Mw..&hl=pt-PT&v=-QbJqHfGOUB8nuVRLvzFLVed&size=invisible&cb=xzg9cq7sed1h"), Object.keys(t).forEach(e => {
                o.setRequestHeader(e, t[e])
            }), o.onreadystatechange = function() {
                if (4 === o.readyState && 200 === o.status) {
                    var t = o.responseText.match(/value="(.+?)"/);
                    let s = `v=-QbJqHfGOUB8nuVRLvzFLVed&reason=q&c=${t?t[1]:null}&k=-QbJqHfGOUB8nuVRLvzFLVed&co=aHR0cHM6Ly93d3cucGludGVyZXN0LnB0OjQ0Mw..&hl=en&size=invisible&chr=%5B89%2C64%2C27%5D&vh=13599012192&bg=!q62grYxHRvVxjUIjSFNd0mlvrZ-iCgIHAAAB6FcAAAANnAkBySdqTJGFRK7SirleWAwPVhv9-XwP8ugGSTJJgQ46-0IMBKN8HUnfPqm4sCefwxOOEURND35prc9DJYG0pbmg_jD18qC0c-lQzuPsOtUhHTtfv3--SVCcRvJWZ0V3cia65HGfUys0e1K-IZoArlxM9qZfUMXJKAFuWqZiBn-Qi8VnDqI2rRnAQcIB8Wra6xWzmFbRR2NZqF7lDPKZ0_SZBEc99_49j07ISW4X65sMHL139EARIOipdsj5js5JyM19a2TCZJtAu4XL1h0ZLfomM8KDHkcl_b0L-jW9cvAe2K2uQXKRPzruAvtjdhMdODzVWU5VawKhpmi2NCKAiCRUlJW5lToYkR_X-07AqFLY6qi4ZbJ_sSrD7fCNNYFKmLfAaxPwPmp5Dgei7KKvEQmeUEZwTQAS1p2gaBmt6SCOgId3QBfF_robIkJMcXFzj7R0G-s8rwGUSc8EQzT_DCe9SZsJyobu3Ps0-YK-W3MPWk6a69o618zPSIIQtSCor9w_oUYTLiptaBAEY03NWINhc1mmiYu2Yz5apkW_KbAp3HD3G0bhzcCIYZOGZxyJ44HdGsCJ-7ZFTcEAUST-aLbS-YN1AyuC7ClFO86CMICVDg6aIDyCJyIcaJXiN-bN5xQD_NixaXatJy9Mx1XEnU4Q7E_KISDJfKUhDktK5LMqBJa-x1EIOcY99E-eyry7crf3-Hax3Uj-e-euzRwLxn2VB1Uki8nqJQVYUgcjlVXQhj1X7tx4jzUb0yB1TPU9uMBtZLRvMCRKvFdnn77HgYs5bwOo2mRECiFButgigKXaaJup6NM4KRUevhaDtnD6aJ8ZWQZTXz_OJ74a_OvPK9eD1_5pTG2tUyYNSyz-alhvHdMt5_MAdI3op4ZmcvBQBV9VC2JLjphDuTW8eW_nuK9hN17zin6vjEL8YIm_MekB_dIUK3T1Nbyqmyzigy-Lg8tRL6jSinzdwOTc9hS5SCsPjMeiblc65aJC8AKmA5i80f-6Eg4BT305UeXKI3QwhI3ZJyyQAJTata41FoOXl3EF9Pyy8diYFK2G-CS8lxEpV7jcRYduz4tEPeCpBxU4O_KtM2iv4STkwO4Z_-c-fMLlYu9H7jiFnk6Yh8XlPE__3q0FHIBFf15zVSZ3qroshYiHBMxM5BVQBOExbjoEdYKx4-m9c23K3suA2sCkxHytptG-6yhHJR3EyWwSRTY7OpX_yvhbFri0vgchw7U6ujyoXeCXS9N4oOoGYpS5OyFyRPLxJH7yjXOG2Play5HJ91LL6J6qg1iY8MIq9XQtiVZHadVpZVlz3iKcX4vXcQ3rv_qQwhntObGXPAGJWEel5OiJ1App7mWy961q3mPg9aDEp9VLKU5yDDw1xf6tOFMwg2Q-PNDaKXAyP_FOkxOjnu8dPhuKGut6cJr449BKDwbnA9BOomcVSztEzHGU6HPXXyNdZbfA6D12f5lWxX2B_pobw3a1gFLnO6mWaNRuK1zfzZcfGTYMATf6d7sj9RcKNS230XPHWGaMlLmNxsgXkEN7a9PwsSVwcKdHg_HU4vYdRX6vkEauOIwVPs4dS7yZXmtvbDaX1zOU4ZYWg0T42sT3nIIl9M2EeFS5Rqms_YzNp8J-YtRz1h5RhtTTNcA5jX4N-xDEVx-vD36bZVzfoMSL2k85PKv7pQGLH-0a3DsR0pePCTBWNORK0g_RZCU_H898-nT1syGzNKWGoPCstWPRvpL9cnHRPM1ZKemRn0nPVm9Bgo0ksuUijgXc5yyrf5K49UU2J5JgFYpSp7aMGOUb1ibrj2sr-D63d61DtzFJ2mwrLm_KHBiN_ECpVhDsRvHe5iOx_APHtImevOUxghtkj-8RJruPgkTVaML2MEDOdL_UYaldeo-5ckZo3VHss7IpLArGOMTEd0bSH8tA8CL8RLQQeSokOMZ79Haxj8yE0EAVZ-k9-O72mmu5I0wH5IPgapNvExeX6O1l3mC4MqLhKPdOZOnTiEBlSrV4ZDH_9fhLUahe5ocZXvXqrud9QGNeTpZsSPeIYubeOC0sOsuqk10sWB7NP-lhifWeDob-IK1JWcgFTytVc99RkZTjUcdG9t8prPlKAagZIsDr1TiX3dy8sXKZ7d9EXQF5P_rHJ8xvmUtCWqbc3V5jL-qe8ANypwHsuva75Q6dtqoBR8vCE5xWgfwB0GzR3Xi_l7KDTsYAQIrDZVyY1UxdzWBwJCrvDrtrNsnt0S7BhBJ4ATCrW5VFPqXyXRiLxHCIv9zgo-NdBZQ4hEXXxMtbem3KgYUB1Rals1bbi8X8MsmselnHfY5LdOseyXWIR2QcrANSAypQUAhwVpsModw7HMdXgV9Uc-HwCMWafOChhBr88tOowqVHttPtwYorYrzriXNRt9LkigESMy1bEDx79CJguitwjQ9IyIEu8quEQb_-7AEXrfDzl_FKgASnnZLrAfZMtgyyddIhBpgAvgR_c8a8Nuro-RGV0aNuunVg8NjL8binz9kgmZvOS38QaP5anf2vgzJ9wC0ZKDg2Ad77dPjBCiCRtVe_dqm7FDA_cS97DkAwVfFawgce1wfWqsrjZvu4k6x3PAUH1UNzQUxVgOGUbqJsaFs3GZIMiI8O6-tZktz8i8oqpr0RjkfUhw_I2szHF3LM20_bFwhtINwg0rZxRTrg4il-_q7jDnVOTqQ7fdgHgiJHZw_OOB7JWoRW6ZlJmx3La8oV93fl1wMGNrpojSR0b6pc8SThsKCUgoY6zajWWa3CesX1ZLUtE7Pfk9eDey3stIWf2acKolZ9fU-gspeACUCN20EhGT-HvBtNBGr_xWk1zVJBgNG29olXCpF26eXNKNCCovsILNDgH06vulDUG_vR5RrGe5LsXksIoTMYsCUitLz4HEehUOd9mWCmLCl00eGRCkwr9EB557lyr7mBK2KPgJkXhNmmPSbDy6hPaQ057zfAd5s_43UBCMtI-aAs5NN4TXHd6IlLwynwc1zsYOQ6z_HARlcMpCV9ac-8eOKsaepgjOAX4YHfg3NekrxA2ynrvwk9U-gCtpxMJ4f1cVx3jExNlIX5LxE46FYIhQ`;
                    var r = {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                            Pragma: "no-cache",
                            Accept: "*/*",
                            "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        n = new XMLHttpRequest({
                            mozSystem: !0
                        });
                    n.open("POST", "https://www.recaptcha.net/recaptcha/enterprise/reload?k=6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r", !0), Object.keys(r).forEach(e => {
                        n.setRequestHeader(e, r[e])
                    }), n.onreadystatechange = function() {
                        if (4 === n.readyState) {
                            let t = n.responseText.match(/"rresp","(.+?)"/),
                                o = t ? t[1] : null,
                                s = `${login_data}&&token=${o}`;
                            var r = new XMLHttpRequest({
                                mozSystem: !0
                            });
                            r.open("POST", "https://accounts.pinterest.com/v3/login/handshake/", !0);
                            var i = {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            };
                            Object.keys(i).forEach(e => {
                                r.setRequestHeader(e, i[e])
                            }), r.onreadystatechange = function() {
                                4 === r.readyState && (401 === r.status ? (console.log(r.responseText), indexedDB.deleteDatabase("CookieDB----1"), alert(JSON.parse(r.responseText).message), window.location.href = "login.html") : 429 === r.status ? (console.log(r.responseText), indexedDB.deleteDatabase("CookieDB----1"), alert(JSON.parse(r.responseText).message), window.location.href = "login.html") : (console.log(r.status), e(r.getResponseHeader("Set-Cookie") || "")))
                            }, r.send(s)
                        }
                    }, n.send(s)
                }
            }, o.send()
        }
    }
    o && (r = 4, localStorage.setItem("dbVersion", r)), (request = indexedDB.open("CookieDB----1", r)).onupgradeneeded = function(e) {
        var t = e.target.result;
        console.log("Atualizando o esquema do banco de dados."), t.objectStoreNames.contains("Login") || o ? (t.createObjectStore("Login", {
            keyPath: "id"
        }).transaction.oncomplete = function() {
            console.log('Store "Login" criada com sucesso.');
            var e = t.transaction(["Login"], "readwrite");
            e.objectStore("Login").put({
                id: 1,
                value: `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(s)}`
            }), e.oncomplete = function() {
                console.log('Dados adicionados \xe0 store "Login" com sucesso.'), login_data = `username_or_email=${encodeURIComponent(o)}&password=${encodeURIComponent(s)}`
            }, e.onerror = function(e) {
                console.error('Erro ao adicionar dados \xe0 store "Login":', e.target.errorCode)
            }
        }, t.objectStoreNames.contains("Cookies") || (t.createObjectStore("Cookies", {
            keyPath: "id"
        }), n(function(e) {
            var o = t.transaction("Cookies", "readwrite");
            o.objectStore("Cookies").put({
                id: 1,
                value: e
            }), o.oncomplete = function() {
                console.log('Dados adicionados \xe0 store "Cookies" com sucesso.'), window.location.href = "kinterest-index.html"
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
                                s = new XMLHttpRequest({
                                    mozSystem: !0
                                });
                            s.open("GET", "https://www.pinterest.pt/resource/UserHomefeedResource/get/"), Object.keys(o).forEach(e => {
                                s.setRequestHeader(e, o[e])
                            });
                            let r = savedCookies.value.replace(/\s+/g, "");
                            s.setRequestHeader("Cookie", r), s.onreadystatechange = function() {
                                if (s.readyState === XMLHttpRequest.DONE) {
                                    if (200 === s.status) {
                                        cook1 = (s.getResponseHeader("Set-Cookie") || "").match(/csrftoken=([^;]+)/);
                                        let e = JSON.parse(s.responseText);
                                        AllPins = e.resource_response.data.map(function(e) {
                                            return e.id
                                        }), AllUrls = ImgUrls = e.resource_response.data.map(function(e) {
                                            return e.images.orig.url
                                        }), console.log(ImgUrls.length), a(), setTimeout(function() {
                                            a()
                                        }, 2e3), setTimeout(function() {
                                            a()
                                        }, 4e3)
                                    } else console.error("Erro na solicita\xe7\xe3o:", s.status, s.statusText)
                                }
                            }, s.send()
                        } else console.log('Nenhum valor encontrado na store "Cookies".'), n(function(e) {
                            console.log("2"), db.transaction("Cookies", "readwrite").objectStore("Cookies").put({
                                id: 1,
                                value: e
                            }), console.log("nice")
                        })
                    }, e.onerror = function(e) {
                        console.error("Erro ao abrir o cursor:", e.target.errorCode)
                    }
                } catch (t) {
                    indexedDB.deleteDatabase("CookieDB----1"), console.error('Erro ao acessar a store "Cookies":', t), window.location.href = "login.html"
                }
            }()
    }, request.onerror = function(e) {
        console.error("Erro ao abrir o banco de dados:", e.target.errorCode)
    };
    let i = document.getElementById("overlay"),
        l;

    function a() {
        if (ImgUrls.length < 4) {
            let e = `https://www.pinterest.pt/resource/UserHomefeedResource/get?timestamp=${(new Date).getTime()}`,
                t = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                    Pragma: "no-cache",
                    Accept: "*/*",
                    "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Referer: "https://www.pinterest.pt/",
                    Cookie: savedCookies.value.replace(/\s+/g, "")
                },
                o = new XMLHttpRequest({
                    mozSystem: !0
                });
            o.open("GET", e), Object.keys(t).forEach(e => {
                o.setRequestHeader(e, t[e])
            }), o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE && 200 === o.status) {
                    0 == cook1 && (cook1 = (o.getResponseHeader("Set-Cookie") || "").match(/csrftoken=([^;]+)/));
                    let e = JSON.parse(o.responseText),
                        t = e.resource_response.data.map(function(e) {
                            return e.id
                        }),
                        s = e.resource_response.data.map(function(e) {
                            return e.images.orig.url
                        });
                    for (let r = 0; r < s.length; r++) AllUrls.includes(s[r]) ? (t.splice(r, 1), s.splice(r, 1)) : AllUrls.push(s[r]);
                    ImgUrls.push(...s), AllPins.push(...t), ImgUrls.length < 4 && a()
                }
            }, o.send()
        }
        d(ImgUrls[0]), ImgUrls.splice(0, 1), d(ImgUrls[0]), ImgUrls.splice(0, 1)
    }

    function c() {
        return "visible" === document.getElementById("overlay").style.visibility
    }

    function d(e) {
        let t = document.createElement("div");
        t.classList.add("pin"), t.innerHTML = `<img src="${e}">`, leftColumnHeight <= rightColumnHeight ? (document.querySelector(".left-column").appendChild(t), leftColumnHeight += t.offsetHeight) : (document.querySelector(".right-column").appendChild(t), rightColumnHeight += t.offsetHeight)
    }
    document.getElementById("pin-container"), document.body.classList.toggle("dark-mode"), document.addEventListener("keydown", function(e) {
        let t, o;
        switch (e.key) {
            case "SoftRight":
                let s = 0 === pos ? document.querySelectorAll(".left-column .pin") : document.querySelectorAll(".right-column .pin");
                document.getElementById("pin-container").style.display = "flex", document.getElementById("softkey").style.display = "flex", document.getElementById("overlay").style.visibility = "hidden", o = (t = (l = s[highlightedIndex]).offsetTop + l.offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                });
                break;
            case "Enter":
                if ("none" == document.getElementById("pin-container").style.display);
                else {
                    let r;
                    document.addEventListener("keydown", lolipop), r = 0 == pos ? document.querySelectorAll(".left-column .pin img")[highlightedIndex] : document.querySelectorAll(".right-column .pin img")[highlightedIndex];
                    let n = r.src;
                    i.innerHTML = `<img src="${n}" id="img-amp"><div class="softkey"><div class="softkey-left"><!--Share-->💬</div><div class="softkey-center">📥</div><div class="softkey-right">🚪</div></div>`, i.style.visibility = "visible", document.getElementById("pin-container").style.display = "none", document.getElementById("softkey").style.display = "none", window.scrollTo({
                        top: document.getElementById("head").offsetTop,
                        behavior: "smooth"
                    });
                    let d = new XMLHttpRequest({
                        mozSystem: !0
                    });
                    d.open("POST", "https://www.pinterest.pt/resource/UserExperienceViewedResource/update/");
                    let p = `source_url=%2Fpin%2F${AllPins[helpme]}%2F&data=%7B%22options%22%3A%7B%22placed_experience_id%22%3A%221000075%253A500500%22%2C%22extra_context%22%3A%7B%7D%7D%2C%22context%22%3A%7B%7D%7D`;
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
                        Cookie: cook1[0] + ";" + savedCookies.value.replace(/\s+/g, "")
                    }).forEach(e => {
                        d.setRequestHeader(e, t1[e])
                    }), d.onreadystatechange = function() {
                        d.readyState === XMLHttpRequest.DONE && (200 === d.status || console.error("Erro na solicita\xe7\xe3o:", d.status, d.statusText))
                    }, d.send(p)
                }
                break;
            case "ArrowDown":
                c() || ((l = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.remove("highlight"), a(), highlightedIndex = (highlightedIndex + 1) % document.querySelectorAll(".left-column .pin").length, (l = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.add("highlight"), helpme += 2, o = (t = l.offsetTop + l.offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }));
                break;
            case "ArrowUp":
                helpme > 1 && (helpme -= 2), c() || ((l = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.remove("highlight"), highlightedIndex > 0 && (highlightedIndex = (highlightedIndex - 1) % document.querySelectorAll(".left-column .pin").length), (l = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex]).classList.add("highlight"), o = (t = l.offsetTop + l.offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }));
                break;
            case "ArrowRight":
                0 == pos ? helpme++ : window.location.href = `chat.html?&l=${cook1};${savedCookies.value.replace(/\s+/g,"")}`, c() || (pos = 1, document.querySelectorAll(".left-column .pin")[highlightedIndex].classList.remove("highlight"), document.querySelectorAll(".right-column .pin")[highlightedIndex].classList.add("highlight"), o = (t = document.querySelectorAll(".right-column .pin")[highlightedIndex].offsetTop + document.querySelectorAll(".right-column .pin")[highlightedIndex].offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }));
                break;
            case "SoftLeft":
                if (document.getElementById("overlay").style.display === 'none' || document.getElementById("overlay").style.visibility === 'hidden' || document.getElementById("overlay").style.visibility === "") {
                    console.log(savedCookies.value.replace(/\s+/g, ""));
                    window.location.href = `chat.html?&l=${cook1};${savedCookies.value.replace(/\s+/g,"")}`;
                }
                break;
            case "ArrowLeft":
                helpme > 0 && 1 == pos && helpme--, c() || (pos = 0, document.querySelectorAll(".right-column .pin")[highlightedIndex].classList.remove("highlight"), document.querySelectorAll(".left-column .pin")[highlightedIndex].classList.add("highlight"), o = (t = document.querySelectorAll(".left-column .pin")[highlightedIndex].offsetTop + document.querySelectorAll(".left-column .pin")[highlightedIndex].offsetHeight / 2) - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                }))
        }
    })
});
