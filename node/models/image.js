module.exports = (sequelize, DataTypes) => {
    const Image  = sequelize.define('Image', {   // user의 모델  // 테이브명 Images
        src: {
            type: DataTypes.STRING(200), 
            allowNull: false
        },
    },
    {   // user의 설정 부분
        charset: 'utf8', // 한국어 사용가능  ->이모티콘
        collate: 'utf8_general_ci',  // 한저장
    })


    Image.associate = (db) => {
        db.Image.belongsTo(db.Post) // UserId가 자동으로 저장이 된다. Image는 한명의 유저만 가질수가 있다  , db.User.hasMany(db.Image)  유저는 여러개의 포스트를 가질수가 있다
    }   // associate 모델 관계
    return Image;
}