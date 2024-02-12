self.addEventListener('message', function (e) {
	console.log(e.data.type);
  if (e.data.type === 'load_more') {
		//console.log(e.data.cookies);
		load_pins(e.data.cookies)
  }
  else if (e.data.type === 'lazyLoad') {
		lazyLoad(e.data.imgs)
  }
});
function load_pins (savedCookies /*cook1,*/ ) {
				var ImgUrls = [];
				AllUrls = [];
				var leftColumnHeight, rightColumnHeight = 0;				
				let e = `https://www.pinterest.pt/resource/UserHomefeedResource/get/`,
                t = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                    Pragma: "no-cache",
                    Accept: "*/*",
                    "Accept-Language": "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Referer: "https://www.pinterest.pt/",
                    Cookie: savedCookies.value.replace(/\s+/g, "").split(';')[0]
                },
                o = new XMLHttpRequest({
                    mozSystem: !0
                });
				
            o.open("GET", e), Object.keys(t).forEach((e => {
                o.setRequestHeader(e, t[e])
            })), o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE && 200 === o.status) {
                    //0 == cook1 && (cook1 = (o.getResponseHeader("Set-Cookie") || "").match(/csrftoken=([^;]+)/));
                    let e = JSON.parse(o.responseText),
                        t = e.resource_response.data.map((function(e) {
							//console.log(e.id);
                            return e.id
                        })),
                        n = e.resource_response.data.map((function(e) {
                            return  e.images["170x"].url
                        }));
                    for (let e = 0; e < n.length; e++) { 
						AllUrls.push(n[e]);
						};
						console.log(n);
						ImgUrls.push(...t);
						//console.log(ImgUrls);
				self.postMessage({AllUrls: AllUrls, ImgUrls:ImgUrls});
                };
            };
			o.send();
			
        }

function lazy_loader(lazyImages) {		


}

// Adicione um listener de rolagem para verificar quando as imagens se tornam visíveis

        //d(ImgUrls[0]), ImgUrls.splice(0, 1), d(ImgUrls[0]), ImgUrls.splice(0, 1)
