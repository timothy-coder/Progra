import React from 'react'
import '../../css/clock.css'

export default function Dashboard() {

    var H='....';
    var H=H.split('');
    var M='.....';
    var M=M.split('');
    var S='......';
    var S=S.split('');
    var Ypos=0;
    var Xpos=0;
    var Ybase=9;
    var Xbase=9;
    var dots=12;
    let i = 0;

    function reloj(){
        let time=new Date ();
        let secs=time.getSeconds();
        let sec=-1.57 + Math.PI * secs/30;
        let mins=time.getMinutes();
        let min=-1.57 + Math.PI * mins/30;
        let hr=time.getHours();
        let hrs=-1.57 + Math.PI * hr/6 + Math.PI*parseInt(time.getMinutes())/360;
        for (i=0; i < dots; ++i){
            document.getElementById("dig" + (i+1)).style.top=0-15+40*1.2*Math.sin(-0.49+dots+i/1.9).toString() + "px";
            document.getElementById("dig" + (i+1)).style.left=0-14+40*1.2*Math.cos(-0.49+dots+i/1.9).toString() + "px";
        }
        for (i=0; i < S.length; i++){
            document.getElementById("sec" + (i+1)).style.top =Ypos+i*Ybase*Math.sin(sec).toString() + "px";
            document.getElementById("sec" + (i+1)).style.left=Xpos+i*Xbase*Math.cos(sec).toString() + "px";
        }
        for (i=0; i < M.length; i++){
            document.getElementById("min" + (i+1)).style.top =Ypos+i*Ybase*Math.sin(min).toString() + "px";
            document.getElementById("min" + (i+1)).style.left=Xpos+i*Xbase*Math.cos(min).toString() + "px";
        }
        for (i=0; i < H.length; i++){
            document.getElementById("hour" + (i+1)).style.top =Ypos+i*Ybase*Math.sin(hrs).toString() + "px";
            document.getElementById("hour" + (i+1)).style.left=Xpos+i*Xbase*Math.cos(hrs).toString() + "px";
        }
        setTimeout(reloj, 50);
    }

    setTimeout(reloj,50);

    return (

        <div className='w-[120px] h-[120px] pl-[53px] pt-[56px] bg-white rounded-3xl' >
        <table>
        <tbody>
        <tr>
            <td>
                <div className='w-[50px] h-[50px] relative'>
                    <div id="dig1" className="dig">1</div>
                    <div id="dig2" className="dig">2</div>
                    <div id="dig3" className="dig">3</div>
                    <div id="dig4" className="dig">4</div>
                    <div id="dig5" className="dig">5</div>
                    <div id="dig6" className="dig">6</div>
                    <div id="dig7" className="dig">7</div>
                    <div id="dig8" className="dig">8</div>
                    <div id="dig9" className="dig">9</div>
                    <div id="dig10" className="dig">10</div>
                    <div id="dig11" className="dig">11</div>
                    <div id="dig12" className="dig">12</div>

                    <div id="hour1" className="hour"></div>
                    <div id="hour2" className="hour"></div>
                    <div id="hour3" className="hour"></div>
                    <div id="hour4" className="hour"></div>

                    <div id="min1" className="min"></div>
                    <div id="min2" className="min"></div>
                    <div id="min3" className="min"></div>
                    <div id="min4" className="min"></div>
                    <div id="min5" className="min"></div>

                    <div id="sec1" className="sec"></div>
                    <div id="sec2" className="sec"></div>
                    <div id="sec3" className="sec"></div>
                    <div id="sec4" className="sec"></div>
                    <div id="sec5" className="sec"></div>
                    <div id="sec6" className="sec"></div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    );
}
