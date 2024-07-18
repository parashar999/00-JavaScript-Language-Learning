const accountId = 144553
let accountEmail = "parashartarun392000@gmail.com" // concept of scope is used
var accountPassword = "12345" // concept of scope is not used
let accountState
accountCity="Jaipur"
 // accountId = 2 Change in Constant Not allowed
 
 console.log(accountId);
 accountEmail="varuntarun2324@gmail.com" 
 console.log(accountEmail)

 accountPassword="54321"
 console.log(accountPassword);

 accountCity="Delhi"
 console.log(accountCity);
 console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

 // Comment format one
 /* Comment format two */
 // Note:- Please use let , not var if not required
 // ';' use or not use will not affect the code