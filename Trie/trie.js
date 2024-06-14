class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    start(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    delete(word) {
        if (!this.search(word)) return;  
        this.deleteWord(this.root, word, 0);
    }

    deleteWord(node, word, index) {
        if (index === word.length) {
            node.isEndOfWord = false;  // Unmark the end of the word
            return Object.keys(node.children).length === 0;  // If no children, node can be deleted
        }

        const char = word[index];
        const nextNode = node.children[char];
        
        if (!nextNode) return false;

        const shouldDeleteChild = this.deleteWord(nextNode, word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char];  // Remove the reference to the child node
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;  // Return true if no children and not end of another word
        }

        return false;
    }
}
