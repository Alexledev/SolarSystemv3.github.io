function Planet(){

    this.border = "1px solid darkgray";
    this.borderRadius = "50%";
    this.position = "absolute";


}

Planet.prototype.planet_maker = function(width, height, background, top, left, animation_type, background_size){

    var div_element = document.createElement('div');

    div_element.style.width = width;
    div_element.style.height = height;

    div_element.style.background = background;
    
    div_element.style.top = top;
    div_element.style.left = left

    div_element.style.border = this.border;
    div_element.style.borderRadius = this.borderRadius;

    div_element.style.position = this.position;

    div_element.style.animation = animation_type;

    if (background_size){
        div_element.style.backgroundSize = background_size;
    }
   
    return div_element

}

function planet_manager (planet_list_data) {

    const planet = new Planet();
    
    var universe_obj = document.getElementById("universe");

    for (i in planet_list_data){

        value = planet_list_data[i];
        console.info(value);
        var planet_Element = planet.planet_maker(value.width, value.height, value.background, value.top, value.left, value.animation_type, value.background_size);
        universe_obj.appendChild(planet_Element);
        
    }
}

var planet_list_data = [];
planet_list_data[7] = { width: "40px", height: "40px", background: "url(mercury.jpg) 0 0 repeat / 630px", background_size: "40px 40px", top: "478px", left: "728px", animation_type: "Mercrot 2.7s infinite linear"}//mercury
planet_list_data[6] = { width: "50px", height: "50px", background: "url(2k_venus_surface.jpg) 0 0 repeat / 630px", background_size: "50 50px", top: "473px", left: "723px",animation_type: "Venrot 3s infinite linear"}//venus
planet_list_data[5] = { width: "50px", height: "50px", background: "url(Earth_map2.PNG) 0 0 repeat / 630px", background_size: "54px 54px",top: "473px", left: "723px", animation_type:"Earthrot 5s infinite linear" }//Earth

