module.exports = (sequelize, DataTypes) => {
    const Comment  = sequelize.define('Comment', {   // user의 모델  // 테이브명 Comments
        content: {
            type:DataTypes.TEXT,
            allowNull: false
        }
    },
    {   // user의 설정 부분
        charset: 'utf8mb4', // 한국어 사용가능  mb4->이모티콘
        collate: 'utf8mb4_general_ci',  // 한국어 저장
    })


    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User) // UserId가 자동으로 저장이 된다. Comment는 한명의 유저만 가질수가 있다  , db.User.hasMany(db.Comment)  유저는 여러개의 포스트를 가질수가 있다
        db.Comment.belongsTo(db.Post)
    }   // associate 모델 관계
    return Comment;
}