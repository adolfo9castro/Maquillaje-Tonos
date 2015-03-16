jQuery(document).ready(function(){
	jQuery("#lineas .col").mouseenter(function(){
		jQuery(this).find("div .btn_inicio").css({"color":"#FFF","border-color":"#FFF"});
	   	jQuery(this).find("div .btn_inicio h1").css({"color":"#FFF","border-color":"#FFF"});
	   	jQuery(this).find("div .btn_inicio #horizontal, div .btn_inicio #vertical").css({"color":"#FFF","border-color":"#FFF","background-color":"#FFF"});
	   	jQuery(this).find("div img").removeClass("grayscale");	   	
	});
	jQuery("#lineas .col").mouseleave(function(){
		jQuery(this).find("div .btn_inicio").css({"color":"#d5bb61","border-color":"#d5bb61"});
	   	jQuery(this).find("div .btn_inicio h1").css({"color":"#d5bb61","border-color":"#d5bb61"});
	   	jQuery(this).find("div .btn_inicio #horizontal, div .btn_inicio #vertical").css({"color":"#FFF","border-color":"#FFF","background-color":"#d5bb61"});
	   	jQuery(this).find("div img").addClass("grayscale"); 
	});

	jQuery(".menu").click(function(){
		jQuery(this).find("ul").show();
	});

	jQuery(".menu").mouseleave(function(){
		jQuery(this).find("ul").hide();
	});

	jQuery("#btn_luxury").click(function(){
		jQuery("#linea_luxury_modal").show();
	});

	jQuery("#btn_cerrar").click(function(){
		jQuery("#linea_luxury_modal").hide();
		jQuery("#linea_luxury_modal_galeria").hide();
	});

	jQuery("#cerrar_solo_galeria").click(function(){
		jQuery("#linea_luxury_modal_galeria").hide();
	});	

	jQuery("#btn_galeriaopen").click(function(){
		jQuery("#linea_luxury_modal_galeria").show();
	});

	jQuery("#linea_luxury_modal #btn_cerrar").click(function(){
		jQuery("#linea_luxury_modal").show();
	});

	jQuery("#btn_cerrar_2").click(function(){
		jQuery("#linea_luxury_modal").hide();
	});

	jQuery("#btn_sport").click(function(){
		jQuery(".open_sport").show();
	});

	jQuery("#btn_piel").click(function(){
		jQuery(".open_piel").show();
	});

	jQuery(".open_sport #btn_cerrar_2").click(function(){
		jQuery(".open_sport").hide();
	});

	jQuery(".open_sport #btn_cerrar").click(function(){
		jQuery(".open_sport_galeria").hide();
	});

	jQuery(".open_sport #btn_galeriaopen").click(function(){
		jQuery(".open_sport_galeria").show();
	});

	jQuery(".open_sport_galeria #btn_cerrar").click(function(){
		jQuery(".open_sport_galeria").hide();
		jQuery(".open_sport").hide();
	});

	jQuery(".open_sport_galeria #cerrar_solo_galeria").click(function(){
		jQuery(".open_sport_galeria").hide();
	});

	jQuery(".open_piel #btn_cerrar_2").click(function(){
		jQuery(".open_piel").hide();
	});

	jQuery(".open_piel #btn_cerrar").click(function(){
		jQuery(".open_piel_galeria").hide();
	});

	jQuery(".open_piel #btn_galeriaopen").click(function(){
		jQuery(".open_piel_galeria").show();
	});

	jQuery(".open_piel_galeria #btn_cerrar").click(function(){
		jQuery(".open_piel_galeria").hide();
		jQuery(".open_piel").hide();
	});

	jQuery(".open_piel_galeria #cerrar_solo_galeria").click(function(){
		jQuery(".open_piel_galeria").hide();
	});

	var i = parseInt(1);
	var j = parseInt(2);

	jQuery(".back").click(function(){
		jQuery(".slide_hide"+i).removeClass("activo");
		jQuery(".slide_hide"+j).addClass("activo");
		jQuery("#forward").addClass("forward");		
		if(j == 25){
			jQuery(this).removeClass("back")
		}else{
			i++;
			j++;
		}
		
	});	

	jQuery(".forward").click(function(){
		jQuery(".slide_hide"+j).removeClass("activo");
		jQuery(".slide_hide"+i).addClass("activo");
		jQuery("#back").addClass("back");
		if(i == 1){
			jQuery(this).removeClass("forward")
		}else{
			i--;
			j--;
		}

	});


	var id = parseInt(1);
	var jd = parseInt(2);

	jQuery(".back2").click(function(){
		jQuery(".slide2_hide"+id).removeClass("activo");
		jQuery(".slide2_hide"+jd).addClass("activo");
		jQuery("#forward").addClass("forward2");		
		if(jd == 10){
			jQuery(this).removeClass("back2")
		}else{
			id++;
			jd++;
		}
		
	});	

	jQuery(".forward2").click(function(){
		jQuery(".slide2_hide"+jd).removeClass("activo");
		jQuery(".slide2_hide"+id).addClass("activo");
		jQuery("#back").addClass("back2");
		if(id == 1){
			jQuery(this).removeClass("forward2")
		}else{
			id--;
			jd--;
		}

	});


	var it = parseInt(1);
	var jt = parseInt(2);

	jQuery(".back3").click(function(){
		jQuery(".slide3_hide"+it).removeClass("activo");
		jQuery(".slide3_hide"+jt).addClass("activo");
		jQuery("#forward").addClass("forward3");		
		if(jt == 9){
			jQuery(this).removeClass("back3")
		}else{
			it++;
			jt++;
		}
		
	});	

	jQuery(".forward3").click(function(){
		jQuery(".slide3_hide"+jt).removeClass("activo");
		jQuery(".slide3_hide"+it).addClass("activo");
		jQuery("#back").addClass("back3");
		if(it == 1){
			jQuery(this).removeClass("forward3")
		}else{
			it--;
			jt--;
		}

	});

	jQuery("#productos #open_luxury_close_all").click(function(){		
		jQuery(".open_piel").hide();
		jQuery(".open_piel_galeria").hide();
		jQuery(".open_sport").hide();
		jQuery(".open_sport_galeria").hide();
		jQuery("#linea_luxury_modal").show();
	});

	jQuery("#productos #open_sport_close_all").click(function(){		
		jQuery(".open_piel").hide();
		jQuery(".open_piel_galeria").hide();
		jQuery(".open_sport").show();
		jQuery(".open_sport_galeria").hide();
		jQuery("#linea_luxury_modal").hide();
	});

	jQuery("#productos #open_piel_close_all").click(function(){		
		jQuery(".open_piel").show();
		jQuery(".open_piel_galeria").hide();
		jQuery(".open_sport").hide();
		jQuery(".open_sport_galeria").hide();
		jQuery("#linea_luxury_modal").hide();
	});
	
});




