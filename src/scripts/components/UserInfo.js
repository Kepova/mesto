export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    };
  }

  setUserInfo(name, profession) {
    this._userName.textContent = name;
    this._userInfo.textContent = profession;
  }
}
