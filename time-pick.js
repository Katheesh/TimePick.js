var TimePick = (function () {

    'use strict';
 
    var Constructor = function (element) {

        var globalvar = {};
        globalvar.set_hour = {};
        globalvar.set_minute = {};
        globalvar.set_second = {};

        if(document.getElementById("TimePickStyleSheet") == null) {
            MakeStyle();
        }

        var unique_id = RandomString(5);

        if(document.getElementById("TimePickBackgroundOverlay") == null) {
            let overlaydiv = document.createElement("div");
            overlaydiv.id= "TimePickBackgroundOverlay";
            document.body.insertBefore(overlaydiv, document.body.firstChild);
        }
        
        globalvar.elemets = document.querySelectorAll(element);
 
        for (var i = 0; i < globalvar.elemets.length; i++) {
            let timepickerbtn = globalvar.elemets[i];
            let TIMESARRAY = {};
            globalvar.elemets[i].setAttribute("TimePick", "input_" + unique_id + '_' + i);
            timepickerbtn.insertAdjacentHTML("afterend", `<button class="TimePick_BTN"><svg class="TimePick_ICON" id="${unique_id + '_' + i}" height="20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            
            
                <div class="TimePick_POPUP" id="popup_${unique_id + '_' + i}">
                    <div class="hour">
                        <div class="adjustbtn uparrow" data='{"type": "hour", "action": "up", "id":"${unique_id + '_' + i}"}'><svg fill="#DDD" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.7 -30.7 573.13 573.13" xml:space="preserve" stroke="#DDD" stroke-width="30"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path> </g> </g> </g></svg>
                        </div>
                        <div id="label_hour_${unique_id + '_' + i}" class="label">00</div>
                        <div class="adjustbtn downarrow" data='{"type": "hour", "action": "down", "id":"${unique_id + '_' + i}"}'>
                        <svg fill="#DDD" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.7 -30.7 573.13 573.13" xml:space="preserve" stroke="#DDD" stroke-width="30" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path> </g> </g> </g></svg></div>
                    </div>
                    <div class="minute">
                        <div class="adjustbtn uparrow" data='{"type": "minute", "action": "up", "id":"${unique_id + '_' + i}"}'><svg fill="#DDD" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.7 -30.7 573.13 573.13" xml:space="preserve" stroke="#DDD" stroke-width="30"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path> </g> </g> </g></svg></div>
                        <div id="label_minute_${unique_id + '_' + i}" class="label">00</div>
                        <div class="adjustbtn downarrow" data='{"type": "minute", "action": "down", "id":"${unique_id + '_' + i}"}'><svg fill="#DDD" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.7 -30.7 573.13 573.13" xml:space="preserve" stroke="#DDD" stroke-width="30" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path> </g> </g> </g></svg></div>
                    </div>
                    <div class="second">
                        <div class="adjustbtn uparrow" data='{"type": "second", "action": "up", "id":"${unique_id + '_' + i}"}'><svg fill="#DDD" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.7 -30.7 573.13 573.13" xml:space="preserve" stroke="#DDD" stroke-width="30"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path> </g> </g> </g></svg></div>
                        <div id="label_second_${unique_id + '_' + i}" class="label">00</div>
                        <div class="adjustbtn downarrow" data='{"type": "second", "action": "down", "id":"${unique_id + '_' + i}"}'><svg fill="#DDD" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-30.7 -30.7 573.13 573.13" xml:space="preserve" stroke="#DDD" stroke-width="30" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path> </g> </g> </g></svg></div>
                    </div>
                    <div class="ampm"></div>
                </div>
            </button>`);

            if(globalvar.elemets[i].value){
                let previustimestr = globalvar.elemets[i].value;
                let previustimes = previustimestr.split(":");
                let uniquecode = `${unique_id + '_' + i}`;

                document.getElementById('label_hour_' + uniquecode).innerText = previustimes[0];
                document.getElementById('label_minute_' + uniquecode).innerText = previustimes[1];
                document.getElementById('label_second_' + uniquecode).innerText = previustimes[2];
            }
            else {
                globalvar.elemets[i].setAttribute("value", "00:00:00");
            }
            
        }

        let timepickpopupbtn = document.getElementsByClassName("TimePick_ICON");
        for(let i = 0; i < timepickpopupbtn.length; i++) {
            timepickpopupbtn[i].onclick = function () {
                let currID = "popup_" + timepickpopupbtn[i].id;
                if(document.getElementById(currID).style.display == "flex"){
                    document.getElementById(currID).style.display = "none"
                    return;
                }
                document.getElementById(currID).style.display = "flex" 
            }
        }

        document.onclick = function(e){
            if(e.target.id == 'TimePickBackgroundOverlay'){
                let TimePick_POPUP = document.getElementsByClassName("TimePick_POPUP");
                for(let i = 0; i < TimePick_POPUP.length; i++) {
                    TimePick_POPUP[i].style.display = "none";
                }
            }
        };

        let adjustbtn = document.getElementsByClassName("adjustbtn");
        
        for(let i = 0; i < adjustbtn.length; i++) {

            adjustbtn[i].onclick = function () {
            let data = JSON.parse(adjustbtn[i].getAttribute("data"));

            let curr_hour = document.getElementById('label_hour_' + data.id).innerText;
            let curr_minute = document.getElementById('label_minute_' + data.id).innerText;
            let curr_second = document.getElementById('label_second_' + data.id).innerText;

            if (curr_hour != "00") {
                globalvar.set_hour[data.id] = parseInt(curr_hour);
            }

            if (curr_minute != "00") {
                globalvar.set_minute[data.id] = parseInt(curr_minute);
            }

            if (curr_second != "00") {
                globalvar.set_second[data.id] = parseInt(curr_second);
            }
            

            if(data.type == 'hour' && data.action == 'up'){
                globalvar.set_hour[data.id] =  (globalvar.set_hour[data.id]) ?  (globalvar.set_hour[data.id]  + 1) : 0 + 1;
                globalvar.set_hour[data.id] = (globalvar.set_hour[data.id] == 24) ? 0 : globalvar.set_hour[data.id];
            }
            if(data.type == 'hour' && data.action == 'down'){
                globalvar.set_hour[data.id] = (globalvar.set_hour[data.id]) ?  (globalvar.set_hour[data.id]  - 1) : -1;
                globalvar.set_hour[data.id] = (globalvar.set_hour[data.id] == -1) ? 23 : globalvar.set_hour[data.id];
            }

            if(data.type == 'minute' && data.action == 'up'){
                globalvar.set_minute[data.id] = (globalvar.set_minute[data.id]) ?  (globalvar.set_minute[data.id] + 1) : 0 + 1;
                globalvar.set_minute[data.id] = (globalvar.set_minute[data.id] == 60) ? 0 : globalvar.set_minute[data.id];
            }
            if(data.type == 'minute' && data.action == 'down'){
                globalvar.set_minute[data.id] = (globalvar.set_minute[data.id]) ?  (globalvar.set_minute[data.id]  - 1) : -1;
                globalvar.set_minute[data.id] = (globalvar.set_minute[data.id] == -1) ? 59 : globalvar.set_minute[data.id];
            }

            if(data.type == 'second' && data.action == 'up'){
                globalvar.set_second[data.id] = (globalvar.set_second[data.id]) ?  (globalvar.set_second[data.id] + 1) : 0 + 1;
                globalvar.set_second[data.id] = (globalvar.set_second[data.id] == 60) ? 0 : globalvar.set_second[data.id];
            }
            if(data.type == 'second' && data.action == 'down'){
                globalvar.set_second[data.id] = (globalvar.set_second[data.id]) ?  (globalvar.set_second[data.id] - 1) : -1;
                globalvar.set_second[data.id] = (globalvar.set_second[data.id] == -1) ? 59 : globalvar.set_second[data.id];
            }

            let hrview = (globalvar.set_hour[data.id] == undefined) ? '00' : (globalvar.set_hour[data.id] < 10) ? ("0" + globalvar.set_hour[data.id]) : globalvar.set_hour[data.id];
            let mnview = (globalvar.set_minute[data.id] == undefined) ? '00' : (globalvar.set_minute[data.id] < 10) ? ("0" + globalvar.set_minute[data.id]) : globalvar.set_minute[data.id];
            let snview = (globalvar.set_second[data.id] == undefined) ? '00' : (globalvar.set_second[data.id] < 10) ? ("0" + globalvar.set_second[data.id]) : globalvar.set_second[data.id];

            document.getElementById('label_hour_' + data.id).innerText = hrview;
            document.getElementById('label_minute_' + data.id).innerText = mnview;
            document.getElementById('label_second_' + data.id).innerText = snview;

            document.querySelectorAll('input[TimePick=input_' + data.id + ']')[0].value = hrview + ":" + mnview + ":" + snview;
            }
        }

        //private function
        function RandomString(length) {
            const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let result = '';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        function MakeStyle(){
            var styles = ".TimePick_POPUP{ position: absolute; height: 80px; width: 120px; background-color: #ffffff; border-radius: 3px; border: 1px solid #eeeeee; display: flex; justify-content: center; align-items: center; box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px; z-index:500; margin-left: 30px; margin-top: -32px; display: none;} svg:active{ fill: #0000; stroke: #0000;} .TimePick_BTN{ position: absolute; background-color: transparent; border: none; margin-left: -35px; margin-top: 7px; cursor: pointer;} .TimePick_ICON{ opacity: 0.5;} .TimePick_ICON:hover{ opacity: 1;} input{ padding: 10px; border-width: 1px; border-style: solid; border-color: lightgray; background-color: white;} #TimePickBackgroundOverlay{ background-color:transparent; position:fixed; top:0; left:0; right:0; bottom:0; display:block;} .label{ font-size: 20px;} .hour{ display: flex; flex-direction: column; width: 35px;} .minute{ display: flex; flex-direction: column; width: 35px;} .second{ display: flex; flex-direction: column; width: 35px;}";
            var styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.id = "TimePickStyleSheet";
            styleSheet.innerText = styles;
            document.head.appendChild(styleSheet);
            return;
        }

        return globalvar;
    };

    return Constructor;
    
})(
/**********
 *************************************************************************
 *********** JAVASCRIPT MODULE TIME PICKER DONE BY KATHEESKUMAR **********
 *************************************************************************
 ***************************** Version: 1.0 ******************************
 *************************************************************************
 **********/
);