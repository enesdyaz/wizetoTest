module.exports = (sequelize, DataTypes) => {
    const Post  = sequelize.define('Post', {   // user의 모델  // 테이브명 posts
        content: {
            type: DataTypes.TEXT, 
            allowNull: false
        },
    },
    {   // user의 설정 부분
        charset: 'utf8mb4', // 한국어 사용가능  mb4->이모티콘
        collate: 'utf8mb4_general_ci',  // 한국어 저장
    })


    Post.associate = (db) => {
        db.Post.belongsTo(db.User) // UserId가 자동으로 저장이 된다. Post는 한명의 유저만 가질수가 있다  , db.User.hasMany(db.Post)  유저는 여러개의 포스트를 가질수가 있다
        db.Post.hasMany(db.Comment);  // a 라는 글을 쓴 사람 다 가져오기
        db.Post.hasMany(db.Image);  // a 라는 글을 쓴 사람 다 가져오기
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});  // 다대다 관계에서는 중간 테이블 PostHashtag를 만듦
    }   // associate 모델 관계
    return Post;
}