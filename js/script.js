// 更新密码长度值显示
function updateLengthValue(value) {
    document.getElementById('lengthValue').innerText = value;
}

// 根据选择的选项生成随机密码
function generatePassword() {
    const length = document.getElementById('lengthRange').value;
    const includeLetters = document.getElementById('includeLetters').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    let characters = '';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = ';,:/_@*#';

    if (includeLetters) characters += letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters === '') {
        alert('请至少选择一种字符类型');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('passwordOutput').value = password;

    // 增加点击次数并更新本地存储
    incrementClickCount();
}

// 增加点击次数并更新本地存储
function incrementClickCount() {
    let clickCount = localStorage.getItem('clickCount') || 0;
    clickCount = parseInt(clickCount) + 1;
    localStorage.setItem('clickCount', clickCount);
    updateClickCountDisplay(clickCount);
}

// 更新显示的点击次数
function updateClickCountDisplay(clickCount) {
    document.getElementById('clickCountDisplay').innerText = `生成密码按钮点击总次数：${clickCount}`;
}

// 初始化点击次数显示
function initializeClickCount() {
    const clickCount = localStorage.getItem('clickCount') || 0;
    updateClickCountDisplay(clickCount);
}

// 切换 FAQ 答案的可见性
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// 页面加载时初始化点击次数显示
window.onload = initializeClickCount;
