export default function({ store}) {
    if (store.state.users.me){
        redirect('/')    // 로그인이 안되어있으면 redirect
    }
}