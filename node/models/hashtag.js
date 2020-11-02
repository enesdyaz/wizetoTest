module.exports = (sequelize, DataTypes) => {
    const Hashtag  = sequelize.define('Hashtag', {   // user의 모델  // 테이브명 Hashtags
        content: {
            type: DataTypes.STRING(200), 
            allowNull: false
        },
    },
    {   // user의 설정 부분
        charset: 'utf8mb4', // 한국어 사용가능  mb4->이모티콘
        collate: 'utf8mb4_general_ci',  // 한국어 저장
    })


    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag'});  // 다대다 관계
    }   // associate 모델 관계
    return Hashtag;
}