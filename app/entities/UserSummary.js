class UserSummary {
  constructor(data) {
    this.userId = data.userId;
    this.nickName = data.nickName;
    this.prefecture = data.prefecture;
    this.comment = data.comment;
    this.userImageUrl = data.userImageUrl;
  }
}

export default UserSummary;
