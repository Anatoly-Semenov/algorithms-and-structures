type Root = null | { value: number; left: number[]; right: number[] } | number[]

class BinaryTree {
    private root: Root

    constructor() {
        this.root = null
    }

    add(value: number): void {
        if (!this.root) {
            this.root = new TreeItem(value)
        } else {
            let item: any = this.root
            let newNode = new TreeItem(value)

            while (item) {
                if (value > item.value) {
                    if (!item.right) {
                        break
                    }

                    item = item.right
                } else {
                    if (!item.left) {
                        break
                    }

                    item = item.left
                }
            }

            if (value > item.value) {
                item.right = newNode
            } else {
                item.left = newNode
            }
        }
    }

    print(root: any = this.root): void | true {
        if (!root) {
            return true;
        }
        console.log(root.value);

        this.print(root.left)
        this.print(root.right)
    }
}

class TreeItem {
    public value: number
    public left: number[]
    public right: number[]

    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new BinaryTree()

tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.print()
