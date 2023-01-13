const appdata = {
    data() {
        return {
            message: "こんばんは"

        }
    }
} 

let app = Vue.createApp(appdata).mount('#app')