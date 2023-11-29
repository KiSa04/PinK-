let highlightedIndex = 0,
    leftColumnHeight = 0,
    rightColumnHeight = 0,
    pos = 0;
var request;
let savedCookies, ImgUrls, login_data, AllUrls;
window.addEventListener("DOMContentLoaded", (function() {
    function e(e) {
        return new URLSearchParams(window.location.search).get(e)
    }
    var t = e("email"),
        o = e("pass"),
        n = localStorage.getItem("dbVersion") || 3;

    function i(e) {
        const t = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
            Pragma: "no-cache",
            Accept: "*/*"
        };
        var o = new XMLHttpRequest({
            mozSystem: !0
        });
        o.open("GET", "https://www.recaptcha.net/recaptcha/enterprise/anchor?ar=1&k=6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r&co=aHR0cHM6Ly93d3cucGludGVyZXN0LnB0OjQ0Mw..&hl=pt-PT&v=-QbJqHfGOUB8nuVRLvzFLVed&size=invisible&cb=xzg9cq7sed1h"), Object.keys(t).forEach((e => {
            o.setRequestHeader(e, t[e])
        })), o.onreadystatechange = function() {
            if (4 === o.readyState && 200 === o.status) {
                var t = o.responseText.match(/value="(.+?)"/);
                const r = `v=-QbJqHfGOUB8nuVRLvzFLVed&reason=q&c=${t?t[1]:null}&k=-QbJqHfGOUB8nuVRLvzFLVed&co=aHR0cHM6Ly93d3cucGludGVyZXN0LnB0OjQ0Mw..&hl=en&size=invisible&chr=%5B89%2C64%2C27%5D&vh=13599012192&bg=!q62grYxHRvVxjUIjSFNd0mlvrZ-iCgIHAAAB6FcAAAANnAkBySdqTJGFRK7SirleWAwPVhv9-XwP8ugGSTJJgQ46-0IMBKN8HUnfPqm4sCefwxOOEURND35prc9DJYG0pbmg_jD18qC0c-lQzuPsOtUhHTtfv3--SVCcRvJWZ0V3cia65HGfUys0e1K-IZoArlxM9qZfUMXJKAFuWqZiBn-Qi8VnDqI2rRnAQcIB8Wra6xWzmFbRR2NZqF7lDPKZ0_SZBEc99_49j07ISW4X65sMHL139EARIOipdsj5js5JyM19a2TCZJtAu4XL1h0ZLfomM8KDHkcl_b0L-jW9cvAe2K2uQXKRPzruAvtjdhMdODzVWU5VawKhpmi2NCKAiCRUlJW5lToYkR_X-07AqFLY6qi4ZbJ_sSrD7fCNNYFKmLfAaxPwPmp5Dgei7KKvEQmeUEZwTQAS1p2gaBmt6SCOgId3QBfF_robIkJMcXFzj7R0G-s8rwGUSc8EQzT_DCe9SZsJyobu3Ps0-YK-W3MPWk6a69o618zPSIIQtSCor9w_oUYTLiptaBAEY03NWINhc1mmiYu2Yz5apkW_KbAp3HD3G0bhzcCIYZOGZxyJ44HdGsCJ-7ZFTcEAUST-aLbS-YN1AyuC7ClFO86CMICVDg6aIDyCJyIcaJXiN-bN5xQD_NixaXatJy9Mx1XEnU4Q7E_KISDJfKUhDktK5LMqBJa-x1EIOcY99E-eyry7crf3-Hax3Uj-e-euzRwLxn2VB1Uki8nqJQVYUgcjlVXQhj1X7tx4jzUb0yB1TPU9uMBtZLRvMCRKvFdnn77HgYs5bwOo2mRECiFButgigKXaaJup6NM4KRUevhaDtnD6aJ8ZWQZTXz_OJ74a_OvPK9eD1_5pTG2tUyYNSyz-alhvHdMt5_MAdI3op4ZmcvBQBV9VC2JLjphDuTW8eW_nuK9hN17zin6vjEL8YIm_MekB_dIUK3T1Nbyqmyzigy-Lg8tRL6jSinzdwOTc9hS5SCsPjMeiblc65aJC8AKmA5i80f-6Eg4BT305UeXKI3QwhI3ZJyyQAJTata41FoOXl3EF9Pyy8diYFK2G-CS8lxEpV7jcRYduz4tEPeCpBxU4O_KtM2iv4STkwO4Z_-c-fMLlYu9H7jiFnk6Yh8XlPE__3q0FHIBFf15zVSZ3qroshYiHBMxM5BVQBOExbjoEdYKx4-m9c23K3suA2sCkxHytptG-6yhHJR3EyWwSRTY7OpX_yvhbFri0vgchw7U6ujyoXeCXS9N4oOoGYpS5OyFyRPLxJH7yjXOG2Play5HJ91LL6J6qg1iY8MIq9XQtiVZHadVpZVlz3iKcX4vXcQ3rv_qQwhntObGXPAGJWEel5OiJ1App7mWy961q3mPg9aDEp9VLKU5yDDw1xf6tOFMwg2Q-PNDaKXAyP_FOkxOjnu8dPhuKGut6cJr449BKDwbnA9BOomcVSztEzHGU6HPXXyNdZbfA6D12f5lWxX2B_pobw3a1gFLnO6mWaNRuK1zfzZcfGTYMATf6d7sj9RcKNS230XPHWGaMlLmNxsgXkEN7a9PwsSVwcKdHg_HU4vYdRX6vkEauOIwVPs4dS7yZXmtvbDaX1zOU4ZYWg0T42sT3nIIl9M2EeFS5Rqms_YzNp8J-YtRz1h5RhtTTNcA5jX4N-xDEVx-vD36bZVzfoMSL2k85PKv7pQGLH-0a3DsR0pePCTBWNORK0g_RZCU_H898-nT1syGzNKWGoPCstWPRvpL9cnHRPM1ZKemRn0nPVm9Bgo0ksuUijgXc5yyrf5K49UU2J5JgFYpSp7aMGOUb1ibrj2sr-D63d61DtzFJ2mwrLm_KHBiN_ECpVhDsRvHe5iOx_APHtImevOUxghtkj-8RJruPgkTVaML2MEDOdL_UYaldeo-5ckZo3VHss7IpLArGOMTEd0bSH8tA8CL8RLQQeSokOMZ79Haxj8yE0EAVZ-k9-O72mmu5I0wH5IPgapNvExeX6O1l3mC4MqLhKPdOZOnTiEBlSrV4ZDH_9fhLUahe5ocZXvXqrud9QGNeTpZsSPeIYubeOC0sOsuqk10sWB7NP-lhifWeDob-IK1JWcgFTytVc99RkZTjUcdG9t8prPlKAagZIsDr1TiX3dy8sXKZ7d9EXQF5P_rHJ8xvmUtCWqbc3V5jL-qe8ANypwHsuva75Q6dtqoBR8vCE5xWgfwB0GzR3Xi_l7KDTsYAQIrDZVyY1UxdzWBwJCrvDrtrNsnt0S7BhBJ4ATCrW5VFPqXyXRiLxHCIv9zgo-NdBZQ4hEXXxMtbem3KgYUB1Rals1bbi8X8MsmselnHfY5LdOseyXWIR2QcrANSAypQUAhwVpsModw7HMdXgV9Uc-HwCMWafOChhBr88tOowqVHttPtwYorYrzriXNRt9LkigESMy1bEDx79CJguitwjQ9IyIEu8quEQb_-7AEXrfDzl_FKgASnnZLrAfZMtgyyddIhBpgAvgR_c8a8Nuro-RGV0aNuunVg8NjL8binz9kgmZvOS38QaP5anf2vgzJ9wC0ZKDg2Ad77dPjBCiCRtVe_dqm7FDA_cS97DkAwVfFawgce1wfWqsrjZvu4k6x3PAUH1UNzQUxVgOGUbqJsaFs3GZIMiI8O6-tZktz8i8oqpr0RjkfUhw_I2szHF3LM20_bFwhtINwg0rZxRTrg4il-_q7jDnVOTqQ7fdgHgiJHZw_OOB7JWoRW6ZlJmx3La8oV93fl1wMGNrpojSR0b6pc8SThsKCUgoY6zajWWa3CesX1ZLUtE7Pfk9eDey3stIWf2acKolZ9fU-gspeACUCN20EhGT-HvBtNBGr_xWk1zVJBgNG29olXCpF26eXNKNCCovsILNDgH06vulDUG_vR5RrGe5LsXksIoTMYsCUitLz4HEehUOd9mWCmLCl00eGRCkwr9EB557lyr7mBK2KPgJkXhNmmPSbDy6hPaQ057zfAd5s_43UBCMtI-aAs5NN4TXHd6IlLwynwc1zsYOQ6z_HARlcMpCV9ac-8eOKsaepgjOAX4YHfg3NekrxA2ynrvwk9U-gCtpxMJ4f1cVx3jExNlIX5LxE46FYIhQ`;
                var n = {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                        Pragma: "no-cache",
                        Accept: "*/*",
                        "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    i = new XMLHttpRequest({
                        mozSystem: !0
                    });
                i.open("POST", "https://www.recaptcha.net/recaptcha/enterprise/reload?k=6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r", !0), Object.keys(n).forEach((e => {
                    i.setRequestHeader(e, n[e])
                })), i.onreadystatechange = function() {
                    if (4 === i.readyState) {
                        const n = /"rresp","(.+?)"/,
                            r = i.responseText.match(n),
                            s = r ? r[1] : null,
                            l = "https://accounts.pinterest.com/v3/login/handshake/",
                            c = `${login_data}&&token=${s}`;
                        var t = new XMLHttpRequest({
                            mozSystem: !0
                        });
                        t.open("POST", l, !0);
                        var o = {
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        };
                        Object.keys(o).forEach((e => {
                            t.setRequestHeader(e, o[e])
                        })), t.onreadystatechange = function() {
                            if (4 === t.readyState) {
                                var o = t.getResponseHeader("Set-Cookie") || "";
                                e(o)
                            }
                        }, t.send(c)
                    }
                }, i.send(r)
            }
        }, o.send()
    }
    t && (n = 4, localStorage.setItem("dbVersion", n)), (request = indexedDB.open("CookieDB----1", n)).onupgradeneeded = function(e) {
        var n = e.target.result;
        console.log("Atualizando o esquema do banco de dados."), n.objectStoreNames.contains("Login") || t ? (n.createObjectStore("Login", {
            keyPath: "id"
        }).transaction.oncomplete = function() {
            console.log('Store "Login" criada com sucesso.');
            var e = n.transaction(["Login"], "readwrite");
            e.objectStore("Login").add({
                id: 1,
                value: `username_or_email=${encodeURIComponent(t)}&password=${encodeURIComponent(o)}`
            }), e.oncomplete = function() {
                console.log('Dados adicionados à store "Login" com sucesso.'), login_data = `username_or_email=${encodeURIComponent(t)}&password=${encodeURIComponent(o)}`
            }, e.onerror = function(e) {
                console.error('Erro ao adicionar dados à store "Login":', e.target.errorCode)
            }
        }, n.objectStoreNames.contains("Cookies") || (n.createObjectStore("Cookies", {
            keyPath: "id"
        }), i((function(e) {
            var t = n.transaction("Cookies", "readwrite");
            t.objectStore("Cookies").add({
                id: 1,
                value: e
            }), t.oncomplete = function() {
                console.log('Dados adicionados à store "Cookies" com sucesso.'), window.location.href = "kinterest-index.html"
            }
        })))) : window.location.href = "login.html"
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
                                    Referer: "https://www.pinterest.pt/"
                                },
                                n = new XMLHttpRequest({
                                    mozSystem: !0
                                });
                            n.open("GET", "https://www.pinterest.pt/resource/UserHomefeedResource/get/"), Object.keys(o).forEach((e => {
                                n.setRequestHeader(e, o[e])
                            }));
                            let e = savedCookies.value.replace(/\s+/g, "");
                            console.log(e), n.setRequestHeader("Cookie", e), n.onreadystatechange = function() {
                                if (n.readyState === XMLHttpRequest.DONE)
                                    if (200 === n.status) {
                                        n.responseText;
                                        ImgUrls = n.responseText.match(/https:\/\/i.pinimg.com\/originals\/(.+?).jpg/g) || [], AllUrls = ImgUrls, console.log(ImgUrls.length), l(), setTimeout((function() {
                                            l()
                                        }), 2e3), setTimeout((function() {
                                            l()
                                        }), 4e3)
                                    } else console.error("Erro na solicitação:", n.status, n.statusText)
                            }, n.send()
                        } else console.log('Nenhum valor encontrado na store "Cookies".'), i((function(e) {
                            console.log("2"), db.transaction("Cookies", "readwrite").objectStore("Cookies").add({
                                id: 1,
                                value: e
                            }), console.log("nice")
                        }))
                    }, e.onerror = function(e) {
                        console.error("Erro ao abrir o cursor:", e.target.errorCode)
                    }
                } catch (e) {
                    console.error('Erro ao acessar a store "Cookies":', e)
                }
            }()
    }, request.onerror = function(e) {
        console.error("Erro ao abrir o banco de dados:", e.target.errorCode)
    };
    const r = document.getElementById("overlay");
    let s;

    function l() {
        if (ImgUrls.length < 4) {
            const e = `https://www.pinterest.pt/resource/UserHomefeedResource/get?timestamp=${(new Date).getTime()}`,
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
            o.open("GET", e), Object.keys(t).forEach((e => {
                o.setRequestHeader(e, t[e])
            })), o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE && 200 === o.status) {
                    const e = /https:\/\/i.pinimg.com\/originals\/(.+?).jpg/g,
                        t = o.responseText.match(e) || [];
                    for (let e = 0; e < t.length; e++) AllUrls.includes(t[e]) ? (console.log(t[e]), t.splice(e, 1)) : AllUrls.push(t[e]);
                    ImgUrls.push(...t), ImgUrls.length < 4 && l()
                }
            }, o.send()
        }
        c(ImgUrls[0]), ImgUrls.splice(0, 1), c(ImgUrls[0]), ImgUrls.splice(0, 1)
    }

    function c(e) {
        const t = document.createElement("div");
        t.classList.add("pin"), t.innerHTML = `<img src="${e}">`, leftColumnHeight <= rightColumnHeight ? (document.querySelector(".left-column").appendChild(t), leftColumnHeight += t.offsetHeight) : (document.querySelector(".right-column").appendChild(t), rightColumnHeight += t.offsetHeight)
    }
    document.getElementById("pin-container"), document.body.classList.toggle("dark-mode"), document.addEventListener("keydown", (function(e) {
        let t, o;
        switch (e.key) {
            case "SoftRight":
                document.getElementById("pin-container").style.display = "flex", document.getElementById("overlay").style.visibility = "hidden", t = s[highlightedIndex].offsetTop + s.offsetHeight / 2, o = t - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                });
                break;
            case "Enter":
                let e;
                e = 0 == pos ? document.querySelectorAll(".left-column .pin img")[highlightedIndex] : document.querySelectorAll(".right-column .pin img")[highlightedIndex];
                const n = e.src;
                r.innerHTML = `<img src="${n}" id="img-amp">`, r.style.visibility = "visible", document.getElementById("pin-container").style.display = "none", window.scrollTo({
                    top: document.getElementById("head").offsetTop,
                    behavior: "smooth"
                });
                break;
            case "ArrowDown":
                s = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex], s.classList.remove("highlight"), l(), highlightedIndex = (highlightedIndex + 1) % document.querySelectorAll(".left-column .pin").length, s = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex], s.classList.add("highlight"), t = s.offsetTop + s.offsetHeight / 2, o = t - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                });
                break;
            case "ArrowUp":
                s = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex], s.classList.remove("highlight"), highlightedIndex > 0 && (highlightedIndex = (highlightedIndex - 1) % document.querySelectorAll(".left-column .pin").length), s = 0 == pos ? document.querySelectorAll(".left-column .pin")[highlightedIndex] : document.querySelectorAll(".right-column .pin")[highlightedIndex], s.classList.add("highlight"), t = s.offsetTop + s.offsetHeight / 2, o = t - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                });
                break;
            case "ArrowRight":
                pos = 1, document.querySelectorAll(".left-column .pin")[highlightedIndex].classList.remove("highlight"), document.querySelectorAll(".right-column .pin")[highlightedIndex].classList.add("highlight"), t = document.querySelectorAll(".right-column .pin")[highlightedIndex].offsetTop + document.querySelectorAll(".right-column .pin")[highlightedIndex].offsetHeight / 2, o = t - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                });
                break;
            case "ArrowLeft":
                pos = 0, document.querySelectorAll(".right-column .pin")[highlightedIndex].classList.remove("highlight"), document.querySelectorAll(".left-column .pin")[highlightedIndex].classList.add("highlight"), t = document.querySelectorAll(".left-column .pin")[highlightedIndex].offsetTop + document.querySelectorAll(".left-column .pin")[highlightedIndex].offsetHeight / 2, o = t - window.innerHeight / 2, window.scrollTo({
                    top: o,
                    behavior: "smooth"
                })
        }
    }))
}));
