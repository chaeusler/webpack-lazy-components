export function getAllElementsWithAttribute(attribute: string): Element[] {
    const elements: Element[] = [];
    const allElements = document.getElementsByTagName('*');
    // IE compatible iterate
    Array.prototype.forEach.call(allElements, function (e: Element) {
        if (e.getAttribute(attribute)) {
            elements.push(e);
        }
    
    });
    return elements;
}