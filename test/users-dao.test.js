var usersDao = require('../lib/users-dao.js');

describe('users-dao', function () {

    beforeEach(function () {

    });

    describe('users CRUD', function () {

        it('should check save new user', function (done) {
            usersDao.insert({username: "user" + Math.random(), password: "otherpass1"}, function (updatedUser) {
                //console.log("inserted user: " + JSON.stringify(updatedUser));
                if (updatedUser == null)
                    throw new Error('could not insert new user');
                done();
            });
        });

        it('should check update existing user', function (done) {
            usersDao.update({username: "adi", password: "pass"}, function (updatedUser) {
                console.log("updated user: " + JSON.stringify(updatedUser));
                if (updatedUser == null)
                    throw new Error('could not update user');
                done();
            });
        });
    });
});
