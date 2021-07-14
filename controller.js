const Records = require('./models/record');
const uuid = require('uuid');

module.exports = {

    getHomeView: async function(req, res) {
        const records = await Records.scan().exec();
        res.render('index', {
            'records': records
        });
    },

    getCreateView: function(req, res) {
        res.render('create');
    },

    getUpdateView: async function(req, res) {
        const id = req.params.id;
        const record = await Records.get(id);
        res.render('update', { 'record': record });
    },

    getInfoView: async function(req, res) {
        const id = req.params.id;
        const record = await Records.get(id);
        res.render('info', { 'record': record });
    },

    createRecord: async function(req, res) {
        const { name, email, bio } = req.body;
        const id = uuid.v1();

        const newRecord = new Records;
        newRecord.name = name;
        newRecord.email = email;
        newRecord.bio = bio;
        newRecord.id = id;

        await newRecord.save().then(function() {
            req.flash('success', 'Record Created.');
            return res.redirect('back');
        }).catch(function(err) {
            console.log(err);
            req.flash('error', err.message);
            return res.redirect('back');
        });
    },

    deleteRecord: async function(req, res) {
        const id = req.params.id;

        const record = await Records.get(id);

        await record.delete().then(function() {
            req.flash('success', 'Record Deleted.');
            return res.redirect('back');
        }).catch(function(err) {
            console.log(err);
            req.flash('error', err.message);
            return res.redirect('back');
        });
    },

    updateRecord: async function(req, res) {
        const { name, email, bio } = req.body;
        const id = req.params.id;

        const record = await Records.get(id);
        record.name = name;
        record.email = email;
        record.bio = bio;

        await record.save().then(function() {
            req.flash('success', 'Record Updated.');
            return res.redirect('back');
        }).catch(function(err) {
            console.log(err);
            req.flash('error', err.message);
            return res.redirect('back');
        });
    }

}