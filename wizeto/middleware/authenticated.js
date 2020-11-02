// login 사용자인지 검사

export default function({store, redirect}) {
    if (!store.state.users.me){
        redirect('/')    // 로그인이 안되어있으면 redirect
    }
}

// 여기에서 비동기 axios, dispatch 다 가능함