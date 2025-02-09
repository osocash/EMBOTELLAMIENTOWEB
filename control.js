let botellasProcesadas = 0;
        let cajasPorProcesar = 0;
        let cajasContadas = 0;
        let bandera=0;
        function forzarsalida(){
            bandera=1;
        }
        function iniciarProceso() {
            cajasPorProcesar = parseInt(document.getElementById('num-cajas').value);
            if (cajasPorProcesar < 1) {
                alert('Por favor, ingrese un número válido de cajas (mínimo 1).');
                resetearProceso();
                return;
            }
            botellasProcesadas = 0;
            cajasContadas = 0;
            document.getElementById('botellas-procesadas').innerText = botellasProcesadas;
            document.getElementById('cajas-procesadas').innerText = cajasContadas;
            document.getElementById('iniciar-btn').disabled = true; // Desactivar botón
            procesarCaja();
        }

        function procesarCaja() {
            if (botellasProcesadas < cajasPorProcesar*6
            ) {
                iniciarLlenado();
            } else {
                finalizarProceso();
            }
        }

        function iniciarLlenado() {
            const llenado = document.getElementById('etapa-llenado');
            llenado.classList.add('activo');
            document.getElementById('estado-llenado').innerText = 'Llenando...';
            setTimeout(() => {
                llenado.classList.remove('activo');
                document.getElementById('estado-llenado').innerText = 'Completado';
                
                
                //procesarCaja(); // Procesar siguiente botella
                if(bandera==1){
                    resetearProceso();
                    return;
                }
                iniciarEtiquetado();
            }, 1000); 
            
        }

        function iniciarEtiquetado() {
            const etiquetado = document.getElementById('etapa-etiquetado');
            etiquetado.classList.add('activo');
            document.getElementById('estado-etiquetado').innerText = 'Etiquetando...';
            setTimeout(() => {
                etiquetado.classList.remove('activo');
                document.getElementById('estado-etiquetado').innerText = 'Completado';
                iniciarTapado();
            }, 1000); // 
        }

        function iniciarTapado() {
            const tapado = document.getElementById('etapa-tapado');
            tapado.classList.add('activo');
            document.getElementById('estado-tapado').innerText = 'Tapando...';
            setTimeout(() => {
                tapado.classList.remove('activo');
                document.getElementById('estado-tapado').innerText = 'Completado';
                botellasProcesadas++;
                document.getElementById('botellas-procesadas').innerText = botellasProcesadas;
                procesarCaja(); // Procesar siguiente botella
            }, 1000); 
        }

        function finalizarProceso() {
            cajasContadas = Math.floor(botellasProcesadas / 6);
            document.getElementById('cajas-procesadas').innerText = cajasContadas;
            document.getElementById('iniciar-btn').disabled = false; // Activar botón
            document.getElementById('botellas-procesadas').innerText = botellasProcesadas; // Mostrar total
            //alert('Proceso completado. Total de botellas procesadas: ' + botellasProcesadas + '. Total de cajas procesadas: ' + cajasContadas);
        }

        function resetearProceso() {
            botellasProcesadas = 0;
            cajasContadas = 0;
            bandera=0;
            document.getElementById('botellas-procesadas').innerText = botellasProcesadas;
            document.getElementById('cajas-procesadas').innerText = cajasContadas;
            document.getElementById('iniciar-btn').disabled = false; // Activar botón

        }
   