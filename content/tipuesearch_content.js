var tipuesearch = {"pages": [{'title': '期末報告', 'text': '50733144\xa0 高沁安', 'tags': '', 'url': '期末報告.html'}, {'title': '近端配置與管理', 'text': 'windows network setting \n \n 指令ipconfig all \n \n 指令nslookup \n \n chrome proxy \n \n firefox proxy \n mde.tw \n \n github.com \n \n \n portable programming system \n protablegit - remove helper = manager \n login github add repository - README.md \n git clone self-repo and CMSimfly \n y:\\home\\.gitcongit \n git config --global user.name"50733144" git config --global user.email"50733144@gm.nfu.edu.tw" git config --global http.proxy  https://140.130.17.3:3128 \n git add . \n git push \n Github Pages - setting, url \n local python wsgi.py \n', 'tags': '', 'url': '近端配置與管理.html'}, {'title': 'Game 1', 'text': '\n \n \n  Your browser doesn\'t support the HTML5 element canvas.      Throw dice  \n \n Stage:   Point:   Outcome:  \n \n <script type="text/javascript">// <![CDATA[\nvar cwidth = 400;\n    var cheight = 300;\n    var dicex = 50;\n    var dicey = 50;\n    var dicewidth = 100;\n    var diceheight = 100;\n    var dotrad = 6;\n    var ctx;\n    var dx;\n    var dy;\n    var firstturn = true;\n    var point;\nfunction throwdice() {\n    var sum;\n    var ch = 1+Math.floor(Math.random()*6);\n    sum = ch;\n    dx = dicex;\n    dy = dicey;\n    drawface(ch);\n    dx = dicex + 150;\n    ch=1 + Math.floor(Math.random()*6);\n    sum += ch;\n    drawface(ch);\n    if (firstturn) {\n        switch(sum) {\n            case 7:\n            case 11:\n              document.f.outcome.value="You win!";\n              break;\n            case 2:\n            case 3:\n            case 12:\n              document.f.outcome.value="You lose!";\n              break;\n            default:\n              point = sum;\n              document.f.pv.value=point;\n              firstturn = false;\n              document.f.stage.value="Need follow-up throw.";\n              document.f.outcome.value="   ";\n        }\n    }\n    else {\n        switch(sum) {\n        case point:\n           document.f.outcome.value="You win!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n           break;\n        case 7:\n           document.f.outcome.value="You lose!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n        }\n            }\n}\nfunction drawface(n) {\n  ctx = document.getElementById(\'canvas\').getContext(\'2d\');  \n  ctx.lineWidth = 5;\n  ctx.clearRect(dx,dy,dicewidth,diceheight);\n  ctx.strokeRect(dx,dy,dicewidth,diceheight)\n  var dotx;\n  var doty;\n  ctx.fillStyle = "#009966";\n    switch(n) {\n        case 1:\n         draw1();\n         break;\n        case 2:\n         draw2();\n         break;\n        case 3:\n         draw2();\n         draw1();\n         break;\n        case 4:\n         draw4();\n         break;\n        case 5:\n         draw4();\n         draw1();\n         break;\n        case 6:\n         draw4();\n         draw2mid();\n         break;\n         \n    }\n}\nfunction draw1() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + .5*dicewidth;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw2() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw4() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + diceheight-3*dotrad;  //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+ 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill(); \n}\nfunction draw2mid() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy + .5*diceheight; //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\n// ]]></script>\n<p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas> <br> <button onclick="throwdice();">Throw dice </button></p>\n<form id="f" name="f">Stage: <input name="stage" type="text" value="First Throw"> Point: <input name="pv" type="text" value="   "> Outcome: <input name="outcome" type="text" value="     "></form>\n \n \n \n \n', 'tags': '', 'url': 'Game 1.html'}, {'title': '期中報告', 'text': 'https://www.youtube.com/watch?v=xW0RLh6m1-g&t=7s \n \n \n \n ------------------------------------------------------------------------------------------------------------- \n \n \n 影片嵌入 \n \n 複製 \n \n 貼上就可以顯示出來了 \n', 'tags': '', 'url': '期中報告.html'}, {'title': 'ROC flag', 'text': '\n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'ROC flag.html'}, {'title': '虎科VPN設定', 'text': '依您的作業系統版本下載使用者端程式 \n \n 程式下載完成後，點擊兩下開始安裝 \n \n 進行身份驗證(可由Juniper Network Connect或IE，請擇一進行身分認證) \n 點選搜尋" > 輸入程式名稱為Network Connect> 點擊Network Connect \n \n 執行程式後，於"登入頁面"輸入網址 :\xa0 https://sslvpn9.twaren.net/nfu \xa0 ，後按下"執行" \n 輸入使用者帳號密碼，請填入校務行政AD帳號及密碼。請完整填寫您在校務行政AD帳號以及密碼，否則國網中心找不到對象進行身份確認\xa0 ！(例: 員工編號或學號@ctx10.nfu.edu.tw） \n \n 出現"設定控制-警告"視窗，按下"是" \n \n 螢幕右下角顯示"已連接"，表示已成功連線 \n \n 請在IE瀏覽器上按下右鍵 使用"以系統管理員身分執行" \n 登入頁面請輸入：\xa0 https://sslvpn9.twaren.net/nfu ，按下「執行」，會出現帳號與密碼登入欄位。 請填入虎尾科技大學的校務行政AD帳號及密碼，並請輸入下方驗證碼，進行身份確認。 請完整填寫您在虎尾科技大學的校務行政AD帳號以及密碼 ，否則國網中心找不到對象進行身份確認！ \n (例: \xa0員工編號或學號@ctx10.nfu.edu.tw ） 填寫完畢以後按下Login登入就會開始進行身份確認，請稍後一段時間。 \n \n \n 點選「開始」 \n \n 點選「是」，SSL VPN程式安裝完畢後，就會開始跟你的電腦建立連線，請稍後一段時間 \n \n \n VPN 連線建立完成 \n \n 連線建立完成後，在電腦的工作列上(桌面右下角)，會出現 Juniper Network Connect VPN Client的圖示，表示VPN連線已經成功的建立在你的電腦上了。點擊圖示兩下，即可查看連線資訊。 (註:指派IP:一定為120.113.100.XX) 。 到此，您的SSL-VPN連線已經成功的建立，不管是在家裡還是出差，您的電腦就像在學校使用一般，您可以自由的使用虎尾科技大學自己擁有的網路資源。 \n \n \n \n \n \n 參考資料 https://nfucc.nfu.edu.tw/index.php/zh/download/download-network/ssl-vpn', 'tags': '', 'url': '虎科VPN設定.html'}, {'title': '校園授權軟體下載專區', 'text': '可以到學校的電子計算機中心網頁\xa0 \n \n 點擊校園授權軟體下載 \n \n 這裡就可以找自己要下載的東西 \n \n Windows10下載的地方(要使用校園IP) \n', 'tags': '', 'url': '校園授權軟體下載專區.html'}, {'title': 'ShareX', 'text': '到USB裡面找ShareX(之前下載的) \n \n ctrl+  P rint\xa0\xa0 Scr\xa0Sys Rq - 截圖 \n Shift+ \xa0 P rint\xa0\xa0 Scr\xa0Sys Rq - 錄影(結束按一樣的按鍵) \n', 'tags': '', 'url': 'ShareX.html'}, {'title': 'Ubuntu', 'text': '到ubuntu下載 \n \n 點擊Ubuntu Server \n \n 下載 \n \n ------------------------------------------------------------------------------------------------------------- \n 開啟VirtualBox選擇ubuntu的檔案', 'tags': '', 'url': 'Ubuntu.html'}, {'title': '虛擬主機', 'text': '開啟Oracle VM VirtualBox \n \n VirtualBox設定\xa0 \xa0 \n \xa01. 64位元 \n \n 2. 設定為4096MB \n \n 3. \n \n 4.使用VMDK 在window10的電腦機[上都可以使用 \n \n 5. \n 到setting \n (1)設定介面顯示卡 \n (2)使用橋接(Bridged Adapter) \n \n 6. 開機完成 \n \n 結束使用sudo halt指令 \n ------------------------------------------------------------------------------------------------------------- \n ifconfig使用在VirtuleBox \n ipconfig all使用在指令列 \n 兩者指令對應 \n \n', 'tags': '', 'url': '虛擬主機.html'}, {'title': 'Game 2', 'text': 'welcome \n \n \n Try it \n \n \n <p><button onclick="myFunction()">Try it</button></p>\n<p id="demo"></p>\n<script>// <![CDATA[\nfunction myFunction() {\n\xa0\xa0document.getElementById("demo").innerHTML = Math.floor(Math.random()*10);\n}\n// ]]></script> \n', 'tags': '', 'url': 'Game 2.html'}]};