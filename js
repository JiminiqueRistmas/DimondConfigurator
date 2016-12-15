var buildType = document.getElementById('00N6100000H7RVo');
  var frameSize = document.getElementById('00N6100000H7Kba');
  var aeroBars = document.getElementById("00N6100000H7Kac");
  var stem = document.getElementById('00N6100000H7Kam');
  var frontWheel = document.getElementById('00N6100000H7KbG');
  var rearWheel = document.getElementById('00N6100000H7KbL');
  var groupset  = document.getElementById('00N6100000H7Kar');   
  var brakes  = document.getElementById('00N6100000H7RVy');  
  var saddle  = document.getElementById('00N6100000H7KbQ');  
  var crankLength    = document.getElementById('00N6100000H7Kb6');
  var cassetteSize    = document.getElementById('00N6100000H7KbB');
  var bottomBracket    = document.getElementById('00N6100000H7RW3');
  var chainringSize    = document.getElementById('00N6100000H7Kb1');
  var chain = document.getElementById('00N6100000H7RW8');    
  var powerMeter    = document.getElementById('00N6100000H7RWD');
  var powerComputer    = document.getElementById('00N6100000H7RWI');
  var frontAccessory   = document.getElementById('00N6100000H7RWS');
//var crank   = document.getElementById('00N6100000H7Kaw');

function frameExceptions(frame){
  if (frame == "2"){
    brakes.options[2].setAttribute('disabled','disabled');
  }
  else{
    brakes.options[2].removeAttribute('disabled');
  }
  
}

function setBuild(frame) {

  if (frame == "1") {
    aeroBars.selectedIndex = "1";
    frontWheel.selectedIndex = "1";
    rearWheel.selectedIndex = "1";
    groupset.selectedIndex = "1";   
    brakes.selectedIndex = "2";   
    saddle.selectedIndex = "1";   
    crankLength.selectedIndex = "1";   
    cassetteSize.selectedIndex = "1";   
    bottomBracket.selectedIndex = "1";   
    chainringSize.selectedIndex = "1";   
    chain.selectedIndex = "1"; 
  }
  if (frame == "2") {
    buildType.selectedIndex = "2";
    aeroBars.selectedIndex = "2";
    frontWheel.selectedIndex = "2";
    rearWheel.selectedIndex = "2";
    groupset.selectedIndex = "1"; 
    brakes.selectedIndex = "1";   
    saddle.selectedIndex = "2";   
    crankLength.selectedIndex = "2";   
    cassetteSize.selectedIndex = "2";   
    bottomBracket.selectedIndex = "1";   
    chainringSize.selectedIndex = "2";   
    chain.selectedIndex = "1";
  }
  if (frame == "3") {

    buildType.selectedIndex = "3";
    aeroBars.selectedIndex = "3";
    frontWheel.selectedIndex = "3";
    rearWheel.selectedIndex = "3";
    groupset.selectedIndex = "2";   
    brakes.selectedIndex = "1";   
    saddle.selectedIndex = "3";   
    crankLength.selectedIndex = "2";   
    cassetteSize.selectedIndex = "1";   
    bottomBracket.selectedIndex = "1";   
    chainringSize.selectedIndex = "1";   
    chain.selectedIndex = "2";

  }
  // if (frame == "4"){
  //   buildType.options[0].setAttribute('selected','selected');
  //   aeroBars.options[0].setAttribute('selected','selected');
  //   frontWheel.options[0].setAttribute('selected','selected');
  //   rearWheel.options[0].setAttribute('selected','selected'); 
  // }

}
