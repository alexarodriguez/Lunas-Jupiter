window.onload = function()
{
	alert("hola");
	inicio();
}

function inicio()
{
	
	function movimiento(path, obj, vel)
    {
       
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
	var creaPlanetas = function(objeto, planeta)
    {
        var tamanoPlaneta = planeta.tamano;
       
        if(tamReal)
        {
           
            tamanoPlaneta = Math.round(elSol.tamano * (planeta.porcentaje / 100));
            
        }
        objeto.style.width = tamanoPlaneta + "px";
        objeto.style.height = tamanoPlaneta + "px";
        objeto.style.backgroundImage = "url('lunas/"+planeta.imagen+"')";
        objeto.style.backgroundSize = tamanoPlaneta + "px " + tamanoPlaneta + "px";
        var margen = (Math.round(tamanoPlaneta / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
        
    }
	var planetas = [
                {nombre: "Europa", 
                 imagen: "europa.png",
                 porcentaje: 0.4,
                 tamano: 100 
                },
                {nombre: "Lo", 
                 imagen: "lo.png",
                 porcentaje: 0.9,
                 tamano: 200 
                },
                {nombre: "calisto", 
                 imagen: "calisto.png",
                 porcentaje: 0.9,
                 tamano: 200 
                },
                {nombre: "gaminedes", 
                 imagen: "gaminedes.png",
                 porcentaje: 0.5,
                 tamano: 150 
                }
                ];
    var objSol = nom_div('jupiter_svg');
    var elSol = {
        tamano: objSol.height.baseVal.value, 
        x : objSol.x.baseVal.value, 
        y : objSol.y.baseVal.value
    };*//
    var objeto = "";
    var ruta = "";
    var velInicia = 3000;
    for(var i = 1; i <= planetas.length; i++)
    {
    	objeto = nom_div("luna_" + i);
    	ruta = nom_div("ruta_" + i);
    	creaPlanetas(objeto, planetas[i - 1]);
    	movimiento(ruta, objeto, velInicia);
    	velInicia += 4000;
    }

    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
