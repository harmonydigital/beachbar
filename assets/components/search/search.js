 


getSearch=(event)=>{
    
    event.preventDefault()

    
    containerSearch = document.getElementById('contentSearch')  
    serchInput = document.getElementById('serchInput')   
    searchResult = document.getElementById('searchResult')   
    containerSearch.classList.toggle("showSearch");
    searchResult.classList.toggle("show");
    prodsArray=[]
   
    submitSearch=(event)=>{
        let searched=event.target.value  
        const productFound=ProductsFilter(searched)  
        searchResult.innerHTML=`   `;    
          
            searched.length > 3 ?  render(productFound) :  searchResult.innerHTML="<div>Produto não encontrado</div>"

        
      }
      
      
    data.map((apiData)=>{  
        apiData.itens.map((itensMap)=>{  
            itensMap.products.map((productsMap)=>{  
                prodsArray.push(productsMap)

            }) 
        }) 

    }) 
         
    ProductsFilter=(searched)=>{
        return prodsArray.filter(p=>{
            return p.name.toLowerCase().includes(searched.toLowerCase())  
        })  
    }

    serchInput.addEventListener('keyup', _.debounce(submitSearch, 500))
 

    function render(productFound){   
        

        productFound.map((prodFoundMap)=>{  
        

            searchResult.innerHTML+=`
             

            <div class="produto">
                    <img src="`+prodFoundMap.img +`" alt="">
                <div class="prod-val">
                    <h3 class="title-prod"> `+prodFoundMap.name +` </h3> 
                   <span class="valor">`+prodFoundMap.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  +` </span>

                </div>
                <div class="quantidade">
                            <button key="`+prodFoundMap.id +`" onclick="addProd(this,`+prodFoundMap.id +`); ">+</button>
                    <input  id="`+prodFoundMap.id +`search" value="`+prodFoundMap.quantidade +`" type="text" placeholder="0">
                    <button key="`+prodFoundMap.id +`" onclick="removeProd(this,`+prodFoundMap.id +`); ">-</button>
    
                </div>

            </div>
            
            `;  
        }) 
     }
    

  
   
}

