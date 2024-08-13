AFRAME.registerComponent("markerhandler", {
    init: async function(){
        this.el.addEventListener("markerFound", (e)=>{
            this.handlerMarkerFound()
        })
        this.el.addEventListener("markerLost", (e)=>{
            this.handlerMarkerLost()
        })
    },
    handlerMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click", ()=>{
            swal({
                icon: "warning",
                title: "Calificar platillo",
                text: "Esperemos que nos haya puesto 10..."
            })
        })

        orderButton.addEventListener("click", ()=>{
            swal({
                icon: "https://svgsilh.com/svg_v2/2730432.svg",
                title: "¡Gracias por ordenar :)!",
                text: "Le traeremos su compra rapidisimo"
            })
        })
    },
    handlerMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})