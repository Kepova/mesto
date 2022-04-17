export default class UserInfo {
  constructor({ userName, userInfo, profileAvatarSelector }) {
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
    this._avatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      profession: this._userInfo.textContent,
      // avatar: this._avatar.src
    };
  }

  setUserInfo(name, profession, avatar) {
    this._userName.textContent = name;
    this._userInfo.textContent = profession;
    this._avatar.src = avatar;
  }
}
