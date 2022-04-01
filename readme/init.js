/**
 * 改变头像徽章（愚人节）
 */
function changeAvatarBadgeWithAFD() {
    var nowDate = new Date()
    if (nowDate.getMonth() + 1 == 4 && nowDate.getDate() == 1) {
        var badgeEl = document.getElementById('avatar_badge')
        badgeEl.src = '../img/icon_badge_small.svg'
        badgeEl.title = "年度小会员"
    }
}

window.onload = function () {
    changeAvatarBadgeWithAFD()
}