planet_list_data[4] = { width: "40px", height: "40px", background: "url(mars.jpg) 0 0 repeat / 630px", background_size:"30 30", top: "483px", left: "733px", animation_type:"Marsrot 7s infinite linear"}//mars
planet_list_data[3] = { width: "61px", height: "61px", background: "url(jup.jpg) 0 0 repeat / 630px", background_size: "61px 61px", top: "468px",left: "718px", animation_type:"Juprot 9s infinite linear"}//jupiter
planet_list_data[2] = { width: "60px", height: "60px", background: "url(sat.jpg) 0 0 repeat / 630px", background_size: "60px 60px",top: "470px", left: "719px", animation_type:"Satrot 14s infinite linear"}//saturn
planet_list_data[1] = { width: "53px", height: "53px", background: "url(uranus.jpg) 0 0 repeat / 630px", background_size: "53px 53px", top: "473px", left: "722px", animation_type: "Uranusrot 16s infinite linear"}//uranus
planet_list_data[0] = { width: "53px", height: "53px", background: "url(nep.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: "472px", left: "723px", animation_type:"Neprot 20s infinite linear"}//neptune


function universe_manager(id){

   

    var universe_obj = document.getElementById(id);
    var height_uni = universe_obj.offsetHeight;
    var width_uni = universe_obj.offsetWidth;

    var planet_diameter_default = [{"planet8": 53, "rate":1000/900},
                                {"planet7": 53, "rate":900/800},
                                {"planet6": 60, "rate":800/700},
                                {"planet5": 61, "rate":700/600},
                                {"planet4": 30, "rate":600/500},
                                {"planet3": 54, "rate":500/400},
                                {"planet2": 50, "rate":400/300},
                                {"planet1": 40, "rate":300/200} ]

   var distance_from_sun_to_orbit8 =   Math.round(height_uni / planet_diameter_default[0].rate) / 2 ; 
   var top_orbit_8 = (height_uni - 53) / 2
   var left_orbit_8 = (width_uni - 53) / 2
  
    planet_list_data[0] = { width: "53px", height: "53px", background: "url(nep.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_8 + "px", left: left_orbit_8 + "px", animation_type:"Neprot 20s infinite linear"}
   
    document.documentElement.style.setProperty('--neprot-translator', '-'+distance_from_sun_to_orbit8+'px'); 

    

   var  distance_from_sun_to_orbit7 = Math.round(orbit_diameter_8 / planet_diameter_default[1].rate) / 2;
   var top_orbit_7 = (height_uni - 53) / 2
   var left_orbit_7 = (width_uni - 53) / 2
  
    planet_list_data[1] = { width: "53px", height: "53px", background: "url(uranus.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_7 + "px", left: left_orbit_7 + "px", animation_type:"Uranusrot 16s infinite linear"}
   
    document.documentElement.style.setProperty('--uranusrot-translator', '-'+distance_from_sun_to_orbit7+'px'); 



   var  distance_from_sun_to_orbit6 = Math.round(orbit_diameter_7 / planet_diameter_default[2].rate) / 2;
   var top_orbit_6 = (height_uni - 60) / 2
   var left_orbit_6 = (width_uni - 60) / 2
  
    planet_list_data[2] = { width: "60px", height: "60px", background: "url(sat.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_6 + "px", left: left_orbit_6 + "px", animation_type:"Satrot 14s infinite linear"}
   
    document.documentElement.style.setProperty('--satrot-translator', '-'+distance_from_sun_to_orbit6+'px'); 


   var  distance_from_sun_to_orbit5 = Math.round(orbit_diameter_6 / planet_diameter_default[3].rate) / 2;
   var top_orbit_5 = (height_uni - 61) / 2
   var left_orbit_5 = (width_uni - 61) / 2
  
    planet_list_data[3] = { width: "61px", height: "61px", background: "url(jup.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_5 + "px", left: left_orbit_5 + "px", animation_type:"Juprot 9s infinite linear"}
   
    document.documentElement.style.setProperty('--juprot-translator', '-'+distance_from_sun_to_orbit5+'px'); 


   var  distance_from_sun_to_orbit4 = Math.round(orbit_diameter_5 / planet_diameter_default[4].rate) / 2;
   var top_orbit_4 = (height_uni - 40) / 2
   var left_orbit_4 = (width_uni - 40) / 2
  
    planet_list_data[4] = { width: "40px", height: "40px", background: "url(mars.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_4 + "px", left: left_orbit_4 + "px", animation_type:"Marsrot 7s infinite linear"}
   
    document.documentElement.style.setProperty('--marsrot-translator', '-'+distance_from_sun_to_orbit4+'px'); 


   var  distance_from_sun_to_orbit3 = Math.round(orbit_diameter_4 / planet_diameter_default[5].rate) / 2;
   var top_orbit_3 = (height_uni - 50) / 2
   var left_orbit_3 = (width_uni - 50) / 2
  
    planet_list_data[5] = { width: "50px", height: "50px", background: "url(Earth_map2.PNG) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_3 + "px", left: left_orbit_3 + "px", animation_type:"Earthrot 5s infinite linear"}
   
    document.documentElement.style.setProperty('--earthrot-translator', '-'+distance_from_sun_to_orbit3+'px');
    
    
   var  distance_from_sun_to_orbit2 = Math.round(orbit_diameter_3 / planet_diameter_default[6].rate) / 2;
   var top_orbit_2 = (height_uni - 50) / 2
   var left_orbit_2 = (width_uni - 50) / 2
  
    planet_list_data[6] = { width: "50px", height: "50px", background: "url(2k_venus_surface.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_2 + "px", left: left_orbit_2 + "px", animation_type:"Venrot 3s infinite linear"}
   
    document.documentElement.style.setProperty('--venrot-translator', '-'+distance_from_sun_to_orbit2+'px');
    
   
   var  distance_from_sun_to_orbit1 = Math.round(orbit_diameter_2 / planet_diameter_default[7].rate) / 2;
   var top_orbit_1 = (height_uni - 40) / 2
   var left_orbit_1 = (width_uni - 40) / 2
  
    planet_list_data[7] = { width: "40px", height: "40px", background: "url(Mercury.jpg) 0 0 repeat / 630px", background_size: "53px 53px",top: top_orbit_1 + "px", left: left_orbit_1 + "px", animation_type:"Mercrot 2.7s infinite linear"}
   
    document.documentElement.style.setProperty('--mercrot-translator', '-'+distance_from_sun_to_orbit1+'px');
}



universe_manager("universe")
planet_manager(planet_list_data)