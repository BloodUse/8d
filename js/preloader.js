info = ['Դասղեկն է Լուսինե Բաղդասարյանը','Դասարանում կա 21 տղա 9 աղջիկ','Կայքը ստեղծվել է 5 օրում','Շնորհավոր Ամանօր և Սուրբ Ծնունդ','Դասարանում կա 30 աշակերտ','Դասարանում կա 6 գերազանցիկ','Խնդրում ենք 3 Գարիկներին չխառնեք միմյանց հետ','Դասարանը գտնվում է Սևանի հ.3 հիմնական դպրոցում','Դպրոցի տնօրեն՝ Հովհաննիսյան Լուսինե']
var random = Math.floor(Math.random() * info.length);
$('#hi').text((info[random]));

  window.onload = (function () {
  	setTimeout(function(){
  		$('.preloader').fadeOut();
  	},1750);
  });