'use strict';
//geolocation
function success(pos){
  ajaxRequest(pos.coords.latitude,pos.coords.longitude);
}

function fail(error){
  alert('位置情報の取得に失敗しました。エラーコード:'+error.code);
}

navigator.geolocation.getCurrentPosition(success,fail);

function ajaxRequest(lat, long){
const url = 'https://api.openweathermap.org/data/2.5/onecall';
const appId = 'de80635f4b3f5c213060b56a13ec005d';

$.ajax({
  url: url,
  data:{
    appid:appId,
    lat: lat,
    lon:long,
    units:'metric',
    lang: 'ja'
  }
})

.done(function(data){
  console.log(data);
})
.fail(function(){
  console.log('$.ajax failed!');
})
}