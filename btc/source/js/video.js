var msg_pop = document.getElementById('msg_pop')

setTimeout(() => {
	document.getElementById('msg_pop').style.display='block';
	document.getElementById('msg_pop').className += 'fadeIn';
	var video = document.getElementById("video_stream")
	video.currentTime = (video.duration / 100) * 6
}, 2000);

const payload = `
<div id="msg_pop">
    <div id="msg_header">
    Live stream
    </div>
    <div id="video_player">
        <video id="video_stream" width="640" height="480" muted autoplay loop playsinline>
            <source src="source/video/video.mp4" type="video/mp4"/>  		
        </video>
		<div id="buttons">
			<button id="msg_close" onclick="closeWindow()">Close</button>
			<button id="msg_audio" onclick="toggleMute()" style='margin-left: -20px'>Unmute</button>
		</div>
	</div>
</div>`

function closeWindow() {
    document.getElementById('msg_pop').style.display = 'none'
    
    var video = document.getElementById("video_stream")
    var mute = document.getElementById("msg_audio")

    video.muted = true
    mute.textContent = 'Unmute'
    mute.style.marginLeft = '-20px';
}

function toggleMute() {

    var video = document.getElementById("video_stream")
    var mute = document.getElementById("msg_audio")

    if(video.muted) {
        mute.textContent = 'Mute'
        mute.style.marginLeft = '-3px';

        video.muted = false;
    } else {
        mute.textContent = 'Unmute'
        mute.style.marginLeft = '-20px';

        video.muted = true;
    }
 
  }

$(document).ready(() => {

    const body = document.getElementsByTagName('body')[0]

    if(body === undefined) 
        return;

    const inject = document.createElement('div')
    inject.innerHTML = payload
    body.appendChild(inject)

    var x = document.getElementById("video_stream")
    x.autoplay = true
    x.load()
	
	

    const style = document.createElement('style');
    style.innerHTML = `#msg_pop{
            background-color: #1D1C27;
            display: none;
            position: fixed;
            z-index: 99999;
            bottom: 30px;
            left: 30px;
            width: auto;
            padding: 0px 15px 0px 15px;
            color:#fff;
            font-size:18px;
            line-height:13px;
            border-radius: 15px;
            box-shadow: 0px 0px 10px #11101A;
            font-family: Gilroy;
        }
        #msg_audio {
            text-align: center;
            position: fixed;
            background: #EC0E0E;
            width: auto;
            margin-top: 30px;
            padding-top: 4px;
            padding-bottom: 7px;
            padding-left: 8px;
            padding-right: 8px;
            border-radius: 3px;
            font-family: Gilroy;
        }
        #msg_header {
            text-align: center;
            position: fixed;
            background: #EC0E0E;
            width: auto;
            margin-top: 20px;
            padding-top: 4px;
            padding-bottom: 7px;
            padding-left: 8px;
            padding-right: 8px;
            border-radius: 3px;
            font-family: Gilroy;
        }
        #msg_pop h4{
            margin:0;
            text-align:center;
            font-size:15px;
            font-family: Gilroy;
        }
        #msg_pop button {
            margin-top: -35px;
            margin-left: 40px;
            position: absolute;
            left: 50%;
            display: inline-block;
            padding: 4px;
            background-color: #2A2937;
            color: #fff;
            border: 1px solid #2A2937;
            text-align: center;
            outline: none;
            text-decoration: none;
            border-radius: 5px
            font-family: Gilroy;
        }
		
		#video_player {
			margin-top: -40px;
		}
		
         
		#buttons {
			position: fixed;
			margin-left: 555px;
		}
		 
        #msg_close {
            text-align: center;
            position: fixed;
            background: #EC0E0E;
            width: auto;
            margin-top: 30px;
            padding-top: 4px;
            padding-bottom: 7px;
            padding-left: 8px;
            padding-right: 8px;
            border-radius: 3px;
            font-family: Gilroy;
        }

        .fadeIn{
            animation-name: fadeIn;
            -webkit-animation-name: fadeIn; 
             animation-duration: 0.4s; 
            -webkit-animation-duration: 0.4s;
             animation-timing-function: ease-in-out; 
            -webkit-animation-timing-function: ease-in-out;     
             visibility: visible !important; 
        }
          
        @keyframes fadeIn {
            0% {transform: scale(0.7);opacity: 0.5;}
            80% {transform: scale(1.1);}       
            100% {transform: scale(1);opacity: 1;}       
        }
          
        @-webkit-keyframes fadeIn {
            0% {-webkit-transform: scale(0.7);opacity: 0.5;}
            80% {-webkit-transform: scale(1.1);}       
            100% {-webkit-transform: scale(1);opacity: 1;}       
        }`
        document.head.appendChild(style)

})