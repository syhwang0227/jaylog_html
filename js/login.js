// 로그인 하기

// 1. 로그인 버튼 함수 만들기
function login() {

    const checkLoginResult = checkLoginFields();

    if(!checkLoginResult){
        return;
    }

    // 로그인 진행
    const loginUsernameElement = document.getElementById("loginUsername");
    const loginPasswordElement = document.getElementById("loginPassword");

    const newLoginUser = {
        loginUsername: loginUsernameElement.value,
        loginPassword: loginPasswordElement.value
    }

    console.log(newLoginUser);

    alert("로그인이 완료 되었습니다.");
}

// 2. 로그인 내용 체크 함수 만들기
function checkLoginFields() {
    // id들
    // loginUsername
    // loginPassword

    const loginUsernameElement = document.getElementById("loginUsername");
    const loginPasswordElement = document.getElementById("loginPassword");

    // loginUsername이 없으면 안 됨
    if(loginUsernameElement.value == ""){
        alert("ID를 입력해주세요.");
        loginUsernameElement.focus();
        return false;
    }

    // loginPassword가 없으면 안 됨
    if(loginPasswordElement.value == ""){
        alert("비밀번호를 입력해주세요.");
        loginPasswordElement.focus();
        return false;
    }

    return true;
}