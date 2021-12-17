
const treee = [
  {
    nodeid: 0,
    children: [1, 2, 3]
  },
  {
    nodeid: 1,
    children: [4, 5]
  },
  {
    nodeid: 2,
    children: []
  },
  {
    nodeid: 3,
    children: []
  },
  {
    nodeid: 4,
    children: []
  },
  {
    nodeid: 5,
    children: []
  }
]

const rootnodeid = 0

function main(){
  const myScreen = new Screen(document.getElementById('screen'));

  // Add node 0
  myScreen.addNode(0, {x: 0, y: 0})

  // Add node 1
  myScreen.addNode(1, {x: -0.5, y: 0.6})

  // Add node 2
  myScreen.addNode(2, {x: 0.5, y: 0.5})

}

class Screen{
  constructor(screen){
    this.S = screen;
    this.nodes = []
  }

  addnode(nodeid, {x, y}){
    let nodediv = document.createElement('div');
    nodediv.classList.add('node')
    nodediv.classList.add('invisible')
    this.S.appendChild(nodediv)
    nodediv.style.left = `${((x+1.0)/2.0)*100.0}%;`;
    nodediv.style.bottom = `${((y+1.0)/2.0)*100.0}%;`;
    this.nodes.push({
      nodeid: nodeid,
      nodediv: nodediv
    })
  }
}

function (){
  main()
}()
