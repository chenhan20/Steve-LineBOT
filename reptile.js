const request = require('request');

//取得隊伍對應名稱

let reptile = async() => {

    let Team = await getTeamMappingArray();
    return Team;

    function getTeamMappingArray() {
        return new Promise((resolve, reject) => {
            request('https://data.nba.net/prod/v1/2017/teams.json', (err, res, body) => {
                if (!err && res.statusCode == 200) {
                    var teams = JSON.parse(body);
                    var mapping = [];
                    teams.league.standard.forEach((obj) => {
                        mapping[obj.tricode] = obj;
                    });
                    resolve(mapping)
                } else {
                    reject('取得隊伍資訊失敗' + err.message);
                }
            });
        });
    }
}


module.exports = reptile;