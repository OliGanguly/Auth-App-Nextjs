
# Next Js

Next js is a framework build on top of React js.



## Features

User Authentication System 
- Sign Up -> Login -> Profile -> Reset Password ->Verfiy User
- ![MyAuthProject](https://github.com/OliGanguly/Auth-App-Nextjs/assets/82031303/2277bc5b-9371-4945-a61a-df1c6d4b8efc)
![FolderStructure](https://github.com/OliGanguly/Auth-App-Nextjs/assets/82031303/813eb89e-b133-4046-9911-fedd52fc871c)





## Tech Stack

**Client:** Next Js , React Js

**DB:** mongoDB , mongoose


## Documentation

- Therory

- mondo Atlus
In production application my app wont communicate with local mongodb service but instead with a mongodb serve online.One example in mongodb atlus[free tier cloud database]
- Process of Build a DB in MongoDB Atlus
- build database -> aws [Free] -> Choose Location -> create -> Cluster is created 
- DashBorad -> Network Access [From where your application should be available] -> 0.0.0.0/0 [Default From anywhere]
- Database Access -> Create Sample User.
- Database -> connet ->Compas ->Copy URL
mongodb+srv://oli:<password>@cluster0.yo4dkqn.mongodb.net/

## Installation

Install

```bash
 npx create-next-app@latest
```
run

```bash
 npm run dev
```

## Dependencies

Install my-project with npm

```bash
  npm i axios bcryptjs jsonwebtoken nodemailer react-hot-toast mongoose
```
- axios - fetch data from api
- bcryptjs - encrypt password + creating tokens
- jsonwebtoken - securing send tokens
- nodemailer - shoot out email
- react-hot-toast - small pop up messages
- mongoose -helps to talk with mongodb, its a wrapper around mongoDB Driver





