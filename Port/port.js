window.onload=function(){
    function navigation(activeClass, ulClass, imgContainerClass, sClass){
    this.activeClass = activeClass;
    this.ulClass = ulClass;
    this.imgContainerClass = imgContainerClass;
    this.imgSingleClass = sClass;
    this.imgDefaultClass = this.imgContainerClass.children[0].className;
};
navigation.prototype.clearClass = function() {
    var liLength = this.ulClass.children.length;
    for(var i=0; i< liLength; i++){
    this.ulClass.children[i].removeAttribute("class") }
};

navigation.prototype.createClass = function(e){
        this.clearClass();
        var c= this.activeClass,
            li= this.ulClass.children[e] ;
            li.setAttribute("class",c);	
};
navigation.prototype.faded = function(i,value){
    return i.style.opacity = value || 1;
};
navigation.prototype.fadedExt = function(i,value,s){
    (s)?i.parentNode.className = this.imgSingleClass			
    : i.parentNode.className = this.imgDefaultClass;
        this.faded(i,value);
};
navigation.prototype.imgShow = function(e){
    this.createClass(e);
    var maxImg = this.imgContainerClass.children.length;
    for (var l = 0; l < maxImg; l++) {
        var parent = this.imgContainerClass,
            image = parent.children[l].firstElementChild,
            att = image.getAttribute("title"),// title,
            nav = this.ulClass.children[e].getAttribute("data-type");

            this.fadedExt(image,0.3,1);
            if (nav == att) {
                this.fadedExt(image,1,1);}
            else if(nav == "all"){
                this.fadedExt(image);}
    }
};
navigation.prototype.sign = function(e){
            var parent = this.ulClass,
                ths = this,
                child = parent.children[e];

            child.firstElementChild.onclick = function(){ return false};
            return child.onclick = function(){ths.imgShow(e);} 
                    
};
navigation.prototype.render = function(){
        var liLength = this.ulClass.children.length;
        for(var k=0; k<liLength; k++){
        this.sign(k);	
        }
};
/*
******************************
*=obj creat
******************************
*/
var 	ulPortfolio = document.getElementsByClassName("navigate")[0],
        imgPortfolio = document.getElementsByClassName("portfolio")[0],
        aclass = "active",
        imgFigureClass = "col-3",
        navport = new navigation(aclass,ulPortfolio,imgPortfolio,imgFigureClass);

        navport.render();
}
