/**
 * Created by if_found_call_0586288454 on 18/07/2017 ap. J.-C..
 */


var request = require('request');
var cheerio = require('cheerio');

function parseRecipe(url) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error) {
                return reject(error)
            } else {
                if (response.statusCode === 200) {
                    var $ = cheerio.load(body);
                    var recipeObj = {
                        'yield': $('.yield').last().text(),
                        'activeTime': $('.active-time').last().text(),
                        'totalTime': $('.total-time').last().text(),
                        'preparation': $('.preparation-groups').text()
                    }
                    resolve(recipeObj);
                }
            }
        })
    })
}

module.exports = {parseRecipe}