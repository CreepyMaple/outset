const quoteSelector = document.getElementById('quoteSelector');
const quoteDisplay = document.getElementById('quoteDisplay');

quoteSelector.addEventListener('change', function () {
    const selectedOption = this.value;
    let quote;
    switch (selectedOption) {
        case 'option1':
            quote = '亚洲作家名言:村上春树说过,"当你穿过了暴风雨，你就不再是原来那个人。";林语堂说过，"一个人彻悟的程度，恰等于他所受痛苦的深度。"';
            break;
        case 'option2':
            quote = '欧洲作家名言:歌德说过，"谁若游戏人生，他就一事无成；谁不能主宰自己，便永远是一个奴隶。";尼采说过:"每一个不曾起舞的日子，都是对生命的辜负"';
            break;
        case 'option3':
            quote = '美洲作家名言:海明威说过,"现在不是去想缺少什么的时候，该想一想凭现有的东西你能做什么";马尔克斯说过,"生命中真正重要的不是你遭遇了什么，而是你记住了哪些事，又是如何铭记的"';
            break;
        default:
            quote = '';
    }
    quoteDisplay.textContent = quote;
});