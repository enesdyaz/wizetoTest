module.exports = (sequelize, DataTypes) => {
    const User  = sequelize.define('User', {   // user의 모델
        email: {    // 모델의 table
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true  // 중복금지
        },
        nickName: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {   // user의 설정 부분
        charset: 'utf8', // 한국어 사용가능
        collate: 'utf8_general_ci',  // 한국어 저장
    })


    User.associate = (db) => {
        db.User.hasMany(db.Post)    // 사용자는 여러개의 개시글을 가질수가 있다
        db.User.hasMany(db.Comment)    // 사용자는 여러개의 개시글을 가질수가 있다
    }
    return User;
}