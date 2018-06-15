
[vue Review Day 4]

-vue HTTP 

HTTP(HyperText Transfer Protocol), as we all know...

`a communication protocol 
between browsers and servers 
to transfer data 
upon request(from browser) and response(from server)`

famous web app HTTP : ajax of jQuery

a vue library to support ajax : vue resource, axios

-vue resource : maybe a bit outdated...? axios better
-axios : officially the most used vue library for HTTP comm.
	 Promise-based APIs provided

Promise: as JS has single thread, we use Promise to process async logic. 
single thread: doesn't wait until a logic is finished. 
Promise will wait and get the final data.


axios API formats:
   axios.get('URL address').then().catch();

   axios.post('URL address').then().catch();
   
   axios({
       method:'get',
       url:'URL address',            
      });


response data type of axios is already json, hence no need of JSON.parse() process. 

         