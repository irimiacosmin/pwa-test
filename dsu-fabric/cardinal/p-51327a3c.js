window.cardinal=window.cardinal||{},window.cardinal.controllers=window.cardinal.controllers||{},window.cardinal.pendingControllerRequests=window.cardinal.pendingControllerRequests||{};const{controllers:o,pendingControllerRequests:w}=window.cardinal,i={registerController:(i,n)=>{if(o[i]=n,w[i])for(;w[i].length;)w[i].pop().resolve(o[i])},getController:w=>new Promise((i,n)=>{if(o[w])i(o[w]);else{let o=`scripts/controllers/${w}.js`;if(void 0!==window.basePath){let w="/";window.basePath[window.basePath.length-1]===w&&(w=""),o=window.basePath+w+o}import(o).then(o=>{i(o.default||o)}).catch(n)}})};export{i as C}