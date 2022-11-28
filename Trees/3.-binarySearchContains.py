class BinarySearchTree:
    def __init__(root, data):
        root.data = data
        root.left = None
        root.right = None

    def insert(root, data):
        if root.data == data:
            return
        if data < root.data:
            if root.left:
                root.left.insert(data)
            else:
                root.left = BinarySearchTree(data)
        else:
            if root.right:
                root.right.insert(data)
            else:
                root.right = BinarySearchTree(data)

def contains(root, number):
    if root.data == number:
        return True
    if number < root.data:
        if root.left:
            return True
        else:
            return False
    else:
        if root.right:
            return True
        else:
            return False