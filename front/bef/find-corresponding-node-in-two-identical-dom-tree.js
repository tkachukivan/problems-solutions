
/**
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