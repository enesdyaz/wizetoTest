
const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt')  // password 암호화
//Passport (Login, Logout)
const session = require('express-session')
const cookie = require('cookie-parser')
const passportConfig = require('./passport')  // module 을 불러오기
const passport = require('passport')  // passport 불러오기
const morgan = require('morgan')
const db = require('./models')
const userRouter = require('./routes/user')

//APP 
passportConfig()   // passport module 실행
db.sequelize.sync({force: true})  // db 시작시 같이 작동  db.sequelize.sync({ force: true})  -> vuex 처럼 서버 재시작하면 데이터가 다 지워짐. 

app.use(morgan('dev'))  // 보통 morgan은 제일 위에둔다 요청이 왔을 때 cmd에 기록을 해주는 역할
app.use(cors(
    {
        origin: 'http://localhost:58603',
        credentials: true   // axios에서 cors 문제가 생길때 , 그리고 쿠키관련하여 넣어줘야한다
    })) 
app.use(express.json())  // json을 request로 받기 위함
app.use(express.urlencoded({extended: false}))  // html form에서 바로 받을 때 사용함
app.use(cookie('cookiesecret'))

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'cookiesecret',
    cookie: {
        httpOnly: true,
        secure: false,
    }
}))


app.use(passport.initialize())  // 로그인, 로그아웃 기능 만들어줌   req.login(user) 값을 만들면 여기서 처리한다
app.use(passport.session())  // 사용자 로그인한 정보





// API Route
app.use('/user', userRouter)
app.get('/', (req, res)=> {res.send('hello backend is working')})

app.listen(3001, () => {
    console.log(`backend server is listening at ${3001}` )
})