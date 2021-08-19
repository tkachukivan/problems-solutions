
/**
 * https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
 const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    if (rootA === target) return rootB;
    const path = [];
    constructPath(rootA);
    let currentNode = rootB;
  
    for (let i = path.length - 1; i >= 0; i--) {
      currentNode = currentNode.children[path[i]];
    }
    //   return path.reduceRight((result, index) => result.children[index],  rootB)
  
    return currentNode;
  
    function constructPath(node) {
      if (node === target) return true;
      if (!node.children.length) return false;
      for (let i = 0; i < node.children.length; i++) {
        if (constructPath(node.children[i])) {
          path.push(i);
          return true;
        }
      }
  
      return false;
    }
  }
  
  // const A = document.createElement('div')
  // A.setAttribute('id', '#rootA')
  // A.innerHTML = `
  // <div>
  //   <div>
  //     <div>
  //       <div id="node1"></div>
  //     </div>
  //     <div>
  //     </div>
  //     <div>
  //       <div>
  //         <p id="node2"></p>
  //       </div>
  //     </div>
  //   <div>
  // </div>
  // `
  
  
  
  // const B = A.cloneNode(true)
  // const node1 = A.querySelector('#node1')
  // const node2 = A.querySelector('#node2')
  // const node1Target = B.querySelector('#node1')
  // const node2Target = B.querySelector('#node2')
  // console.log(findCorrespondingNode(A, B, node1) === node1Target)
  // console.log(findCorrespondingNode(A, B, node2) === node2Target)

  /**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
    const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);

    let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode];

    while (currentNodes[0] !== target) {
        currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()];
    }

    return currentNodes[1];
}

const findCorrespondingNode = (rootA, rootB, target) => {
    const stack = [[rootA, rootB]];
    while(stack.length > 0) {
      const [leftNode, rightNode] = stack.pop();
      if (leftNode === target) return rightNode;
      for (let i = 0; i < leftNode.children.length; i++) {
        stack.push([leftNode.children[i], rightNode.children[i]]);
      }
    }
  }