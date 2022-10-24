# Store Manager 🛍️

This Project creates a RESTful API using the MSC (model-service-controller) architecture!

The API is a sales management system in the dropshipping format. It is possible to create, visualize and delete products and sales.

<strong>First commit:</strong> on Aug 11, 2022.

<strong>Here I had to exercise:</strong> MSC, Node.js, Express, MySQL, docker.

This is a back-end Project, part of my course at [Trybe](https://www.betrybe.com/).


<details>
 <summary><strong>📸 Endpoints Results Screenshots:</strong></summary><br />

GET /products </br>
<img src="assets/get-products.png" alt="GET /products" width="700"/>

POST /products </br>
<img src="assets/post-products.png" alt="POST /products" width="700"/>

DELETE /products/:id </br>
<img src="assets/delet-products-id.png" alt="DELETE /products/:id" width="700"/>

GET /sales </br>
<img src="assets/get-sales.png" alt="GET /sales" width="700"/>

POST /sales  </br>
<img src="assets/post-sales.png" alt="POST /sales" width="700"/>

GET /sales/:id </br>
<img src="assets/get-sales-id.png" alt="GET /sales/:id" width="700"/>

 </details>


# How to run it:

<details>
 <summary><strong> You need to have installed:</strong></summary><br />
 - Unix based Operational System <br />
 - node version >= 16.14.0 LTS <br />
 - Docker <br />
 - Docker-compose version >= 1.29.2 <br />
</details>
 

command: `npm install` <br />

Use Docker, commands:
  To start the container: `docker-compose up -d` <br />
  To acces the container: `docker exec -it store_manager bash` <br />
  To run the API, inside the container#: `npm run start` <br />
 
Use Insomnia or Postman or Thinder Client to check the API results


# Files/Folders Ownership

Here you find a list of files and or folders according to the ownership.

<details>
 <summary><strong>🙋‍♀️ I coded myself:</strong></summary><br />
   
  ```markdown  
    aseets/
    controllers/
    middlewares/ (except error.middleware.ts)
    models/
    routes/
    services/
    tests/
    thunder-tests/
    README.md
    
  ```
 
 </details>


<details>
 <summary><strong>🧑‍🤝‍🧑 I coded partially - the scholl has coded some of it:</strong></summary><br />
 
 ```markdown   
    app.js
    index.js
    
 ```
 
 </details>


<details>
 <summary><strong>🧛 coded by a teacher or a teammate:</strong></summary><br />
   
 ```markdown  
    middlewares/
      validacaoProduct.js -> partially coded in class by Henrique Baeta
      validacaoSale.js    -> partially coded in class by Henrique Baeta
    
  ```
 
 </details>

<details>
 <summary><strong>🏫 coded by the school:</strong></summary><br />
   
  ```markdown  
   all others not mentioned before.
  ```
 
 </details>
 
 #

✨ all icons used here are from:  [EmojiPedia](https://emojipedia.org/). 

#### 🚧 README under construction 🚧
<!--

-->


