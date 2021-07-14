const dynamoose = require('dynamoose');

const RecordSchema = new dynamoose.Schema({
    "name": String,
    "email": String,
    "bio": String,
    "id": {
        type: String,
        "hashKey": true
    }
}, { timestamps:true });

const Records = dynamoose.model('Records', RecordSchema);

module.exports = Records;