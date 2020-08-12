function BinarySearchTree() {   
    var Node = function(key){
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null

    this.insert = function(key){
        //Insere uma chave
        var newNode = new Node(key)

        if(root === null){
            root = newNode
        }else{
            insertNode(root, newNode)
        }
    }
//Função Auxiliar
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }
        
    }

    this.search = function(key){
        //Busca uma chage
    }

    this.remove = function(key){
        //Remove a chave

    }

    this.min = function(){
        //retorna a menor chave
    }

    this.max = function(){
        //retorna o maior valor
    }

    this.inOrderTraverse = function(callback){
        //Visita todos os nós da arvore usando um percurso em ordem
        inOrderTraverseNode(root, callback)
    }

    var inOrderTraverseNode = function(node, callback){

        if (node !== null){
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right,callback)
        }
    }

    this.preOrderTraverse = function(){
        //Visita todos os nós da arvore usando o percurso pre ordem
    }

    this.preOrderTraverse = function(){
        //Visita todos os nós da arvore usando um percurso em ordem
    }

    
}
function printNode(value){
    console.log(value)
}


var tree = new BinarySearchTree()
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.inOrderTraverse(printNode);

