// 根據訊息進行function分類
let messageFn = (reqText) => {
    let returnText;
    if (reqText.indexOf('AllTeam') != -1 || reqText.indexOf('隊伍') != -1) {
        returnText = 'AllTeam';
    } else {
        //default
    }
    return returnText;
}


module.exports = messageFn;