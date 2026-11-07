import tree from "./tree.js";
import node from "./node.js";



test("should construct a node", () => {
  const test1 = node(5);
  expect(test1).toEqual({
    data: 5,
    left: null,
    right: null,
  });
});

describe("in an order and unordered array", () => {
  test("return the same level 0's data of our bst", () => {
    const testTree = tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(testTree.root.data).toEqual(5);
  });
  test("return the same level 0's data of our bst", () => {
    const testTree = tree([10, 9, 8, 6, 7, 4, 5, 3, 2, 1, 0]);
    expect(testTree.root.data).toEqual(5);
  });
});

describe("Binary Search Tree", () => {

function inOrder(node, result = []) {
  if (node === null) return result;

  inOrder(node.left, result);
  result.push(node.data);
  inOrder(node.right, result);

  return result;
}

  test("creates a balanced BST", () => {
    const bst = tree([1, 2, 3, 4, 5, 6, 7]);

    expect(bst.root.data).toBe(4);
    expect(bst.root.left.data).toBe(2);
    expect(bst.root.right.data).toBe(6);
  });

  test("removes duplicate values", () => {
    const bst = tree([1, 2, 2, 3, 4]);

    expect(inOrder(bst.root)).toEqual([1, 2, 3, 4]);
  });

  test("handles an empty array", () => {
    const bst = tree([]);

    expect(bst.root).toBeNull();})
  });
