# indra
Prueba tecnica para indra

Para desplegar el proyecto se debe estar en el directorio principal donde se encuentran las fuentes y desde linea de comandos escribir <sub>php artisan serve</sub>, si desea hacer un cambio y afecta los js de react debe correr tambien en el directorio mencionado <sub>npm run dev</sub> o mantener ejecutado <sub>npm run watch</sub>.

Si hay conflicto de versiones de componentes se debe eliminar los archivos con extension .lock ej: <sub>composer.lock</sub> y <sub>package-lock.json</sub>, correr <sub>composer install</sub> y <sub>npm install</sub>.

La base de datos se debe restaurar desde el archivo base_indra_tabla_multiplicacions.sql

