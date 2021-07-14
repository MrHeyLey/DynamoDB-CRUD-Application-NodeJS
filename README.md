## DynamoDB CRUD Application NodeJS

<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/> <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/> <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/> <a href="https://www.buymeacoffee.com/mrheyley" target="_blank"><img alt="BuyMeACoffee" src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" /></a>

Amazon Web Service DynamoDB Create, Read, Update, Delete Application using NodeJS

### Dependencies

* bootstrap
* connect-flash
* dynamoose
* express
* express-session
* jquery
* nodemon
* path
* pug
* uuid

### 1. Install Dependencies

```console
npm install
```

### 2. Configure <a href="https://dynamoosejs.com/">Dynamoose</a>

How to create AWS IAM user - <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.client.create-user-policy.html">Docs</a>

The following code will change the AWS-SDK global settings to use the configuration options.

```javascript
dynamoose.aws.sdk.config.update({
    "accessKeyId": "",
    "secretAccessKey": "",
    "region": "" // ap-southeast-1
});
```

### Start Application

```console
npm start
```

### Start Application as Dev
```console
npm run dev
```

### Hostname
```link
http://<your ip address, domain or localhost>:<your custome port or default port 3000>
```

#### If this repo helps you. don't forget to,
<a href="https://buymeacoffee.com/mrheyley"><img width="150" alt="bmc-button" src="https://user-images.githubusercontent.com/44564741/125607774-5192db0e-86cd-4b40-9253-c6b339127853.png"></a>

