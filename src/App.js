
import './App.css';
import { Sesion } from './Sesion';

function App() {
  return (
   <>
   <Sesion />

   
   </>
  );
}

export default App;

{/* <Formik>
<Form>
<section class="seccion-cliente">
  
  <fieldset id="fieldset_principal">
    
      <legend> Inicia sesión </legend>

              <div id="contenedor_cliente">
                  <form action="/" method="post" class="formulario_sesion">
                      <div>
                          <label for="usuario">Usuario</label><br>
                          <input type="text" placeholder="Escribe tu usuario" id="usuario"
                          class="input-formato" name="usuario" required>
                      </div>
                      <br>
                      <div>
                          <label for="contrasena">Contraseña</label><br>
                          <input type="password" class="input-formato" id="contrasena"
                          name="contrasena" placeholder="Escribe tu contraseña" required>
                      </div>
                      <br>
                      <div>
                          <input type="radio" name="tipos_personaje" id="tipo_cliente"> Cliente
                          <input type="radio" name="tipos_personaje" id="tipo_empresario"> Empresario
                      </div>
                      <br>
                      <div>
                          <button type="submit" class="btn-entrar">Entrar</button>
                      </div>
                      <br>
                      <div>
                          <p class="enlace-restablecer">
                              ¿Olvidaste tu contraseña?
                              
                           </p>
                      </div>
              </div> 
  
  </fieldset>
</section>




<section class="seccion-restablecer-contra inactivo">
<p>Escribe tu correo para restablecer tu contraseña</p>
<div class="contenedor-restablecer">
 
  <div >
      <label for="correo-restablecer"></label>
      <input type="email" placeholder="Escribe tu correo electrónico" class="input-restablecer" id="correo-restablecer" name="correo-restablecer"> 

  </div>

  <div id="btn-restablecer">
      <button class="btn-restablecer"> Restablecer</button>
  </div>


</div>
</section>

<section class="seccion-codigo">
<div class="seccion-codigo inactivo ">
  <p>Escribe tu código de recuperación</p>
  <label for="codigo"></label>
  <input type="number" id="codigo" name="codigo" size="20" maxlength="6">
</div>


</section>



<script src="./sesion.js"></script>
</Form>
</Formik> */}
