const express = require('express')
const router = express.Router()
const passport = require('passport')

const db = require('../models')

router.post('/')

//SIGN UP
router.post('/',  async(req, res, next)=> {
    try{
        // const hash = await bcrypt.hash(req.body.password, 12)  
        const exUser = await db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        if(exUser){
            return res.status(404).json({   // return을 꼭 입력해야 한다.  요청한번에 응답한번, 
                errorCode: '404',
                message: 'This email address has already signed up'
            })
        }
        const newUser = await db.User.create({
            email: req.body.email,
            password: req.body.password,
            nickName: req.body.nickName
        })  // HTTP STATUS CODE  검색하여 자세히 알아보기
        return res.status(201).json(newUser);  // send는 문자로 json은 JSON 문자로
    } 
    catch(error){ 
        return next(error)   // next는 라우터로 error를 넘겨주는 역할을 한다
    }
    
})

// LOGIN
router.post('/login', (req, res, next)=>{
    passport.authenticate('local', (err, user, info) => {
        if(err){
            console.log(err)
            next(err)
        }
        if(info){
            return res.status(401).send(info.reason)
        }
        return req.login(user, async(err)=>{  // login()에서 cookie를 자동설정하고, return되는 함수를 passport/index.js에서 serializer로 만듦 / head부분
            try{
                if(err){
                    console.log(err)
                    next(err)
                }
                return res.json(user)  // 최종 front로 넘겨주기  // body부분
            }catch(err){
                console.log(err)
            }
        })   // passport.initialize()에서 login을 만들어 세션을 만들수가 있음 (세션은 serializer로 만들수가 있음 - passport/index.js)
    })(req, res, next)

})


//LOGOUT
router.post('/logout', (req, res) => { // 실제 주소는 /user/logout
    if (req.isAuthenticated()) {
      req.logout();
      req.session.destroy(); // 선택사항
      return res.status(200).send('로그아웃 되었습니다.');
    }
  })


module.exports = router