import { getData } from "./components/TheDataMiner.js";
import TheThumbnailComponent from "./components/TheThumbNail.js";


(() => {
    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.carData = data );
        },

        data: {
            carData: [],
            message: "hello from Vue"
        },

        methods: {

        },

        components: {
            thumb: TheThumbnailComponent
        }
    }).$mount("#app");   
})();