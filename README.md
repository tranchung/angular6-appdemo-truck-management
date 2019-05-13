# angular6-appdemo-truck-management

cd truckManager

npm install --save 

npm install json-server 
npm install angular-mocks

#Run mock server with data in db/db json that i configured with some init data
open new terminal and type:
json-server --watch db/db.json
this mock server will run in port 3000: http://localhost:3000/trucks

#run app
npm start

this application run in port  : http://localhost:4200/trucks

In this feature : i just make a 
-base demo for CRUD a truck 
-with mock json server and store in Store Global.truck  
-using AXIOS for fetching data from mock server ( but i have some problem , 
cause of type return is not Observable so that i can not integrate with
NGXS/NGRX statement managerment
-CSS: bootraps
)

Next feature:
-using Form Control of Angular
-Validation
-Use NGXS - new statement managerment for old NGRX
-Searching
-Webpack config
-Update/Create for cargos type.

