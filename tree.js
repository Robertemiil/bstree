import node from "./node.js";

const tree = (arr)=>{
    function buildTree(arr){
        remove(arr)
        sort(arr)

    }
    function sort(arr){
        let temp
        for(let i = 0; i < arr.length; i++){
           if(arr[i]>arr[i+1]){
              temp=arr[i]
              arr[i] = arr[i+1]
              arr[i+1] = temp
           }
        }
    }
    function remove(arr){
        let updated = [];
        for(let i = 0; i < arr.length; i++){
         if(!updated.includes(arr[i])) updated.push(arr[i])
        }
       return updated
    }
    return{
        root : buildTree(arr)
    }
}
export default tree;