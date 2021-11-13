

export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div @click="showmydata" class="car-panel">
        <div>
            <img :src='"images/" + piece.carpic' :alt="piece.name">
        </div>
        
        <h2> {{piece.name}} </h2>
        <p> {{piece.description}} </p>
    </div>
    `
}