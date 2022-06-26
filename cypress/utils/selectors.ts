export function getTestID(testID: string): string {
    return `[data-test="${testID}"]`;
};

export function getClass(domClass: string): string {
    return `[class="${domClass}"]`;
};