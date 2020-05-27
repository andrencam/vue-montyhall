import Vue from 'vue'
import App from './App'

new Vue({ //parametros para carregar componente app
    render: h => h(App)
    // el: '#app',
    // render(createElement) { //funcao render para criar o componente
    //     return createElement(App)
    // }
}).$mount("#app")