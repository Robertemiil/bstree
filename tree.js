import node from "./node.js";

const tree = (arr) => {
  arr = remove(arr);
  arr.sort((a,b)=> a-b);
  function buildTree(arr, start = 0, end = arr.length - 1) {
    
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = node(arr[mid]);

    root.left = buildTree(arr, start, mid - 1);
    root.right = buildTree(arr, mid + 1, end);

    return root;
  }


  function remove(arr) {
  return  [...new Set(arr)]  
}

  return {
    root: buildTree(arr),
  };
};

export default tree;
