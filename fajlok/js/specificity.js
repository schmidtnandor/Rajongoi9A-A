document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("specificity-button");
    let originalTexts = new Map();
    let toggled = false;

    button.addEventListener("click", function() {
        document.querySelectorAll("*").forEach(element => {
            if (element !== button && element.childNodes.length) {
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                        if (!toggled) {
                            originalTexts.set(node, node.nodeValue);
                            node.nodeValue = getSpecificity(element);
                        } else if (originalTexts.has(node)) {
                            node.nodeValue = originalTexts.get(node);
                        }
                    }
                });
            }
        });
        toggled = !toggled;
    });
});

function getSpecificity(element) {
    let idCount = element.id ? 1 : 0;
    let classCount = element.classList.length;
    let tagCount = element.tagName.toLowerCase() !== "body" ? 1 : 0;

    return `(${idCount}, ${classCount}, ${tagCount})`;
}