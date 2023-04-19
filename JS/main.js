var app = new Vue({
    el:".tovar-tomato",
    data:{
        products:
        [{
            id:"tomatos-1", 
            title:"Articul: 10112",
            short_text:'Stardant Orange',
            href:'tomato-one.html',
            desc:"Full desc"
        },
        {   id:"tomatos-2", 
            title:"Articul: 10123", 
            short_text:'Cintrag Orange', 
            href:'#',
            desc:"Full desc"
        },    
        {   
            id:"tomatos-3", 
            title:"Articul: 11232", 
            short_text:'Korolki Orange', 
            href:'tomato-one.html',
            desc:"Full desc"
        },
        {
            id:"tomatos-4", 
            title:"Articul: 21343", 
            short_text:'Pup Orange', 
            href:'tomato-one.html',
            desc:"Full desc"
        },
        {
            id:"tomatos-5", 
            title:"Articul: 43423", 
            short_text:'Tomaswil Orange', 
            href:'tomato-one.html',
            desc:"Full desc"
        }]},
   
    // mounted:function(){
    //     console.log(window.localStorage.getItem('prod'));
    // },
    // methods:{
    //     addItem:function(id) {
    //         window.localStorage.setItem('prod', id);
    //     }
    // }
});