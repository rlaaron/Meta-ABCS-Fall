class BinarySearchTreeNode:
    def __init__(self, node_data):
        self.data = node_data
        self.left = None
        self.right = None

def insert_node_into_binary_search_tree(node, node_data):
    if node == None:
        node = BinarySearchTreeNode(node_data)
    else:
        if (node_data <= node.data):
            node.left = insert_node_into_binary_search_tree(node.left, node_data)
        else:
            node.right = insert_node_into_binary_search_tree(node.right, node_data)

    return node

def print_binary_search_tree_inorder_traversal(node, sep):
    if node == None:
        return

    print_binary_search_tree_inorder_traversal(node.left, sep)

    if node.left:
        print(sep, end='')
    print(node.data, end='')

    if node.right:
        print(sep, end='')

    print_binary_search_tree_inorder_traversal(node.right, sep)

def level_order_print(root):
    if not root:
        return
    queue = [root]
    while queue:
        node = queue.pop(0)
        print(node.data, end=' ')
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

            