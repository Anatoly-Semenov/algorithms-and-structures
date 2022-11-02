class LinkedList {
    private size
    private root

    constructor() {
        this.size = 0
        this.root = null
    }

    public add(value: number): void | true {
        if (this.size === 0) {
            this.root = new Item(value)
            this.size += 1
            
            return true
        }

        let node = this.root

        while (node.next) {
            node = node.next
        }

        node.next = new Item(value)
        this.size++
    }

    public getSize(): void {
        return this.size
    }

    public print(): void {
        let result = []
        let item = this.root

        while (item) {
            result.push(item.value)
            item = item.next
        }

        console.log(result)
    }
}

class Item {
    private value: number
    private next: boolean

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(2)
list.add(5)
list.add(7)

list.print()
