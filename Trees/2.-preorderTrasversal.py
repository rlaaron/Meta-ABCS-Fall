

class BinarySearchTree:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

    def insert(self, key):
        if self.key == key:
            return
        if key < self.key:
            if self.left:
                self.left.insert(key)
            else:
                self.left = BinarySearchTree(key)
        else:
            if self.right:
                self.right.insert(key)
            else:
                self.right = BinarySearchTree(key)
def preorder_traversal(bst):
    if bst:
        print(bst.key)
        preorder_traversal(bst.left)
        preorder_traversal(bst.right)


def main():
    bst = BinarySearchTree(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(12)
    bst.insert(18)
    preorder_traversal(bst)
