export function getAllElementsWithAttribute(attribute: string): HTMLElement[] {
    const elements: HTMLElement[] = [];
    const allElements = document.getElementsByTagName('*');
    // IE compatible iterate
    Array.prototype.forEach.call(allElements, function (e: HTMLElement) {
        if (e.getAttribute(attribute)) {
            elements.push(e);
        }
    });
    return elements;
}