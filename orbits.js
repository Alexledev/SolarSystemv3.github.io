function Orbit(){

    this.border = "2px solid white";
    this.border_rad = "50%";
    this.pos = "absolute";

}

Orbit.prototype.create_orbit = function(width, height, top, left){

    var div_element = document.createElement('div');
    
    div_element.style.border = this.border;
    div_element.style.borderRadius = this.border_rad;

    div_element.style.position = this.pos;

    div_element.style.width = width;
    div_element.style.height = height;

    div_element.style.top = top;
    div_element.style.left = left;

    
    return div_element;
}


function orbit_manager(orbit_list_data){

    const orbit = new Orbit();

    var universe_Obj = document.getElementById("universe");    

    for (i in orbit_list_data){

        value = orbit_list_data[i];
        console.info(value)
        var orbit_element = orbit.create_orbit(value.width, value.height, value.top, value.left);
        universe_Obj.appendChild(orbit_element);

    }    

}

//var orbit_list_data = [];
//orbit_list_data[0] = { width:"200px", height:"200px", top:"399px", left:"649px"}//orbit1
//orbit_list_data[1] = { width:"300px", height:"300px", top:"349px", left:"599px"}//orbit2
//orbit_list_data[2] = { width:"400px", height:"400px", top:"299px", left:"549px"}//orbit3
//orbit_list_data[3] = { width:"500px", height:"500px", top:"249px", left:"499px"}//orbit4
//orbit_list_data[4] = { width:"600px", height:"600px", top:"199px", left:"449px"}//orbit5
//orbit_list_data[5] = { width:"700px", height:"700px", top:"149px", left:"399px"}//orbit6
//orbit_list_data[6] = { width:"800px", height:"800px", top:"99px", left:"349px"}//orbit7
//orbit_list_data[7] = { width:"900px", height:"900px", top:"49px", left:"299px"}//orbit8




function universe_manager(id){



    var universe_obj = document.getElementById(id);
    var height_uni = universe_obj.offsetHeight
    var width_uni = universe_obj.offsetWidth

    var sun_obj = document.getElementById("sun");
    
    sun_obj.style.top = (height_uni - 95) / 2 + "px"
    sun_obj.style.left = (width_uni - 95) / 2 + "px"    
    sun_obj.style.display = "block";


    var orbit_diameter_default = [{"orbit8": 900, "rate":1000/900},
                                {"orbit7": 800, "rate":900/800},
                                {"orbit6": 700, "rate":800/700},
                                {"orbit5": 600, "rate":700/600},
                                {"orbit4": 500, "rate":600/500},
                                {"orbit3": 400, "rate":500/400},
                                {"orbit2": 300, "rate":400/300},
                                {"orbit1": 200, "rate":300/200} ]
    
    var orbit_list_data = [];
    
    orbit_diameter_8 =   Math.round(height_uni / orbit_diameter_default[0].rate) ;  

    top_orbit_8 = (height_uni - orbit_diameter_8) / 2
    left_orbit_8 = (width_uni - orbit_diameter_8) / 2
    orbit_list_data[0] = { width: orbit_diameter_8 + "px", height:orbit_diameter_8 + "px", top: top_orbit_8 + "px", left:left_orbit_8 + "px"}//orbit8

    orbit_diameter_7 = Math.round(orbit_diameter_8 / orbit_diameter_default[1].rate) ;   
    top_orbit_7 = (height_uni - orbit_diameter_7) / 2
    left_orbit_7 = (width_uni - orbit_diameter_7) / 2
    orbit_list_data[1] = { width: orbit_diameter_7 + "px", height: orbit_diameter_7 + "px", top: top_orbit_7 +"px", left: left_orbit_7 +"px"}//orbit7

    orbit_diameter_6 = Math.round(orbit_diameter_7 / orbit_diameter_default[2].rate) ;
    top_orbit_6 = (height_uni - orbit_diameter_6) / 2
    left_orbit_6 = (width_uni - orbit_diameter_6) / 2
    orbit_list_data[2] = { width: orbit_diameter_6 + "px", height: orbit_diameter_6 + "px", top: top_orbit_6 +"px", left: left_orbit_6 +"px"}//orbit6

    orbit_diameter_5 = Math.round(orbit_diameter_6 / orbit_diameter_default[3].rate) ;
    top_orbit_5 = (height_uni - orbit_diameter_5) / 2
    left_orbit_5 = (width_uni - orbit_diameter_5) / 2
    orbit_list_data[3] = { width: orbit_diameter_5 + "px", height: orbit_diameter_5 + "px", top: top_orbit_5 +"px", left: left_orbit_5 +"px"}//orbit5

    orbit_diameter_4 = Math.round(orbit_diameter_5 / orbit_diameter_default[4].rate) ;
    top_orbit_4 = (height_uni - orbit_diameter_4) / 2
    left_orbit_4 = (width_uni - orbit_diameter_4) / 2
    orbit_list_data[4] = { width: orbit_diameter_4 + "px", height: orbit_diameter_4 + "px", top: top_orbit_4 +"px", left: left_orbit_4 +"px"}//orbit4

    orbit_diameter_3 = Math.round(orbit_diameter_4 / orbit_diameter_default[5].rate)  ;
    top_orbit_3 = (height_uni - orbit_diameter_3) / 2
    left_orbit_3 = (width_uni - orbit_diameter_3) / 2
    orbit_list_data[5] = { width: orbit_diameter_3 + "px", height: orbit_diameter_3 + "px", top: top_orbit_3 +"px", left: left_orbit_3 +"px"}//orbit3

    orbit_diameter_2 =Math.round( orbit_diameter_3 / orbit_diameter_default[6].rate) ;
    top_orbit_2 = (height_uni - orbit_diameter_2) / 2
    left_orbit_2 = (width_uni - orbit_diameter_2) / 2
    orbit_list_data[6] = { width: orbit_diameter_2 + "px", height: orbit_diameter_2 + "px", top: top_orbit_2 +"px", left: left_orbit_2 +"px"}//orbit2

    orbit_diameter_1 = Math.round(orbit_diameter_2 / orbit_diameter_default[7].rate) ;    
    top_orbit_1 = (height_uni - orbit_diameter_1) / 2
    left_orbit_1 = (width_uni - orbit_diameter_1) / 2
    orbit_list_data[7] = { width: orbit_diameter_1 + "px", height: orbit_diameter_1 + "px", top: top_orbit_1 +"px", left: left_orbit_1 +"px"}//orbit1

    

    orbit_manager(orbit_list_data);
}
universe_manager("universe")
