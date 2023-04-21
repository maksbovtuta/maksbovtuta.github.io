var app = new Vue({
    el:".tovar-tomato, .main-tomato-one",
    data:{
        products:
        [{
            id:"tomatos-1", 
            title:"Articul: 10112",
            short_text:'Stardant Orange',
            href:'tomato-one.html',
            img:'standart.jpg',
            desc:"Full desc"
        },
        {   id:"tomatos-2", 
            title:"Articul: 10123", 
            short_text:'Cintrag Orange', 
            href:'#',
            img:'cintrag-orange.jpg',
            desc:"Full desc"
        },    
        {   
            id:"tomatos-3", 
            title:"Articul: 11232", 
            short_text:'Korolki Orange', 
            href:'tomato-one.html',
            img:'korolki-orange.jpg',
            desc:"Full desc"
        },
        {
            id:"tomatos-4", 
            title:"Articul: 21343", 
            short_text:'Pup Orange', 
            href:'tomato-one.html',
            img:'Pup-orange.jpg',
            desc:"Full desc"
        },
        {
            id:"tomatos-5", 
            title:"Articul: 43423", 
            short_text:'Tomaswil Orange', 
            href:'tomato-one.html',
            img:'Tomaswil-Orange.jpg',
            desc:"Full desc"
        }],
        product: [],
        btnVisible: false
    },
    mounted: function() {
        this.getProduct();
        this.checkInCart()
    },
    methods: {
        getProduct: function() {
            var id = window.location.hash.replace('#', '');
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === id) {
                    this.product = this.products[i];
                    break;
                }
            }
        },
        addToCart: function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=true;
            }
        },
        checkInCart:function(){
            // console.log(window.localStorage.getItem('cart').split(), String(this.product.id),
            // window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)));
            if(this.product && this.product.id && window.localStorage.getItem('cart')
            .split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=true;
        
        }
       
    }

        
});