import './App.css'
import './index.css'
import { BotonMedio } from './BotonMedio.js'
import { BotonMedioSuper } from './BotonMedioSuper.js'
import { BotonSupEXP } from './BotonSupEXP.js'
import arbol from "./Imagenes/arbol.png"
import cactus from "./Imagenes/cactus.png"
import planta from "./Imagenes/planta.png"
import suculento from "./Imagenes/suculento.png"
import PCarnivora from "./Imagenes/planta-carnivora.png"
import vino from "./Imagenes/vino.png"
import imagen_1 from "./Imagenes/imagen_1.png"
import imagen_2 from "./Imagenes/imagen_2.jpg"
import imagen_3 from "./Imagenes/imagen_3.jpg"
import imagen_4 from "./Imagenes/imagen_4.png"
import imagen_5 from "./Imagenes/imagen_5.png"
import imagen_6 from "./Imagenes/imagen_6.jpg"
import Imagena1 from './Imagenes/imagenA_1.png'
import imagenB1 from './Imagenes/imagenB_1.png'
import Plantas from './Imagenes/Plantas.jpg'
import sol from "./Imagenes/sol.gif"
import PFlor from './Imagenes/PartesFlor.jpg'
import Carnivora from './Imagenes/Carnivora.gif'
import Carnivora2 from './Imagenes/carnivora.webp'
import Plantita from './Imagenes/Plantita.jpg'
import PFlor2 from './Imagenes/PFlor2.avif'
import PFlori from './Imagenes/PFlori.jpg'
import Planti from './Imagenes/AguanteLasPlantas.gif'
import FotoS from './Imagenes/FotoS.gif'
import FotoS2 from './Imagenes/FotoSin2.png'
import RRR from './Imagenes/Reciclaje.png'
import RRR2 from './Imagenes/Reciclaje2.gif'
import CClimatico from './Imagenes/CClimatico.gif'
import CClimatico2 from'./Imagenes/CClimatico2.png'
import Contaminacion from './Imagenes/Contaminacion.gif'
import Contaminacion2 from './Imagenes/Contaminacion2.avif'
import img1 from './Imagenes/img_1.gif'
import imga1 from './Imagenes/img_1a.jpg'
import img2 from './Imagenes/img_2.gif'
import imga2 from './Imagenes/img_2a.jpg'
import img3 from './Imagenes/img_3.gif'
import imga3 from './Imagenes/img_3a.webp'
import img4 from './Imagenes/img_4.gif'
import imga4 from './Imagenes/img_4a.jpg'
import img5 from './Imagenes/img_5.jpg'
import imga5 from './Imagenes/img_5a.jpg'
import img6 from './Imagenes/img_6a.webp'
export function App () {
  return(
    <>
    <div className="title-container">
      <h1 className="main-title">Rinconcito verde</h1>
      <p className="subtitle">🌵 Descubre la magia de la <strong>naturaleza</strong> en cada hoja.🌵 </p>
    </div>
    <div className='contenedor'>
      <div className='Apli'>
        <BotonSupEXP 
          direccionImagen={arbol}
          imagenA={Imagena1}
          imagenB={imagenB1}
          textoA="La reforestación y la forestación son acciones positivas para el medio ambiente por varias 
          razones clave. En primer lugar, los bosques desempeñan un papel crucial en la absorción de dióxido de 
          carbono, ayudando a mitigar el cambio climático al actuar como sumideros de carbono. Al plantar árboles, 
          se contribuye a aumentar la capacidad de los ecosistemas para absorber y almacenar carbono atmosférico, 
          reduciendo así el impacto de las emisiones de gases de efecto invernadero."
          textoB="¡Hola pequeños superhéroes del planeta! ¿Sabían que plantar un árbol los convierte en héroes reales? Cada árbol que plantan ayuda a limpiar el aire, a dar hogar a animalitos y a mantener fresco nuestro hogar, la Tierra. ¡Únanse a la liga de los superhéroes del medio ambiente y planten árboles para hacer del mundo un lugar más feliz y saludable!"/>
        <BotonSupEXP 
        imagenA={img1}
        imagenB={imga1}
        textoA="Los cactus son plantas muy especiales que viven en lugares secos y desérticos. Tienen hojas gruesas y espinosas que les ayudan a almacenar agua, como si fueran pequeñas botellas. Aunque parecen difíciles, los cactus son muy fuertes y pueden sobrevivir en lugares donde otras plantas tendrían problemas. ¡Son como los superhéroes del desierto!"
        textoB="¿Sabían que los cactus son como los héroes secretos del desierto? Estas plantas mágicas tienen hojas gorditas y llenas de espinas que les ayudan a guardar agua, ¡como tener su propia botellita mágica! Aunque se ven un poco gruñones con sus espinas, son súper fuertes y valientes, viviendo en lugares donde el sol brilla mucho y la lluvia casi no visita. La próxima vez que vean un cactus, ¡salúdenlo y agradezcan por ser un increíble defensor del desierto! 🌵✨"
        direccionImagen={cactus} />
        <BotonSupEXP 
        direccionImagen={planta}
        imagenA={img2}
        imagenB={imga2}
        textoA="Las plantas son seres vivos mágicos que crecen en la tierra. Ellas toman el sol, beben agua y se visten de hermosas hojas y flores. Algunas plantas dan frutas deliciosas, como las manzanas y las fresas. ¡Son como los magos del jardín, haciendo que todo se vea bonito y lleno de vida!"
        textoB="Queridos amigos, ¡las plantas son como los guardianes del planeta! No solo son bonitas, sino que también nos dan aire fresco para respirar y nos regalan ricas frutas y verduras para comer. Si cuidamos de ellas, nos ayudarán a tener un mundo lleno de colores y alegría. ¡Así que abracen a sus plantitas, cuídenlas y vean cómo crecen felices! 🌱🌸"
        />
        <BotonSupEXP 
        direccionImagen={suculento}
        imagenA={img3}
        imagenB={imga3}
        textoA="Las plantas suculentas son como las súper héroes de las plantas. Tienen hojas gorditas que guardan mucha agua, ¡como pequeños globitos mágicos! Viven en lugares soleados y secos, y no les gusta beber demasiada agua. Son como pequeños tesoros que hacen que los jardines luzcan geniales y coloridos."
        textoB="¡Hola exploradores curiosos! Las plantas suculentas son como pequeñas maravillas en macetas. Solo necesitan un poco de sol y cariño, y pueden hacer que cualquier rincón se vea especial. ¿Quieren tener una en sus habitaciones? Son tan valientes que pueden vivir en lugares donde otras plantas no pueden. ¡Vamos a ser amigos de las suculentas y hacer que nuestros espacios sean más divertidos y alegres! 🌵🌟"
        />
        <BotonSupEXP 
        direccionImagen={PCarnivora} 
        imagenA={Carnivora}
        imagenB={Carnivora2}
        textoA="Las plantas carnívoras son aquellas que atraen, atrapan y digieren 
        a la presa para cumplir con sus necesidades nutricionales, aunque no las energéticas.
        Sin lugar a dudas, las plantas carnívoras son las más interesantes que existen en el 
        reino vegetal. Se trata de aquellas plantas capaces de alimentarse de diversas especies de insectos, 
        de pequeños reptiles y peces e incluso de roedores o hasta aves, dependiendo del tipo de planta carnívora 
        de la que se trate."
        textoB="Esta peculiar familia abarca una amplia variedad de especies, pero a groso modo se pueden clasificar
         en carnívoras de clima tropical y carnívoras de clima no tropical. Según la variedad que sea, los cuidados pueden variar."/>
        <BotonSupEXP 
        direccionImagen={vino}
        imagenA={img5}
        imagenB={imga5}
        textoA="Las plantas trepadoras son como los escaladores mágicos de la naturaleza. Les gusta abrazar cosas y subir alto, como si fueran pequeños exploradores del jardín. En lugar de quedarse en el suelo, estas plantas suben por paredes y árboles con ramitas y ganchitos, ¡haciendo que todo se vea lleno de magia y aventura!"
        textoB="¡Hola pequeños aventureros! Las plantas trepadoras son como las abrazadoras del mundo verde. Les encanta subir y jugar a las escondidas entre hojas y ramas. ¿Quieren un poco de diversión en su jardín? Inviten a las plantas trepadoras y vean cómo hacen que todo sea más emocionante y lleno de risas. ¡A explorar juntos! 🌿🌟"
        />
      </div>
    </div>
    <div className='Apli2'>Siempre tengo espacio en mi vida para otra plantita.</div>

    <div className="contenedor-inferior">
      <div className='Apli3'>
        <BotonMedio 
        direccionImagen={imagen_1} 
        imagenA={Plantita}
        imagenB={Plantas}
        textoA="Las plantas son organismos vivos que desempeñan un papel esencial en el equilibrio y la sostenibilidad de los ecosistemas terrestres. Estos seres multicelulares, pertenecientes al reino Plantae, tienen la capacidad única de realizar la fotosíntesis, un proceso mediante el cual convierten la luz solar en energía química para alimentarse. Las plantas varían enormemente en forma, tamaño y función, desde pequeñas hierbas hasta majestuosos árboles."
        textoB="Las plantas son como amigas mágicas que nos regalan oxígeno y colores hermosos. Para cuidarlas, aquí van algunos consejos mágicos. Agüita mágica: A las plantas les encanta el agua, así que dales un poquito de agüita cuando estén sedientas. Pero ¡cuidado! No les den demasiada, ¡todo en equilibrio!"
        textoDeImagen="¿Qué son las plantas?"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        direccionImagen={imagen_2} 
        imagenA={Planti}
        imagenB={PFlor}
        textoA="El objetivo principal de una flor es la reproducción del individuo 
        y de la especie. Todas las plantas con flores son heterosporosas, es decir, 
        cada planta individual produce dos tipos de esporas. Las microsporas son producidas 
        por la meiosis dentro de las anteras y las megasporas se producen dentro de los óvulos 
        que están dentro de un ovario. Las anteras consisten típicamente en cuatro microsporangias 
        y un óvulo es un megagasporangium integumentado."
        textoB="En la mayoría de las especies de plantas, las flores individuales tienen carpelos y estambres funcionales. 
        Los botánicos describen estas flores como perfectas o bisexuales, y las especies como hermafroditas. En una 
        minoría de especies de plantas, sus flores carecen de uno u otro órgano reproductor y se describen como imperfectas o unisexuales." 
        textoDeImagen="¿Qué función tienen las flores en las plantas?"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        direccionImagen={imagen_3}
        imagenA={PFlori}
        imagenB={PFlor2}
        textoA="Las partes de una flor son los sépalos, la corola, el androceo, el gineceo, los carpelos, el pedúnculo y el receptáculo. 
        Las partes de las flores se dividen en las que tienen una función reproductora y las que no. El androceo es la parte masculina 
        y el gineceo la parte femenina de la flor."
        textoB="Cuando una flor tiene todas estas estructuras se dice que son flores completas, por ejemplo los lirios. 
        Por el contrario, flores como la begonia, que no presenta pétalos, u otras flores que no poseen alguna de las partes, 
        se llaman flores incompletas." 
        textoDeImagen="¿Cuáles son las partes principales de una planta?"/>
      </div>

      <div className='Apli6'>
        <BotonMedioSuper 
          direccionImagen={sol}
          textoA="La fotosíntesis es el proceso metabólico por el que las plantas verdes convierten sustancias 
          inorgánicas (dióxido de carbono y agua) en sustancias orgánicas (hidratos de carbono) desprendiendo oxígeno, 
          y lo hacen aprovechando la energía de la luz solar. Además, es el principal proceso de nutrición de las plantas 
          y de otros organismos dotados de clorofila."
          textoB="La actual deforestación hace que la absorción de carbono disminuya cada vez más, emitiendo mayor 
          cantidad de gases de efecto invernadero, lo que ha ocasionado que la atmósfera se caliente y que los cambios en 
          el clima sean cada vez más extremos.  En un escenario de cambio climático, la importancia de la fotosíntesis aumente."
          imagenA={FotoS}
          imagenB={FotoS2}
          textoDeImagen="¿Qué es la fotosintesis? ☀️"/>

      </div>

      <div className='Apli3'>
        <BotonMedio 
          direccionImagen={imagen_4} 
          textoA="El reciclaje es el proceso mediante el cual los desechos se convierten en nuevos 
          productos o en recursos materiales con el que fabricar otros productos. De esta forma, los residuos se 
          someten a un proceso de transformación eco-ambiental para poder ser aprovechados en algún proceso de fabricación,
           reduciendo el consumo de materias primas y ayudando a eliminar residuos."
          textoB="Es importante diferenciar entre reciclar y reutilizar, siendo esto último el aprovechamiento de un determinado
           objeto para otro uso, sin necesidad de someterlo a un proceso físico-químico de transformación. Por ejemplo, utilizar 
           una botella como florero o hacer una cartera con un viejo pantalón vaquero. Mientras que el reciclaje implica la transformación 
           de los residuos, mediante procesos que convierten esos desechos en un producto o material nuevo."
          imagenA={RRR}
          imagenB={RRR2}
          textoDeImagen="¡Aprende sobre el reciclaje!"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        direccionImagen={imagen_5}
        textoA="El cambio climático es un cambio en el clima, atribuido directa o indirectamente a la actividad humana que 
        altera la composición de la atmósfera mundial, y que se suma a los cambios regulares que, de forma natural, se dan en el planeta."
        textoB="La Tierra tiene ciclos naturales que se cumplen cada cierto tiempo, entre los que están los cambios climáticos. Por ejemplo, 
        hace unos 10.000 años, el clima de nuestro planeta era más frío que el actual y los glaciares ocupaban un gran porcentaje de la 
        superficie terrestre; poco a poco sucedieron cambios que pusieron fin a ese último período glaciar."
        imagenA={CClimatico2}
        imagenB={CClimatico} 
        textoDeImagen="¿Cuáles son algunas causas del cambio climático?"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        direccionImagen={imagen_6}
        textoA=" Incentivar las caminatas, además del uso de la bicicleta y el transporte público para llegar al trabajo 
        Restringir o gravar el uso de plásticos de un solo uso, como bolsas, envases, botellas y cubiertos de plástico
        Restaurar los ecosistemas urbanos y desarrollar la naturaleza de manera sostenible mediante la promoción de áreas 
        como humedales urbanos y corredores verdes para proporcionar un hábitat para la biodiversidad"
        textoB="Recoger, separar y eliminar los residuos de forma segura para proteger la tierra y el agua, fomentar la reducción de sustancias nocivas 
        para el medio ambiente y fomentar el reciclaje por parte de los ciudadanos y las empresas, formar parte de organizaciones que fomentan la sustentabilidad y la restauración de la naturaleza y apoyar campañas que generen cambios en la sociedad, 
        pensadas en combatir la contaminación ambiental."
        imagenA={Contaminacion}
        imagenB={Contaminacion2}
        textoDeImagen="¿Cuál es tu misión en la prevención de la contaminación?"/>
      </div>
    </div>
    
    </>
  )
}
