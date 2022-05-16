# Green Travel

### La función de Green Travel es mostrar destinos turísticos sustentables, recomendar actividades en cada zona turística e información sobre la fauna que el lugar tiene.
### La app se maneja en base a 3 roles, los cuales son admin, owner y user, el fronted lo hicimos con react, redux para el manejo del store y el backend lo hicimos con nodeJS y express. 
### Lo primero que vemos al ingresar al sitio es la pantalla de inicio, donde damos una pequeña bienvenida dando una introducción sobre nosotros y algunas imágenes sobre sitios de interés turísticos. En el header tenemos 3 apartados, el inicio, login y el registro.
![image](https://user-images.githubusercontent.com/84252964/168501967-10c348d0-775b-404f-8073-4ad4c54d3cb8.png)
### En la sección de login tenemos un pequeño formulario donde el usuario iniciara sesión con la cuenta que creo previamente, la autenticación la hicimos con JSON Web token.
![image](https://user-images.githubusercontent.com/84252964/168502009-5f1969cb-31bc-45fa-a439-2bc2b0ddbde4.png)
### En la sección de registro tenemos un formulario el cual debemos llenar para crear nuestra cuenta, los datos se almacenan en una base de datos de mongo, por lo tanto es no relacional.
![image](https://user-images.githubusercontent.com/84252964/168502018-8190db19-b35d-4716-9865-a321ceba2c4e.png)
### Cuando creamos nuestra cuenta o iniciamos sesión nos arroja una ventana con destinos que podemos visitar, además de que el usuario puede realizar reportes sobre lo que observe en su visita al sitio turístico.
![image](https://user-images.githubusercontent.com/84252964/168502024-8006b837-9c60-4a18-87e0-227038c6f944.png)
### Cuando le damos al botón de “ver más” entramos a una nueva pagina que nos da información sobre el lugar, actividades, su ubicación, algunas recomendaciones y la fauna del lugar, 
![image](https://user-images.githubusercontent.com/84252964/168502031-6735b2b6-b5b9-45f0-b15d-a3b6750738b5.png) 
### Cuando iniciamos sesión con la cuenta del administrador podemos ver todos los reportes que han hecho los usuarios, los reportes pueden ser desde observaciones del lugar, gente incumpliendo las reglas o quejas.
![image](https://user-images.githubusercontent.com/84252964/168502036-352602e6-f2bb-4188-a603-eae3ddb039b0.png)
