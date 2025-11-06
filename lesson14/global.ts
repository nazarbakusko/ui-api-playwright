declare global {
    var age: number;
    var token: string;
}

export function initGlobal(): void {
    globalThis.age = 18;
}


