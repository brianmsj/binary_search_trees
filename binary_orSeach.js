

function isBST(tree) {

  if(tree.left !== undefined) {
    if(tree.key < tree.left.key) {
    return false;
    }
    if(isBST(tree.left) === false) {
    return false;
    }
  }

  if(tree.right !== undefined) {
    if(tree.key > tree.right.key) {
    return false;
    }
    if(isBST(tree.right) === false) {
    return false;
    }
  }

  return true;
}

console.log(isBST({
  key: 1,
  left: {key: 3}
,right: {key: 7}}), false);


console.log(isBST({
  key: 6,
  left: {key: 3}
,right: {key: 7}}), true);

console.log(isBST({
  key: 3,
  left: {key: 2}
,right: {key: 1}}), false);

console.log(isBST({
  key: 3,
right: {key: 10}}), true);

console.log(isBST({
  key: 3,
left: {key: 2}}), true);

console.log(isBST({
  key: 6,
  left: {key: 3, left: {key: 10}},
  right: {key: 7, right: {key: 3}}}), false);

  console.log(isBST({
    key: 6,
    left: {key: 3, left: {key: 10}},
    right: {key: 7, right: {key: 3}}}), false);
