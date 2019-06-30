const assert = require('chai').assert;
const admin = require('../models/admin');
const chaiHttp = require('chai-http');
const mongoose = require("mongoose");
const chai = require('chai');
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

var expect = chai.expect;

describe('/admin', function() {
    this.timeout(15000);
    it('it should return success message object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/admin/register')
            .send({
                "username": "tom",
                "name": "Tom Marvallo Riddle",
                "email": "tom@gmail.com",
                "password": "12345",
                "isadmin": "true"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return success message object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/admin/dashboard')
            .send({
                "username": "tom"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return success message object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/admin/login')
            .send({
                "email": "tom@gmail.com",
                "password": "12345"

            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });



    it('it should return unauthorized error', function (done) { //headers not pass
        this.timeout(15000);
        chai.request(app)
            .post('/admin/getprofile')
            .send({
                "username" : "tom",
                "name" : "Tom Marvallo Riddle",
                "email": "tom@gmail.com",
                "password": "12345",
                "isadmin":"true"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(401);
                done()
            });

    });

});
describe('/recipe',function(){
    it('it should return new recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/saverecipe')
            .send({
                "ingredients": [
                    "potatoes ",
                    "oil",
                    "onions",
                    "garlic",
                    "beef",
                    "tomatoes",
                    "black beans",
                    "cheese"
                ],
                "health": [],
                "occasion": [],
                "name": "Baked chilli & jacket potatoes",
                "rating": 0,
                "description": "Jacket potatoes and chilli are great comfort food when the nights draw in. Make ours in the week when you're short on time for a nutritious family dinner",
                "img": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/10/baked-chilli-jacket-potatoes.jpg?itok=ncySCTyr",
                "method": "1. Heat oven to 200C/180C fan/gas 6. Prick the potatoes all over with a fork, then put on a baking sheet and bake in the oven for 1 hr.\n 2. While the potatoes are baking, heat the oil in a large frying pan. Add the onion and fry over a high heat for 5 mins until softened. Add the garlic and chilli sachet. Stir a few times to coat the onions in the spices, then tip the onion mixture into a large ovenproof dish.\n3. Put the pan back over high heat and add the beef mince, breaking it up with a spatula as you go. Cook until starting to become crisp at the edges, then add to the dish with the onions. Return the pan to heat and cook the bacon until crisp at the edges. Add the bacon to the beef and stir to combine.\n4. Stir in the tomato purée and tomatoes, then put the dish in the oven with the potatoes and bake for 25-30 mins until bubbling and starting to thicken. Stir in the beans and season well. Return to the oven for 5 mins to warm through.\n5. Cut a cross in the top of each potato and squeeze the sides to open. Spoon in the baked chilli and top with soured cream, cheese and coriander if you like.",
                "author": "asmanjitha",
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/health')
            .send({
                "health": [
                    "pregnant"
                ]
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/ingredients')
            .send({
                "ingredients": [
                    "potatoes ",
                    "oil",
                    "onions",
                    "garlic",
                    "beef",
                    "tomatoes",
                    "black beans",
                    "cheese"
                ]
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/ingredientsexcept')
            .send({
                "ingredients": [
                    "potatoes "
                ]
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/occasion')
            .send({
                "occasion": [
                    "dinner"
                ]
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/id')
            .send({
                "id":"5afbf6efbb96ed0644c7ee6f"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/author')
            .send({
                "author":"asmanjitha"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return success message', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/savecomment')
            .send({
                "_id":"5afbf6efbb96ed0644c7ee6f",
                "comments":{"asm":"tasty","bng":"top","as":"good","tom":"great"}
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return success message', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/recipe/saverate')
            .send({
                "_id":"5afbf6efbb96ed0644c7ee6f",
                "rating":3.75
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });
})

describe('/temprecipe',function(){
    it('it should return new recipe object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/temprecipe/saverecipe')
            .send({
                "ingredients": [
                    "potatoes ",
                    "oil",
                    "onions",
                    "garlic",
                    "beef",
                    "tomatoes",
                    "black beans",
                    "cheese"
                ],
                "health": [],
                "occasion": [],
                "name": "Baked chilli & jacket potatoes",
                "rating": 0,
                "description": "Jacket potatoes and chilli are great comfort food when the nights draw in. Make ours in the week when you're short on time for a nutritious family dinner",
                "img": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/10/baked-chilli-jacket-potatoes.jpg?itok=ncySCTyr",
                "method": "1. Heat oven to 200C/180C fan/gas 6. Prick the potatoes all over with a fork, then put on a baking sheet and bake in the oven for 1 hr.\n 2. While the potatoes are baking, heat the oil in a large frying pan. Add the onion and fry over a high heat for 5 mins until softened. Add the garlic and chilli sachet. Stir a few times to coat the onions in the spices, then tip the onion mixture into a large ovenproof dish.\n3. Put the pan back over high heat and add the beef mince, breaking it up with a spatula as you go. Cook until starting to become crisp at the edges, then add to the dish with the onions. Return the pan to heat and cook the bacon until crisp at the edges. Add the bacon to the beef and stir to combine.\n4. Stir in the tomato purée and tomatoes, then put the dish in the oven with the potatoes and bake for 25-30 mins until bubbling and starting to thicken. Stir in the beans and season well. Return to the oven for 5 mins to warm through.\n5. Cut a cross in the top of each potato and squeeze the sides to open. Spoon in the baked chilli and top with soured cream, cheese and coriander if you like.",
                "author": "asmanjitha",
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return success message', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/temprecipe/delete')
            .send({
                "_id": {
                    "$oid": "5afbf2f7eec5991790428fed"
                },
                "ingredients": [
                    "potatoes ",
                    "oil",
                    "onions",
                    "garlic",
                    "beef",
                    "tomatoes",
                    "black beans",
                    "cheese"
                ],
                "health": [],
                "occasion": [],
                "name": "Baked chilli & jacket potatoes",
                "rating": 0,
                "description": "Jacket potatoes and chilli are great comfort food when the nights draw in. Make ours in the week when you're short on time for a nutritious family dinner",
                "img": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/10/baked-chilli-jacket-potatoes.jpg?itok=ncySCTyr",
                "method": "1. Heat oven to 200C/180C fan/gas 6. Prick the potatoes all over with a fork, then put on a baking sheet and bake in the oven for 1 hr.\n 2. While the potatoes are baking, heat the oil in a large frying pan. Add the onion and fry over a high heat for 5 mins until softened. Add the garlic and chilli sachet. Stir a few times to coat the onions in the spices, then tip the onion mixture into a large ovenproof dish.\n3. Put the pan back over high heat and add the beef mince, breaking it up with a spatula as you go. Cook until starting to become crisp at the edges, then add to the dish with the onions. Return the pan to heat and cook the bacon until crisp at the edges. Add the bacon to the beef and stir to combine.\n4. Stir in the tomato purée and tomatoes, then put the dish in the oven with the potatoes and bake for 25-30 mins until bubbling and starting to thicken. Stir in the beans and season well. Return to the oven for 5 mins to warm through.\n5. Cut a cross in the top of each potato and squeeze the sides to open. Spoon in the baked chilli and top with soured cream, cheese and coriander if you like.",
                "author": "asmanjitha",
                "__v": 0
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                done()
            });

    });

    it('it should return all temp trciles', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/temprecipe/searchall')
            .send({
                "_id": {
                    "$oid": "5adf230014bf3c001489a108"
                }
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return temp recipe', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/temprecipe/id')
            .send({
                "id": "5afbf2f7eec5991790428fed"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });
});


describe('/user', function() {
    it('it should return success message object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/user/register')
            .send({
                "username": "tom",
                "name": "Tom Marvallo Riddle",
                "email": "tom@gmail.com",
                "password": "12345",
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });


    it('it should return success message object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/user/login')
            .send({
                "email": "tom@gmail.com",
                "password": "12345"

            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });

    it('it should return user object', function (done) {
        this.timeout(15000);
        chai.request(app)
            .post('/user/email')
            .send({
                "email": "tom@gmail.com",

            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            });

    });



    it('it should return unauthorized error', function (done) { //headers not pass
        this.timeout(15000);
        chai.request(app)
            .post('/user/profile')
            .send({
                "username" : "tom",
                "name" : "Tom Marvallo Riddle",
                "email": "tom@gmail.com",
                "password": "12345",
                "isadmin":"true"
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(401);
                done()
            });

    });
});


