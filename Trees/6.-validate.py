
class BinaryTreeNode:
    def __init__(self, node_data):
        self.data = node_data
        self.left = None
        self.right = None

def insert_node_into_binary_tree(node, node_data):
    if node == None:
        node = BinaryTreeNode(node_data)
        return node

    nodes = []
    
    nodes.append(node)
 
    while len(nodes) > 0:
        n = nodes.pop()
        
        if n.right is not None:
            nodes.append(n.right)
        else:
            n.right = BinaryTreeNode(node_data)
            return node

        if n.left is not None:
            nodes.append(n.left)
        else:
            n.left = BinaryTreeNode(node_data)
            return node

def isValidBST(bst):
    if not bst:
        return True
    if bst.left and bst.left.data > bst.data:
        return False
    if bst.right and bst.right.data < bst.data:
        return False
    return isValidBST(bst.left) and isValidBST(bst.right)