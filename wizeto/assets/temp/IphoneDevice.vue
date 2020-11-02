<template>
<div class="iphone-x">
        <div> <div class='c'>Speaker</div> <b>Camera</b> </div>
<!-- time and signal -->
        <div>
            <div style='margin-left: 30px; display: inline-block; font-size: 0.8rem;font-weight: bold'>2:29</div>
            <div style='margin-left: 180px;display: inline-block; font-size: 0.8rem;'><v-icon style='font-size: 0.8rem;color:black'>mdi-signal</v-icon></div>
            <div style='margin-left: -2px; display: inline-block; font-size: 0.6rem; color:black;'>4G</div>
            <div style='margin-left: -2px; display: inline-block; font-size: 0.8rem;'><v-icon class='battery' style='font-size: 1rem;color:black'>mdi-battery-10</v-icon></div>
        </div>
        <div style='border: 1px solid green;height: 50px;'>

        </div>

</div>
</template>

<style lang="scss">
body {
    background: #f4f6fc;
}

.iphone-x {
    position: relative;
    margin: 10px auto;
    width: 65%;
    height: 600px;
    background-color: red;
    border-radius: 40px;
    box-shadow: 0px 0px 0px 0px #1f1f1f, 0px 0px 0px 0px #191919, 0px 0px 0px 12px #111;
  
  &:before,
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  // home button indicator
  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  
  // frontal camera/speaker frame
  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }
  
  .c,
  b,
  s,
  span {
    position: absolute;
    display: block;
    color: transparent;
  }
  
  // speaker
  .c {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }
  
  // camera
  b {
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);
    
    &:after {
      content: '';
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  }
  .battery{
      transform: rotate(90deg);
  }
  
}
</style>