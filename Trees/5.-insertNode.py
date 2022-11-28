
class BstNode:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

#
# Complete the 'insert_into_binary_tree' function below.
#
# The function is expected to return a BstNode, the root node of the tree after insertion.
# The function accepts BstNode bst, the root of the binary search tree, if none, return the new root node.
# The function accepts INTEGER value as the value to insert. 

def insert_into_binary_tree(bst, value):
    if not bst:
        return BstNode(value)
    if value < bst.value:
        bst.left = insert_into_binary_tree(bst.left, value)
    else:
        bst.right = insert_into_binary_tree(bst.right, value)
    return bst
