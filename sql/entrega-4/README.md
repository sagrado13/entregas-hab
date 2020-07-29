# La Zona Azul

Estás colaborando en el desarrollo de una aplicación web para la gestión de la zona azul de tu
ciudad. Se trata de una web desde la que cualquier persona que lo desee (se supone que los vayan
a hacer uso de dicha zona, pero no es un requisito obligatorio) puedan registrarse para ver toda la
información sobre las zonas azules de la ciudad y además podrán gestionar sus pagos, multas y demás
información sobre el uso que haga de la misma, aparcando su vehı́culo.

La idea es que cada zona tenga un nombre (será el nombre del barrio donde esté ubicada), un
horario (hora de inicio y hora de fin) en la que se cobrará por aparcar, un precio por minuto, un lı́mite de tiempo (en minutos) y un campo para observaciones (algunas veces, por obras en la ciudad, podrá estar prohibido aparcar incluso pagando).

Cada usuario, al registrarse, tendrá que facilitar algunos datos personales como: nombre, apellidos, DNI, email, teléfono móvil y un número de cuenta (donde se le harán los cargos correspondientes al uso de la zona azul que haga). Además, podrá registrar sus vehı́culos en la aplicación y asociarlos a su usuario. Tendrá que facilitar la matrı́cula, la marca, el modelo e indicar qué tipo de vehiculo es (que sólo podrá ser coche, moto o furgoneta, ya que el resto de vehı́culos no pagan y no tiene sentido que se registren).

El ayuntamiento ha invertido en el proyecto mucho dinero y hay cámaras por todas estas zonas,
de forma que detectan cuando la gente aparca (se enteran de cuando aparcas y cuando te vas) por lo
que el cobro es totalmente automático. Cada vez que un coche aparca se registra dicha información y
cuando ese vehı́culo se va, se actualiza dicho registro. En total, se guarda la fecha de aparcamiento y la fecha de salida, y si se ha sobrepasado el lı́mite de tiempo (o no). En caso de que el tiempo se sobrepase también se quiere guardar a cuanto asciende la multa asociada a dicho registro. Actualmente la multa por sobrepasar el tiempo es fija para toda la ciudad y es independiente del tiempo que se sobrepase.

Los usuarios, entrando a la web, pueden comprobar esos registros en cualquier momento. Los cobros
se cargan automáticamente a la cuenta asociada por lo que el usuario no tiene que hacer nada más a
ese respecto. Simplemente podrá hacer alguna reclamación si ve que algún cobro es injusto. En ese caso podrá escribir un mensaje (haciendo click a un botón que aparece al lado de cada registro) indicando el motivo de la queja (se guardará además la fecha de esta reclamación y, obviamente, quedará vinculada al usuario y registro concreto). Dicha reclamación se tramitará manualmente y, como resultado, podrá anularse la multa o no asociada a dicho registro de aparcamiento. Para eso se añadirá a la reclamación algo que indique si está tramitada o no, y en caso de que lo esté, si se aceptó o rechazó finalmente.

- Realiza el Diagrama Entidad-Relación que modele esta Base de Datos (un único fichero en formato
imagen con el diagrama)

- Prepara el script SQL para crear las tablas necesarias para crear esta Base de Datos en MySQL (un
único script SQL)
