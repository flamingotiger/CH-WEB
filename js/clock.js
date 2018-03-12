function clock()
{
  var d = new Date(); /* d = 현재 시간 */
  var h = d.getHours(); /* h = 시간 */
  var m = d.getMinutes(); /* m = 분 */
  var s = d.getSeconds();
  var ds = s * 6; /* 초의 각도 */
  /* 시간을 12시간 단위로 하기 위해 12보다 큰 경우 12를 빼줌 */
  if( h > 12 ) h = h - 12;

  var dh = ( h * 30 ) + ( m / 2 ); /* dh = 시침의 각도 */
  dh = parseInt( dh ); /* 시침의 각도를 정수형으로 변환 */
  var dm = m * 6; /* 분침의 각도 */

  /* 시침, 분침, 초침의 각도를 계산한 값으로 변경 */
  /* IE 10+, Firefox */
  document.getElementById("hour").style.transform = "rotate(" + dh + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + dm + "deg)";

  /* IE 9 */
  document.getElementById("hour").style.MsTransform = "rotate(" + dh + "deg)";
  document.getElementById("minute").style.MsTransform = "rotate(" + dm + "deg)";

  /* Opera, Chrome, Safari */
  document.getElementById("hour").style.WebkitTransform = "rotate(" + dh + "deg)";
  document.getElementById("minute").style.WebkitTransform = "rotate(" + dm + "deg)";

  /*사각형 꼭지점별로 회전*/
  var changeClock = dm;
  var clockBg = document.getElementById("clockBg");
  if(changeClock >= 45 && changeClock <= 134){
    clockBg.style.transform = "rotate(" + 90 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 90 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 90 + "deg)";
  }else if(changeClock >= 135 && changeClock <= 224){
    clockBg.style.transform = "rotate(" + 0 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 0 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 0 + "deg)";
  }else if(changeClock >= 225 && changeClock <= 315){
    clockBg.style.transform = "rotate(" + 90 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 90 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 90 + "deg)";
  }else{
    clockBg.style.transform = "rotate(" + 0 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 0 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 0 + "deg)";
  }
  /*night and morning*/
  var clockh = d.getHours(); /* h = 24시간 */
  var round = document.getElementById("round");
  var minute = document.getElementById("minute");
  if(clockh >= 6 && clockh < 18){
    $('#clockBg').attr('src',function(index,attr){
          return attr.replace('icon-box-n','icon-box');
    });
    $('#round').attr('src',function(index,attr){
          return attr.replace('icon-round-n.svg','icon-minute.svg');
    });
    $('#minute').attr('src',function(index,attr){
          return attr.replace('icon-minute-n.svg','icon-minute.svg');
    });
  }else{
    $('#clockBg').attr('src',function(index,attr){
          return attr.replace('icon-box.svg','icon-box-n.svg');
    });
    $('#round').attr('src',function(index,attr){
          return attr.replace('icon-round.svg','icon-round-n.svg');
    });
    $('#minute').attr('src',function(index,attr){
          return attr.replace('icon-minute.svg','icon-minute-n.svg');
    });
  }

}
//매 1초마다 함수 digital()을 호출하도록 타이머 생성
var timer = setInterval( function(){ clock(); }, 1000);
