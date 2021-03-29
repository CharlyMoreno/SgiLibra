    //MODULAR

    // Get the modal
    var modalModular = document.getElementById("myModal-Modular");
    // Get the button that opens the modal
    var btnModular = document.getElementById("myBtn-Modular");
    // Get the <span> element that closes the modal
    var spanModular = document.getElementsByClassName("close-modular")[0];

    // When the user clicks on the button, open the modal
    btnModular.onclick = function() {
        modalModular.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    spanModular.onclick = function() {
        modalModular.style.display = "none";
    }


    //CONTROLADORES
    var modalControladores = document.getElementById("myModal-Controladores");
    var btnControladores = document.getElementById("myBtn-Controladores");
    var spanControladores = document.getElementsByClassName("close-Controladores")[0];

    // When the user clicks on the button, open the modal
    btnControladores.onclick = function() {
        modalControladores.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanControladores.onclick = function() {
        modalControladores.style.display = "none";
    }

    //CODIGO
    var modalCodigo = document.getElementById("myModal-Codigo");
    var btnCodigo = document.getElementById("myBtn-Codigo");
    var spanCodigo = document.getElementsByClassName("close-codigo")[0];

    // When the user clicks on the button, open the modal
    btnCodigo.onclick = function() {
    modalCodigo.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanCodigo.onclick = function() {
    modalCodigo.style.display = "none";
    }


    //FACTURAS
    var modalFacturas = document.getElementById("myModal-Facturas");
    var btnFacturas = document.getElementById("myBtn-Facturas");
    var spanFacturas = document.getElementsByClassName("close-facturas")[0];

    // When the user clicks on the button, open the modal
    btnFacturas.onclick = function() {
        modalFacturas.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanFacturas.onclick = function() {
        modalFacturas.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalModular) {
            modalModular.style.display = "none";
        }
        else if (event.target == modalControladores) {
            modalControladores.style.display = "none";
        }
        else if (event.target == modalCodigo) {
            modalCodigo.style.display = "none";
        } 
        else if (event.target == modalFacturas) {
            modalFacturas.style.display = "none";
        }
    }